<?php
error_reporting(-1);
ini_set('display_errors', 'On');


$to      = 'rojek_natalia@wp.pl';
$subject = 'the subject';
$message = $_POST['contact_body'];
$headers = 'From:' . $_POST['contact_name'] . "\r\n" .
    'Reply-To:' . $_POST['contact_email'] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $message, $headers);

header("Location: ../index.html#send");
die();