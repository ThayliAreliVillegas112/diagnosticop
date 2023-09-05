const resp = fetch('https://reqres.in/api/users?page=2');

const getTabla = () => {
    
    resp.then(response => response.json())
    .then((json)=>{
        let lista = json.data;
        console.log("esta es la lista",lista);
        
    
        let tabla = document.getElementById('tablebody');
        for(let i =0; i<lista.length; i++) {
            tabla.innerHTML +=
                "<tr>"+
                "<td>" +lista[i].email+"</td>"+
                "<td>"+lista[i].first_name +"</td>"+
                "<td>"+lista[i].last_name +"</td>"+
                "<td>"+ '<button type="button" data-bs-toggle="modal" data-bs-target="#details" class="btn btn-info center">Detalles</button> </td>'+
                "</tr>";
        }
       
    });
}

getTabla()

const findById = (id) =>{
    fetch('https://reqres.in/api/users/'+id)
    .then(response => response.json())
    .then(json => {
        console.log(json.data)
        document.getElementById("name").innerHTML = json.data.first_name;
        document.getElementById("last").innerHTML = json.data.last_name;
        document.getElementById("email").innerHTML = json.data.email
        document.getElementById("avatar").src = json.data.avatar
    })
  }
