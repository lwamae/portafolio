//Haz tú validación en javascript acá
function validarDatos(){
    window.event.preventDefault()
     
    if (document.form.nombre.value=="" || document.form.nombre.value.length >= 50 ){
        alert("Campo Nombre es obligatorio y debe contener máximo 50 carateres") 
        document.form.nombre.focus()
    
    }else if (document.form.email.value=="") {
        alert("Campo e-mail es obligatorio")
        document.form.email.focus() 

    }else if (document.form.asunto.value=="" || document.form.asunto.value.length >= 50 ){
        alert("Campo Ssunto es obligatorio y debe contener máximo 50 carateres") 
        document.form.asunto.focus() 

    }else if (document.form.mensaje.value=="" || document.form.mensaje.value.length >= 300 ){
        alert("Campo Mensaje es obligatorio y debe contener máximo 300 carateres") 
        document.form.mensaje.focus()
      
    } else if (document.form.email.value.indexOf('@')==-1 || document.form.email.value.indexOf('.')==-1 ) {
        alert("e-mail inválido")
    } else {
        alert("mensaje enviado")
        document.querySelector('form').reset();
    }
   
}

document.querySelector('form').addEventListener('submit',validarDatos)
