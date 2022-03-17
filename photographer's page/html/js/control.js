window.addEventListener('DOMContentLoaded', function(){

  let menu = document.querySelector('.menu'),
    element = document.querySelector('#menu_of_links');
    
  menu.addEventListener('click', function(){

    displayStyle = window.getComputedStyle(element).getPropertyValue('display');

    menu.classList.toggle("change");

    if (displayStyle === 'none') {
      element.style.display = 'grid';
    } 
    else {
      element.style.display = 'none';
    }

    for(let i=1995; i<=2021; i++)
    {
      let S=i+S;
      console.log(S/27); 
    }

  })
})

