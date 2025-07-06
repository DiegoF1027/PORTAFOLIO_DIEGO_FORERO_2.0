// renderTecnologias.js - Renderizado dinámico y funcionalidad del carrusel con loop infinito
document.addEventListener('DOMContentLoaded', function() {
    const carouselContainer = document.getElementById('carouselContainer');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let isTransitioning = false;
    const cardWidth = 200; // Ancho de cada tarjeta + gap
    
    // Función para renderizar las tecnologías con duplicados para loop infinito
    function renderTecnologias() {
        carouselContainer.innerHTML = '';
        
        // Duplicamos las tecnologías para crear el loop: original + copia
        const extendedTecnologias = [...tecnologias, ...tecnologias];
        
        extendedTecnologias.forEach((tech, index) => {
            const techCard = document.createElement('div');
            techCard.className = 'tech-card flex-shrink-0 w-48 h-64 bg-gray-900 rounded-lg p-6 flex flex-col items-center justify-center snap-center border border-gray-800 hover:border-lime-400';
            
            techCard.innerHTML = `
                <div class="w-24 h-24 mb-4 flex items-center justify-center">
                    <img 
                        src="${tech.imagen}" 
                        alt="${tech.nombre}" 
                        class="w-full h-full object-contain filter drop-shadow-lg"
                        loading="lazy"
                        onError="this.style.display='none'; this.nextElementSibling.style.display='block';"
                    />
                    <div class="hidden w-full h-full bg-gray-700 rounded-lg flex items-center justify-center">
                        <span class="text-lime-400 text-2xl font-bold">${tech.nombre.charAt(0)}</span>
                    </div>
                </div>
                <h3 class="text-white font-semibold text-lg text-center">${tech.nombre}</h3>
            `;
            
            carouselContainer.appendChild(techCard);
        });
    }
    
    // Función para desplazar el carrusel con loop infinito
    function scrollCarousel(direction) {
        if (isTransitioning) return;
        
        isTransitioning = true;
        const scrollAmount = cardWidth;
        const currentScroll = carouselContainer.scrollLeft;
        const maxScroll = carouselContainer.scrollWidth - carouselContainer.clientWidth;
        
        if (direction === 'next') {
            // Si estamos en el último elemento visible, hacer loop al principio
            if (currentScroll >= maxScroll) {
                carouselContainer.scrollTo({
                    left: 0,
                    behavior: 'smooth'
                });
            } else {
                carouselContainer.scrollTo({
                    left: currentScroll + scrollAmount,
                    behavior: 'smooth'
                });
            }
        } else {
            // Si estamos en el principio, ir al final
            if (currentScroll <= 0) {
                carouselContainer.scrollTo({
                    left: maxScroll,
                    behavior: 'smooth'
                });
            } else {
                carouselContainer.scrollTo({
                    left: currentScroll - scrollAmount,
                    behavior: 'smooth'
                });
            }
        }
        
        setTimeout(() => {
            isTransitioning = false;
        }, 300);
    }
    
    // Event listeners para las flechas
    prevBtn.addEventListener('click', () => scrollCarousel('prev'));
    nextBtn.addEventListener('click', () => scrollCarousel('next'));
    
    // Soporte para gestos táctiles
    let startX = 0;
    let startY = 0;
    let isDragging = false;
    
    carouselContainer.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;
        isDragging = false;
    });
    
    carouselContainer.addEventListener('touchmove', (e) => {
        if (!startX || !startY) return;
        
        const deltaX = startX - e.touches[0].clientX;
        const deltaY = startY - e.touches[0].clientY;
        
        if (Math.abs(deltaX) > Math.abs(deltaY)) {
            isDragging = true;
            e.preventDefault(); // Previene el scroll vertical
        }
    });
    
    carouselContainer.addEventListener('touchend', () => {
        startX = 0;
        startY = 0;
        isDragging = false;
    });
    
    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            scrollCarousel('prev');
        } else if (e.key === 'ArrowRight') {
            scrollCarousel('next');
        }
    });
    
    // Auto-scroll cada 4 segundos (opcional)
    setInterval(() => {
        if (!isTransitioning) {
            scrollCarousel('next');
        }
    }, 2000);
    
    // Inicializar el carrusel
    renderTecnologias();
});