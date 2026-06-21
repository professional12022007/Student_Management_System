const express=require("express");
// const path = require("path");
const connectDb = require("./config/db.js");
const studentRoutes=require("./routes/studentRoutes.js")
const logger=require("./middleware/logger.js");
const authHandler=require("./middleware/authHandler.js");
const app=express();
const port=3000;

connectDb();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set("view engine","ejs")



app.use(logger);
app.use(authHandler);
app.use("/",studentRoutes);
// app.use((req, res) => {
//   res.status(404).sendFile(path.join(__dirname, "public", "error.html"));
// });
app.listen(port,()=>{
    console.log(`the server is running on the ${port}`)
})