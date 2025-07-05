// Función para renderizar las experiencias laborales
function renderExperiencia() {
    const contenedor = document.getElementById('experiencia');
    
    // Limpiar el contenedor
    contenedor.innerHTML = '';
    
    // Recorrer el arreglo de experiencias y crear elementos
    experienciaLaboral.forEach((experiencia, index) => {
        // Crear contenedor principal para cada experiencia
        const experienciaDiv = document.createElement('div');
        experienciaDiv.className = 'border-b border-gray-800 pb-8 last:border-b-0 last:pb-0';
        
        // Crear contenedor para el header (cargo y fecha)
        const headerDiv = document.createElement('div');
        headerDiv.className = 'flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3';
        
        // Crear contenedor para cargo y empresa
        const cargoEmpresaDiv = document.createElement('div');
        cargoEmpresaDiv.className = 'flex flex-col';
        
        // Crear elemento para el cargo
        const cargoElement = document.createElement('h3');
        cargoElement.className = 'text-white text-xl font-semibold mb-1';
        cargoElement.textContent = experiencia.cargo;
        
        // Agregar cargo al contenedor
        cargoEmpresaDiv.appendChild(cargoElement);
        
        // Crear elemento para la empresa (solo si existe)
        if (experiencia.empresa && experiencia.empresa.trim() !== '') {
            const empresaElement = document.createElement('p');
            empresaElement.className = 'text-lime-400 text-lg font-medium';
            empresaElement.textContent = experiencia.empresa;
            cargoEmpresaDiv.appendChild(empresaElement);
        }
        
        // Crear elemento para la fecha
        const fechaElement = document.createElement('p');
        fechaElement.className = 'text-gray-400 text-sm font-medium sm:text-right';
        fechaElement.textContent = experiencia.fecha;
        
        // Agregar cargo/empresa y fecha al header
        headerDiv.appendChild(cargoEmpresaDiv);
        headerDiv.appendChild(fechaElement);
        
        // Crear elemento para la descripción
        const descripcionElement = document.createElement('p');
        descripcionElement.className = 'text-gray-400 text-base leading-relaxed';
        descripcionElement.textContent = experiencia.descripcion;
        
        // Agregar todos los elementos al contenedor principal
        experienciaDiv.appendChild(headerDiv);
        experienciaDiv.appendChild(descripcionElement);
        
        // Agregar la experiencia al contenedor principal
        contenedor.appendChild(experienciaDiv);
    });
}

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderExperiencia);