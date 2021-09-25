let contenido_textarea = ""
        
function verificar(control, max, progressText){
    num_caracteres = progressText.value.length
    if (num_caracteres > max) {
        progressText.value = contenido_textarea
    }else{
        contenido_textarea = progressText.value
    }
    
    if (num_caracteres >= max){
        document.forms[0].caracteres.style.color="#ff0000";
    }else{
        document.forms[0].caracteres.style.color="#000000";
    }
    cuenta(progressText)
}
        
function cuenta(progressText){
    document.forms[0].caracteres.value=progressText.value.length
}
