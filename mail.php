<?php

$field_name = $_POST['name'];
$field_phone = $_POST['phone'];
$field_email = $_POST['email'];

if ($field_name && $field_phone) {

        $mail_to = 'zakaz@rysexport.ru';
        $subject = 'Заявка с сайта rysexport.ru';

        $body_message = 'От кого: '.$field_name."\n";
        $body_message .= 'Номер телефона: '.$field_phone."\n";

        $headers = 'From: request@request.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion() . "\r\n";

}

if ($field_email && $field_phone) {

        $mail_to = 'zakaz@rysexport.ru';
        $subject = 'Заявка с сайта rysexport.ru';

        $body_message = 'E-mail: '.$field_email."\n";
        $body_message .= 'Номер телефона: '.$field_phone."\n";

        $headers = 'From: request@request.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion() . "\r\n";

}

mail($mail_to, $subject, $body_message, $headers);
?>
<script language="javascript" type="text/javascript">
    document.location.href="/";
</script>