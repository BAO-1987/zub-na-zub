// const showMore = document.querySelector('.btn--show-more');
// const itemLength = document.querySelectorAll('.gallery__item').length;
// let items = 12;

// showMore.addEventListener('click', () => {
//   items += 4;
//   const array = Array.from(document.querySelector('.gallery__list--main').children);
//   const visItems = array.slice(0, items);

//   visItems.forEach(el => el.classList.add('is-visible'));

//   if (visItems.length === itemLength) {
//     showMore.style.display = 'none';
//   }
// });


document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".tabs__panel")) {
    let t = 12;
    const e = document.querySelector(".btn--show-more"),
      o = document.querySelectorAll(".gallery__item").length;
    e.addEventListener("click", c => {
      t += 4;
      const r = Array.from(document.querySelector(".gallery__list").children).slice(0, t);
      r.forEach(t => t.classList.add("is-visible")), r.length === o && (e.style.display = "none")
    })
  }
});


