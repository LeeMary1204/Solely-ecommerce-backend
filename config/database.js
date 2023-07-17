const mongoose = require("mongoose");

const uri = "mongodb+srv://root:root@ecommerce-1.xxaqhpo.mongodb.net/ecommerce-1?retryWrites=true&w=majority";


const connectDatabase = () => {
    mongoose
        .connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        .then((data) => {
            console.log(`Mongodb connected with server: ${data.connection.host}`);
        });
};

module.exports = connectDatabase;