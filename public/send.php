<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

require_once('geoplugin.class.php');

// Create a PHPMailer instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

// Initialize Geo Plugin - www.geoplugin.com
$geoplugin = new geoPlugin();

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$errors = array();
if ($_SERVER['REQUEST_METHOD'] === "POST") {
  if (empty($_POST['first_name'])) {
    $errors[] = 'First Name is empty';
  } else {
    $first_name = $_POST['first_name'];
  }
  if (empty($_POST['last_name'])) {
    $errors[] = 'Last Name is empty';
  } else {
    $last_name = $_POST['last_name'];
  }
  if (empty($_POST['email'])) {
    $errors[] = 'Email is empty';
  } else {
    $email = $_POST['email'];
    // validating the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Invalid email';
    }
  }
  if (empty($_POST['subject'])) {
    $errors[] = 'Subject is empty';
  } else {
    $subject = $_POST['subject'];
  }
  if (empty($_POST['message'])) {
    $errors[] = 'Message is empty';
  } else {
    $message = nl2br($_POST['message']);
  }
  try {
    $geoplugin->locate();
    $user_details = "<br>
    City: <span style=\"color:#888\">{$geoplugin->city}</span>
    <br>
    Region: <span style=\"color:#888\">{$geoplugin->region}</span>
    <br>
    Country: <span style=\"color:#888\">{$geoplugin->countryName}</span>
    ";
  } catch (Exception $e) {
    $user_details = "";
  }
  if (empty($errors)) {
    $date = date('j, F Y h:i A');
    $emailBody = "
    <html>
    <head>
    <title>$first_name $last_name is contacting you</title>
    </head>
    <body style=\"background-color:#fafafa;\">
    <div style=\"padding:20px;\">
    Date: <span style=\"color:#888\">$date</span>
    <br>
    First Name: <span style=\"color:#888\">$first_name</span>
    <br>
    Last Name: <span style=\"color:#888\">$last_name</span>
    <br>
    Email: <span style=\"color:#888\">$email</span>
    <br>
    Message: <div style=\"color:#888\">$message</div>
    $user_details
    </div>
    </body>
    </html>
    ";
    # $headers = 	'From: COPYCHICK Contact Form <jen@copychickcreative.com>' . "\r\n" .
    # "Reply-To: $first_name $last_name <$email>" . "\r\n" .
    # "MIME-Version: 1.0\r\n" .
    # "Content-Type: text/html; charset=iso-8859-1\r\n";
    # $to = 'steve@gmoz.biz';
    # $subject = '[COPYCHICK] '.$subject;

    try {
        //Server settings
        # $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
        $mail->isSMTP();                                            //Send using SMTP
        $mail->Host       = 'mail.privateemail.com';                //Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
        $mail->Username   = 'steve@gmoz.biz';                       //SMTP username
        $mail->Password   = 'B@r@n0y3K22';                          //SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
        $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

        //Recipients
        $mail->setFrom('steve@gmoz.biz', 'COPYCHICK Contact Form');
        $mail->addAddress('jentheriault12@gmail.com', 'Jennifer Oziel-Theriault');
        $mail->addReplyTo($email, $first_name.' '.$last_name);

        # $mail->addAddress('steve@gmoz.biz', 'Steve Oziel');
        # $mail->addCC('cc@example.com');
        # $mail->addBCC('bcc@example.com');

        //Attachments
        # $mail->addAttachment('/var/tmp/file.tar.gz');         //Add attachments
        # $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    //Optional name

        //Content
        $mail->isHTML(true);                                  //Set email format to HTML
        $mail->Subject = '[COPYCHICK] '.$subject;
        $mail->Body    = $emailBody;

        # $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        $sent = true;
    } catch (Exception $e) {
        # echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        $errors[] = 'Email failed to be sent, please email jentheriault12@gmail.com directly. Mailer Error: '.$mail->ErrorInfo;
    }
#    if (1===1) {
#     if (mail($to, $subject, $emailBody, $headers)) {
#      $sent = true;
#    } else {
#        $errors[] = 'Email failed to be sent, please email jentheriault12@gmail.com directly.';
#    }
  }
}
?>
<?php if (!empty($errors)) : ?>{
  "status": "fail",
  "error":  <?php echo json_encode($errors) ?>
}
<?php endif; ?>
<?php if (isset($sent) && $sent === true) : ?>
{
  "status": "success",
  "message": "Your data was successfully submitted &9989;"
}
<?php endif; ?>
<?php if (!isset($sent) && empty($errors)) : ?>
{
  "status": "fail",
  "message": "No data sent"
}
<?php endif; ?>
