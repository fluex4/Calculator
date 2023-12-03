let display = document.getElementById("display");
let count = 0;
function appendToInput(input){ 
    display.value+=input;
    console.log(display.value)
}
clearInput=(input)=>{
   
    if(input)
        display.placeholder=`${input}`;
    else{
         if(count<9)        
            count++;
        else
            count='<3';
        display.value="";
        display.placeholder=`Hi again! ${count}`
    }
}
calculate=()=>{
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
        clearInput();
    }
}