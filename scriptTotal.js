function calcCartPrice() {
	

	const cartWrapper = document.querySelector('.cart-wrapper');

	const priceElements = cartWrapper.querySelectorAll('.price__currency');
	const totalPriceEl = document.querySelector('.total-price');
	

	let priceTotal = 0;

    	priceElements.forEach(function (item) {
		
		const amountEl = item.closest('.cart-item').querySelector('.items__current');
		
		priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText);

        console.log(priceTotal);
	});


	totalPriceEl.innerText = priceTotal;
}


