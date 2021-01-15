const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 4040;
const user = require('./routes');

require('./utils/db')();

app.use(cors())
app.use(express.json());


app.get('/', (req, res) => {
    res.json('welcome')
})

app.use('/api/users', user);

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
})