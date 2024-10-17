<?php
// Get the data from the request
$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// Get the user's email
$userEmail = $data['email'];

// Email to send to
$to = "infosecotw@gmail.com";
$subject = "User Email Retrieved Automatically";
$message = "The user's email is: " . $userEmail;
$headers = "From: no-reply@savannafibre.com";

// Send the email
if (mail($to, $subject, $message, $headers)) {
    echo "Email sent successfully.";
} else {
    echo "Failed to send email.";
}
?>
