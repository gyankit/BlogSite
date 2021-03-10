require('dotenv').config();
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const tableRouter = require('./routes/table');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
const postRouter = require('./routes/post');
const blogRouter = require('./routes/blog');

const port = Number(process.env.PORT) || 3000;
const app = express();
app.set('port', port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', tableRouter);
app.use('/api/user', userRouter);
app.use('/api/admin', adminRouter);
app.use('/api/post', postRouter);
app.use('/api/blog', blogRouter);

const server = http.createServer(app);

server.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

