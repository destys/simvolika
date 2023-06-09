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

