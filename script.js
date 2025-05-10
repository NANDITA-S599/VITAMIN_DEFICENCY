function display(a){
    let disp=document.getElementById("disp")
    if(disp.innerHTML=='0'){
        disp.innerHTML=a
    }else{
    ddisp.innerHTML=disp.innerHTML+a//disp.innerHTML+=a
    }
}
function u_clear(){
    let disp=document.getElementById("disp")
    disp.innerHTML=0  
} 
function calculate(){
    let data=document.getElementById("disp")
    let expression= data.innerHTML
    //console.log(expression)
    let result=eval(expression)
    console.log(result)
    data.innerHTML=result
}
