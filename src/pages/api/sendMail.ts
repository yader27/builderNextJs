// pages/api/sendEmail.ts

import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.PARAM_VERIFIER_URL_SENDGRID,
  secure: true,
  auth: {
    user: process.env.PARAM_VERIFIER_USER_SENGRID,
    pass: process.env.PARAM_VERIFIER_API_KEY_SENDGRID,
  },
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const { method, body } = req;

  if (method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }
  try {
    // Your email sending logic using nodemailer goes here
    const mailOptions = {
      to: "egomez@investmentsyes.com",
      from: "support@ridivi.com",
      subject: "Cliente de Factoreo",
      html: `
        <html style="background: #E3E3E3;margin: 10px;">
  
        <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
            <title>Ridivi Notificaciones</title>
        </head>
        
        <body style="max-width: 800px;margin: 0 auto;font-family: Helvetica, Arial, sans-serif;font-size: 14px;line-height: 125%;">
            <header></header>
            <div id="ticketBody" style="box-shadow: 5px 5px 10px #888888; margin-bottom: 20px;">
                <table style="width: 100%; max-width: 800px; border-collapse: collapse; color: #6b6b6b; font-weight: normal;">
                    <tbody>
                        <tr style="background: #FB813F; max-width: 800px; height: 70px; color: #f6f3f7; border: 0px solid; font-weight: bold;">
                            <td style="box-sizing: border-box; padding-left: 30px; padding-right: 30px;"></td>
                            <td align="right" style="box-sizing: border-box; padding-left: 30px; padding-right: 30px;">
                                <img src="https://storage.googleapis.com/ridivi_util/ridivi/icono%20ridivi%20blanco%20fondo%20transparente.png" style="width: 60px; margin-top: 6px;"></td>
                        </tr>
                        <tr style="background: #FB813F; max-width: 800px; height: 30px; color: #f6f3f7; font-size: 8pt; border: 0px solid; font-weight: bold;">
                            <td colspan="2" style="box-sizing: border-box; padding-left: 30px; padding-right: 30px;"></td>
                        </tr>
                        <tr style="background: #FFFFFF; max-width: 800px; height: 40px;">
                            <td colspan="2" style="box-sizing: border-box; border-bottom: #e5e5e5 1px solid; padding: 15px 30px 15px 30px;">
                                <p style="-webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; orphans: 3; widows: 3; margin: 0 0 10px; margin-bottom: 20px; font-size: 14px; font-weight: 300; line-height: 125%; margin-top: 20px; max-width: 800px; font-family: Helvetica, Arial, sans-serif;">Estimado Yes Investment: El siguiente cliente requiere información sobre factoreo.</p>
                                
                                <!-- Datos adicionales -->
                                <p>Nombre: ${body.fullName}</p>
                                <p>Correo: ${body.email}</p>
                                <p>Teléfono: ${body.phone}</p>
                                <p>Nombre Compañía: ${body.companyName}</p>
                                <p>Puesto: ${body.jobTitle}</p>
  
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <p>Este correo es de tipo informativo, por favor no responda a este mensaje.</p>
            <p><small>Ridivi. Todos los derechos reservados</small></p>
            <p></p>
            <hr>
            <font face="Arial" color="Gray" size="1">Este mensaje contiene información privilegiada y confidencial y ha sido creado para uso exclusivo del(os) destinatario(s). Si usted no es el receptor indicado en este mensaje (o responsable de la entrega al mismo) o cree que recibió este mensaje por
                error, no está autorizado a distribuir, retener, imprimir o entregar este mensaje a ningún tercero, por favor borrarlo en forma inmediata. Si su empresa no permite recibir correos electrónicos de este tipo, por favor notificar al emisor inmediatamente,
                Ridivi no se hace responsable de daños causados por virus que puedan ser transmitidos por este medio. En caso de archivos adjuntos, es responsabilidad del receptor la revisión de los mismos</font>
        </body>
        
        </html>
        `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}
