const express = require("express");
const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({extended: true}));

const AllMyUserRoutes = require("./routes/user.routes")
AllMyUserRoutes(app);

app.listen(8000, () => {
    console.log("You have successfully started your server on port 8k");
});