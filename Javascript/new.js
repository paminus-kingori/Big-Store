//animating the like btn
const likeBtn = document.querySelectorAll('#emptyLove');
const liked = document.querySelectorAll('#Love');
console.log(likeBtn.length);
console.log(liked);
let length = likeBtn.length - 1;


function likeAct(array1,array2,i){
array1[i].addEventListener('click',function(){
        array1[i].style.display = 'none';
        array2[i].style.display = "block";
});
array2[i].addEventListener('click',function(){
    array2[i].style.display = 'none';
    array1[i].style.display = 'block';
});
}

for(x=0;x<=length;x++){
likeAct(likeBtn,liked,x);
}