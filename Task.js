const hexa = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
const button = document.getElementById('btn');
const color = document.getElementById('color');
const hex = document.getElementById('hex');

function generate(){
    let hexcolor ='#';
    for(let i=1;i<=6;i++){
        hexcolor += randomcode();
    }
    container.style.backgroundColor = hexcolor;
    color.innerHTML = hexcolor;
}

function randomcode(){
    let colorcode = Math.floor(Math.random()*16);
    return hexa[colorcode];
}