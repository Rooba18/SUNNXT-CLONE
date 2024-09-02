document.addEventListener('DOMContentLoaded', () => {
    const imgs=document.getElementById('imgs');
    const lbtn=document.getElementById('left');
    const rbtn=document.getElementById('right');
    const img=document.querySelectorAll('#imgs img');
    let idx=0
    let interval=setInterval(run,3000)
    function run(){
        idx++;
        changeImage();
    }
    function changeImage(){
        if(idx>img.length-1)
        {
            idx=0;
        }
        else if(idx<0)
        {
            idx=img.length-1;
        }
        imgs.style.transform=`translatex(${-idx*700}px)`
    }
    function resetinterval(){
        clearInterval(interval)
        interval=setInterval(run,3000)
    }
    rbtn.addEventListener('click',()=>{
        idx++;
        changeImage();
        resetinterval();
    })
    
    lbtn.addEventListener('click',()=>{
        idx--;
        changeImage();
        resetinterval();
    })
    });
    
    