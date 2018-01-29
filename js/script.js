let middle_btn = document.getElementById('middle');
let body = document.getElementById('body');


body.style.backgroundColor = 'black!important';

$(document).ready(function(){
    $('#sp-btn').click(function() {
        $('#middle').fadeOut(1000, function(){
            init_protocol();
        })
    });
});


function init_protocol() {
    $('#middle').html('<h1>Minimal is the New Black</h1>');
    $('#middle').fadeIn(3000,function() {
        $('#middle').css('height', '15vh');
        setTimeout(changeBG, 2000);
        setTimeout(addButtons, 4000);
    })
};

function changeBG() {
    $(body).css('background-color', "white");
    $('#middle').css('color', "black");
}

function addButtons() {
    // let htmlAddOn = '    <div class="col-md-2" style="text-align: center"><a href="https://github.com/Iczac"><img class=\'ref-icons\' src="assets/Git.png" alt="github"></a><br><span>Github</span></div>\n';
    // $(body).append(htmlAddOn);
    $('#snd-row').css('display','block');
    $('#footer').css('display','block');
    $('#snd-row').fadeOut(1);
    $('#footer').fadeOut(1);
    $('#snd-row').fadeIn(3000);
    $('#footer').fadeIn(3000);
}