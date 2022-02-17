


let botonclick = document.getElementById ("ingresar");
botonclick.addEventListener ("click", respuesta);
        
   
function respuesta(){


    let nombre= document.getElementById ("alumno").value;
    let materia= document.getElementById ("materia").value;
    let primerparcial= document.getElementById ("notauno").value;
    let segundoparcial= document.getElementById ("notados").value;
    

   

    

    let info = {
        alumno: nombre,
        materia: materia,
        nota1: primerparcial,
        nota2: segundoparcial,
        Promedio: (parseInt(primerparcial)+ parseInt(segundoparcial)) /2

    }




    
    
    

        alert ('DATOS GUARDADOS')
        console.log (info)
        localStorage.setItem("informacion alumno", JSON.stringify(info))
        let informacion = localStorage.getItem ("informacion alumno")
        console.log(informacion)
        
}

    










