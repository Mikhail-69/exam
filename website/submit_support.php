<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Здесь вы можете обработать данные (например, отправить их на email или сохранить в базе данных)
    
    // Пример отправки сообщения на email (замените на свой адрес)
    $to = "ivanovmikhail29012007@gmail.com"; // Замените на ваш email
    $subject = "Новое сообщение от поддержки";
    $body = "Имя: $name\nEmail: $email\nСообщение:\n$message";
    
    if (mail($to, $subject, $body)) {
        echo "Сообщение успешно отправлено!";
    } else {
        echo "Произошла ошибка при отправке сообщения.";
    }
} else {
    echo "Неверный метод запроса.";
}
?>
