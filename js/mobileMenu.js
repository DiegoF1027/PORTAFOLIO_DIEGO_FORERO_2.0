// Funcionalidad básica para el menú móvil
document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.querySelector('.md\\:hidden button');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'md:hidden bg-black border-t border-gray-800 hidden';
    mobileMenu.innerHTML = `
                <div class="px-4 py-4 space-y-2">
                    <a href="#" class="block text-gray-300 hover:text-white py-2">Trabajo</a>
                    <a href="#" class="block text-gray-300 hover:text-white py-2">Acerca de mí</a>
                    <a href="#" class="block text-gray-300 hover:text-white py-2">Contacto</a>
                </div>
            `;

    menuButton.parentNode.parentNode.appendChild(mobileMenu);

    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
    });
});