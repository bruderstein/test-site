

exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 302,
    headers: {
      location: 'https://soundcloud.com/dave-b111/unique-2?via=redir'
    },
    body: 'Redirecting...'
  });
}
