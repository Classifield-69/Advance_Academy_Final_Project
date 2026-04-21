async function loadBooks() {
  const row = document.getElementById("book-row");
  row.innerHTML = '<p id="loading-text">Моля изчакайте...</p>';

  try {
    const checked = document.querySelectorAll(
      '#filters-products input[type="checkbox"]:checked',
    );

    let genre = "fiction";
    if (checked.length > 0) {
      const random = Math.floor(Math.random() * checked.length);
      genre = checked[random].value;
    }

    const randomPage = Math.floor(Math.random() * 50) + 1;
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${genre}&page=${randomPage}&limit=50`,
    );
    const data = await response.json();

    const booksWithCovers = data.docs
      .filter((book) => book.cover_i)
      .slice(0, 10);

    row.innerHTML = "";

    booksWithCovers.forEach((book) => {
      const coverUrl = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;
      const author = book.author_name
        ? book.author_name[0]
        : "Неизвестен автор";
      const year = book.first_publish_year ?? "—";

      const col = document.createElement("div");
      col.className = "col-5-custom";
      col.innerHTML = `
        <div class="book-card">
          <img src="${coverUrl}" alt="${book.title}" />
          <p><strong>Заглавие:</strong> ${book.title}</p>
          <p><strong>Автор:</strong> ${author}</p>
          <p><strong>Година:</strong> ${year}</p>
        </div>
      `;

      row.appendChild(col);
    });
  } catch (e) {
    console.log("Грешка: " + e);
    row.innerHTML = "<p>Грешка при зареждане на книгите.</p>";
  }
}
