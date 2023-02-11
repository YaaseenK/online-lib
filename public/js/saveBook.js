const saveBook = async (event) => {
  const bookId = event.target.dataset.id;
  if (bookId) {
    const response = await fetch(`/api/books/${bookId}`, {
      method: "PUT",
      body: JSON.stringify({ bookId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Book has been saved!");
    } else {
      alert(response.statusText);
    }
  }
};

[...document.querySelectorAll(".fa-heart")].forEach((book) => {
  book.addEventListener("click", saveBook);
});
