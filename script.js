const calculateSimpleInterest = (p, r, t) => {
    return p * r * t/100;
}

const calculateTotalPayableAmount = (p, simpleInterest) => {
    return p + simpleInterest;
}

const calculate = () => {

  let p = Number(document.getElementById("principal").value);
  let r = Number(document.getElementById("rate").value);
  let t = Number(document.getElementById("time").value);
    //   let simpleInterest = (p * r * t) / 100;
    //   let amount = p - simpleInterest;
    // let simpleInterest = calculateSimpleInterest;
    // let amount = calculateTotalPayableAmount;

    let simpleInterest = calculateSimpleInterest(p, r, t);
    let amount = calculateTotalPayableAmount(p, simpleInterest);

  let result = document.getElementById("result");

  result.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
  <div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
  <div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;

  if (typeof module !== 'undefined')
  module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };
};

