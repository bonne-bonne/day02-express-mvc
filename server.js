// ======== IMPORTS ========= //
const express = require('express');
const app = express();
require('dotenv').config({ path: '../.env'});

// app.get("/", (req, res) => {}) ===> app.use(routeName)


// ========== PORT ========== //
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`server is live at http://localhost:${PORT}`)
})
.on("error", (err) => {
    console.log(err)
})