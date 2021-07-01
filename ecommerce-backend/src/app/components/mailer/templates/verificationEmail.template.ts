import { User } from "../../users/user.controller";

export interface ParamsTemplate {
    user: User;
    url: string;
    host: string;
}

export function verificationEmailTemplate(data: Partial<ParamsTemplate>) {
    return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Verificacion de email.</title></head><body style="font-family:system-ui,sans-serif;margin:0;padding:0"><style>@media screen and (min-width:720px){.card{width:60%}}@media screen and (min-width:1000px){.card{width:45%}}</style><div class="container" style="background:#0652dd;padding:20px"><div class="container-header" style="padding:20px;text-align:center"><img src="https://image.flaticon.com/icons/png/512/1244/1244683.png" width="100px" alt=""></div><div class="container-body" style="display:flex;justify-content:center;width:100%"><div class="card" style="background:#fff;border-radius:5px;padding:20px"><div class="card-body"><h1 style="font-family:system-ui,sans-serif;font-weight:100;text-align:center">¡Hola!, ${ data.user?.first_name }</h1><p style="font-family:system-ui,sans-serif;color:#696969;font-size:18px">Ecommerce te da la bienvenida. Para poder validar tu cuenta y la direccion de correo electronico ${ data.user?.email }, es necesario que presiones el boton de abajo, y estara todo listo.</p></div><div class="card-footer" style="text-align:center"><a href="${ data.url }"><button style="font-family:system-ui,sans-serif;background-color:#0652dd;border:none;border-radius:3px;color:#fff;font-size:15px;padding:15px 25px">Confirmar email</button></a></div></div></div><div class="container-footer" style="color:#fff;padding:20px;text-align:center"><span style="font-family:system-ui,sans-serif">${ new Date().getFullYear() } Ecommerce. Todos los derechos reservados.</span><br><span style="font-family:system-ui,sans-serif">Desarrollado por <a href="${ data.host }" style="color: white">Ecommerce.</a></span></div></div></body></html>`
}
