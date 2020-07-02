

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 302,
    headers: {
      location: 'https://soundcloud.com/dave-b111/sets/new-playlist-2018-10-11?via=redir301'
    },
    body: '<html><body>Redirecting to <a href="https://soundcloud.com/dave-b111/sets/new-playlist-2018-10-11?via=redir301">https://soundcloud.com/dave-b111/sets/new-playlist-2018-10-11?via=redir301</a></body></html>'
  });
}
