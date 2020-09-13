const mongoose = require('mongoose')

// set global promise
mongoose.Promise = global.Promise

// init database connection
mongoose
  .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    }
  )
  .then(() => {
    console.log('Database Connected')
  })
  .catch((err) => {
    console.log(`Database not connected ${err}`)
  })
