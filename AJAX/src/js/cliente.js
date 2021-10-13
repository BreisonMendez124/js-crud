
const saveId = (id) =>{
    localStorage.clear();
    localStorage.setItem('id',id)
}
// CLIENTE
const borrarCliente = (idCliente) =>{
    let id = {
        id:idCliente
    }
    let datosEnvio =JSON.stringify(id);
    $.ajax( {
        url         : 'https://g871356b15e6ccc-dbprimerreto.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/client/client',
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
    consultarCliente();
}
const consultarCliente = () =>{
    $.ajax( {
        url         : 'https://g871356b15e6ccc-dbprimerreto.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/client/client',
        type        : 'GET',
        dataType    : 'json',
        success     : function(json){
                        $('#tabla').empty();
                        for(let i = 0; i < json.items.length; i++){
                            $('#tabla').append(`
                                                <tr>
                                                    <td>${json.items[i].id} </td>
                                                    <td>${json.items[i].name}</td>
                                                    <td>${json.items[i].email} </td>
                                                    <td>${json.items[i].age} </td>
                                                    <td>
                                                        <span> 
                                                            <a onclick="saveId(${json.items[i].id})" href="../../AJAX/update/cliente.html" >
                                                                <ion-icon name="create-outline"></ion-icon>
                                                            </a>
                                                        </span> 
                                                    </td>
                                                    <td>
                                                        <span> 
                                                            <a href="#" onclick="borrarCliente(${json.items[i].id})" >
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
// consultarCliente();
const insertarCliente = () =>{
    let id = $('#id').val();
    let name = $('#name').val();
    let email = $('#email').val();
    let age = $('#age').val();
    
    const CLIENTE = {
        id:id,
        name:name,
        email:email,
        age:age
    }

    $.ajax( {
        url         : 'https://g871356b15e6ccc-dbprimerreto.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/client/client',
        type        : 'POST',
        data        : CLIENTE,
        success     : function(response){
                        alert("se insertaron los datos correctamente", response)

                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${xhr}`);
                    }

        
    })   
}



consultarCliente();
