searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};

window.onscroll = () => {
  searchForm.classList.remove("active");

  if (window.scrollY > 80) {
    document.querySelector(".header .header-2").classList.add("active");
  } else {
    document.querySelector(".header .header-2").classList.remove("active");
  }
};

var swiper = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

// API call for Top 15
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a2e2218b81msh172204e911c7de7p1a8ea0jsnc46101fc6953",
    "X-RapidAPI-Host": "hapi-books.p.rapidapi.com",
  },
};

fetch("https://hapi-books.p.rapidapi.com/month/2022/11", options)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < 15; i++) {
      const rootEl = document.querySelector(`.swiper-wrapper`);
      let anchorEl = document.createElement(`a`);
      anchorEl.classList.add(`swiper-slide`);
      anchorEl.href = data[i].url;
      let bookCover = document.createElement(`img`);
      bookCover.src = data[i].cover;

      rootEl.appendChild(anchorEl);
      anchorEl.appendChild(bookCover);
    }
  })
  .catch((err) => console.error(err));

// const saveBook = async (event) => {
//   const bookId = event.target.dataset.id;
//   if (bookId) {
//     const response = await fetch(`/api/books/${bookId}`, {
//       method: "PUT",
//       body: JSON.stringify({ bookId }),
//       headers: { "Content-Type": "application/json" },
//     });

//     if (response.ok) {
//       alert("Book has been saved!");
//     } else {
//       alert(response.statusText);
//     }
//   }
// };

// [...document.querySelectorAll(".fa-heart")].forEach((book) => {
//   book.addEventListener("click", saveBook);
// });
