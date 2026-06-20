let points = localStorage.getItem("points") 
    ? parseInt(localStorage.getItem("points")) 
    : 0;

document.getElementById("points").innerText = "Points: " + points;

// Carbon Calculator
function calculateCarbon() {
    let travel = document.getElementById("travel").value || 0;
    let electricity = document.getElementById("electricity").value || 0;
    let meat = document.getElementById("meat").value || 0;

    // Simple formula (approximate)
    let carbon = (travel * 0.21) + (electricity * 0.5) + (meat * 2.5);

    document.getElementById("result").innerText =
        "Your footprint: " + carbon.toFixed(2) + " kg CO₂";

    if (carbon < 10) {
        alert("🌱 Great job! Low carbon footprint!");
    } else {
        alert("⚠️ Try to reduce your footprint!");
    }
}

// Challenge Completion
function completeChallenge(element) {
    if (!element.classList.contains("completed")) {
        element.classList.add("completed");
        points += 10;

        localStorage.setItem("points", points);
        document.getElementById("points").innerText = "Points: " + points;
    }
}