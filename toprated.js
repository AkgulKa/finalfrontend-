document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.movie-card img').forEach(img => {
      img.addEventListener('click', () => {
        const title = img.getAttribute('data-title');
        const videoSrc = img.getAttribute('data-video');
  
        document.getElementById('modalContent').innerHTML = `
          <h3 class="mb-3">${title}</h3>
          <video width="100%" controls>
            <source src="${videoSrc}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
        `;
        new bootstrap.Modal(document.getElementById('movieModal')).show();
      });
    });
 });