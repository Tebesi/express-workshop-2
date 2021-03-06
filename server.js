const exphbs = require("express-handlebars");

const express = require("express");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// The extensions 'html' allows us to serve file without adding .html at the end 
// i.e /my-cv will server /my-cv.html

app.get("/contact",function(req , res) {
  res.render("contact", {
    Title: "Emergency"
  });
})
app.get("/", (req, res) => {
  res.render("index" ,{
    Title: "Two"
  });
});
app.get("/my-cv",function(req , res) {
  res.render("my-cv", {
    Title: "JOBS"//Title is specific route 
  });
});

app.get("/admin",function(req , res) {
  res.render("admin" , {
    Title: "Waiting"
  });
});

app.use(express.static("public", {'extensions': ['html']}));
//app.get("/contact",function(req , res) {
  //res.send("contact me");
// what does this line mean: process.env.PORT || 3000
app.listen(process.env.PORT || 3000, function () {
  console.log("Server is listening on port 3000. Ready to accept requests!");
});