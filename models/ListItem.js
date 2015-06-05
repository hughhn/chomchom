'use strict';

var listItemSchema = new mongoose.Schema({
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  meta: {
    votes: { type: Number, default: 0 },
    favs:  { type: Number, default: 0 }
  }
});

var ListItem = mongoose.model('ListItem', listItemSchema);
module.exports = ListItem;