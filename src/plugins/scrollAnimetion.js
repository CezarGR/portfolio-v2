const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

const nivel = document.querySelectorAll('[data-nivel]');
const animaNivel = 'nive';

var sum = 0;



function animaScroll(){
    const windowTop = window.pageYOffset +((window.innerHeight*3)/4);
    target.forEach(( function(element) {
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass); 
        }
        else{
            element.classList.remove(animationClass); 
        }

    }))
}

function animaNivell(){
    const windowTop = window.pageYOffset + ((window.innerHeight*3)/4);
    nivel.forEach(( function(element2) {
        sum++;
        
        console.log(sum)
        var teste = 'nivel'+sum;
        if((windowTop) > element2.offsetTop){
            element2.classList.add(teste);

        }
        else{
            element2.classList.remove(teste);
        }
       
    }))

    sum = 0;

}

animaNivell();
animaScroll();

if(target.length){
    window.addEventListener ('scroll', debounce(function(){
        animaScroll();
    }, 20) )
}



