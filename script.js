function showCalories() {
  let calories = document.getElementById("msg").value;
  let text;
  let caloriesToSave = calories / 7;

  if (calories == "" || calories == null) {
    text = "You need to enter a valid number. Please try again.";
  } else {
    text = "You need to save: " + caloriesToSave.toString() + " calories.";
  }
  document.getElementById("result").innerHTML = text;
}
