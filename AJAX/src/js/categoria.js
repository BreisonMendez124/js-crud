const saveId = (id) =>{
    localStorage.clear();
    localStorage.setItem('id',id)
}

const insertarCategoria = () =>{
    let name = $('#name').val();
    let description = $('#description').val();
    
    const CATEGORIA = {
        name:name,
        description:description,
        costumes:null
    }

    let datosEnvio =JSON.stringify(CATEGORIA);


    $.ajax( {
        url         : 'http://155.248.231.81:8080/api/Category/save',
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

const borrarCategoria = (idCliente) =>{
    let id = {
        idClient:idCliente
    }
    // let datosEnvio =JSON.stringify(id);
    $.ajax( {
        url         : `http://155.248.231.81:8080/api/Category/${idCliente}`,
        type        : 'DELETE',
        // data        : datosEnvio,
        contentType :'application/json',
        success     : function(response){
                        alert("se elimino el dato :(", response)
                        consultarCategoria();
                        location.reload();
                        

                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${xhr}`);
                    }    
    })
    
}

const consultarCategoria = () =>{
    $.ajax( {
        url         : 'http://155.248.231.81:8080/api/Category/all',
        type        : 'GET',
        dataType    : 'json',
        success     : function(json){
                        $('#tabla').empty();
                        for(let i = 0; i < json.length; i++){
                            $('#tabla').append(`
                                                <tr>
                                                    <td>${json[i].id} </td>
                                                    <td>${json[i].name}</td>
                                                    <td>${json[i].description} </td>
                                                    <td>
                                                       <span> 
                                                            <a href="../../update/categoria.html"  id="${json[i].id}"  onclick="saveId(${json[i].id})" >
                                                                    <ion-icon name="create-outline"></ion-icon>
                                                            </a>
                                                        </span> 
                                                    </td>

                                                    <td>
                                                        <span> 
                                                        <a href="#" id="${json[i].id}" onclick="borrarCategoria(${json[i].id})">
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

consultarCategoria()