const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('combined'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

var listener = app.listen(process.env.PORT || 6000, function() {
 console.log('listening on port ' + listener.address().port);
});
