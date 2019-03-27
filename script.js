function addMenu(){
    const a = document.createElement('ul');
    a.classList.add('ul-menu');
    document.querySelector('.rolled-menu').appendChild(a);
    const b = document.createElement('li');
    b.innerHTML='<a href="index.html">Strona glowna</a>';
    const c = document.createElement('li');
    c.innerHTML='<a href="aboutus.html">O nas</a>';
    const d = document.createElement('li');
    d.innerHTML='<a href="offert.html">Oferta</a>';
    const e = document.createElement('li');
    e.innerHTML='<a href="cars.html">Samochody</a>';
    const f = document.createElement('li');
    f.innerHTML='<a href="contact.html">Kontakt</a>';
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
    const a = document.querySelector('.ul-menu');
    a.remove('ul');
    
}
document.querySelector('.menu').addEventListener('click', function(){
    const check = document.querySelector('.ul-menu');
    if(check){
        removeMenu();
    }else{
        addMenu();
    }
    
    
},{passive: true});
document.querySelector('.menu').addEventListener('touch', function(){
    const check = document.querySelector('.ul-menu');
    if(check){
        removeMenu();
    }else{
        addMenu();
    }
    
    
},{passive: true});


