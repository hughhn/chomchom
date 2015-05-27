'use strict';

var streamSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  snapshots: [mongoose.modelSchemas.Snapshot],
  moderators: [mongoose.modelSchemas.User],
  meta: {
    votes: { type: Number, default: 0 },
    favs:  { type: Number, default: 0 }
  }
});

var Stream = mongoose.model('Stream', streamSchema);
module.exports = Stream;