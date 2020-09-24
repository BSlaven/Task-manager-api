const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true
// });

mongoose.connect(process.env.MONGO_DB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});