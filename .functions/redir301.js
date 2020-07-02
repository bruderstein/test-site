

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 301,
    headers: {
      location: 'https://soundcloud.com/dave-b111/unique-2?via=redir301'
    },
    body: 'Redirecting 2...'
  });
}
