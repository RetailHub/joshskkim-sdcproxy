const express = require('express');
const app = express();
const {createProxyMiddleware} = require('http-proxy-middleware');
const port = 80;
const path = require('path');

const apiProxy = createProxyMiddleware({target: 'http://ec2-3-132-5-204.us-east-2.compute.amazonaws.com:3001'});
const reviewProxy = createProxyMiddleware({target: 'http://18.212.184.37:3004'});
const relatedProxy = createProxyMiddleware({target: 'http://54.89.234.183:3003'});
const itemsProxy = createProxyMiddleware({target: 'http://34.201.53.74:3002'});
app.use(express.static('public'))

app.use('/api/items/:id',apiProxy);
app.use('/api/allreviews/',reviewProxy);
app.use('/api/related_products/:id',relatedProxy);
app.use('/items/:id',itemsProxy);






app.get('/:id', (req, res) => {
  res.send('public');
})
app.listen(port,() => {
  console.log('listening..');
});