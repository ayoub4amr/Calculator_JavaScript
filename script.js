"strict mode";
let screen = document.querySelector(".result");

const eq = document.querySelector(".eq");
const dot = document.querySelector(".dot");
const clear = document.querySelector(".clear");
const del = document.querySelector(".del");
const abs = document.querySelector(".abs");

const par1 = document.querySelector(".par1");
const par2 = document.querySelector(".par2");

const min = document.querySelector(".min");
const plus = document.querySelector(".plus");
const mul = document.querySelector(".mul");
const div = document.querySelector(".div");

const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");

const cos = document.querySelector(".cos");
const sin = document.querySelector(".sin");
const tan = document.querySelector(".tan");
const log = document.querySelector(".log");
const ln = document.querySelector(".ln");
const pow = document.querySelector(".pow");
const pi = document.querySelector(".pi");
const inverse = document.querySelector(".inverse");
const sqrt = document.querySelector(".sqrt");

const insert = function (ch) {
  screen.value += ch;
};

eq.onclick = function () {
  try {
    let str = screen.value;
    str = str
      .replaceAll("sin", "Math.sin")
      .replaceAll("cos", "Math.cos")
      .replaceAll("tan", "Math.tan")
      .replaceAll("log", "Math.log10")
      .replaceAll("ln", "Math.log")
      .replaceAll("√", "Math.sqrt")
      .replaceAll("^", "**")
      .replaceAll("π", "Math.PI")
      .replaceAll("x", "*");
    let res = Number(eval(str)).toFixed(2);
    if (res == "-0.00" || res == "0.00") {
      res = 0;
    }
    screen.value = res;
  } catch (error) {
    screen.value = error;
  }
};

clear.onclick = function () {
  screen.value = "";
};

del.onclick = function () {
  screen.value = screen.value.slice(0, screen.value.length - 1);
};

par1.onclick = function () {
  insert("(");
};

par2.onclick = function () {
  insert(")");
};

abs.onclick = function () {
  screen.value *= -1;
};

dot.onclick = function () {
  insert(".");
};

min.onclick = function () {
  insert("-");
};

plus.onclick = function () {
  insert("+");
};

mul.onclick = function () {
  insert("x");
};
div.onclick = function () {
  insert("/");
};

zero.onclick = function () {
  insert("0");
};

one.onclick = function () {
  insert("1");
};

two.onclick = function () {
  insert("2");
};

three.onclick = function () {
  insert("3");
};

four.onclick = function () {
  insert("4");
};

five.onclick = function () {
  insert("5");
};

six.onclick = function () {
  insert("6");
};

seven.onclick = function () {
  insert("7");
};

eight.onclick = function () {
  insert("8");
};

nine.onclick = function () {
  insert("9");
};

cos.onclick = function () {
  insert("cos(");
};

sin.onclick = function () {
  insert("sin(");
};

tan.onclick = function () {
  insert("tan(");
};

log.onclick = function () {
  insert("log(");
};

ln.onclick = function () {
  insert("ln(");
};

pow.onclick = function () {
  insert("^(");
};

sqrt.onclick = function () {
  insert("√(");
};

pi.onclick = function () {
  insert("π");
};

inverse.onclick = function () {
  screen.value = 1 / screen.value;
};
