require('newrelic');
const express = require('express');
const app = express();
const {createProxyMiddleware} = require('http-proxy-middleware');
const port = 8009;
const path = require('path');

const apiProxy = createProxyMiddleware({target: 'http://13.57.195.129:3001'});
// const reviewProxy = createProxyMiddleware({target: 'http://18.212.184.37:3004'});
// const relatedProxy = createProxyMiddleware({target: 'http://54.89.234.183:3003'});
// const itemsProxy = createProxyMiddleware({target: 'http://34.201.53.74:3002'});
app.use(express.static('public'))

app.use('/api/items/:id',apiProxy);
app.use('/api/items', apiProxy);
// app.use('/api/allreviews/',reviewProxy);
// app.use('/api/related_products/:id',relatedProxy);
// app.use('/items/:id',itemsProxy);






app.get('/:id', (req, res) => {
  res.send('public');
})
app.listen(port,() => {
  console.log('listening..');
});