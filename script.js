$(document).ready(function () {
  // Close the navbar when a link is clicked
  $("#navbar a").on("click", function () {
    $("#navbar").collapse("hide");
  });
});

$(document).ready(function () {
  // Initialize the carousel
  const $carousel = $("#carouselExampleCaptions");

  $carousel.on("slide.bs.carousel", function (e) {
    // Get the index of the active slide
    const activeSlideIndex = e.to;

    // Array of title content for each slide
    const slideTitle = [
      "Convolutional Neural Network",
      "knn and nearest centroid classifier",
    ];

    // Array of title content for each slide
    const slideText = [
      " A Convolutional Neural Network build with Pytorch to train on the CIFAR-10 dataset and correctly classify images.",
      "A program that uses these 2 model with the CIFAR-10 dataset to find their accuracy on classifying images.",
    ];

    const slideLink = [
      "https://github.com/Zyggos/CNN",
      "https://github.com/Zyggos/knn-centroid-classifiers",
    ];

    // Update the text content in the empty column
    const $titleColumn = $("#carousel_Title");
    $titleColumn.text(slideTitle[activeSlideIndex]);

    const $textColumn = $("#carousel_descr");
    $textColumn.text(slideText[activeSlideIndex]);

    const $linkColumn = $("#carousel_btn");
    //change href attribute
    $linkColumn.attr("href", slideLink[activeSlideIndex]);
  });
});

window.addEventListener(
  "load",
  (event) => {
    hidden_fade_elems = document.querySelectorAll(".hidden");
    console.log(hidden_fade_elems);

    createObserver();
  },
  false
);

function createObserver() {
  let observer;

  let options = {
    root: document.querySelector("#scrollArea"),
    rootMargin: "85px 0px 0px 0px",
    threshold: 0.6,
  };

  observer = new IntersectionObserver(callback, options);

  hidden_fade_elems.forEach((elem) => {
    observer.observe(elem);
  });
}

let callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
};
