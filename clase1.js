
/*class alumno{

    constructor (id,nombre,nota){
    
        this.id= id;
        this.nombre= nombre;
        this.nota= nota;
    }    

}

const nota1= new alumno (1, 'agustin', 10);
const nota2= new alumno (2, 'juan', 5);
const nota3= new alumno (3, 'sofia', 7);


const bbdd= [
    nota1,
    nota2,
    nota3
]    


const carrito= [] 
console.log(bbdd)

function RenderizarCursos(){
    bbdd.forEach((el)=>{
        document.write (`
        <br>
        ${el.nombre}   <button onclick="ver()">VER</button>
        <br>
        <br>`)

        
    
        
        
    })

    document.write(`
    <button onclick="ordenarnota()">Ordenar</button><br>`)
    

}    



function ver (){
    carrito.push(bbdd[0])

}


function ordenarnota(){

    bbdd.sort((a,b)=>{
        return a.nota - b.nota
    })
    
}

ordenarnota() */





/*let botonclick = document.getElementById("ingresar")
      botonclick.addEventListener("click", respuesta)
      
      function respuesta (){
          let usuario = document.getElementById("usuario").value
          let contra = document.getElementById("contrasenia").value
          let valores = document.createElement("p")
          valores.innerHTML = "<h2>los valores obtenidos son </h2>" +usuario + " y " +contra
          document.body.appendChild(valores)
      }
*/

var datos = [];

function registrar(){
    var nombre= document.getElementById ("alumno").value;
    var materia= document.getElementById ("materia").value;
    var primerparcial= document.getElementById ("notauno").value;
    var segundoparcial= document.getElementById ("notados").value;

    datos.push({

        "alumno": nombre,
        "materia": materia,
        "nota 1": primerparcial,
        "nota 2": segundoparcial,
        "Promedio": (parseInt(primerparcial)+ parseInt(segundoparcial)) /2
        
      
            
    

    });

        document.getElementById("frmcali").reset();
        alert ('DATOS GUARDADOS')
        cerrarmodal ();

    
}


function mostrarModal(){
    document.getElementById("modalCali").classList.add ('active');
}



function cerrarmodal(){
    document.getElementById("modalCali").classList.remove ('active');
}


