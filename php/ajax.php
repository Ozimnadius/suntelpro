<?php
header('Content-Type: application/json');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require $_SERVER['DOCUMENT_ROOT'] . '/php/PHPMailer/src/Exception.php';
require $_SERVER['DOCUMENT_ROOT'] . '/php/PHPMailer/src/PHPMailer.php';
require $_SERVER['DOCUMENT_ROOT'] . '/php/PHPMailer/src/SMTP.php';

function sendMail()
{

    ob_start();
    ?>
    <h3>Обратная связь</h3>
    <table>
        <tr>
            <td>
                Имя: <?= $_POST['name'] ?>
            </td>
        </tr>
        <tr>
            <td>
                Телефон: <?= $_POST['tel'] ?>
            </td>
        </tr>
        <tr>
            <td>
                Email: <?= $_POST['email'] ?>
            </td>
        </tr>
        <tr>
            <td>
                Оборудование: <?= $_POST['msg'] ?>
            </td>
        </tr>
    </table>
    <?
    $html = ob_get_contents();
    ob_end_clean();

    $mail = new PHPMailer(true);
    $mail->CharSet = $mail::CHARSET_UTF8;

    try {
        //Recipients
        $mail->setFrom('info@intmedgroup.ru', 'Suntelpro');
        $mail->addAddress('bulkina@intmedgroup.ru', 'Intmedgroup');

        //Content
        $mail->isHTML(true);
        $mail->Subject = 'Обратная связь';
        $mail->Body = $html;

        $result = $mail->send();
        return $result;
    } catch (Exception $e) {
        die(print_r($e));
        return false;
    }

}

echo json_encode(array(
    'status' => sendMail()
));
exit();

