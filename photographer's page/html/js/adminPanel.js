window.addEventListener('DOMContentLoaded', function(){

    let adminPanel = document.querySelector('.page_content'),
        titleName = document.querySelector('.name_title'),
        adminButtom = document.createElement('img');

    titleName.addEventListener('click', function(){
        if (adminButtom.getAttribute('src') == null){
            adminPanel.appendChild(adminButtom);
            adminButtom.src = 'static/logos/admin_panel.png';
            adminButtom.style.width = '50px';
            adminButtom.style.left = '94%';
            adminButtom.style.top = '20px';
            adminButtom.style.position = 'absolute';
            adminButtom.style.borderRadius ='17px';
            adminButtom.style.cursor = 'pointer';
            adminButtom.id = 'admButtom';
        }
        else if (window.getComputedStyle(adminButtom).getPropertyValue('display') == 'none') {
            adminButtom.style.display ='grid'
        }
        else {
            adminButtom.style.display ='none';
        }
    })

    let adminMenu = document.createElement('div');
        admPassPanel = document.createElement('div');
        admPassIn = document.createElement('input');
        admClose = document.createElement('h1');
        admPassVl = admPassIn.value;

    adminButtom.addEventListener('click', function(){
        if(window.getComputedStyle(adminMenu).getPropertyValue('display') == 'block'){
            adminMenu.style.display ='none';
        }
        else if (admPassPanel.id == ''){
        adminPanel.appendChild(admPassPanel);
        admPassPanel.id = 'admPassPanel';
    
        admPassPanel.appendChild(admPassIn);
        admPassIn.id = 'admPassIn';
        admPassIn.type = 'password';

        admPassPanel.appendChild(admClose);
        admClose.innerHTML = '&times;';
        admClose.id = 'admPassClose';
        }
        else if (admPassVl == 'taras') {
            admMenufn();
        }
        else {admPassPanel.style.display = 'block';}
        console.log(admPassPanel.id);

        admClose.addEventListener('click', function(){
            admPassPanel.style.display = 'none';
        })
        
        admPassIn.addEventListener('input', function(){
            admPassVl = admPassIn.value;
            if (admPassVl == 'taras'){
                admPassIn.style.backgroundColor = 'green';
                setTimeout(admMenufn,1000); 
            }
        })
      
    })

    function admMenufn(){
        if (adminMenu.getAttribute('id') == null){
            admPassPanel.style.display = 'none';
            adminPanel.appendChild(adminMenu);
            adminMenu.id = 'admMenu';
            adminMenu.style.background = 'linear-gradient(rgba(184, 235, 240, 0.822), rgb(226, 186, 56), rgb(243, 243, 238))';
            adminMenu.style.borderRadius ='40px';
            adminMenu.style.position = 'fixed';
            adminMenu.style.minheight = '700px';
            adminMenu.style.width = '70%';
            adminMenu.style.minWidth = '1340px';
            adminMenu.style.left = '50%';
            adminMenu.style.padding = '20px 20px 20px 20px';
            adminMenu.style.top = '10%';
            adminMenu.style.left = '15%';
            adminMenu.style.alignSelf ='center';
            adminMenu.style.display ='inline-block';
            
            let namesOfContainers = ['Summer','Autumn','Winter','Spring','Night','Rain'];

            for (let i=0; i<namesOfContainers.length; i++){
                
                let admPhotoContainers = document.createElement('div');
                adminMenu.appendChild(admPhotoContainers);
                admPhotoContainers.className = 'admPhotoContainer';
                admPhotoContainers.innerText = namesOfContainers[i];
                
                for (let j=0; j<=9; j++){
                    let admForm = document.createElement('form'),
                        admPanelImg = document.createElement('img'),
                        admPhotoChanger = document.createElement('input'),
                        admInput = document.createElement('input'),
                        summer = 'Summer',
                        autumn = 'Autumn',
                        winter = 'Winter',
                        spring = 'Spring',
                        night = 'Night',
                        rain = 'Rain';
                    admPhotoContainers.appendChild(admForm);    
                    admForm.appendChild(admPhotoChanger);
                    admForm.appendChild(admInput);
                    admForm.appendChild(admPanelImg);
                    if (i==0){
                        admForm.action = '/upload';
                        admForm.method = 'post';
                        admForm.enctype = 'multipart/form-data';
                        admForm.className = 'inpForm';
                        admPanelImg.src = 'static/photos/'+summer+j+'.jpg'; 
                        admPanelImg.id = 'photo'+summer+j;
                        admInput.id = 'file'+summer+j;
                        admInput.type = 'file';
                        admInput.name = 'filedata';
                        admPhotoChanger.className = 'load';
                        admPhotoChanger.value = 'Send';
                        admPhotoChanger.type = 'submit';
                    }
                    else if (i==1){
                        admForm.action = '/upload';
                        admForm.method = 'post';
                        admForm.enctype = 'multipart/form-data';
                        admForm.className = 'inpForm';
                        admPanelImg.src = 'static/photos/'+autumn+j+'.jpg'; 
                        admPanelImg.id = 'photo'+autumn+j; 
                        admInput.id = 'file'+autumn+j;
                        admInput.type = 'file';
                        admInput.name = 'filedata';
                        admPhotoChanger.className = 'load';
                        admPhotoChanger.value = 'Send';
                        admPhotoChanger.type = 'submit';
                    }
                    else if (i==2){
                        admForm.action = '/upload';
                        admForm.method = 'post';
                        admForm.enctype = 'multipart/form-data';
                        admForm.className = 'inpForm';
                        admPanelImg.src = 'static/photos/'+winter+j+'.jpg'; 
                        admPanelImg.id = 'photo'+winter+j; 
                        admInput.id = 'file'+winter+j;
                        admInput.type = 'file';
                        admInput.name = 'filedata';
                        admPhotoChanger.className = 'load';
                        admPhotoChanger.value = 'Send';
                        admPhotoChanger.type = 'submit';
                    }
                    else if (i==3){
                        admForm.action = '/upload';
                        admForm.method = 'post';
                        admForm.enctype = 'multipart/form-data';
                        admForm.className = 'inpForm';
                        admPanelImg.src = 'static/photos/'+spring+j+'.jpg'; 
                        admPanelImg.id = 'photo'+spring+j; 
                        admInput.id = 'file'+spring+j;
                        admInput.type = 'file';
                        admInput.name = 'filedata';
                        admPhotoChanger.className = 'load';
                        admPhotoChanger.value = 'Send';
                        admPhotoChanger.type = 'submit';
                    }
                    else if (i==4){
                        admForm.action = '/upload';
                        admForm.method = 'post';
                        admForm.enctype = 'multipart/form-data';
                        admForm.className = 'inpForm';
                        admPanelImg.src = 'static/photos/'+night+j+'.jpg'; 
                        admPanelImg.id = 'photo'+night+j; 
                        admInput.id = 'file'+night+j;
                        admInput.type = 'file';
                        admInput.name = 'filedata';
                        admPhotoChanger.className = 'load';
                        admPhotoChanger.value = 'Send';
                        admPhotoChanger.type = 'submit';
                    }
                    else if (i==5){
                        admForm.action = '/upload';
                        admForm.method = 'post';
                        admForm.enctype = 'multipart/form-data';
                        admForm.className = 'inpForm';
                        admPanelImg.src = 'static/photos/'+rain+j+'.jpg'; 
                        admPanelImg.id = 'photo'+rain+j; 
                        admInput.id = 'file'+rain+j;
                        admInput.type = 'file';
                        admInput.name = 'filedata';
                        admPhotoChanger.className = 'load';
                        admPhotoChanger.value = 'Send';
                        admPhotoChanger.type = 'submit';
                    }
                    admPanelImg.className = 'admPhotos';
                    admPhotoChanger.className = 'admPhotoChanger';
                    admInput.className = 'admInput';
                }
            }
        }
        else if (window.getComputedStyle(adminMenu).getPropertyValue('display') == 'none') {
            adminMenu.style.display ='inline-block';
            admPassPanel.style.display = 'none';
        }
    }

})
