jQuery(document).ready(function() {
	//По замовчуванню
	var summElements = jQuery('.summ span');

	var allPrice = 0;
		
		jQuery('.price_calculator input').each(function(){
			if(jQuery(this).prop( "checked" )){
				var dataPrice = jQuery(this).attr('data-price');
				allPrice = allPrice+parseInt(dataPrice);				
			}
		});

		summElements.text( allPrice );

	//Загальна сума

	var summElements = jQuery('.summ span');
	var summTd = jQuery('.summ');
	var price = 0;

	jQuery('.price_calculator').find('input').change(function(){

		var allPrice = 0;
		
		jQuery('.price_calculator input').each(function(){
			if(jQuery(this).prop( "checked" )){
				var dataPrice = jQuery(this).attr('data-price');
				allPrice = allPrice+parseInt(dataPrice);				
			}
		});

		price = allPrice;

		summElements.text( price );

		summElements.css( {'font-size': '30px', 'margin-right': '-18px'} );
		summTd.css( {'font-size': '30px', 'margin-right': '-18px'} );
		summElements.animate( {'font-size': '16px', 'margin-right': '0px'}, 800 );
		summTd.animate( {'font-size': '16px', 'margin-right': '0px'}, 800 );
		//console.log(price);
	});

	//Тип сайту

	//по замовчуванню

	// var summTypeSiteElement = jQuery('.site_type span');
	
	// 	var priceTypeSite = 0;
		
	// 	jQuery('.type-site input').each(function(){
	// 		if(jQuery(this).prop( "checked" )){
	// 			var dataPriceTypeSite = jQuery(this).attr('data-price');
	// 			priceTypeSite = parseInt(dataPriceTypeSite);				
	// 		}


	// 	summTypeSiteElement.text( priceTypeSite );
		
	// });

	//при кліку

	var summTypeSiteElement = jQuery('.site_type span');
	
	jQuery('.type-site').find('input').change(function(){

		var priceTypeSite = 0;
		
		jQuery('.type-site input').each(function(){
			if(jQuery(this).prop( "checked" )){
				var dataPriceTypeSite = jQuery(this).attr('data-price');
				priceTypeSite = parseInt(dataPriceTypeSite);				
			}
		});


		summTypeSiteElement.text( priceTypeSite );
		
	});

	//Дизайн

	//по замовчуванню

	// var summDesignElement = jQuery('.design_summ span');

	// 	var priceDesign = 0;
		
	// 	jQuery('.template input').each(function(){
	// 		if(jQuery(this).prop( "checked" )){
	// 			var dataPriceDesign = jQuery(this).attr('data-price');
	// 			priceDesign = parseInt(dataPriceDesign);				
	// 		}

	// 	summDesignElement.text( priceDesign );
		
	// });

	//при кліку

	var summDesignElement = jQuery('.design_summ span');
	
	jQuery('.template').find('input').change(function(){

		var priceDesign = 0;
		
		jQuery('.template input').each(function(){
			if(jQuery(this).prop( "checked" )){
				var dataPriceDesign = jQuery(this).attr('data-price');
				priceDesign = parseInt(dataPriceDesign);				
			}
		});


		summDesignElement.text( priceDesign );
		
	});

	//Додаткові модулі
	var summAddElements = jQuery('.additional span');
	var priceAdd = 0;

	jQuery('.additionally').find('input').change(function(){

		var allAddPrice = 0;
		
		jQuery('.additionally input').each(function(){
			if(jQuery(this).prop( "checked" )){
				var dataAddPrice = jQuery(this).attr('data-price');
				allAddPrice = allAddPrice+parseInt(dataAddPrice);				
			}
		});

		priceAdd = allAddPrice;

		summAddElements.text( priceAdd );
	});





});
