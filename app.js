/**
 * add dependency
 */
const express = require('express');
const bodyparser = require('body-parser');

/**
 * use express | bodyparser | port used
 */
const app = express();
app.use(bodyparser.json());
const port = 3001;

 
/**
 * listen to port
 */
app.listen(port, () => {
    console.log(`books app listening at http://localhost: ${port}`);
});
