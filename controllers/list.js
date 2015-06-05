/**
 * GET /
 * Home page.
 */
exports.getLists= function(req, res) {
  res.render('list', {
    title: 'Lists'
  });
};
