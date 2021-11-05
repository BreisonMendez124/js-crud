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
    console.log()
    $.ajax( {
        url         : `http://155.248.231.81:8080/api/Costume/${idDisfraz}`,
        type        : 'DELETE',
        // data        : datosEnvio,
        contentType :'application/json',
        success     : function(response){
                        alert("se elimino el dato :(", response)
                        consultar();
                        location.reload(); 

                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${xhr}`);
                    }
        
        
    })  

    
}
const consultar = () =>{


    $.ajax( {
        url         : 'http://155.248.231.81:8080/api/Costume/all',
        type        : 'GET',
        dataType    : 'json',
        success     : function(json){
                        $('#tabla').empty();
                        for(let i = 0; i < json.length; i++){
                                
                          
                                    
                                
                            
                            $('#tabla').append(`
                                                <tr>
                                                    <td>${json[i].id} </td>
                                                    <td>${json[i].name}</td>
                                                    <td>${json[i].brand} </td>
                                                    <td>${json[i].year} </td>
                                                    <td>${json[i].description} </td>
                                                    <td id="${json[i].id}">${ json[i].category} </td>
                                                    <td>
                                                       <span> 
                                                            <a href="../../update/disfraz.html"  id="${json[i].id}"  onclick="saveId(${json[i].id})" >
                                                                    <ion-icon name="create-outline"></ion-icon>
                                                            </a>
                                                        </span> 
                                                    </td>

                                                    <td>
                                                        <span> 
                                                        <a href="#" id="${json[i].id}" onclick="borrarDisfraz(${json[i].id})">
                                                            <ion-icon name="close-circle-outline"></ion-icon>
                                                        </a>
                                                        </span>
                                                    </td>
                                                    </tr>`);
                        for (let e in json[i].category) {
                            
                            let id = json[i].category['id'] + 1
                            let td = document.getElementById(id)
                            td.innerHTML = `${json[i].category['description']}`
                            
                            console.log(td)
                        }
                        }
                     
                        
                        // console.log(json);
                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${xhr}`);
                    }

        
    })
}
const insertarDisfraz = () => {
    let brand = $('#brand').val();
    let age = $('#age').val();
    let category_id = $( "#category option:selected" ).val();
    let name = $('#name').val();
    let description = $('#description').val();
    
    const DISFRAZ = {
        name:name,
        brand:brand,
        year:age,
        description:description,
        category:{id:parseInt(category_id)},
        messages:null,
        reservations:null
    }
    console.log(DISFRAZ)
    let datosEnvio =JSON.stringify(DISFRAZ);
    $.ajax( {
        url         : 'http://155.248.231.81:8080/api/Costume/save',
        type        : 'POST',
        data        : datosEnvio,
        contentType :'application/json',
        success     : function(response){
                        alert("se insertaron los datos correctamente", response)

                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${xhr}`);
                    }

        
    })   
}

consultar();
