    document.addEventListener('mousemove', (pos) => {
    const headerContent = document.getElementById('header-content');

    const normalizedDistanceToCenter = (x, y) => {
        const constant = 40;
        const xNormalizedDistance = (window.innerWidth/2 - x) / (window.innerWidth/2) * constant;
        const yNormalizedDistance = (window.innerHeight/2 - y) / (window.innerHeight/2) * constant;
        return { x: xNormalizedDistance, y: yNormalizedDistance };
    }

    const r = normalizedDistanceToCenter(pos.clientX, pos.clientY);
    headerContent.style.transform = `translate(${r.x}px, ${r.y}px)`;
});