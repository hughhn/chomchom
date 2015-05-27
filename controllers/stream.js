/**
 * GET /
 * Home page.
 */
exports.getStreams = function(req, res) {
  res.render('stream', {
    title: 'Streams'
  });
};