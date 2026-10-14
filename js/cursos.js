// Datos de ejemplo para los cursos del emprendimiento
const cursosData = [
    {
        id: 1,
        categoria: "marca",
        nombre: "Marca personal para artistas",
        duracion: "4 semanas • Práctico",
        descripcion: "Construye una identidad única y destaca en el mercado del maquillaje con bases sólidas y profesionales.",
        precio: "\$50.000 COP",
        imagen: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        categoria: "contenido",
        nombre: "Contenido que vende",
        duracion: "3 semanas • Reels y TikTok",
        descripcion: "Aprende a grabar y editar videos dinámicos que atraigan clientes ideales y disparen tus visualizaciones.",
        precio: "\$70.000 COP",
        imagen: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        categoria: "marketing",
        nombre: "Marketing para maquillistas",
        duracion: "5 semanas • Estrategia integral",
        descripcion: "Domina embudos de ventas, captación de clientes y publicidad digital adaptada al mundo de la belleza.",
        precio: "\$60.000 COP",
        imagen: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80"
    }
];

// Elementos del DOM
const cursosGrid = document.getElementById('cursos-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

// Función para renderizar las tarjetas en pantalla
function renderizarCursos(cursos) {
    cursosGrid.innerHTML = '';
    
    if (cursos.length === 0) {
        cursosGrid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; color:#777;">No hay cursos disponibles en esta categoría.</p>';
        return;
    }

    cursos.forEach(curso => {
        const card = document.createElement('div');
        card.className = 'curso-card';
        
        card.innerHTML = `
            <div class="curso-img-container">
                <img src="${curso.imagen}" alt="${curso.nombre}" class="curso-img">
            </div>
            <div class="curso-body">
                <h3 class="curso-nombre">${curso.nombre}</h3>
                <span class="curso-duracion">${curso.duracion}</span>
                <p class="curso-descripcion">${curso.descripcion}</p>
                <div class="curso-footer">
                    <span class="curso-precio">${curso.precio}</span>
                    <a href="#" class="btn-ver-curso" onclick="alert('Próximamente detalle de: ${curso.nombre}')">Ver curso</a>
                </div>
            </div>
        `;
        
        cursosGrid.appendChild(card);
    });
}

// Lógica de filtrado por categoría
filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar active al botón presionado
        e.target.classList.add('active');

        const categoriaSeleccionada = e.target.getAttribute('data-filter');

        if (categoriaSeleccionada === 'todos') {
            renderizarCursos(cursosData);
        } else {
            const cursosFiltrados = cursosData.filter(curso => curso.categoria ===-1 || curso.categoria === categoriaSeleccionada);
            renderizarCursos(cursosFiltrados);
        }
    });
});

// Renderizado inicial al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    renderizarCursos(cursosData);
});
