const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;
app.use(express.static("./public"));

//Set up for body-parser
app.use(bodyParser.urlencoded ({ extended: false }));
app.use(bodyParser.json());

require("./routes/htmlRoutes")(app);



app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})

