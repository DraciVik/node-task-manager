const mongoose = require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5e80112d63c07e676c5a28c0")
//   .then(task => {
//     console.log(task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async id => {
  await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: false });

  return count;
};

deleteTaskAndCount("5e7ead7a887e9b5224ccad2a")
  .then(result => {
    console.log(result);
  })
  .catch(e => {
    console.log(e);
  });
