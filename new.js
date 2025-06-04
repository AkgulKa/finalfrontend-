document.addEventListener("DOMContentLoaded", () => {
  //DOM Manipulation
document.querySelector("h1").style.color = "#00ffcc";
document.querySelector("nav a").innerText = "🏠 Home";
document.querySelector("img").setAttribute("alt", "Movie Poster");

//Event Listeners
document.querySelector("h1").addEventListener("mouseover", () => {
  document.querySelector("h1").style.color = "#ff3366";
});

document.querySelector("h1").addEventListener("click", () => {
  greetUser("Akgul");
});
});

//модал окно 

  document.querySelectorAll('.movie-card img').forEach(img => {
    img.addEventListener('click', function () {
      const videoUrl = this.getAttribute('data-video');
      if (videoUrl) {
        const iframe = document.getElementById('videoFrame');
        iframe.src = videoUrl.replace("watch?v=", "embed/"); // convert YoыuTube link 
        const modal = new bootstrap.Modal(document.getElementById('videoModal'));
        modal.show();

        document.getElementById('videoModal').addEventListener('hidden.bs.modal', () => {
          iframe.src = ""; // Stop video on close
        });
      }
    });
  });