$(function(){
    $('.objekt').attr({'style':'fill:rgba(255,0,0,0);'});

    $('.objekt').on('mouseenter',function(){
        $(this).attr({'style':'fill:rgba(0,255,0,0.15);stroke:rgba(0,255,0,0.15)'});
        $('#text h2').text($(this).data('nazev'));
        $('#upgrade1').attr('src',$(this).data('upgrade1'));
        $('#upgrade2').attr('src',$(this).data('upgrade2'));
        $('#upgrade3').attr('src',$(this).data('upgrade3'));
    })
    $('.objekt').on('mouseleave',function(){
        $(this).attr({'style':'fill:rgba(0,255,0,0);stroke:rgba(0,255,0,0)'});
        //je treba se rozmyslet jak to chci
        //$('#text h2').text("");
    })
})