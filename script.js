const schedules = {
    "johannesburg": "Stage 2 - Power off from 14:00 to 16:30",
    "cape town": "Stage 1 - No power from 18:00 to 20:00",
    "durban": "Stage 3 - Outage from 12:00 to 14:30",
};

function checkSchedule() {
    let area = document.getElementById("search").value.toLowerCase();
    let resultDiv = document.getElementById("result");
    
    if (schedules[area]) {
        resultDiv.textContent = `Load Shedding Info: ${schedules[area]}`;
    } else {
        resultDiv.textContent = "No data available for this area.";
    }
}
