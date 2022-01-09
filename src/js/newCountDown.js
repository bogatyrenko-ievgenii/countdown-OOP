'use strict';

import {CountDownToRemaining} from './countdownClass'

window.addEventListener('DOMContentLoaded', () => {
    const selectors = {
        days: document.querySelector('#days'),
        hours: document.querySelector('#hours'),
        minutes: document.querySelector('#minutes'),
        seconds: document.querySelector('#seconds'),
    }

    const d1 = new Date();
    let date = d1.getDate();
    let month = d1.getMonth();
    let year = d1.getFullYear();

    const countdown = new CountDownToRemaining(`${year}/${+month + 1}/${date + 2}`, selectors).getStart();

})