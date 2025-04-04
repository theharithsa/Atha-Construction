<?php
session_start();


define("WEBMASTER_EMAIL", 'info@athaconstructions.in');

$project_name = "Atha Construction";
$form_domain = "athaconstruction.in";

//define("WEBMASTER_EMAIL2", 'ravi.k@imsolutions.mobi');
//define("WEBMASTER_EMAIL3", 'operations@sapthagirinirvana.com');



error_reporting(E_ALL ^ E_NOTICE);
function ValidateEmail($value)
{
    $regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';
    if ($value == '') {
        return false;
    } else {
        $string = preg_replace($regex, '', $value);
    }
    return empty($string) ? true : false;
}
function validate_mobile($phone)
{
    return preg_match('/^[0-9]{10}+$/', $phone);
}
if ($_POST) {
    $name = strip_tags(stripslashes(trim($_POST['name'])));
    $email = strip_tags(stripslashes(trim($_POST['email'])));
    //$ccode = trim(str_replace('+','',$_POST['ccode']));
    $ccode = "+91";
    $phone = strip_tags(stripslashes(trim($_POST['phone'])));

    $query = strip_tags(stripslashes(trim($_POST['message'])));
    // $captcha = $_POST['g-recaptcha-response'];
    $construction_type=strip_tags(stripslashes(trim($_POST['type'])));
    $plot_size=strip_tags(stripslashes(trim($_POST['plotsize'])));
    $subject = 'Enquiry from ' . $project_name;
    $error = '';
    // Check fullname
    if (!$name || empty($name)) {
        $error .= 'Please enter your Name.<br />';
        die('<p style="color:red;width:100%;">Please enter your Name</p>');
    }
    if (!$email || empty($email)) {
        $error .= 'Please enter an e-mail address.<br />';
        die('<p style="color:red;width:100%;">Please enter an e-mail address</p>');
    }
    if ($email && !ValidateEmail($email)) {
        $error .= 'Please enter a valid e-mail address.<br />';
        die('<p style="color:red;width:100%;">Please enter a valid e-mail address</p>');
    }
    if (!$ccode) {
        $error .= 'Please Select your Country Code.<br />';
        die('<p style="color:red;width:100%;">Please Select your Country Code</p>');
    }
    if (!$phone || !validate_mobile($phone)) {
        $error .= 'Enter 10 digit mobile number.<br />';
        die('<p style="color:red;width:100%;">Enter 10 digit mobile number</p>');
    }
    if (!$phone || empty($phone)) {
        $error .= 'Please enter your phone.<br />';
        die('<p style="color:red;width:100%;">Please enter your phone</p>');
    }
      if (!$construction_type || empty($construction_type)) {
        $error .= 'Please select construction type.<br />';
        die('<p style="color:red;width:100%;">Please select construction type.</p>');
    }
      if (!$plot_size || empty($plot_size)) {
        $error .= 'Please enter your plot size.<br />';
        die('<p style="color:red;width:100%;">Please enter your plot size.</p>');
    }




    if (!$query || empty($query)) {
        $error .= 'Please enter your message.<br />';
        die('<p style="color:red;width:100%;">Please enter your message</p>');
    }
    if (strlen($query) != mb_strlen($query, 'utf-8')) {
        $error .= 'Please enter English words only.<br>';
        die('<p style="color:red;width:100%;margin:0px;">Please enter English words only</p>');
    }

    if (strpos($query, 'http://') !== false) {
        $error .= 'Invalid Message!.<br>';
        die('<p style="color:red;width:100%;margin:0px;">Invalid Message!</p>');
    }

    if (strpos($query, 'https://') !== false) {
        $error .= 'Invalid Message!.<br />';
        die('<p style="color:red;width:100%;margin:0px;">Invalid Message!</p>');
    }

    if (strlen($query) > 200) {
        $error .= 'Characters limit 200 only!.<br />';
        die('<p style="color:red;width:100%;margin:0px;">Characters limit 200 only!</p>');
    }

    if (preg_match("/<[^<]+>/", $query, $m) == 1) {
        $error .= 'Invalid Message!.<br />';
        die('<p style="color:red;width:100%;margin:0px;">Invalid Message!</p>');
    }



    $email_name = $project_name;
    $email_to = "noreply@" . $form_domain;
    $headers = 'MIME-Version: 2.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: ' . $email_name . ' <' . $email_to . '>' . "\r\n";
    $message = "<p><b>  Name: $name  </b> <br></p>
                <p> <b> Email: $email </b>  <br></p>
                <p>  <b>Phone Number: </b>  $phone <br></p>
                 <p>  <b>Construction Type: </b>  $construction_type <br></p>
                  <p>  <b>Plot Zize: </b>  $plot_size <br></p>
              ";

    //ini_set("sendmail_from", 'info@imsolutions.mobi'); // for windows server
   // $mail = mail(WEBMASTER_EMAIL, $subject, $message, $headers, '-freturn@' . $form_domain);
    $mail = mail(WEBMASTER_EMAIL, $subject, $message, $headers, '-freturn@' . $form_domain);


    if (true) {

        echo   'OK';
     
    }
}
