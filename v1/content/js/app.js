$(document).ready(function() {
    let small = false;
    if (window.innerWidth < 576) small = true;

    // DARK / CLEAR
    let clear_dark = $('#clear_dark');
    clear_dark.on('click', function() {

        // BUTTON
        let elem = $(this);
        // BUTTONS
        let btns = $('.custom_btn');
        // BUTTONS
        let dcbtn = $('#clear_dark i');
        // MENU DROPDOWN
        let menu = $('.menu');
        // CARDS
        let cards = $('.card');
        let cardstext = $(' .card-text, .card-title');
        // HEADER / FOOTER
        let hefo = $('header, footer');
        // MAIN
        let main = $('main');
        if (elem.hasClass('clear_btn')) { // FOR DARK
            // BUTTONS
            btns.removeClass('clear_btn').addClass('dark_btn');
            // DARK / CLEAR BUTTON
            dcbtn.removeClass('fa-moon').addClass('fa-sun');
            // CARD
            cards.removeClass('bg-light').addClass('bg-secondary');
            cards.css('border-color', 'white');
            cardstext.removeClass('text-dark').addClass('text-light');
            // MENU
            if (small) {
                menu.removeClass('bg-light').addClass('bg-dark');
                menu.css('border-color', 'white');
            }
            // HEADER / FOOTER
            hefo.removeClass('bg-dark text-light').addClass('bg-light text-dark');
            // MAIN
            main.removeClass('bg-light text-dark').addClass('bg-dark text-light');

        } else if (elem.hasClass('dark_btn')) { // FOR LIGHT
            // BUTTONS
            btns.removeClass('dark_btn').addClass('clear_btn');
            // DARK / CLEAR BUTTON
            dcbtn.removeClass('fa-sun').addClass('fa-moon');
            // CARD
            cards.removeClass('bg-secondary').addClass('bg-light');
            cards.css('border-color', 'black');
            cardstext.removeClass('text-light').addClass('text-dark');
            // MENU
            if (small){
                menu.removeClass('bg-dark').addClass('bg-light');
                menu.css('border-color', 'black');
            }
            // HEADER / FOOTER
            hefo.removeClass('bg-light text-dark').addClass('bg-dark text-light');
            // MAIN
            main.removeClass('bg-dark text-light').addClass('bg-light text-dark');

        }
    })


    const hamburgerBtn = $('.hamburger_btn');
    const menu = $('.menu');

    hamburgerBtn.on('click', function() {
        menu.toggleClass('active');
    })
})