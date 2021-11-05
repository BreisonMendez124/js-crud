
const saveId = (id) =>{
    localStorage.clear();
    localStorage.setItem('id',id)
}
// CLIENTE
const borrarCliente = (idCliente) =>{
    let id = {
        idClient:idCliente
    }
    // let datosEnvio =JSON.stringify(id);
    $.ajax( {
        url         : `http://155.248.231.81:8080/api/Client/${idCliente}`,
        type        : 'DELETE',
        // data        : datosEnvio,
        contentType :'application/json',
        success     : function(response){
                        alert("se elimino el dato :(", response)
                        consultarCliente();
                        location.reload();

                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${xhr}`);
                    }    
    })
    
    
}
const consultarCliente = () =>{
    $.ajax( {
        url         : 'http://155.248.231.81:8080/api/Client/all',
        type        : 'GET',
        dataType    : 'json',
        success     : function(json){
                        $('#tabla').empty();
                        for(let i = 0; i < json.length; i++){
                            $('#tabla').append(`
                                                <tr>
                                                    <td>${json[i].idClient} </td>
                                                    <td>${json[i].name}</td>
                                                    <td>${json[i].email} </td>
                                                    <td>${json[i].age} </td>
                                                    <td>
                                                        <span> 
                                                            <a onclick="saveId(${json[i].idClient})" href="../../update/cliente.html" >
                                                                <ion-icon name="create-outline"></ion-icon>
                                                            </a>
                                                        </span> 
                                                    </td>
                                                    <td>
                                                        <span> 
                                                            <a href="#" onclick="borrarCliente(${json[i].idClient})" >
                                                                <ion-icon name="close-circle-outline"></ion-icon>
                                                            </a>
                                                        </span>
                                                    </td>
                                                 </tr>`);
                        }
                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${xhr}`);
                    }

        
    })
}
// consultarCliente();
const insertarCliente = () =>{
    let name = $('#name').val();
    let email = $('#email').val();
    let age = $('#age').val();
    let password = $('#password').val();

    const CLIENTE = {
        email:email,
        password:password,
        name:name,
        age:age,
        messages:null,
        reservations:null
    }

    let datosEnvio =JSON.stringify(CLIENTE);


    $.ajax( {
        url         : 'http://155.248.231.81:8080/api/Client/save',
        type        : 'POST',
        data        : datosEnvio,
        contentType :'application/json',
        success     : function(response){
                        alert("se insertaron los datos correctamente", response)

                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :c ${xhr}`);
                    }

        
    })   
}



consultarCliente();