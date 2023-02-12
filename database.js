/**
 * Database connection
 * @author Amen Najam
 */
const mongoose = require('mongoose');
const dbUrl = process.env.MONGODB_URI;
// const colors = require('colors')
// Setting
mongoose.set('debug', true);

// Connection
mongoose
  .connect(dbUrl, 
    // Some common settings (You don't need to understand these)
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // ignoreUndefined: true,
  )
  // eslint-disable-next-line no-console
  .then(() => console.log('We are connected with database :)' )) //Success
  .catch((err) => {
    // eslint-disable-next-line no-console
    console.log('DB Connection Error :( -------> ', err); //Failed
  });