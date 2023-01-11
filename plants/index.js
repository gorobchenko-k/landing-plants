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



console.log("Вёрстка валидная +10");
console.log("Вёрстка семантическая +20: \n    <header>, <main>, <footer> +3\n    пять элементов <section> +3\n    только один заголовок <h1> +3\n    четыре заголовка <h2> + 3\n    один элемент <nav> +3\n    два списка ul>li>a (панель навигации, ссылки на соцсети) +3\n    пять кнопок <button> +2");
console.log("Вёрстка соответствует макету +48: \n    блок <header> +6\n    секция welcome +7\n    секция about +7\n    секция service +7 \n    секция prices +7\n    секция contacts +7\n    блок <footer> +7");
console.log("Требования к css + 12: \n    для построения сетки используются флексы или гриды +2\n    при уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\n    фоновый цвет тянется на всю ширину страницы +2\n    иконки добавлены в формате.svg +2\n    изображения добавлены в формате.jpg или.png +2\n    есть favicon +2");
console.log("Интерактивность, реализуемая через css +20: \n    плавная прокрутка по якорям +5\n    cсылки в футере при нажатии на них ведут на гитхаб автора проекта и на страницу курса +5\n    интерактивность включает в себя не только изменение внешнего вида курсора, но и другие визуальные эффекты +5\n    обязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5");