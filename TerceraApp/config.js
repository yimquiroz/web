module.exports = {

    port: process.env.PORT || 3000,
    db:process.env.MONGODB || 'mongodb+srv://Jaay98:Aaya98020415@cluster0.baky2.mongodb.net/test1?retryWrites=true&w=majority',
    
    urlParser:{

            useNewUrlParser: true,
            useCreateIndex: true ,
            useUnifiedTopology: true,
            useFindAndModify: false ,
    }
};