<?php

if($_POST) {
  $to = "devollicgroup@gmail.com"; // your mail here
  $name = filter_var($_POST["name"], FILTER_SANITIZE_STRING);
  $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
  $company = filter_var($_POST["company"], FILTER_SANITIZE_STRING);
  $subject = filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
  $comment = filter_var($_POST["comment"], FILTER_SANITIZE_STRING);
  $body = "Name: $name\nEmail: $email\nCompany: $company\nSubject: $subject\nComments: $comment";
  
  //mail headers are mandatory for sending email
  $headers = 'From: ' .$email . "\r\n". 
  'Reply-To: ' . $email. "\r\n" . 
  'X-Mailer: PHP/' . phpversion();

  if(@mail($to, $subject, $body, $headers)) {
    $output = json_encode(array('success' => true));
    die($output);
  } else {
    $output = json_encode(array('success' => false));
    die($output);
  }
}