const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const config = require('./config/keys');
const mongoose = require('mongoose');

mongoose.connect(config.mongoURI, { useNewUrlParser: true });

require('./models/Registration');
require('./routes/DialogFlowRoutes')(app);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    const path = require('path');

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

require('./routes/fulfillmentRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);