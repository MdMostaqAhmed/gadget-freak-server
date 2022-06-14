const express = require("express");
const app = express();
const port = process.emitWarning.PORT || 5000;

//use middleware
const cors = require("cors");
app.use(cors());
app.use(express.json());
//

app.get("/", (req, res) => {
    res.send("Running My Node CRUD Server");
});

app.listen(port, () => {
    console.log("CRUD Server is running");
});
