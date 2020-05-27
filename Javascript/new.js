//animating the like btn
const emptyLikeBtn = document.querySelectorAll('#emptyLove');
const Liked = document.querySelectorAll('#Love');
console.log(emptyLikeBtn.length);
console.log(Liked);
let length = emptyLikeBtn.length - 1;


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
likeAct(emptyLikeBtn,Liked,x);
}