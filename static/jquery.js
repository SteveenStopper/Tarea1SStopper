jQuery('#frm').validate({
    rules:{
        Nombre: "required",
        Apellido: "required",
        Correo: "required",
        Comentario: "required",
    }, menssages:{
        Nombre: "Por favor, ingrese su nombre",
        Apellido: "Por favor, ingrese su apellido",
        Correo:{
            required: "Por favor, ingrese su correo",
            Correo: "Por favor, un correo valido",
        },
        Comentario: "Por favor, ingrese su comentario"
    },
})