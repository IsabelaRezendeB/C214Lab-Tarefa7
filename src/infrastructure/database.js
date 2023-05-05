const mongoose = require('mongoose');

// substituir pelo seu link
const uri = `mongodb+srv://isabela:senha123@cluster0.btlhojy.mongodb.net/test`;


mongoose.set("strictQuery", true);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const { Schema } = mongoose;

const CarroSchema = new Schema({
    id: {
        type: String,
        index: true,
        unique: true,
    },
    marca: String,
    ano: Number,
    cor: String,
});

const CarroModel = mongoose.model('CarroModel', CarroSchema);

module.exports = {
    CarroModel,
};