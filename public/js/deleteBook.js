const deleteBook = async (event) => {
  const bookId = event.target.dataset.id;
  if (bookId) {
    const response = await fetch(`/api/books/${bookId}`, {
      method: "PUT",
      body: JSON.stringify({ bookId }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Book has been removed from saved books!");
    } else {
      alert(response.statusText);
    }
  }
};

[...document.querySelectorAll(".fa-times")].forEach((book) => {
  book.addEventListener("click", deleteBook);
});
