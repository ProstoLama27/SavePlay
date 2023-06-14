<?php
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

$name = $_POST['name'];
$surname = $_POST['surname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
// $text = $_POST['text'];

$to = "save.play.team@gmail.com";
$subject = "Заявка с сайта";

$msg = "
Имя: $name

Телефон: $phone
 Почта: $email
 Текст: $surname";

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = 'smtp.mail.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'yegor_manushin@mail.ru';  // Replace with your mail.ru email address
    $mail->Password   = '9SsBYEUC5xtNyAgzZZXh';  // Replace with your mail.ru account password
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;

    $mail->setFrom($email, $name);
    $mail->addAddress($to);
    $mail->isHTML(false);
    $mail->Subject = $subject;
    $mail->Body    = $msg;

    $mail->send();
    echo "<p>Привет, форма отправлена</p>";
    echo "<script>alert('Форма отправлена');</script>";
    header("Location: ".$_SERVER['PHP_SELF']);
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    echo "<script>alert('Форма отправлена');</script>";
    header("Location: ".$_SERVER['PHP_SELF']);
}
?>
