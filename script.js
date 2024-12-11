function calculateROE() {
  const netIncome = parseFloat(document.getElementById("netIncome").value);
  const equity = parseFloat(document.getElementById("shareholderEquity").value);

  if (isNaN(netIncome) || isNaN(equity) || equity === 0) {
    alert("Please enter valid numbers for Net Income and Shareholder's Equity!");
    return;
  }

  const roe = (netIncome / equity) * 100;
  document.getElementById("roeResult").innerHTML = `Return on Equity (ROE): ${roe.toFixed(2)}%`;
}
