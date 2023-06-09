// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";
/* 
const mpList = document.querySelector('.mp');
 */
const mpBtns = document.querySelectorAll('[data-mp]');

if (mpBtns.length) {
    mpBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            btn.classList.toggle('_active');
        });
    })
}

