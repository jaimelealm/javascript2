var nombres=[];
document.form1.onsubmit=function(){
    return false;
}
document.getElementById("revertir").onclick=function(){
    nombres.reverse();
    mostrarListado();
}
document.form1.nombre.onkeypress=function(event){
    var c=(event.charCode==0)?event.keyCode:event.charCode;
    if (c==13)
        document.form1.agregar.onclick();
}
function agregarNodo(nombre){
    var nodo = document.createElement("div");
    nodo.id=nombre;
    var a=document.createElement("a");
    a.href="#";
    a.appendChild(document.createTextNode(nombre));
    a.onclick=function(){
        document.form1.nombre.value=nombre;
    }
    nodo.appendChild(a);
    var div=document.getElementById("listado");
    div.appendChild(nodo);
}

function mostrarListado(){
    var div=document.getElementById("listado");
    div.innerHTML="";
    for (let i=0;i<nombres.length;i++)
        div.innerHTML+=(i+1)+" "+nombres[i]+"<br>";
}
document.form1.agregar.onclick=function(){
    var nombre = document.form1.nombre;
    if (nombre.value!=""){
        let posicion=nombres.indexOf(nombre.value.toUpperCase());
        // indexOf busca un elemento en un arreglo 
        // y retorna un número. -1 si no esta en el arreglo
        // lo que estoy buscando, o un número 0 y length-1 si 
        // esta el elemento buscado
        if (posicion!=-1)
            alert("Esta registrado");
        else{
            nombres.push(nombre.value.toUpperCase());
            console.log(nombres);
            agregarNodo(nombre.value);
            nombre.value="";
        }
        
    }
}