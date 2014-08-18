<?php
if (isset($_POST['send'])) {
     $to = 'ashmarie1187@gmail.com'; // Use your own email address
     $subject = 'RSVP to our wedding';
	 $message = 'Name: ' . $_POST['name'] . "\r\n\r\n";
	 $message .= 'Number of Adults: ' . $_POST['numberOfAdults'] . "\r\n\r\n";
	 $message .= 'Number of Kids: ' . $_POST['numberOfKids'];
	 $message .= 'Comments: ' . $_POST['comments'];
	 $success = mail($to, $subject, $message, '-fashmarie1187@gmail.com');
	 
}
?>
<!DOCTYPE html>
<html>
<head>
	<title>Thanks for the RSVP</title>
</head>
<body>

	<?php if (isset($success) && $success) { ?>
	<h1>Thank You</h1>
	Your message has been sent.
	<?php } else { ?>
	<h1>Oops!</h1>
	Sorry, there was a problem sending your message.
	<?php } ?>

</body>
</html>