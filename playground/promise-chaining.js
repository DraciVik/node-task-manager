const mongoose = require("../src/db/mongoose");

const User = require("../src/models/user");

//5e7fb6cc3e16145be42dacf9

User.findByIdAndUpdate("5e809e42a9ea1a25e4643a0a", { age: 1 })
  .then(user => {
    console.log(user);
    return User.countDocuments({ age: 1 });
  })
  .then(result => {
    console.log(result);
  })

  .catch(e => {
    console.log(e);
  });
