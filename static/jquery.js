jQuery('#frm').validate({
    rules:{
        Nombre: "required",
        Apellido: "required",
        Correo: "required",
        Comentario: "required",
    }, menssages:{
        Nombre: {
            requerid: "Por favor, ingrese su nombre",
            Nombre: "El campo Nombre es obligatorio",
        },
        Apellido: {
            requerid: "Por favor, ingrese su apellido",
            Apellido: "El campo Apellido es obligatorio",
        },
        Correo:{
            required: "El campo de Correo Electronico es obligatorio",
            Correo: "Por favor, un correo valido",
        },
        Comentario: {
            required: "Por favor, ingrese su comentario",
            Comentario: "El campo Comentario es obligatorio"
        },
    },

})