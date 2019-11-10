const express = require("express");
const path = require("path");
const app = express();
var user;

app.listen(3000, () => console.log("listening at port 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.get("/summoner/:id", (request, response) => {
  //console.log(request.body);
  console.log(request.params.id);
  user = request.params.id;

  //Create summoner site before send
  summoner.getElementById("Head").innerHTML = "TESTING";

  response.sendFile(path.join(__dirname + "/summoner.html"));
  /*response.json({
    status: "success"
  });*/
});
