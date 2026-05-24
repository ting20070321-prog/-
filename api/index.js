let screenTimeData = { message: "暫無數據，等待手機第一次發送" };

module.exports = async (req, res) => {
    // 1. 處理手機發來的數據 (POST)
    if (req.method === 'POST') {
        screenTimeData = {
            time: new Date().toLocaleString('zh-TW', { timeZone: 'Asia/Taipei' }),
            content: req.body
        };
        return res.status(200).json({ status: "success", message: "主人，數據我收好了！" });
    }
    
    // 2. 處理瀏覽器或 Claude 的查詢 (GET)
    if (req.method === 'GET') {
        return res.status(200).json(screenTimeData);
    }

    return res.status(405).end();
};
