    
    // PRODUCTOS

const Producto = function(name, prenda, stock, talle, precio) {
    this.name = name;
    this.prenda = prenda;
    this.stock = stock;
    this.talle = talle;
    this.precio = precio;
}

const gimmy = new Producto("GIMMY","CAMPERA",true,"S,M,L,XL,XXL",5600);

const yuliam = new Producto("YULIAM","CAMPERA",true,"S,M,L,XL,XXL",4400);

const basement = new Producto("BASEMENT","BODY",true,"S,M,L,XL,XXL",1680);

const glit = new Producto("GLIT","CROP TOP",true,"S,M,L,XL,XXL",1495);

const justin = new Producto("JUSTIN","CAMISA",true,"S,M,L,XL,XXL",2990);

const miloi = new Producto("MILOI","BODY",false,"S,M,L,XL,XXL",1850);

// Array de productos
const productos = [gimmy, yuliam, basement, glit, justin];

productos.push(miloi)

    // BUSQUEDA

    // BUSQUEDA POR PRENDA
const busquedaPrenda = productos.find( Producto => Producto.prenda == "Campera" | Producto.prenda == "CAMPERA" | Producto.prenda == "campera" );

    // BUSQUEDA POR NOMBRE
const busquedaName = productos.find( Producto => Producto.name == "Miloi"| Producto.name == "MILOI" | Producto.name == "miloi" );


// ORDERNAR ALFABETICAMENTE PRODUCTOS
productos.sort((a, b) => {
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    }
    return 0;
})


// ORDERNAR PRODUCTOS POR MENOR PRECIO
productos.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;
    }
    if (a.name.toLowerCase() > b.name.toLowerCase()) {
        return 1;
    }
    if (a.name.toLowerCase() < b.name.toLowerCase()) {
        return -1;
    }
    return 0;
})
console.log(productos);

    // SIMULADOR DE COMPRA


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
            y = String(prompt("Ingrese el talle"))
            x = Number(prompt("Ingrese la cantidad de unidades"));
            alert(`
            Usted compró Campera Gimmy.

            Talle: (${y})
            Unidades: (${x})
            Precio final de $${5600 * x}`);
            break;
        case 2:
            y = String(prompt("Ingrese el talle"))
            x = Number(prompt("Ingrese la cantidad de unidades"));
            alert(`
            Usted compró Campera Yuliam.

            Talle: (${y})
            Unidades: (${x})
            Precio final de $${4400 * x}`);
            break;
        case 3:
            y = String(prompt("Ingrese el talle"))
            x = Number(prompt("Ingrese la cantidad de unidades"));
            alert(`
            Usted compró Body Basement.

            Talle: (${y})
            Unidades: (${x})
            Precio final de $${1680 * x}`);
            break;
        case 4:
            y = String(prompt("Ingrese el talle"))
            x = Number(prompt("Ingrese la cantidad de unidades"));
            alert(`
            Usted compró Crop Top Glit.

            Talle: (${y})
            Unidades: (${x})
            Precio final de $${1495 * x}`);
            break;
        case 5:
            y = String(prompt("Ingrese el talle"))
            x = Number(prompt("Ingrese la cantidad de unidades"));
            alert(`
            Usted compró Camisa Justin.

            Talle: (${y})
            Unidades: (${x})
            Precio final de $${2990 * x}`);
            break;
         case 6:
             alert("No hay stock del producto seleccionado.");
        default:
             alert("Elija un producto de la lista.");
            break;
    }
} while (menu != 0) {
    alert("Compra Cancelada");
} 