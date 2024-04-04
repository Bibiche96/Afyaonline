const express = require("express");
const app = express();
const port = 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const routeAppointement = require("./Routes/appointments");
const routeauth = require("./Routes/authRoutes")
const routeavalability = require("./Routes/availabilityroutes")
const routegetpatients = require("./Routes/patients")
const routegetdoctors = require("./Routes/doctors")
const routegetadmin = require("./Routes/authRoutes")


app.use(routeAppointement)
app.use(routeauth)
app.use(routeavalability)
app.use(routegetpatients)
app.use(routegetdoctors)
app.use(routegetadmin)





app.listen(port, () => {
    console.log("le serveur tourne au port 300");
});