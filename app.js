const rooms = [{
    id: 1,
    tipo: 'individual',
    precio: 100,
    cocina: "SI",
    baño: "SI",

},
{
    id: 2,
    tipo: 'individual',
    precio: 200,
    cocina: "NO",
    baño: "SI", 

    },
{
    id: 3,
    tipo: 'Matrimonial',
    precio: 300,
    cocina: "SI",
    baño: "NO",
    },
{
    id: 4,
    tipo: 'individual',
    precio: 400,
    cocina: "NO",
    baño: "NO",
    },
{
    id: 5,
    tipo: 'Matrimonial',
    precio: 500,
    cocina: "SI",
    baño: "NO",
    },
{
    id: 6,
    tipo: 'Matrimonial',
    precio: 600,
    cocina: "SI",
    baño: "SI",
    },
]

const contenedor = document.querySelector('.contenedor')


let habitacion = ''
    for(productos of rooms){
        habitacion += `
        <div class="habitacion">
            <h3>${productos.tipo}</h3>
            <p>Precio: $${productos.precio}</p>
            <p>Cocina: ${productos.cocina}</p>
            <p>Baño: ${productos.baño}</p>
            <a class="btn" onclick="mostrarDetalle(${productos.id})" class="btn">ver detalle</a>
        </div>` 
    }
   
    contenedor.innerHTML = habitacion


const marco = document.querySelector(".detalle");

const mostrarDetalle = (id) => {
    const marco = document.querySelector('.detalle')
   
    let detalle = rooms[id-1]
    
    marco.style.display = "block"
    marco.innerHTML = `
    <h3>${detalle.tipo}</h3>
    <p>Precio: $${detalle.precio}</p>
    <p>Cocina: ${detalle.cocina}</p>
    <p>Baño: ${detalle.baño}</p>    
    `
}
