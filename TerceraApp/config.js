module.exports = {

    port: process.env.PORT || 3000,
    db:process.env.MONGODB || 'mongodb+srv://Jaay98:1234abcd@cluster0.3kara.mongodb.net/test1?retryWrites=true&w=majority',
    
    urlParser:{

            useNewUrlParser: true,
            useCreateIndex: true ,
            useUnifiedTopology: true,
            useFindAndModify: false ,
    }
};