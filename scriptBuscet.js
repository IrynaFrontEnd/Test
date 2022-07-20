
const cartWrapper =  document.querySelector('.cart-wrapper');


window.addEventListener('click', function (event) {
	
	if ( event.target.hasAttribute('data-cart')) {
		 

		
		const card = event.target.closest('.card');
		
		const productInfo = {
			id: card.dataset.id,
			imgSrc: card.querySelector('.product-img').getAttribute('src'),
			title: card.querySelector('.card-title').innerText,
			price: card.querySelector('.price__currency').innerText,    
			//counter: card.querySelector('[data-counter]').innerText,
		};
        

		const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`);
		

		if (itemInCart) {
			const counterElement = itemInCart.querySelector('[data-cart]');
		} 

	else {
		const cartItemHTML = `<div class="cart-item card mb-5" data-id="${productInfo.id}" style="max-width: 540px;">
		<div class="row g-0">
		  <div class="col-md-6">
			<img src="${productInfo.imgSrc}" class="img-fluid rounded-start" alt="foto1">
		  </div>
		  <div class="col-md-5">
			<div class="card-body title">
			  <span class="card-title">${productInfo.title}</span>
			  <br>
			  <span class="price__currency">${productInfo.price}</span>

			<div class="details-wrapper">
				<div class="items counter-wrapper">
				  <div class="items__control" data-action="minus">-</div>
				  <div class="items__current" data-counter="">1</div>
				  <div class="items__control" data-action="plus">+</div>
				</div>
			  
			  
								  
		  </div>
			</div>
		  </div>
		</div>
	 </div>`;

			cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML);
		}

		calcCartPrice();

		
}});
