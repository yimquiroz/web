import org.apache.spark.ml.Pipeline
import org.apache.spark.ml.feature.VectorAssembler
import org.apache.spark.ml.regression.{LinearRegression, LinearRegressionModel}
import org.apache.spark.sql.functions._
import org.apache.spark.sql.types.{IntegerType, StructField, StructType, StringType}
import org.apache.spark.sql.{DataFrame, Row, SparkSession}
import org.apache.spark.{SparkConf, SparkContext}

object App{


  def lineal_regresion (df: DataFrame) = {

    // Definir características
    val features = new VectorAssembler()
      .setInputCols(Array("timestamp"))
      .setOutputCol("features")

    // Definir modelo a utilizar
    val lr = new LinearRegression().setLabelCol("duration")

    // Crear una tuberia que asocie el modelo con la secuencia de tratamiento de datos
    val pipeline = new Pipeline().setStages(Array(features, lr))

    //Ejecutar el modelo
    val model = pipeline.fit(df)

    //Mostrar resultados del modelo
    val linRegModel = model.stages(1).asInstanceOf[LinearRegressionModel]

    linRegModel.coefficients(0) :: linRegModel.intercept :: Nil
  }


  def calculation(id:Row, main_df: DataFrame)= List{

    var df = main_df.filter(col("id") === id(0) && col("type") === id(1) )

    val regresion = lineal_regresion(df)

    (df.agg(max(df("duration")),
      avg(df("duration")),
      variance(df("duration")),
      min(df("timestamp")),
      max(df("timestamp"))).head()

    , regresion(0), regresion(1), id(0), id(1))
  }

  def main(args: Array[String])
  {

    val conf = new SparkConf()
      .setAppName("DiegoWeb")
      .setMaster("local[2]")
      .set("spark.executor.memory", "1g")

    val sc = new SparkContext(conf)

    val sparkSession = SparkSession
      .builder()
      .config(conf)
      .getOrCreate()

    val data = List(
      Row("1","A",100,1541113010),
      Row("1","A",200,1541123010),
      Row("1","B",300,1541133010),
      Row("2","A",400,1541143010),
      Row("2","A",500,1541153010),
      Row("2","B",600,1541163010)
    )

    val rdd = sc.parallelize(data)
    val schema = StructType(
      List(
        StructField("id", StringType),
        StructField("type", StringType),
        StructField("duration", IntegerType),
        StructField("timestamp", IntegerType)
      )
    )

    val df = sparkSession.createDataFrame(rdd,schema)

    df.show()

    val regression = lineal_regresion(df)

    println(regression(0))
    println(regression(1))

    val ids = df.select(df("id"),df("type")).distinct.rdd.collect().toList

    val x = ids.flatMap( ids => calculation(ids, df))
    println(x)
  }
}