const screen=document.getElementById('screen');
   const  buttons = document.querySelectorAll('button');
let screenValue = '';
let y=0;
for(const item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText = e.target.innerText;
        console.log('Button text is ',buttonText);
        if(buttonText=='pow'){
            buttonText = '**';
            screenValue += buttonText;
            screen.value = screenValue;    
        }
        else if(buttonText=='√')
        {
            let rootValue = Math.sqrt(eval(screenValue));
            screen.value = rootValue;
             screenValue = rootValue; 
        }
        else if(buttonText == 'clear'){
            screenValue = "";
            screen.value = screenValue; 
        }
        else if(buttonText=='del')
        {
            // console.log(screenValue);
            let size=screenValue.length;
            let z= Number(screenValue);
            if(z&&y==-1)
                buttonText.disabled=true;
            else
            {
            screenValue=screenValue.substring(0,size-1);
            screen.value=screenValue;
            }
            
        }
        else if(buttonText == '='){
            // screenValue += buttonText;
            // try {
            //     screen.value = eval(screenValue);
            //   } catch (error) {
            //     screen.value = 'Invalid Expression';
            //   }
            //  y=-1;
            screenValue=eval(screenValue);
            screen.value =screenValue ;
            // console.log(screenValue);
        }
        else{
            screenValue += buttonText;
            screen.value = screenValue; 
        }
    })
}