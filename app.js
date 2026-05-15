const express = require('express');
const app = express();

// 告訴 Express 使用 EJS 當模板引擎
app.set('view engine', 'ejs');

// 三國英雄清單（資料）
const heroes = [
  '劉備', '關羽', '張飛',
  '諸葛亮', '趙雲', '馬超',
  '黃忠', '曹操', '孫權'
];

// 當使用者訪問 /hero 這個網址時
app.get('/hero', (req, res) => {
  res.render('hero', {
    heroes: heroes,
    studentId: 's22113115'
  });
});

// 啟動伺服器在 3000 port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`伺服器啟動！port: ${PORT}`);
});