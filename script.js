const display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Fitur Sederhanakan Aljabar (Simplify)
function solveSimplify() {
  try {
    const result = math.simplify(display.value).toString();
    display.value = result;
  } catch (e) {
    display.value = "Error Aljabar";
  }
}

// Fitur Deret Aritmatika Interaktif
function solveArithmetic() {
  const a = parseFloat(prompt("Suku pertama (a):"));
  const b = parseFloat(prompt("Beda (b):"));
  const n = parseInt(prompt("Suku ke-n yang dicari:"));
  if (!isNaN(a) && !isNaN(b) && !isNaN(n)) {
    const un = a + (n - 1) * b;
    display.value = `U${n} = ${un}`;
  }
}

// Fungsi Hitung Utama
function calculate() {
  try {
    let expression = display.value;

    // Membersihkan simbol visual agar dimengerti math.js
    expression = expression.replace(/√/g, "sqrt");
    expression = expression.replace(/π/g, "pi");

    const result = math.evaluate(expression);

    // Format hasil agar rapi
    display.value = math.format(result, { precision: 10 });
  } catch (error) {
    display.value = "Syntax Error";
  }
}
