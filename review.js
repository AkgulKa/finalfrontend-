document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("reviewForm");
  const allReviewsDiv = document.getElementById("allReviews");
  const dynamicRow = document.getElementById("dynamicReviews"); 

  let allReviews = JSON.parse(localStorage.getItem("reviews")) || {};

  const renderAll = () => {
    dynamicRow.innerHTML = "";    
    allReviewsDiv.innerHTML = ""; 
    for (let movieTitle in allReviews) {
      renderReviews(movieTitle, allReviews[movieTitle]);
    }
  };

  renderAll(); 

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const movieTitle = document.getElementById("movie").value;
    const name = document.getElementById("username").value;
    const rating = parseFloat(document.getElementById("rating").value);
    const opinion = document.getElementById("opinion").value;

    if (!movieTitle) {
      alert("Please select a movie!");
      return;
    }

    const newReview = { name, rating, opinion };

    if (!allReviews[movieTitle]) {
      allReviews[movieTitle] = [];
    }

    allReviews[movieTitle].push(newReview);
    localStorage.setItem("reviews", JSON.stringify(allReviews));

    renderAll(); 
    form.reset();
  });

  function renderReviews(title, reviews) {
    const row = document.getElementById("dynamicReviews");

    const sectionHeader = document.createElement("h4");
    sectionHeader.className = "text-warning";
    sectionHeader.innerText = `Reviews for ${title}`;
    row.appendChild(sectionHeader);

    let sum = 0;

    reviews.forEach((rev) => {
      sum += rev.rating;

      const col = document.createElement("div");
      col.className = "col-md-4 mb-3";

      const color = rev.rating > 3 ? "text-success" : "text-danger";

      col.innerHTML = `
        <div class="card bg-dark text-white h-100">
          <div class="card-body">
            <h5 class="card-title"><i class="fas fa-user"></i> ${rev.name}</h5>
            <p class="card-text"><em>${rev.opinion}</em></p>
            <p class="rating ${color}">⭐ ${rev.rating}</p>
          </div>
        </div>
      `;

      row.appendChild(col);
    });

    const avg = (sum / reviews.length).toFixed(1);
    const avgCol = document.createElement("div");
    avgCol.className = "col-12 text-warning mb-3";
    avgCol.innerHTML = `<strong>Average Rating for ${title}:</strong> ${avg} ⭐`;
    row.prepend(avgCol);
  }
});