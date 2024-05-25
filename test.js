let wrapper=document.querySelector('form')
wrapper.addEventListener('submit',function(e){
    e.preventDefault()

    const height=parseInt(document.querySelector(".height").value);
    const weight=parseInt(document.querySelector(".weight").value);
    let answer=document.querySelector(".answer")

    if(height===""||height<0||isNaN(height)){
        answer.innerHTML="please give a valid input"
    }
    else if(weight===""||weight<0||isNaN(weight)){
        answer.innerHTML="please give a valid input"
    }
    else{
        const bmi=(weight/((height*height)/10000)).toFixed(2);
        answer.innerHTML=bmi
        
    }
    
})




    