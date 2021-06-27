const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const server = require('http').createServer(app);
app.use(function(req, res, next) {
    const reqType = req.headers["x-forwarded-proto"];
    reqType == 'https' ? next() : res.redirect("https://" + req.headers.host + req.url);
});

app.use(bodyParser.json());

require('./routes/DialogFlowRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);