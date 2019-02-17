function addMenu(){
    let a = document.createElement('ul');
    a.classList.add('ulMenu');
    document.querySelector('body').appendChild(a);
    let x = document.createElement('li');
    x.innerHTML='haha';
    let y = document.createElement('li');
    y.innerHTML='hehe';
    let z = document.createElement('li');
    z.innerHTML='hihi';
    document.querySelector('.ulMenu').appendChild(x);
    document.querySelector('.ulMenu').appendChild(y);
    document.querySelector('.ulMenu').appendChild(z);
}
function removeMenu(){
    let a = document.querySelector('.ulMenu');
    a.remove('ul');
    
}
document.querySelector('.menu').addEventListener('click', function(){
    let check = document.querySelector('.ulMenu');
    if(check){
        removeMenu();
    }else{
        addMenu();
    }
    
    
});


