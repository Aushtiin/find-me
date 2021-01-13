const express = require('express');
const app = express();
const PORT = 4040;
require('./utils/db')();

require('./routes/index')(app)

app.get('/', (req, res) => {
    res.json('welcome sucker')
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})