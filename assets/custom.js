$(document).ready(function(){
var value = $(this).val();
//   console.log("changed");
});
$(document).on('change', '.quantity_corp', function(){
  var value = $(this).find('option:selected').attr('data-price');
  var qty = $(this).find('option:selected').attr('data-qty');
  console.log(value);
  $(this).parents('.grid-product__price-wrap').find('.corp_dynamic_price').html(value);
  
  var ths_val = $(this).val();
  
  if(ths_val.indexOf('+') != -1){
	$(this).parents('.grid-product__price-wrap').find('.quantity_corp').hide();
    $(this).parents('.grid-product__price-wrap').find('.quantity_picker_cls').show();
    $(this).parents('.grid-product__price-wrap').find('.quantity_picker_cls').val(qty);
  }
//   else{
  	
//   }
});


$('.close_cart').on('click', function(event){
$('.js-close-header-cart').trigger('click');
    event.preventDefault();
});

  if($(window).width() > 1095){
      $( ".cart_page_-recom" ).insertBefore( $(".cart_page_-recom_desk") );
  }else{
      $(".cart_page_-recom" ).insertBefore( $(".cart_page_-recom_mob") );
  }


$(window).resize(function(){
  console.log($(window).width());
  if($(window).width() > 1095){
      $( ".cart_page_-recom" ).insertBefore( $(".cart_page_-recom_desk") );
  }else{
      $(".cart_page_-recom" ).insertBefore( $(".cart_page_-recom_mob") );
  }
});

