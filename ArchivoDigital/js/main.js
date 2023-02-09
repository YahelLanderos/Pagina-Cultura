document.addEventListener('DOMContentLoaded',() => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel,{
        duration: 200,
        dist: -60,
        shift: 5,
        padding: 5,
        numVisible:3,
        indicators: true,
        noWrap: false,
    })
    let indicatorItems = document.querySelectorAll('.carousel .indicator-item'),
    slideTime = 5000,
    activeClass = "active";

    setInterval(() => {
    indicatorItems.forEach(el => {
        if (el.classList.contains(activeClass)) {
        sib = el.nextElementSibling;
        if (sib == null) {
            indicatorItems[0].click();
        } else {
            sib.click()
        }
        }
    });
    }, slideTime);
})

document.querySelector("#maincontent > div.container.grid-pd > div > div")