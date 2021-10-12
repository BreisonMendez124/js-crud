// DISFRAZ
const saveId = (id) =>{
    localStorage.clear();
    localStorage.setItem('id',id)
}
const borrarDisfraz = (idDisfraz) =>{
    let idBorrar = {
        id:idDisfraz
    }
    
    let datosEnvio =JSON.stringify(idBorrar);
    $.ajax( {
        url         : 'https://g871356b15e6ccc-dbprimerreto.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/costume/costume',
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
    consultar();
}
const consultar = () =>{
    $.ajax( {
        url         : 'https://g871356b15e6ccc-dbprimerreto.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/costume/costume',
        type        : 'GET',
        dataType    : 'json',
        success     : function(json){
                        $('#tabla').empty();
                        for(let i = 0; i < json.items.length; i++){
                            $('#tabla').append(`
                                                <tr>
                                                    <td>${json.items[i].id} </td>
                                                    <td>${json.items[i].brand}</td>
                                                    <td>${json.items[i].model} </td>
                                                    <td>${json.items[i].category_id} </td>
                                                    <td>${json.items[i].name} </td>
                                                    <td>
                                                       <span> 
                                                            <a href="../../update/disfraz.html"  id="${json.items[i].id}"  onclick="saveId(${json.items[i].id})" >
                                                                    <ion-icon name="create-outline"></ion-icon>
                                                            </a>
                                                        </span> 
                                                    </td>

                                                    <td>
                                                        <span> 
                                                        <a href="#" id="${json.items[i].id}" onclick="borrarDisfraz(${json.items[i].id})">
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
const insertarDisfraz = () => {
    let id = $('#id').val();
    let brand = $('#brand').val();
    let model = $('#model').val();
    let category_id = $('#category_id').val();
    let name = $('#name').val();
    
    const DISFRAZ = {
        id:id,
        brand:brand,
        model:model,
        category_id:category_id,
        name:name
    }
    $.ajax( {
        url         : 'https://g871356b15e6ccc-dbprimerreto.adb.ca-montreal-1.oraclecloudapps.com/ords/admin/costume/costume',
        type        : 'POST',
        data        : DISFRAZ,
        success     : function(response){
                        alert("se insertaron los datos correctamente", response)

                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${xhr}`);
                    }

        
    })   
}

consultar();
