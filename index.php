<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="css/styles.css">
    <link rel="stylesheet" href="css/framework.css">

    <title>Mail Form</title>
</head>

<body class="seccion_cuerpo">

<div class="seccion">

    <div class="forma-1 forma-2">
        
        <div class="form__parrafo">
            <p>
                Bienvenido, puedes estar seguro que estaré pendiente de tu solicitud, solo rellena los campos y asegurate de especificar lo que necesitas, o si necesitas ayuda remota.
            </p>
        </div>

        <form name="contact" method="POST" class="form" id="form">

            <div class="form__field">
                <label for="name">Nombre:</label>
                <input type="text" name="name" id="name" class="name" placeholder="tu nombre">
            </div>
            
            <div class="form__field">
                <label for="mail">Correo:</label>
                <input type="text" name="mail" id="mail" class="mail" placeholder="tu mail">
            </div>

            <div class="form__field">
                <label for="subject">Telefono:</label>
                <input type="text" name="phone" id="subject" class="subject" placeholder="tu telefono">
            </div>

            <div class="form__field">
                <label for="message">Solicitud:</label>
                <textarea name="message" class="message" id="message" cols="21" rows="3" placeholder="tu solicitud"></textarea>
            </div>

            <div id="gender" class="form__field">
                <label for="male">Male</label>
                <input type="radio" name="gender" id="male" value="male">
                <label for="female">Female</label>
                <input type="radio" name="gender" id="female" value="female">
            </div>

            <div class="form__field">
                <label for="terms">I accept the <a href="terms.html" class="terminos">terms</a>  and conditions.</label>
                <input type="checkbox" name="terms" id="terms">
            </div>

            <input type="submit"id="submitButton" class="boton">

            <!-- <button type="submit" id="submitButton" class="boton" disabled>Enviar</button> -->
        </form>

        <div id="status"></div>

        <?php 
            require_once("php/sending.php");
        ?>
    </div>

</div>

<div class="centrado">
    <a href="index.html" class="regresar">Home.</a>
</div>

    <script src="js/formulario.js"></script>
</body>

</html>