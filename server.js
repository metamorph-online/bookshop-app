var express = require('express');
var app = express();
app.use(express.static(__dirname + '/'));
app.listen(process.env.PORT || 8080);
app.get('*', function (req, res) { // This wildcard method handles all requests

    Router.run(routes, req.path, function (Handler, state) {
        var element = React.createElement(Handler);
        var html = React.renderToString(element);
        res.render('main', { content: html });
    });
});