function addMenu(){
    let a = document.createElement('ul');
    a.classList.add('ul-menu');
    document.querySelector('.rolled-menu').appendChild(a);
    let b = document.createElement('li');
    b.innerHTML='Strona glowna';
    let c = document.createElement('li');
    c.innerHTML='O nas';
    let d = document.createElement('li');
    d.innerHTML='Oferta';
    let e = document.createElement('li');
    e.innerHTML='Samochody';
    let f = document.createElement('li');
    f.innerHTML='Kontakt';
    a.animate({
        opacity: [ 0, 0.9, 1 ],       
        offset: [ 0, 0.8 ],
        
        
         
      }, 2000);
    document.querySelector('.ul-menu').appendChild(b);
    document.querySelector('.ul-menu').appendChild(c);
    document.querySelector('.ul-menu').appendChild(d);
    document.querySelector('.ul-menu').appendChild(e);
    document.querySelector('.ul-menu').appendChild(f);
}
function removeMenu(){
    let a = document.querySelector('.ul-menu');
    a.remove('ul');
    
}
document.querySelector('.menu').addEventListener('click', function(){
    let check = document.querySelector('.ul-menu');
    if(check){
        removeMenu();
    }else{
        addMenu();
    }
    
    
});


