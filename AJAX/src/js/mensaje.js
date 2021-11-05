
// MENSAJE
const saveId = (id = 0) =>{
    localStorage.clear();
    localStorage.setItem('id',id)
}
const borrarMensaje = (idProducto) =>{
    let id = {
        id:idProducto
    }
    let datosEnvio =JSON.stringify(id);
    $.ajax( {
        url         : `http://155.248.231.81:8080/api/Message/${idProducto}`,
        type        : 'DELETE',
        // data        : datosEnvio,
        contentType :'application/json',
        success     : function(response){
                        alert("se elimino el dato :(", response)

                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${xhr}`);
                    }

        
    })   
    location.reload(); 
    consultarMensaje();
}
const consultarMensaje = () =>{
    $.ajax( {
        url         : 'http://155.248.231.81:8080/api/Message/all',
        type        : 'GET',
        dataType    : 'json',
        success     : function(json){
                        $('#tabla').empty();
                        for(let i = 0; i < json.length; i++){
                            $('#tabla').append(`
                                                <tr>
                                                    <td>${json[i].idMessage} </td>
                                                    <td>${json[i].messagetext}</td>
                                                    <td>
                                                        <span> 
                                                            <a href="../../update/mensaje.html"   onclick="saveId(${json[i].idMessage})" id="${json[i].idMessage}">
                                                                <ion-icon name="create-outline" ></ion-icon>
                                                            </a>
                                                        </span> 
                                                    </td>
                                                    <td>
                                                        <span> 
                                                            <a href="#" onclick="borrarMensaje(${json[i].idMessage})" id="${json[i].idMessage}">
                                                                <ion-icon name="close-circle-outline"></ion-icon>
                                                            </a>
                                                        </span>
                                                    </td>
                                                </tr>`);
                        }
                        console.log(json);
                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${xhr}`);
                    }

        
    })
}
const insertarMensaje = () => {
    let id = $('#id').val();
    let mensaje = $('#mensaje').val();

    const MENSAJE = {
        idMessage:id,
        messageText:mensaje,
        costume:null,
        client:null
    }

    let datosEnvio = JSON.stringify(MENSAJE)

    $.ajax( {
        url         : 'http://155.248.231.81:8080/api/Message/save',
        type        : 'POST',
        data        : datosEnvio,
        contentType :'application/json',
        success     : function(response){
                        alert("se insertaron los datos correctamente", response)

                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${status}`);
                    }

        
    })   
}

consultarMensaje();