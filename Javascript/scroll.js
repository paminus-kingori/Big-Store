const pics =document.querySelectorAll("#pic");
//btns
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');

// let k = 0;
// let l = pics.length - 1; //length
// let first = pics[0].src;
// let last = pics[l].src;

function prevPic(){
    pics[0].src = pics[1].src;
    pics[1].src = last;
    pics[2].src = first;
}
function nextPic(){
    pics[0].src =last;
    pics[2].src = pics[1].src;

    pics[1].src = first;
}
// prev.addEventListener('click',prevPic);
// next.addEventListener('click',nextPic);


// function fr shwing up icn
var up=document.getElementById('up');
window.onscroll=function(){
var scrollPos=window.pageYOffset;
if(scrollPos>100){
    up.classList.add('show');
}
else{
    up.classList.remove('show');
}
}