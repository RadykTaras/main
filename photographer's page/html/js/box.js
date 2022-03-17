window.addEventListener('DOMContentLoaded', function(){

    let changedBox = document.querySelector('#cube'),
        pageContent = document.querySelector('#page_content'),
        summer = 'Summer',
        autumn = 'Autumn',
        winter = 'Winter',
        spring = 'Spring',
        night = 'Night',
        rain = 'Rain';

    $('.map').on('click', function(){
        if (this.id == 'map1_1' || this.id == 'map3_1'){
            changedBox.style.transform = 'rotateY('+-90+'deg)';
            $('figure img').fadeOut(2000, function(){
                $('figure img').each(function(index){
                    pageContent.style.background = 'linear-gradient(rgba(250, 250, 245, 0.822), rgb(173, 157, 112), rgb(226, 186, 56), rgb(233, 240, 204))';
                    $(this).attr('src', 'static/photos/'+autumn+index+'.jpg').fadeIn(2000);
                });
            });
        }
        else if (this.id == 'map1_2'){
            changedBox.style.transform = 'rotateX('+-90+'deg)';
            $('figure img').fadeOut(2000, function(){
                $('figure img').each(function(index){
                    pageContent.style.background = 'rgb(26, 26, 32)';
                    $(this).attr('src', 'static/photos/'+night+index+'.jpg').fadeIn(2000);
                });
            });
        }
        else if (this.id == 'map1_3'){
            changedBox.style.transform = 'rotateX('+90+'deg)';
            $('figure img').fadeOut(2000, function(){
                $('figure img').each(function(index){
                    pageContent.style.background = 'rgb(37, 37, 41)';
                    $(this).attr('src', 'static/photos/'+rain+index+'.jpg').fadeIn(2000);
                });
            });
        }
        else if (this.id == 'map2_2' || this.id == 'map4_1'){
            changedBox.style.transform = 'rotateY('+-180+'deg)';
            $('figure img').fadeOut(2000, function(){
                $('figure img').each(function(index){
                    pageContent.style.background = 'linear-gradient(rgba(6, 68, 92, 0.822), rgba(143, 210, 236), rgb(255, 255, 255))';
                    $(this).attr('src', 'static/photos/'+winter+index+'.jpg').fadeIn(2000);
                });
            });
        }
        else if (this.id == 'map5' || this.id == 'map6'){
            changedBox.style.transform = 'rotateX('+0+'deg)';
            $('figure img').fadeOut(2000, function(){
                $('figure img').each(function(index){
                    pageContent.style.background = 'linear-gradient(rgba(151, 218, 245, 0.822), rgb(226, 186, 56), rgb(243, 243, 238))';
                    $(this).attr('src', 'static/photos/'+summer+index+'.jpg').fadeIn(2000);
                });
            });
        }
        else if (this.id == 'map2_1' || this.id == 'map4_2'){
            changedBox.style.transform = 'rotateY('+0+'deg)';
            $('figure img').fadeOut(2000, function(){
                $('figure img').each(function(index){
                    pageContent.style.background = 'linear-gradient(rgba(151, 218, 245, 0.822), rgb(226, 186, 56), rgb(243, 243, 238))';
                    $(this).attr('src', 'static/photos/'+summer+index+'.jpg').fadeIn(2000);
                });
            });
        }
        else{
            changedBox.style.transform = 'rotateY('+-270+'deg)';
            $('figure img').fadeOut(2000, function(){
                $('figure img').each(function(index){
                    pageContent.style.background = 'linear-gradient(rgba(134, 101, 134, 0.822), rgba(180, 124, 180, 0.822), rgb(184, 235, 240, 0.822), rgb(217, 234, 236, 0.822), rgb(157, 231, 179, 0.82))';
                    $(this).attr('src', 'static/photos/'+spring+index+'.jpg').fadeIn(2000);
                });
            });
        }
       
    })
})



