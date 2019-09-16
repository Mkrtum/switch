var time = 400;
let a = $('header ul li a').click(function(e){
    var classname = $(this).attr('class');
    var classs = classname.split(' ');
    classs = classs[classs.length -1];
    classname = "#" + classs;
    if(classname=="#block3"){
        time=1000;
    }else if(classname=='#block4'){
        time=2000;
    }else{
        time = 400;
    }
    console.log(time);
    var of = $(classname).offset().top;
    $('html,body').animate({scrollTop:of},time);
})

let scrollbtn = $('header .scrl-down').click(function(e){
    var scroll = $('.what-we-do').offset().top;
    $('html,body').animate({scrollTop:scroll}, 1000);
}) 
