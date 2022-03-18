window.addEventListener('DOMContentLoaded', function(){
    if (window.confirm("Ви хочете підпис українською мовою?")){
        let ukrAddress1 = document.querySelector('#addres1');
        ukrAddress1.textContent = '01033, Україна, Київ,';

        let ukrAddress2 = document.querySelector('#addres2');
        ukrAddress2.textContent = 'вул. Тарасівська, 23-25';

        let ukrCompanyName = document.querySelector('#companyName');
        ukrCompanyName.textContent = 'ТОВ Літер Інтеграція';
    }
    if (window.confirm("Ви хочете підпис з власною фотографією?")){
        let photoNew = prompt('Введіть посилання на ваше зображення.'),
            changephoto = document.querySelector('#photo');
        changephoto.src = photoNew;
        changephoto.style.borderRadius = '15px';
        changephoto.style.width = '100px';
  
        let name = prompt('Введіть своє і\'мя та прізвище.'),
            titleName = document.querySelector('#title');
        titleName.textContent = name;
        titleName.style.color = '#34a853';

        abbTxt = document.querySelectorAll('.abb');
        for (let i = 0; i < abbTxt.length; i++){
           abbTxt[i].style.color = '#34a853';
        }
        
        Leaterfr1 = document.querySelector('#hr1');
        Leaterfr1.color = '#34a853';
        Leaterfr1.width = '100%';
        Leaterfr1.align = 'left';

        Leaterfr2 = document.querySelector('#hr2');
        Leaterfr2.style.display = 'none';

        leaterLogo = document.querySelector('#leaterLogo');
        leaterLogo.src = './img/03-3.png';
        leaterLogo.style.width = '100px';

        leaterURL = document.querySelector('#leaterURL');
        leaterLogo.style.size = '14px';
        leaterLogo.style.fontFamily = 'txt';

        leaterFB = document.querySelector('#fb');
        leaterFB.src = './img/fb jpg.jpg';
        leaterFB.style.height = '13px';
        leaterIN = document.querySelector('#in');
        leaterIN.src = './img/inb jpg.jpg';
        leaterIN.style.height = '11px';
        containerr = document.querySelector('#photoPosition');
        containerr.style.width = '100px';
    }

    else{
        let name = prompt('Введіть своє і\'мя та прізвище.'),
        titleName = document.querySelector('#title');
    titleName.textContent = name;
    }

    let job = prompt('Введіть свою посаду.'),
        jobTitle = document.querySelector('.job');
    jobTitle.textContent = job;

    let phone1 = prompt('Введіть свій номер телефону в форматі: +38 095 776 17 56'),
        jobPhone = document.querySelector('#phone1');
    jobPhone.textContent = phone1;

    let phone2 = prompt('Введіть свій другий номер телефону в форматі: +38 095 776 17 56, якщо у вас один телефонний номер залишить комірку пустою'),
        jobPhone2 = document.querySelector('#phone2');
    if (phone2 == ''){
        let delette = document.querySelector('#deletePhone');
        delette.style.display = 'none';
    }
    jobPhone2.textContent = phone2;

    let mailadd = prompt('Введіть свою електрону пошту.');
        mail = document.querySelector('#mail');
    mail.textContent = mailadd;

})
