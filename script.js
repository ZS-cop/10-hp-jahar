let text = document.getElementById("title");
let ins = document.getElementById("link");

window.addEventListener("scroll" , ()=>{
         let val = window.scrollY;
         text.style.marginLeft = `${val}px`;
         ins.style.marginLeft = `${val}px`;
});

let type = new Typed("#firtext" , {
         strings: ["YOU CAN'T DEFEAT A MONSTER"] , 
         typeSpeed:150 , 
         backSpeed:150 ,
         loop: true
});
let type2 = new Typed("#sectext" , {
         strings: ["EVEN GOD CAN'T DEFEAT HIM"] , 
         typeSpeed:150 , 
         backSpeed:150 ,
         loop: true
});
let type3 = new Typed("#trtext" , {
         strings: ["BECAUSE ..." , "HE IS THE CREATOR OF THIS UNIVERSE"] , 
         typeSpeed:150 , 
         backSpeed:150 ,
         loop: true
});