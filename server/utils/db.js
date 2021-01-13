const mongoose = require('mongoose');
const db = require('../config/keys').MongoURI;

const mongo = async () => {
    await mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Mongodb connected..'))
        .catch((err) => console.log(err));
}

module.exports = mongo