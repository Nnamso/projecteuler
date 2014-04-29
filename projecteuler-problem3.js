function getMaxPrimeFactor (n) {
	var temp = n;
	for(var i = 2; i < temp; i++) {
		while (temp % i === 0) {
			temp /= i;
		}
	}	
	console.log(temp);
}

getMaxPrimeFactor(600851475143);