const express = require("express");
const app = express();
app.listen(3000, () => console.log("listening at port 3000"));
app.use(express.static("public"));

const API_KEY = "RGAPI-40b2689e-8392-4bb1-81bd-8856aa825e1c";
