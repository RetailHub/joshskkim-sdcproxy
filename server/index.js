const express = require('express');
const app = express();
const {createProxyMiddleware} = require('http-proxy-middleware');
const port = 4001;
const path = require('path');

const apiProxy = createProxyMiddleware({target: 'http://localhost:3001'});
const reviewProxy = createProxyMiddleware({target: 'http://localhost:3004'});
const relatedProxy = createProxyMiddleware({target: 'http://localhost:3003'});
const itemsProxy = createProxyMiddleware({target: 'http://localhost:3002'});
app.use(express.static('public'))

app.use('/api/items/:id',apiProxy);
app.use('/api/allreviews/:id',reviewProxy);
app.use('/api/related_products/:id',relatedProxy);
app.use('/items/:id',itemsProxy);






app.get('/:id', (req, res) => {
  res.send('public');
})
app.listen(port,() => {
  console.log('listening..');
});