function openMenu(){
    var menu = document.getElementById('menu-icon');
    var close = document.getElementById('close-icon');
    var itens = document.getElementById('header-sections');
    if(menu.classList.contains('off')){
        menu.classList.remove('off');
        menu.style.display = 'block';
        itens.classList.remove('ativo')
        close.classList.add('off');
    } else {
        menu.classList.add('off');
        menu.style.display = 'none';
        itens.classList.add('ativo')
        close.classList.remove('off');
    }
}

function clickSection(){
    var itens = document.getElementById('header-sections');
    var menu = document.getElementById('menu-icon');
    var close = document.getElementById('close-icon');
    if(menu.classList.contains('off')){
        menu.classList.remove('off');
        menu.style.display = 'block';
        close.classList.add('off');
        itens.classList.remove('ativo')
    } else {

    }
}