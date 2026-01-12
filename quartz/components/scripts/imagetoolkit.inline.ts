document.addEventListener("nav", () => {
    const images = document.querySelectorAll("article img");
    
    images.forEach(img => {
        img.style.cursor = 'zoom-in';
        
        img.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Create overlay with blur background
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                top: 0; left: 0;
                width: 100%; height: 100%;
                background: rgba(0,0,0,0.7);
                backdrop-filter: blur(10px);
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 10000;
                cursor: zoom-out;
            `;
            
            // Create zoomed image - ALWAYS use natural size for clean zoom
            const zoomedImg = document.createElement('img');
            zoomedImg.src = this.src;
            zoomedImg.style.cssText = `
                max-width: 80%;
                max-height: 80%;
                object-fit: contain;
                cursor: zoom-in;
                transition: transform 0.3s ease;
                transform-origin: center;
            `;
            
            let currentZoom = 1;
            
            // Zoom in/out on image click
            zoomedImg.addEventListener('click', function(e) {
                e.stopPropagation();
                currentZoom = currentZoom === 1 ? 1.3 : 1;
                this.style.transform = `scale(${currentZoom})`;
                this.style.cursor = currentZoom === 1 ? 'zoom-in' : 'zoom-out';
            });
            
            // Close on overlay click
            overlay.addEventListener('click', function(e) {
                if (e.target === overlay) {
                    document.body.removeChild(overlay);
                }
            });
            
            // Close on ESC key
            const handleKeydown = (e) => {
                if (e.key === 'Escape') {
                    document.body.removeChild(overlay);
                    document.removeEventListener('keydown', handleKeydown);
                }
            };
            
            overlay.appendChild(zoomedImg);
            document.body.appendChild(overlay);
            document.addEventListener('keydown', handleKeydown);
            
            // Focus the overlay for ESC key to work
            overlay.focus();
        });
    });
});