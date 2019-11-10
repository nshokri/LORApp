const express = require("express");
const app = express();
app.listen(3000, () => console.log("listening at port 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.get("/summoner/:id", (request, response) => {
  //console.log(request.body);
  console.log(request.params.id);
  response.send(request.params.id);
  /*response.json({
    status: "success"
  });*/
});
