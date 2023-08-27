import React from "react";

function TipCalculator({
	billAmount,
	setBillAmount,
	tipPercentage,
	setTipPercentage,
	numOfPeople,
	setNumOfPeople,
}) {
	const tipAmount = (billAmount * tipPercentage) / 100;
	const totalBill = parseFloat(billAmount) + tipAmount;
	const perPerson = totalBill / numOfPeople;

	return (
		<div>
			<div className="input-section">
				<label>Bill Amount:</label>
				<input
					type="number"
					value={billAmount}
					onChange={(e) => setBillAmount(e.target.value)}
				/>
			</div>
			<div className="input-section">
				<label>Tip Percentage:</label>
				<input
					type="number"
					value={tipPercentage}
					onChange={(e) => setTipPercentage(e.target.value)}
				/>
			</div>
			<div className="input-section">
				<label>Number of People:</label>

				<input
					type="number"
					value={numOfPeople}
					onChange={(e) => setNumOfPeople(e.target.value)}
				/>

				<label>Number of People:</label>

				
			</div>
			<div className="result-section">
				<p>Tip Amount: ${tipAmount.toFixed(2)}</p>
				<p>Total Bill: ${totalBill.toFixed(2)}</p>
				<p>Amount Per Person: ${perPerson.toFixed(2)}</p>
			</div>
		</div>
	);
}

export default TipCalculator;
