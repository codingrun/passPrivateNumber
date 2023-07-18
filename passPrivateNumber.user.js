// ==UserScript==
// @name         인증번호 휘리릭
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       codingrun
// @match        https://admin-int.unban.ai/login
// @match        http://localhost:3200/login
// @match        http://localhost:3200/en/login
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==


(function() {
    'use strict';
    const submitNumber = () => {
        const inputDivElement = document.getElementsByClassName('input T56');
        if(!inputDivElement.length) return;
        const inputElement = inputDivElement[0].getElementsByTagName('input')[0];

        inputElement.setAttribute('value', '1115');
        inputElement.dispatchEvent(new Event('change', { bubbles: true })); // state변경을 위해 onChange이벤트 강제호출

        setTimeout(() => {// 접속 IP를 가져오기 전에 호출이 되어 잠깐 딜레이를 줌
            const submitButton = document.getElementsByClassName('cc-common-solid-button undefined grow primary-01')[0];
            if(!submitButton) return;
            submitButton.click();
        }, 1000);
    }

    window.onload = function () {
        setTimeout(() => {
            const sections = document.getElementsByClassName('w-80 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4');
            if(!sections.length) return;

            const io = new IntersectionObserver((entries, observer) => {
                const [entry] = entries;
                // 로그인 폼 사라짐 감지
                if(!entry.isIntersecting) {
                    submitNumber()
                }
            })

            io.observe(sections[0]);
        }, 500);
    };
})();
