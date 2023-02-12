require("dotenv").config();

const express=require("express")
const dotenv=require("dotenv")
const logger=require("./middleware/logger")




const app = express();
//Creating App meta-data
app.use("/api/v1", require("./routes"));
app.use(logger);
// define PORT
// ye humri port hai jispy humra backend run hoga ic he port py run hoga 
const PORT = process.env.PORT || 6000
const server =  app.listen(PORT, () => {
    console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

//here we're doing error handling cuz hum nai chahtay k humri app crashed ho 
// handle unhandle promise rejection
process.on('unhandledRejection', (err, promise) => {

    console.log(`Error: ${err.message}`.red)
  
    // close server & exit process
    server.close(() => process.exit(1))
  })