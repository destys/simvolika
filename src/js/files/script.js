// Підключення функціоналу "Чертоги Фрілансера"
import { bodyLock, bodyUnlock, isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

//========================================================================================================================================================

const mpBtns = document.querySelectorAll('[data-mp]');
const mpMobile = document.querySelector('.mp-mobile');

if (mpBtns.length && mpMobile) {
    const mpClose = mpMobile.querySelector('.mp__close');

    mpBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            if (window.innerWidth > 991) {
                btn.classList.toggle('_active');
            } else {
                mpMobile.classList.add('_active');
                bodyLock(100);
            }
        });
    })

    if (mpClose) {
        mpClose.addEventListener("click", function (e) {
            mpMobile.classList.remove('_active');
            bodyUnlock(100);
        });
    }
}

//========================================================================================================================================================
const upBtn = document.querySelector('.up');

if (upBtn) {
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + window.innerHeight;

        if (scrollPosition >= (window.innerHeight * 1.2)) {
            upBtn.classList.add('show');
        } else {
            upBtn.classList.remove('show');
        }
    });
}

//========================================================================================================================================================
const toOrder = document.querySelector('.to-order');

if (toOrder) {
    const toOrderTitles = toOrder.querySelectorAll('.tabs__title');
    const toOrderBodies = toOrder.querySelectorAll('.tabs__body');

    if (toOrderTitles.length && toOrderBodies.length) {
        toOrderTitles.forEach((title, index) => {
            title.addEventListener('click', () => {
                toOrderTitles.forEach(title => title.classList.remove('_tab-active'));
                toOrderTitles[index].classList.add('_tab-active');
                toOrderBodies.forEach(body => body.classList.remove('_tab-active'));
                toOrderBodies[index].classList.add('_tab-active');
            })
        })
    }
}