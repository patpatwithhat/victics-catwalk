const express = require('express');
const favicon = require('serve-favicon');
const path = require('path');
const appRouter = require('./appRouter');

const app = express();
const port = process.env.PORT || 3000;

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('public'));
app.use('/', appRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
