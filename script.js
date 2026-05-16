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

    // Read More popup
    const projectModal = document.getElementById('project-modal');
    const projectModalContent = document.getElementById('project-modal-content');
    const projectModalClose = document.getElementById('project-modal-close');

    document.querySelectorAll('.read-more').forEach(function(button) {
        button.addEventListener('click', function() {
            const targetElement = document.getElementById(this.getAttribute('data-target'));
            projectModalContent.innerHTML = targetElement.innerHTML;
            projectModal.showModal();
        });
    });

    projectModalClose.addEventListener('click', function() { projectModal.close(); });
    projectModal.addEventListener('click', function(e) {
        if (e.target === projectModal) projectModal.close();
    });

    // Resume popup
    const resumeModal = document.getElementById('resume-modal');
    const resumeModalClose = document.getElementById('resume-modal-close');

    document.getElementById('resume-nav-btn').addEventListener('click', function() {
        resumeModal.showModal();
    });

    resumeModalClose.addEventListener('click', function() { resumeModal.close(); });
    resumeModal.addEventListener('click', function(e) {
        if (e.target === resumeModal) resumeModal.close();
    });

    // MediQ video lazy load
    document.getElementById('mediq-video-facade').addEventListener('click', function() {
        document.getElementById('mediq-video-container').innerHTML =
            '<iframe src="https://www.youtube.com/embed/SGcjjtdXff8?si=j_i0zx97uP9Yvgk6&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    });

});