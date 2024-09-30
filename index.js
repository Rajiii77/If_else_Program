let ageinput=document.getElementById("ageinput");
let resultage=document.getElementById("result");
let submitage=document.getElementById("submitage");
let age;
submitage.onclick=function(){
    age=ageinput.value;
    age=Number(age);
    if(age>=100){

        resultage.textContent="Too old peoples are not allowed to enter our site";
    }
    else if(age>=18){
        resultage.textContent="You age is enough to enter our site";

    }
    else if(age==0){
        resultage.textContent="You are new born";
    }
    else if(age<0){
         resultage.textContent="You age couldn't be negative"
        
    }
    
    else{
        resultage.textContent="Below 18 are not allowed to enter to our site";
    }
}
