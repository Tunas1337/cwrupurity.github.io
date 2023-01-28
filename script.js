import { writeUserData } from './firebase.js';

//Hides results on load
window.onload = function () {
    document.getElementById("results").style.display = "none";
}

//Clears all the check boxes
export function clearBoxes() {
    var checkedBoxes = document.querySelectorAll('input:checked') //Get all the boxes that are checked
    for (var i = 0; i < checkedBoxes.length; i++) { //Run through each checked box and uncheck it
        checkedBoxes[i].checked = false;
    }
}

//Calculates your score
export function calculateScore() {
    var totalChecked = document.querySelectorAll('input[type="checkbox"]:checked') //Gets all the boxes that were checked
    var score = 100 - totalChecked.length //Subtracts the amount of boxes checked from 100, which results in the score

    var completed = Array.from(totalChecked)
    var results = []
    for (let i = 0; i < completed.length; i++) {
        results.push(parseInt(completed[i].id))
    }

    //Associates your score with what it says about you
    var meaning;
    if (score >= 98) {
        meaning = "You must be new to campus..."
    } else if (score >= 94) {
        meaning = "Good job on making it through Orientation Week."
    } else if (score >= 77) {
        meaning = "Looks like you are starting to do stuff at CWRU other than studying."
    } else if (score >= 45) {
        meaning = "At this point you can call actually tell some interesting stories from your time at Case."
    } else if (score >= 9) {
        meaning = "Nearly there, only a couple items left!"
    } else {
        meaning = "You are either a total legend or a total fraud."
    }

    var scoreDiv = document.getElementById("score"); //Gets the score div which is where the score is displayed
    var meaningDiv = document.getElementById("meaning"); //Gets the score div which is where the score is displayed
    scoreDiv.innerHTML = "Score: " + score.toString() //Sets the div text to your score
    meaningDiv.innerHTML = meaning //Sets the div text to your meaning
    document.body.scrollTop = 0; // Scrolls to top of the page for Safari
    document.documentElement.scrollTop = 0; // Scrolls to the top of the page for Chrome, Firefox, IE, and Opera

    document.getElementById("questions").style.display = "none";
    document.getElementById("results").style.display = "block";
    
    writeUserData(results)
}
