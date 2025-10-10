const express = require('express');
const urlRoute = require('./routes/url')
const { connectToMongoDB } = require('./connect')
const staticRoute = require('./routes/staticRouter')
const app = express();
const PORT = 8002;
const URL = require('./model/url')
const path = require('path')
app.set("view engine", "ejs")
app.set("views", path.resolve("./views"))


connectToMongoDB('mongodb://localhost:27017/short-url').then(() => console.log('MongoDB connect'));


app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/url', urlRoute)
app.use('/', staticRoute)

app.get('/:shortId', async (req, res) => {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate({ shortId }, {
        $push: {
            visitHistory: {
                timestamp: Date.now()
            }
        },
    },
        { new: true });
    if (!entry) {
        return res.status(404).send("Short URL not found");
    }
    res.redirect(entry.redirectURL)
});

app.listen(PORT, () => console.log(`Server started at PORT`))