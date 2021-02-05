const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const router = require('./routes/todoItem');

// env variables
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", router);

app.all('*', (request, response) => {
    console.log('Returning a 404 from the catch-all route');
    return response.sendStatus(404);
});


app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
})
