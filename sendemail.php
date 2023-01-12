 
<?php
//test version

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->IsHTML(true);


$mail->setFrom('lizadrela@gmail.com');

$mail->addAddress('lizadrela@gmail.com');

$mail->Subject = 'ЛР JS2022';

$body = '<h1>ЛР JS2022</h1>';
$body.= '<p><b>First name: </b>'.$_POST['firstName'].'</p>';
$body.= '<p><b>Last name: </b>'.$_POST['lastName'].'</p>';
$body.= '<p><b>Surname: </b>'.$_POST['surname'].'</p>';
$body.= '<p><b>Group: </b>'.$_POST['group'].'</p>';
$body.= '<p><b>Points: </b>'.$_POST['points'].'</p>';


$mail->Body = $body;

if(!$mail->send()){
    $message = 'Error';
} else {
    $message = 'Send'
}

$response = ['message' => $message];

header('Content-type: application/json');
echo json_encode($response);


?> 