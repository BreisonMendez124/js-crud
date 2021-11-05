
const login = () =>{
  
  var name = $('#name').val()
  var password = $('#password').val()

  console.log(name, password)
    $.ajax( {
        url         : 'http://155.248.231.81:8080/api/Client/all',
        type        : 'GET',
        dataType    : 'json',
        success     : function(json){
                        $('#tabla').empty();
                        for(let i = 0; i < json.length; i++){
                          console.log(name,json[i].name, password,json[i].password)
                          if(name == json[i].name && password == json[i].password ){
                            alert("usuario correcto")
                            
                            
                          }else{
                            alert("credenciales incorrectas")
                          }
                        }
                      },
        error       :function(xhr,status){
                        console.error(`no se puede conectar al servicio :( ${xhr}`);
                    }

        
    })
    location.href="http://127.0.0.1:5500/dates/disfraz.html"
}