<?php 
    
if (isset($_POST['enviar'])) {
    if (!empty($_POST['name']) && !empty($_POST['mail']) && !empty($_POST['phone']) && !empty($_POST['message'])) {
        $name = $_POST['name'];
        $email = $_POST['mail'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];

        $header = 'From: ' . $email . " \r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/plain";

        $message .= "Este mensaje fué enviado por: " . $name . " \r\n";
        $message .= "Su e-mail es: " . $email . " \r\n";
        $message .= "Telefono de contacto: " . $phone . " \r\n";
        $message .= "Mensaje: " . $_POST['message'] . " \r\n";
        $message .= "Enviado el: " . date('d/m/Y', time());

        $para = 'josecastrognos@hotmail.com';
        $asunto = 'Asunto del mensaje';

        $mail = @mail($para, $asunto, utf8_decode($message), $header);
        if ($mail) {
            echo "<h4>¡Mail enviado exitosamente!</h4>";
        }
        header("Location:index.html");
    }
    
}


?>
