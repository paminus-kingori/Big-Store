 // home icon
        
 const full = document.getElementById('full');
 const ex = document.getElementById('ex');
 const href = document.getElementById('href');


 full.addEventListener('click',function(){
     full.classList.add('removeIcon');
     ex.classList.add('showIcon');
     href.style.display = 'flex';
 });
 ex.addEventListener('click',function(){
     full.classList.remove('removeIcon');
     ex.classList.remove('showIcon');
     href.style.display = 'none';
 });
 
 // end of home icon