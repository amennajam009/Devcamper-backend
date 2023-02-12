require("dotenv").config();

const express=require("express")
const dotenv=require("dotenv")





const app = express();
//Creating App meta-data
app.use("/api/v1", require("./routes"));

// define PORT
// ye humri port hai jispy humra backend run hoga ic he port py run hoga 
const PORT = process.env.PORT || 6000
const server =  app.listen(PORT, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});