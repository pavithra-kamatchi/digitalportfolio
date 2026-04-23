document.addEventListener('DOMContentLoaded', function() {
    // Lightbox
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    document.querySelectorAll('.lightbox-trigger').forEach(function(img) {
        img.addEventListener('click', function() {
            modalImg.src = this.src;
            modalImg.alt = this.alt;
            modal.showModal();
        });
    });

    closeBtn.addEventListener('click', function() { modal.close(); });
    modal.addEventListener('click', function(e) {
        if (e.target === modal) modal.close();
    });

    // Read More toggle
    document.querySelectorAll('.read-more').forEach(function(button) {
        button.addEventListener('click', function() {
            const targetElement = document.getElementById(this.getAttribute('data-target'));
            if (targetElement.style.display === 'none' || targetElement.style.display === '') {
                targetElement.style.display = 'block';
                this.textContent = 'Read Less';
            } else {
                targetElement.style.display = 'none';
                this.textContent = 'Read More';
            }
        });
    });
});