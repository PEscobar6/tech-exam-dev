const express = require('express');
const routes = require('./routes/router');
const app = express();

const port = 3000;

app.use('/', routes);

app.get("/services", (req, res) => {
    res.send("services page");
});

app.listen(port, () => {
    console.log('Server listening at port 3000');
})