const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const TELEGRAM_BOT_TOKEN = '8044433700:AAHeh4IftXWJt_e4dZYUGT06GnrkeXrXmmc'; // Замените на ваш токен
const CHAT_ID = '1973039834'; // Замените на ваш chat_id (можно получить, отправив сообщение вашему боту и проверив обновления)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send-question', (req, res) => {
    const question = req.body.question;

    if (!question) {
        return res.status(400).send('Вопрос не может быть пустым.');
    }

    const message = `Пользователь задал вопрос: ${question}`;

    fetch("https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage", 
        {
        method: 'POST',
        body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'HTML'
        }),
       headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            res.status(200).send('Вопрос успешно отправлен в техническую поддержку.');
        } else {
            res.status(500).send('Ошибка при отправке вопроса.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        res.status(500).send('Ошибка сервера.');
    });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
