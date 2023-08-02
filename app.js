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

rooms.forEach(room => {
    let habitacion = ''
    let template = `
    <div class="habitacion">
        <h3>${room.tipo}</h3>
        <p>Precio: $${room.precio}</p>
        <p>Cocina: ${room.cocina}</p>
        <p>Baño: ${room.baño}</p>
        <a class="btn" onclick="mostrarDetalle(${room.id})" class="btn">ver detalle</a>
    </div>` 
    contenedor.innerHTML += template
})

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
