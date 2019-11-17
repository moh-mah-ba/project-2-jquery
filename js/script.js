$(document).ready(function () {
    
    // Header Photo Full Screan
   
    $('.header').height($(window).height());

    // Resize Window

    $(window).resize(function () {

        $('.header').height($(window).height());
        
        $('.main-head').css('paddingTop', ($(window).height() - $('.main-head').height()) / 2);
        
    });
    
    // Main Header resize
    
    $('.main-head').css('paddingTop', ($(window).height() - $('.main-head').height()) / 2);
    
    // Nav Bar  
    
        // navbar background  color
    
   $(window).scroll(function () {
       
       if ($(this).scrollTop()){
           
           $('nav ul').addClass('black')
           
       } else{
           
           $('nav ul').removeClass('black')
       }
       
       // navbar active class scroll adding automaticlly
        
        $('.content, header').each(function () {
           
          if ($(window).scrollTop() >= $(this).offset().top){
              
              var contentId = $(this).attr('id');
             
              $('nav ul li').removeClass('active');
              
              $('nav ul li[data-value="' + contentId + '"]').addClass('active');
          } 
       }); 
   });
    
    // 580px navbar bars
    
    $('.bars').on('click', function () {
        
        $('nav ul').toggleClass('showing');
    });
    
    // navbar active class
    
    $('nav ul li').click(function () {
       
        $(this).addClass('active').siblings().removeClass('active');
    });
   
    // Go Down Arrow
    
    $('.header .go-dow span').click(function () {
       
        $('html, body').animate({
            
            scrollTop: $('.featu-sec').offset().top
            
        }, 1000);
    });
    
    // Hide Side-bar
    
    $('.side-bar').css({
       
        'left': -$('.side-bar').innerWidth()
        
    });
    
    // Show And hide Side-bar
    
    $('.content-slide .gear').on('click', function () {
        
 
        if ($('.side-bar').hasClass('not-visable')) {
            
            $('.side-bar').animate({
          
           'left': 0,
           
       }).removeClass('not-visable');
            
            
            $('body').animate({
                
               'paddingLeft': $('.side-bar').innerWidth()
                
            }, 500);
            
        } else {
            
            $('.side-bar').animate({
                
                'left': -$('.side-bar').innerWidth()
                
            }, 500).addClass('not-visable')
            
            $('body').animate({
                
               'paddingLeft': 0
                
            });
        }
    });
    
    // Our Works Show Button
     
    $('.img-sec button').click(function () {
        
        $('.img-sec .pho-section .pho-three').fadeIn(1000).css('display', 'flex');
        
        $(this).css({
           background: 'none',
            color: '#f7600e',
            border:'1px solid #f7600e',
            cursor: 'not-allowed'
        })
    });
    
    // Testimonial Slider
    
    $('.bxslider').bxSlider({
        pager:false,
        auto:true,
        speed:800
    });
    
    //Hire Us button
    
    $('.header .main-head .fris-bt').click(function () {
       
        $('html, body').animate({
            
           scrollTop: $('.say-hello').offset().top 
        }, 1000);
    });
});





    