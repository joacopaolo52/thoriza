    // PRODUCTOS

function Producto(tipo, stock, talle, precio) {
    this.tipo = tipo;
    this.stock = stock;
    this.talle = talle;
    this.precio = precio;
}

const gimmy = new Producto("Campera",true,"S,M,L,XL,XXL",5600);

const yuliam = new Producto("Campera",true,"S,M,L,XL,XXL",4400);

const basement = new Producto("Body",true,"S,M,L,XL,XXL",1680);

const glit = new Producto("Crop Top",true,"S,M,L,XL,XXL",1495);

const justin = new Producto("Camisa",true,"S,M,L,XL,XXL",2990);

const miloi = new Producto("Body",false,"S,M,L,XL,XXL",1850);

const productos = [gimmy, yuliam, basement, glit, justin, miloi];
console.log(productos);



    // SIMULADOR


 let menu;
 do {
     let x, y;
    
     menu = Number(prompt(`Ingrese el producto que desea comprar
    
     1- CAMPERA GIMMY ($5600)
     2- CAMPERA YULIAM ($4400)
     3- BODY BASEMENT ($1680)
     4- CROP TOP GLIT ($1495)
     5- CAMISA JUSTIN ($2990)
     6- BODY MILOI ($1850)

     0- Salir
    
     `));
     switch (menu) {
        case 1:
            y = prompt("Ingrese el talle")
            x = Number(prompt("Ingrese la cantidad de unidades"));
            alert(`
            Usted compró Campera Gimmy.

            Talle: (${y})
            Unidades: (${x})
            Precio final de $${5600 * x}`);
            break;
        case 2:
            y = prompt("Ingrese el talle")
            x = Number(prompt("Ingrese la cantidad de unidades"));
            alert(`
            Usted compró Campera Yuliam.

            Talle: (${y})
            Unidades: (${x})
            Precio final de $${4400 * x}`);
            break;
        case 3:
            y = prompt("Ingrese el talle")
            x = Number(prompt("Ingrese la cantidad de unidades"));
            alert(`
            Usted compró Body Basement.

            Talle: (${y})
            Unidades: (${x})
            Precio final de $${1680 * x}`);
            break;
        case 4:
            y = prompt("Ingrese el talle")
            x = Number(prompt("Ingrese la cantidad de unidades"));
            alert(`
            Usted compró Crop Top Glit.

            Talle: (${y})
            Unidades: (${x})
            Precio final de $${1495 * x}`);
            break;
        case 5:
            y = prompt("Ingrese el talle")
            x = Number(prompt("Ingrese la cantidad de unidades"));
            alert(`
            Usted compró Camisa Justin.

            Talle: (${y})
            Unidades: (${x})
            Precio final de $${2990 * x}`);
            break;
         case 6:
             alert("No hay stock del producto seleccionado.")
        default:
             alert("Elija un producto de la lista.")
            break;
    }
} while (menu != 0) {
    alert("Compra Cancelada")
}
