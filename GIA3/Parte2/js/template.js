const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Laptop", desc: "16GB RAM", img: "imagenes/lapto.png", price: "$1000" },
    { titulo: "Mouse", desc: "Inalámbrico", img: "imagenes/mouse.png", price: "$50" },
    { titulo: "Teclado", desc: "Mecánico", img: "imagenes/teclado.png", price: "$80" },
    { titulo: "Monitor", desc: "4K UHD", img: "imagenes/monitor.png", price: "$400" },
    { titulo: "Auriculares", desc: "Cancelación de ruido", img: "imagenes/audiculares.png", price: "$150" }

];


productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector(".img").src = p.img;
    clon.querySelector(".price").textContent = p.price;
    contenedor.appendChild(clon);
});
