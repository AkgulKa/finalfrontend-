document.addEventListener("DOMContentLoaded", () => {
  const reviews = JSON.parse(localStorage.getItem("reviews")) || {};
  const container = document.getElementById("reviewsContainer");

  Object.entries(reviews).forEach(([movie, entries]) => {
    const section = document.createElement("div");
    section.innerHTML = `<h3>${movie}</h3>`;

    entries.forEach((review, index) => {
      const div = document.createElement("div");
      div.innerHTML = `
        <p><strong>${review.name}</strong>: ${review.opinion} - ⭐ ${review.rating}</p>
        <button data-movie="${movie}" data-index="${index}">Delete</button>
        <hr>`;
      section.appendChild(div);
    });

    container.appendChild(section);
  });

  container.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const movie = e.target.getAttribute("data-movie");
      const index = e.target.getAttribute("data-index");

      reviews[movie].splice(index, 1);
      if (reviews[movie].length === 0) {
        delete reviews[movie];
      }

      localStorage.setItem("reviews", JSON.stringify(reviews));
      location.reload(); // перезагрузить после удаления
    }
  });
});
