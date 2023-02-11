"use strict";

function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let roots = [];
  if (d < 0) {
    return roots;
  } else if (d === 0) {
    roots.push(-b / (2 * a));
    return roots;
  } else {
    roots.push((-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a));
    return roots;
  }
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }
  
  let P = percent / 100 / 12;
  let S = amount - contribution;
  let n = countMonths;
  let payment = S * (P + (P / (((1 + P) ** n) - 1)));
  let totalAmount = payment * n;
  
  return Number(totalAmount.toFixed(2));
}
