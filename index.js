const express = require("express");
const app = express();
app.listen(3000, () => console.log("listening at port 3000"));
app.use(express.static("public"));
app.use(express.json({ limit: "1mb" }));

app.get("/test", (request, response) => {
  //console.log(request.body);
  console.log("OH YES IT WORKS!!!!!");
  response.send("PlayerPage.html");
  /*response.json({
    status: "success"
  });*/
});
