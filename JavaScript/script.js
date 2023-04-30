const body = document.querySelector('body');
const aside = document.querySelector('#sidebar');
const timeLine = document.querySelector('#timeline');
const buttons = document.querySelectorAll('.button');
const hidden_html = document.querySelector('#hidden_html');
const hidden_css = document.querySelector('#hidden_css');
const button_about = document.querySelectorAll('.button_about');
const hidden_about_html = document.querySelector('#hidden_html_about');
const hidden_about_css = document.querySelector('#hidden_css_about')
const about = document.querySelectorAll('.about')
aside.style.height = `${body.clientHeight + 200}px`

buttons.forEach(function(item, index){
    item.addEventListener('click', function(){
        let position = index
        html(position)
        css(position)
    });
})

// botão relacionado ao contaíner dos conteúdos
button_about.forEach(function(item, index){
    item.addEventListener('click', function(){
        hiddenCardHtml(index)
        hiddenCardCss(index)
    })
})

// funções dos container 
function hiddenCardHtml(h){
    if(h == 0) {
        if(hidden_about_html.classList.toggle('html_about')){
            hidden_about_html.style.height = '530px'
            hidden_about_html.style.padding = '1.25em'
            about[0].style.borderBottomLeftRadius = '0px'
            about[0].style.borderBottomRightRadius = '0px'
        } else {
            hidden_about_html.style.height = '0'
            hidden_about_html.style.padding = '0'
            about[0].style.borderBottomLeftRadius = '1.25em'
            about[0].style.borderBottomRightRadius = '1.25em'
            about[0].style.transition = '2s'
        }   
    }
}
function hiddenCardCss(c){
    if(c == 1) {
        if(hidden_about_css.classList.toggle('css_about')){
            hidden_about_css.style.height = '550px'
            hidden_about_css.style.padding = '1.25em'
            about[1].style.borderBottomLeftRadius = '0px'
            about[1].style.borderBottomRightRadius = '0px'
        } else {
            hidden_about_css.style.height = '0'
            hidden_about_css.style.padding = '0'
            about[1].style.borderBottomLeftRadius = '1.25em'
            about[1].style.borderBottomRightRadius = '1.25em'
            about[1].style.transition = '2s'
        }   
    }
}
// Sidebar
function removeHTML(){
    if(hidden_html.style.height != 0){
        hidden_html.style.height = '0';
        hidden_html.classList.remove('html')
    }
}
function removeCSS(){
    if(hidden_css.style.height != 0){
        hidden_css.style.height = '0';
        hidden_css.classList.remove('css')
    } 
}

function html(h){
    if(h == 0){
        if(hidden_html.classList.toggle('html')){
            hidden_html.style.height = '400px'
            removeCSS()
        } else {
            hidden_html.style.height = '0'
            removeCSS()
        }
    }
}
function css(c){
    if(c == 1){
        if(hidden_css.classList.toggle('css')){
            hidden_css.style.height = '400px'
            removeHTML()
        } else {
            hidden_css.style.height = '0'
            removeHTML()
        }
    }
}


