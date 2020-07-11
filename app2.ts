import express from 'express';

const app = express();

app.get('/', function (request, response) {
    response.send('空军勤务学院欢迎你！');
});

express.request
app.post('xxx', (request, response, next) => {
});

const port = 4000;
app.listen(port, function () {
    console.log(`Example app listening on port ${port} !`);
});
