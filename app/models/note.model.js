const mongoose = require("mongoose");
var cors = require('cors')

const NoteSchema = mongoose.Schema(
  {
    id : Number,
    task_todo: String,
    completed: Boolean
  },
  {
    timestamp: true
  }
);

module.exports = mongoose.model("Note", NoteSchema);
