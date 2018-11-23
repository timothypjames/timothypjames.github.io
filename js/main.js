$(function() {
    $('body').removeClass('fade-out');
});

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 300) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 900); 
        return false; 
    }); 
});


$("#work").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(section).offset().top
    });
});

function mouseIn() {
  $('.img').addClass('show');
}

function mouseOut() {
  $('.img').removeClass('show');
}

$('.hover-me').hover(mouseIn, mouseOut);