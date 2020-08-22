$(document).ready(function(){
    
  $('.mobie-nav-icon').on('click',function (event) {
    $('.menu').toggleClass('hienthi');
    if($('.mobie-nav-icon').hasClass('fa-bars')){
      $('.mobie-nav-icon').removeClass('fa-bars')
      $('.mobie-nav-icon').addClass('fa-times')
    }
    else{
      $('.mobie-nav-icon').addClass('fa-bars')
      $('.mobie-nav-icon').removeClass('fa-times')
    }
});
  new WOW().init();
  $(window).scroll(function () {
      var vitri = $('body,html').scrollTop();
      var vitriskill = $('.section-skills').offset().top;
      if(vitri >= vitriskill-100){
        $('.thanhtrong').addClass('divao');
        $('.diemdau').addClass('disang');
      }
      if(vitri > 400 ){
        $('.menu').addClass('sticky');
        $('.menu ul li').addClass('thunho');
      }
      else{
        $('.menu').removeClass('sticky');
        $('.menu ul li').removeClass('thunho');
      }
  });
    
  $('a[href^="#"]').on('click',function (event) {
    
        $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top}, 700);
        event.preventDefault();
  });
  
  
    
})