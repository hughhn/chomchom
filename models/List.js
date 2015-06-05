'use strict';

var listSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  listItems: [mongoose.modelSchemas.ListItem],
  admins: [mongoose.modelSchemas.User],
  meta: {
    votes: { type: Number, default: 0 },
    favs:  { type: Number, default: 0 }
  }
});

var List = mongoose.model('List', listSchema);
module.exports = List;