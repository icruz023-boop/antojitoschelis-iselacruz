// DATOS DEL MENÚ
const menuItems = [
    { 
    id: 1, 
    name: "Chicharron de puerco", 
    category: "Entradas", 
    price: "$12", 
    image: "img/h1.jpg" 
},
    { 
    id: 2, 
    name: "Plato tipico", 
    category: "Entradas", 
    price: "$18", 
    image: "img/h3.jpg" 
},
    { 
    id: 3, 
    name: "Coca - Cola", 
    category: "Bebidas", 
    price: "$8", 
    image: "https://images.unsplash.com/photo-1594971475674-6a97f8fe8c2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvY2ElMjBjb2xhfGVufDB8fDB8fHww", 
},
   { 
    id: 4, 
    name: "Margarita", 
    category: "Bebidas", 
    price: "$8", 
    image: "https://media.istockphoto.com/id/1280196736/es/foto/brillantes-c%C3%B3cteles-alcoh%C3%B3licos-de-verano-sobre-un-fondo-gris.webp?a=1&s=612x612&w=0&k=20&c=KcTHgLV1QIcTljHy1aeFqxahqe9gRX9eA-GCrA0K8i0=", 
},
{ 
    id: 5, 
    name: "Guacamole", 
    category: "Entradas", 
    price: "$18", 
    image: "https://images.unsplash.com/photo-1701203236447-89a7016a5a40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",  
},
{ 
    id: 6, 
    name: "Arroz con leche", 
    category: "Postres", 
    price: "$18", 
    image: "https://media.istockphoto.com/id/1349200299/es/foto/arroz-con-leche.webp?a=1&b=1&s=612x612&w=0&k=20&c=GyZEi0gCL0XNHx2fA4kRbiGdDcZ9CAf93MAS4lc0lKg=",  
},
    // Agrega más platos aquí...
];

// FILTRADO DEL MENÚ
// FILTRADO DEL MENÚ
function displayMenuItems(category = 'all') {
    const menuContainer = document.querySelector('.menu-items');
    
    // Limpiar el contenedor
    menuContainer.innerHTML = '';
    
    // Filtrar elementos según la categoría
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    // Mostrar mensaje si no hay elementos
    if (filteredItems.length === 0) {
        menuContainer.innerHTML = `
            <div class="no-items-message">
                <p>No hay elementos en esta categoría.</p>
            </div>
        `;
        return;
    }
    
    // Generar HTML para cada elemento del menú
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.dataset.category = item.category;
        
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <span>${item.price}</span>
            </div>
        `;
        
        menuContainer.appendChild(menuItem);
    });
}

// Función para manejar los botones de filtrado
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Agregar clase active al botón clickeado
            button.classList.add('active');
            
            // Obtener la categoría del botón
            const category = button.dataset.category;
            
            // Mostrar los elementos de la categoría seleccionada
            displayMenuItems(category);
        });
    });
}

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga todos los elementos al inicio
    setupFilterButtons(); // Configura los eventos de los botones de filtrado
});

// SLIDER DE IMÁGENES (si lo implementas)
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

// FORMULARIO DE RESERVAS
document.getElementById('reserva-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Reserva enviada. ¡Gracias!');
    e.target.reset();
});

// INICIALIZACIÓN
document.addEventListener('DOMContentLoaded', () => {
    displayMenuItems(); // Carga el menú al inicio
    if (slides.length > 0) showSlide(0); // Inicia el slider si existe
});