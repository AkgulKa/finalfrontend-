document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "4a3b711b"; // OMDb API-ключ
  const movies = ["Interstellar", "Barbie", "Gravity Falls"];

  movies.forEach((title) => {
    fetch(
      `https://www.omdbapi.com/?apikey=${apiKey}&t=${encodeURIComponent(title)}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          const card = `
            <div class="movie" style="background:#2c2c2c; padding:1rem; margin-bottom:1rem; border-radius:8px; color:white; display:flex; gap:20px;">
              <img src="${data.Poster}" alt="${data.Title}" style="width:150px; border-radius:8px;">
              <div>
                <h3>${data.Title} (${data.Year})</h3>
                <p><strong>Genre:</strong> ${data.Genre}</p>
                <p>${data.Plot}</p>
                <p>⭐ <strong>${data.imdbRating}</strong></p>
              </div>
            </div>`;
          document.getElementById("movieAPIResults").innerHTML += card;
        }
      });
  });
});
