const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");

let menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach((menuLink) => {
        menuLink.addEventListener("click", onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;

        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - 96;

            if (menuBody.classList.contains('_active')) {
                menuBody.classList.remove('_active');
                document.body.classList.remove('_lock');
                menuIcon.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();

        }
    }
}



if (menuIcon) {
    menuIcon.addEventListener("click", () => {
        menuIcon.classList.toggle("_active");
        menuBody.classList.toggle("_active");
        document.body.classList.toggle("_lock");
    })
}

window.addEventListener('click', e => {
    if (menuBody.classList.contains('_active')) {
        const target = e.target;
        if (target.classList.contains('menu__body')) {
            menuBody.classList.remove('_active');
            document.body.classList.remove('_lock');
            menuIcon.classList.remove('_active');
        }
    }
})



console.log(`
 Итог: 125
 1. При нажатии на кнопки:Gargens,Lawn,Planting происходит смена фокуса на услугах в разделе service +50
 2. Accordion в секции prices реализация 3-х выпадающих списков об услугах и ценах + 50
 3. В разделе contacts реализован select с выбором городов +25
`);