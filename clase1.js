 function Saludar (){
    alert("Bienvenidos") //Declara función
}

Saludar(); //llama función
// Saludar();



let notaprimera= parseInt (prompt("ingrese nota 1"))
let notasegunda= parseInt (prompt("ingrese nota 2"))
let notafinal= (notaprimera + notasegunda)/2

alert ("su nota final es " + notafinal)

if (notafinal >=7){
    alert ("Aprobado")
}
else if(notafinal <7){
    alert ("Desaprobado")
}else{
    alert ("No ingresaste dato correcto")
}




