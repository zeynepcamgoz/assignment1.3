/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
 

// setting a default number for daily rate and setting selected days to zero to keep track.
let dailyRate = 35; 
let selected_days = 0; 

// getting the elements for total cost, full button, half  button, clear button.
const totalCost = document.getElementById("calculated-cost");
const fullButton = document.getElementById("full"); 
const halfButton = document.getElementById("half"); 
const clearButton = document.getElementById("clear-button");

// get the elements for each day.
const mondayButton = document.getElementById("monday");
const tuesdayButton = document.getElementById("tuesday");
const wednesdayButton = document.getElementById("wednesday");
const thursdayButton = document.getElementById("thursday");
const fridayButton = document.getElementById("friday");

// tracking if the days has been selected or not.
let mondaySelected = false;
let tuesdaySelected = false;
let wednesdaySelected = false;
let thursdaySelected = false;
let fridaySelected = false;

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

/* complete this part later.*/

// A comment for all functions: functions which changes the colors of the button depending on if user click or not ( making css code work when clicked) and increases the count.
// if its selected it removes styling and decreases the count. then recalculates making updates.

mondayButton.addEventListener('click', function () {
  if (!mondaySelected) {
    mondayButton.classList.add('clicked');
    mondaySelected = true;
    selected_days++; 
  } else {
    mondayButton.classList.remove('clicked');
    mondaySelected = false;
    selected_days--; 
  }
  calc(); 
});

tuesdayButton.addEventListener('click', function () {
  if (!tuesdaySelected) {
    tuesdayButton.classList.add('clicked');
    tuesdaySelected = true;
    selected_days++;
  } else {
    tuesdayButton.classList.remove('clicked');
    tuesdaySelected = false;
    selected_days--;
  }
  calc();
});

wednesdayButton.addEventListener('click', function () {
  if (!wednesdaySelected) {
    wednesdayButton.classList.add('clicked');
    wednesdaySelected = true;
    selected_days++;
  } else {
    wednesdayButton.classList.remove('clicked');
    wednesdaySelected = false;
    selected_days--;
  }
  calc();
});

thursdayButton.addEventListener('click', function () {
  if (!thursdaySelected) {
    thursdayButton.classList.add('clicked');
    thursdaySelected = true;
    selected_days++;
  } else {
    thursdayButton.classList.remove('clicked');
    thursdaySelected = false;
    selected_days--;
  }
  calc();
});

fridayButton.addEventListener('click', function () {
  if (!fridaySelected) {
    fridayButton.classList.add('clicked');
    fridaySelected = true;
    selected_days++;
  } else {
    fridayButton.classList.remove('clicked');
    fridaySelected = false;
    selected_days--;
  }
  calc();
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

//it unselecct all day when user click the clear days button and set days to false. it resets selected days and recalculates the cost.
function clearDays() {
  mondayButton.classList.remove("clicked");
  tuesdayButton.classList.remove("clicked");
  wednesdayButton.classList.remove("clicked");
  thursdayButton.classList.remove("clicked");
  fridayButton.classList.remove("clicked");

  mondaySelected = false;
  tuesdaySelected = false;
  wednesdaySelected = false;
  thursdaySelected = false;
  fridaySelected = false;

  selected_days = 0;
  calc();
} 

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

// setting the prices for days which is half or full day and updates.
// setting the daily rate to 20, changing the button color when clicked and recalculate.
function selectHalfDay() {
  dailyRate = 20; 
  halfButton.classList.add("clicked");
  fullButton.classList.remove("clicked");
  calc();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
// if user clicks full day button it sets daily rate to 35, changing the button color when its clicked and recalculate.
function selectFullDay() {
  dailyRate = 35;
  fullButton.classList.add("clicked");
  halfButton.classList.remove("clicked");
  calc();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

// making the calculations for selected days and shows the results.
function calc() {
  let cost = selected_days * dailyRate;
  totalCost.innerHTML = cost;
}
// the connection between functions and the buttons.
clearButton.addEventListener("click", clearDays);
halfButton.addEventListener("click", selectHalfDay);
fullButton.addEventListener("click", selectFullDay);