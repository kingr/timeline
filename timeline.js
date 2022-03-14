var start = document.querySelector(".goal-column--start");
var firstGoal = document.querySelector("#firstGoal");
var secondGoal = document.querySelector("#secondGoal");
var thirdGoal = document.querySelector("#thirdGoal");
var timeline = document.querySelector(".timeline-desktop");

switch (firstGoal.childElementCount) {
  case 1:
    firstGoal.childNodes[1].classList.add("one-goal-bottom");
    break;
  case 2:
    firstGoal.classList.add("two-goals");
    break;
  case 3:
    firstGoal.classList.add("three-goals");
    break;
  case 4:
    firstGoal.classList.add("four-goals");
    break;
}

if (secondGoal) {
  switch (secondGoal.childElementCount) {
    case 1:
      secondGoal.childNodes[1].classList.add("one-goal-top");
      break;
    case 2:
      secondGoal.classList.add("two-goals");
      break;
    case 3:
      secondGoal.classList.add("three-goals");
      break;
    case 4:
      secondGoal.classList.add("four-goals");
      break;
  }
}

if (thirdGoal) {
  switch (thirdGoal.childElementCount) {
    case 1:
      thirdGoal.childNodes[1].classList.add("one-goal-bottom");
      break;
    case 2:
      thirdGoal.classList.add("two-goals");
      break;
    case 3:
      thirdGoal.classList.add("three-goals");
      break;
    case 4:
      thirdGoal.classList.add("four-goals");
      break;
  }
}