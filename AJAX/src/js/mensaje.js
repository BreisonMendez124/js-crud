
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
        url         : 'https://g871356b15e6ccc-dbprimerreto.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/message/message',
        type        : 'DELETE',
        data        : datosEnvio,
        contentType :'application/json',
        success     : function(response){
                        alert("se elimino el dato :(", response)

                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${xhr}`);
                    }

        
    })   
    consultarMensaje();
}
const consultarMensaje = () =>{
    $.ajax( {
        url         : 'https://g871356b15e6ccc-dbprimerreto.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/message/message',
        type        : 'GET',
        dataType    : 'json',
        success     : function(json){
                        $('#tabla').empty();
                        for(let i = 0; i < json.items.length; i++){
                            $('#tabla').append(`
                                                <tr>
                                                    <td>${json.items[i].id} </td>
                                                    <td>${json.items[i].messagetext}</td>
                                                    <td>
                                                        <span> 
                                                            <a href="../../update/mensaje.html"   onclick="saveId(${json.items[i].id})" id="${json.items[i].id}">
                                                                <ion-icon name="create-outline" ></ion-icon>
                                                            </a>
                                                        </span> 
                                                    </td>
                                                    <td>
                                                        <span> 
                                                            <a href="#" onclick="borrarMensaje(${json.items[i].id})" id="${json.items[i].id}">
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
        id:id,
        messagetext:mensaje
    }

    $.ajax( {
        url         : 'https://g871356b15e6ccc-dbprimerreto.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/message/message',
        type        : 'POST',
        data        : MENSAJE,
        success     : function(response){
                        alert("se insertaron los datos correctamente", response)

                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${status}`);
                    }

        
    })   
}

consultarMensaje();