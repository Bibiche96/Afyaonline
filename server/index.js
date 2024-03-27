 const express=require("express");
 const app= express();
 const port= 5000;
 const routeAppointement = require("./Routes/appointments");
 const routeauth = require("./Routes/authRoutes")
 app.use(express.json())
 
 
 
 app.use(routeAppointement)
 app.use(routeauth)





app.listen(port,() => {
    console.log("le serveur tourne au port 5000");
 });