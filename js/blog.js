$(document).ready(function(){
    //Start Progress
    let getprogressbar = document.querySelector('.progress-bar');
    window.onscroll = function(){
        scrollpoint();
}

function scrollpoint(){
    let getscrolltop = document.documentElement.scrollTop;
 //    console.log(getscrolltop)
    let getscrollheight = document.documentElement.scrollHeight;
    let getclientheight = document.documentElement.clientHeight;
    let getcalcheight = getscrollheight - getclientheight;
    let getfinalheight = Math.floor((getscrolltop * 100) / getcalcheight);
    getprogressbar.style.height = `${getfinalheight}%`;

}

//navbuttons

$(".navbuttons").click(function(){
    $(this).toggleClass('crossxs');
});

let getnavbuttons = document.querySelector('.navbuttons');
let getmenucontents = document.querySelector('.menucontents');
getnavbuttons.addEventListener('click',function(){
    getmenucontents.classList.toggle('active')
});

 //scrolltop
 $(window).scroll(function(){
    let getscrolltop = $(this).scrollTop();
    // console.log(getscrolltop)
    if(getscrolltop >= 100){
        $('.header').addClass('scrolltop');
    }else{
        $('.header').removeClass('scrolltop');
    }

    //upicons
    if(getscrolltop >= 400){
        $('.upicons').show('slow');
    }else{
        $('.upicons').hide('slow');
    }
});

     //Start Contact Section
     $("#name").keyup(function(){
        if($.trim($(this).val()) !== ""){
            $("#email").removeAttr('disabled');
        }else{
            $("#email").attr('disabled',true);
        }
    });

    $("#email").keyup(function(){
        if($.trim($(this).val()) !== ""){
            $("#subject").removeAttr('disabled');
        }else{
            $("#subject").attr('disabled',true);
        }
    });
    let email = document.querySelector('#email');
    email.addEventListener('change',function(){
        this.value = this.value.toUpperCase();
    })

    $("#subject").keyup(function(){
        if($.trim($(this).val()) !== ""){
            $("#message").removeAttr('disabled');
        }else{
            $("#message").attr('disabled',true);
        }
    });

    $("#message").keyup(function(){
        if($.trim($(this).val()) !== ""){
            $("[type=submit]").removeAttr('disabled');
        }else{
            $("[type=submit]").attr('disabled',true);
        }
    })

    $("form").submit(function(e){
        let getdatas = {
            name : $("#name").val(),
            email : $("#email").val(),
            subject : $("#subject").val(),
            message : $("#message").val()
        };
       console.log(getdatas);
        e.preventDefault();

    })
   //End Contact Section

});