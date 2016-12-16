<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
require_once "../lib/PHPMailer/PHPMailerAutoload.php";
function sandMail($email,$name,$Subject,$text){
    $mail = new PHPMailer;
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'leather2m@gmail.com';                 // SMTP username
    $mail->Password = 'malvex1987';                           // SMTP password
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465;                                    // TCP port to connect to
    $mail->CharSet = 'UTF-8';

    $mail->setFrom($email, $name);
    $mail->addAddress('pro100boy@gmail.com', 'Portfolio questio');     // Add a recipient
    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = $Subject;
    $mail->Body    = $text.' from '.$name.' - '.$email;
    $mail->AltBody = $Subject;

    if(!$mail->send()) {
        echo 'ошибка отправки письма';
        echo 'Mailer Error: ' . $mail->ErrorInfo;
    } else {
        echo 'Письмо отправленно';
    }
}
$name=$_POST['sender_name'];
$email=$_POST['sender_email'];
$text=$_POST['sender_text'];
$Subject='письмо с сайта портфолио';
echo $text.' - '.$email.' - '.$name;

sandMail($email,$name,$Subject,$text);