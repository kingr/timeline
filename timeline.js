/* timeline */
var start = document.querySelector(".goal-column--start");
var solidLine = document.querySelector(".solid-line");
var firstGoal = document.querySelector("#firstGoal");
var secondGoal = document.querySelector("#secondGoal");
var thirdGoal = document.querySelector("#thirdGoal");
var timeline = document.querySelector(".timeline-desktop");

solidLine.classList.add("one-goal");

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
  solidLine.classList.add("second-goal");
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
  solidLine.classList.add("third-goal");
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



/* timeline */
var pageOverlay = document.querySelector('.plan-loader');

setTimeout(function(){
  pageOverlay.classList.add('fadeout')
},6000)

/* budget columns */
var negativeElements = [document.querySelector('.current-budget .expense-negative'),document.querySelector('.proposed-budget .expense-negative')];

var validNegativeElements = negativeElements.filter(function(val) { return val !== null })
var negativeHeights;
if (validNegativeElements) {
  negativeHeights = validNegativeElements.reduce(function(accumulator, currentValue) {
    accumulator.push(currentValue.clientHeight)
    return accumulator;
  }, []); 
}

const maxNegativeHeight = Math.max.apply(Math, negativeHeights);

if (maxNegativeHeight) {
  var budgetWrapperStyle = getComputedStyle(document.querySelector('.budget-wrapper'));
  var margin = budgetWrapperStyle.paddingBottom.replace("px","");
  var bottomMargin = parseInt(margin);

  const newBottoMargin = bottomMargin + maxNegativeHeight;
  document.querySelector('.budget-wrapper').style.paddingBottom = newBottoMargin + "px";
}