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
    if(display.value){
        try{
            display.value = eval(display.value);
        }
        catch(error){
            display.value = "Error";
            clearInput();
        }
    }
    
}
function copy(){
    navigator.clipboard.writeText(display.value);
    console.log("copy");
}