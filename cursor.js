document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.cursor');

    // Inicializáljuk a kurzor pozícióját
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateCursor() {
        cursorX += (mouseX - cursorX) * 1; // Lassú követés
        cursorY += (mouseY - cursorY) * 1;
        cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;
        requestAnimationFrame(updateCursor);
    }

    updateCursor();
});