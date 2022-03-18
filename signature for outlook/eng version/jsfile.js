window.addEventListener('DOMContentLoaded', function(){
    if (window.confirm("Do you want a signature in Ukranian language?")){
        let ukrAddress1 = document.querySelector('#addres1');
        ukrAddress1.textContent = 'Україна, Київ,';

        let ukrAddress2 = document.querySelector('#addres2');
        ukrAddress2.textContent = 'вул. Тарасівська, 23';

        let ukrCompanyName = document.querySelector('#companyName');
        ukrCompanyName.textContent = 'Назва компанії';
    }
    if (window.confirm("Do you want a signature with your own photo?")){
        let photoNew = prompt('Put link for your photo'),
            changephoto = document.querySelector('#photo');
        changephoto.src = photoNew;
        changephoto.style.borderRadius = '15px';
        changephoto.style.width = '100px';
  
        let name = prompt('Write your Name and Surname'),
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
        leaterLogo.src = 'https://www.imgonline.com.ua/examples/bee-on-daisy.jpg';
        leaterLogo.style.width = '100px';

        leaterURL = document.querySelector('#leaterURL');
        leaterLogo.style.size = '14px';
        leaterLogo.style.fontFamily = 'txt';

        leaterFB = document.querySelector('#fb');
        leaterFB.src = 'https://sarajevocitypass.org/wp-content/uploads/2019/01/image-black-facebook-logo-png-26.png';
        leaterFB.style.height = '13px';
        leaterIN = document.querySelector('#in');
        leaterIN.src = 'https://image.flaticon.com/icons/png/512/61/61109.png';
        leaterIN.style.height = '11px';
        containerr = document.querySelector('#photoPosition');
        containerr.style.width = '100px';
    }

    else{
        let name = prompt('Write your Name and Surname.'),
        titleName = document.querySelector('#title');
    titleName.textContent = name;
    }

    let job = prompt('Write your profession'),
        jobTitle = document.querySelector('.job');
    jobTitle.textContent = job;

    let phone1 = prompt('Write your phone number in the format: +38 095 776 17 56.'),
        jobPhone = document.querySelector('#phone1');
    jobPhone.textContent = phone1;

    let phone2 = prompt('Write your second phone number in the format: +38 095 776 17, 56, if youdont have second number do not write anything.'),
        jobPhone2 = document.querySelector('#phone2');
    if (phone2 == ''){
        let delette = document.querySelector('#deletePhone');
        delette.style.display = 'none';
    }
    jobPhone2.textContent = phone2;

    let mailadd = prompt('Write your mail address.');
        mail = document.querySelector('#mail');
    mail.textContent = mailadd;

})
