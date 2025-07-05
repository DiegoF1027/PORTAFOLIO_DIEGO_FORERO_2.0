// Función para renderizar los proyectos dinámicamente
function renderProyectos() {
    const contenedor = document.getElementById('proyectos');
    
    // Limpiar contenedor
    contenedor.innerHTML = '';
    
    // Recorrer el arreglo de proyectos y crear elementos HTML
    proyectos.forEach(proyecto => {
        const proyectoElement = document.createElement('div');
        proyectoElement.className = 'bg-transparent rounded-xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300';
        
        proyectoElement.innerHTML = `
            <div class="flex flex-col md:flex-row gap-8">
                <!-- Imagen del proyecto -->
                <div class="md:w-96 flex-shrink-0">
                    <div class="bg-[#2a2a2a] rounded-lg p-4 relative">
                        <!-- Etiqueta de categoría -->
                        <div class="absolute top-6 left-6 z-10">
                            <span class="bg-black text-white px-3 py-1 rounded-full text-sm font-medium">
                                ${proyecto.categoria}
                            </span>
                        </div>
                        
                        <img src="${proyecto.imagen}" 
                             alt="${proyecto.titulo}" 
                             class="w-full h-64 object-cover rounded-lg"
                             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjI0MCIgdmlld0JveD0iMCAwIDQwMCAyNDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjQwIiBmaWxsPSIjMmEyYTJhIi8+CjxyZWN0IHg9IjE1MCIgeT0iODAiIHdpZHRoPSIxMDAiIGhlaWdodD0iODAiIHJ4PSI4IiBmaWxsPSIjMzc0MTUxIi8+CjxjaXJjbGUgY3g9IjE3NSIgY3k9IjEwNSIgcj0iMTAiIGZpbGw9IiM2QjcyODAiLz4KPHBhdGggZD0iTTE2NSAxMjVMMTc1IDEzNUwxOTUgMTE1TDIyNSAxNDVMMjUwIDEyMFYxNjBIMTUwVjEyNVoiIGZpbGw9IiM2QjcyODAiLz4KPHRleHQgeD0iMjAwIiB5PSIxODAiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM5Q0E0QUYiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZm9udC13ZWlnaHQ9ImJvbGQiPkltYWdlbiBubyBkaXNwb25pYmxlPC90ZXh0Pgo8L3N2Zz4='"
                        >
                    </div>
                </div>
                
                <!-- Contenido del proyecto -->
                <div class="flex-1 flex flex-col justify-between">
                    <div class="mb-8">
                        <!-- Título -->
                        <h3 class="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                            ${proyecto.titulo}
                        </h3>
                        
                        <!-- Descripción -->
                        <p class="text-gray-400 text-lg leading-relaxed mb-8">
                            ${proyecto.descripcion}
                        </p>
                        
                        <!-- Información del proyecto -->
                        <div class="mb-8">
                            <h4 class="text-gray-300 font-semibold mb-4 text-sm uppercase tracking-wider">
                                PROJECT INFO
                            </h4>
                            <div class="space-y-3">
                                <div class="flex justify-between items-center py-2 border-t border-gray-700">
                                    <span class="text-gray-400">Año</span>
                                    <span class="text-white font-medium">${proyecto.año}</span>
                                </div>
                                <div class="flex justify-between items-center py-2 border-t border-gray-700">
                                    <span class="text-gray-400">Rol</span>
                                    <span class="text-white font-medium">${proyecto.rol}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Enlaces -->
                    <div class="flex gap-6">
                        <a href="${proyecto.demoUrl}" 
                           class="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 font-semibold text-sm uppercase tracking-wider hover:underline transition-colors duration-200">
                            LIVE
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                        </a>
                        <a href="${proyecto.githubUrl}" 
                           class="inline-flex items-center gap-2 text-lime-400 hover:text-lime-300 font-semibold text-sm uppercase tracking-wider hover:underline transition-colors duration-200">
                            SEE ON GITHUB
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        `;
        
        contenedor.appendChild(proyectoElement);
    });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderProyectos);