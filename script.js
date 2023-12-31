const backBtn = document.querySelector(".back-btn");
const nextBtn = document.querySelector(".next-btn");
const feedbackItems = document.querySelectorAll(".feedback-item");

const INITIAL_ACTIVED_INDEX = 0;
let activedIndex = 0;

const setActivedIndexFeedback = (value) => {
  sessionStorage.setItem("actived-index-feedback", value);
};
const getActivedIndexFeedback = () => {
  return parseInt(sessionStorage.getItem("actived-index-feedback"));
};

(() => {
  setActivedIndexFeedback(INITIAL_ACTIVED_INDEX);
})();

backBtn.addEventListener("click", () => {
  if (getActivedIndexFeedback() > 0) {
    activedIndex = getActivedIndexFeedback() - 1;

    setActivedIndexFeedback(activedIndex);
    feedbackItems.forEach((feedback) => {
      feedback.style.cssText = `
                transform: translateX(calc(${activedIndex} * -100%));
                transition: all ease 0.3s;
            `;
    });
  }
});

nextBtn.addEventListener("click", () => {
  if (getActivedIndexFeedback() < feedbackItems.length - 1) {
    activedIndex = getActivedIndexFeedback() + 1;
    setActivedIndexFeedback(activedIndex);

    feedbackItems.forEach((feedback) => {
      feedback.style.cssText = `
            transform: translateX(calc(${activedIndex} * -100%));
            transition: all ease 0.3s;
        `;
    });
  }
});
