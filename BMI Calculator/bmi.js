const form=document.querySelector('form');
form.addEventListener('submit',function (e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const result=document.querySelector('#results');
     const weightguide=document.querySelector('#weight-guide')
    if(height==='' || height<0 || isNaN(height))
    {
        result.innerHTML=`Please Give  a Valid height ${height}`;
        //   weightguide.innerHTML=` <p>Your Weight is Under Weight ${result}</p>`
    }
    else if(weight==='' || weight<0 || isNaN(weight))
    {
        result.innerHTML=`Please Give  a Valid weight ${weight}`;
    }
    else{
        const bmi=(weight/(height*height/10000)).toFixed(2);
        result.innerHTML=`${bmi}`
    }
})
