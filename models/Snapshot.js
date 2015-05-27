'use strict';

var snapshotSchema = new mongoose.Schema({
  summary: { type: String, required: true },
  url: String,
  image: String,
  tags: [String],
  comments: [{ body: String, date: Date }],
  meta: {
    votes: { type: Number, default: 0 },
    favs:  { type: Number, default: 0 }
  },
  date: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  streams: [mongoose.modelSchemas.Stream]
});

var Snapshot = mongoose.model('Snapshot', snapshotSchema);
module.exports = Snapshot;