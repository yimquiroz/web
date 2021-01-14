module.exports = {

    port: process.env.PORT || 3000,
    db:process.env.MONGODB || 'mongodb+srv://MontseBS:1234@cluster0.zc5x8.mongodb.net/<dbname>?retryWrites=true&w=majority',
    
    urlParser:{

            useNewUrlParser: true,
            useCreateIndex: true ,
            useUnifiedTopology: true,
            useFindAndModify: false ,
    }
};