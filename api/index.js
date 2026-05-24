const express = require('express');
const app = express();

let screenTimeData = { message: "暫無數據，等待手機第一次發送" };

app.use(express.json());

// 1. 接收手機發來的數據
app.post('/api/report', (req, res) => {
    screenTimeData = {
        time: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
        content: req.body
    };
    console.log('收到手機數據了：', screenTimeData);
    res.status(200).json({ status: "success", message: "主人，數據我收好了！" });
});

// 2. 讓 Claude 來這裡查數據
app.get('/api/view', (req, res) => {
    res.status(200).json(screenTimeData);
});

module.exports = app;
