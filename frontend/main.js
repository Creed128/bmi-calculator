document.getElementById('calculate').addEventListener('click', updateUI);

function updateUI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const bmi = calculateBMI(weight, height);
    document.getElementById('result').textContent = `Dein BMI: ${bmi}`;
}

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    const bmi = Math.round(weight / (heightInMeters * heightInMeters));
    return bmi;
}
