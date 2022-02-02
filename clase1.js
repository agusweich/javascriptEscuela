
class alumno{

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

ordenarnota()
