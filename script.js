function repetir(){
    let continuar = prompt("¿Desea volver al menú? \n1. Si \n2. No");
    return continuar;
}
function iva(subtotal){
    let iva=subtotal*.16;
    let total=subtotal+iva;
    return total;
}
const carrito=[];
class Elemento{
    constructor(id,nombre,precio){
        this.id=parseInt(id);
        this.nombre=nombre;
        this.precio=parseFloat(precio);
    }
}

function menu(){
    let continuar=1;
    let suma=0;
    do{
        let opcion= parseInt(prompt("Elige el producto que te interese del siguiente menú \n 1. Mesa de comedor  $3,000 \n 2. Escritorio  $1,500 \n 3. Cama individual  $3,000 \n 4. Cama matrimonial  $5,000 \n 5. Set de sillas  $3,000 \n 6. Set de bancos  $2,250 \n 7. Librero  $4,800 \n 8. Buro  $1,600"));
        switch(opcion){
            case 1:
                carrito.push(new Elemento("1","Mesa de comedor","3000"));
                continuar=repetir();
                break;
            case 2:
                carrito.push(new Elemento("2","Escritorio","1500"));
                continuar=repetir();
                break;
            case 3:
                carrito.push(new Elemento("3","Cama individual","3000"));
                continuar=repetir();
                break;
            case 4:
                carrito.push(new Elemento("4","Cama matrimonial","5000"));
                continuar=repetir();
            case 5:
                carrito.push(new Elemento("5","Set de sillas","3000"));
                continuar=repetir();
                break;
            case 6:
                carrito.push(new Elemento("6","Set de bancos","2250"));
                continuar=repetir();
                break;
            case 7:
                carrito.push(new Elemento("7","Librero","4800"));
                continuar=repetir();
                break;
            case 8: 
                carrito.push(new Elemento("8","Buro","1600"));
                continuar=repetir();
                break;
            default:
                prompt("Lo sentimos, esa opción no esta disponible, vuelva a ingresar una opción.");
                continuar=1;
                break;
        }
    }while(continuar==1);
    do{
        let canasta='';
        let n=0;
        for (const prod of carrito){
            n=n+1;
            canasta+=n + '. ' + prod.nombre + ' $'+ prod.precio+ '\n';
        }
        alert(canasta);
        let res=parseInt(prompt("¿Desea eliminar productos de la lista? \n1. Si \n2. No"));
        if(res==1){
            let eliminar=parseInt(prompt("Ingrese el numero del producto que desea eliminar"));
            let el=eliminar-1;
            carrito.splice(el,1);
            console.log(carrito);
            continuar=repetir();
        }
        else if(res==2){
            for (const producto of carrito){
                suma=suma+(producto.precio);
            }
            alert(`El subtotal de su compra es: ${suma}`);
            alert("El total de su compra es: "+total);
            let total=iva(suma);
            let red=parseInt(prompt("¿Desea redondear?\n1. Si \n2. No"));
            if(res==1){
                let tot=Math.round(total);
                alert("El total de su compra es: "+tot);
            }
            else if(res==2){
                alert("El total de su compra es: "+total);
            }
            else{
                prompt("Lo sentimos, esa opción no esta disponible.");
            }
            continuar=repetir();
        }
        else{
            prompt("Lo sentimos, esa opción no esta disponible, vuelva a ingresar una opción.");
            continuar=repetir();
        } 
    }while(continuar==1);
}
function comentarios(){
    let nombre = prompt("Ingrese su nombre");
    let correo = prompt("Ingrese su correo");
    let comentario = prompt("Ingrese su comentario");   
    console.log(`${nombre}  \n${correo} \n${comentario}`)
    alert("Muchas gracias por sus comentarios, nos ayudan a seguir mejorando.")
}

let seguir;
do{
    let opcion = parseInt(prompt("Bienvenido a Atelier de Ideas \n Favor de elegir una opción \n 1. Cotización de muebles\n 2. Dudas y comentarios \n3. Salir"));
    switch(opcion){
        case 1:
            menu();
            seguir=repetir();
            break;
        case 2:
            comentarios();
            seguir=repetir();
            break;
        case 3:
            seguir=0;
            break;
        default:
            prompt("Lo sentimos, esa opción no esta disponible, vuelva a ingresar una opción.");
            break;
    }

}while(seguir==1);

