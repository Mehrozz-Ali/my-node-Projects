const mongoose = require('mongoose')

async function connectToMongoDB(url) {
    return mongoose.connect(url);
}

module.exports = {
    connectToMongoDB,
}

// server side rendering platform are 
// 1) EJS (embaded java-Script template engine )
// 2) PUg js 
// 3) handlebars