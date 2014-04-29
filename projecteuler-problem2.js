function fibonacci (x) {
	var iCurrent = 1;
	var iPrevious = 0;
	var iSolution = 0;
	var iTemp = 0;

	while (iCurrent <= x) {
		iTemp = iCurrent;
		iCurrent += iPrevious;
		iPrevious = iTemp;

		if (iCurrent % 2 === 0) {
			iSolution += iCurrent;
		}
	}
	console.log(iSolution);
}

fibonacci(4000000);