let calculator= document.getElementById("calculator");
let display = document.querySelector(".display");
let keys = document.querySelector(".calcKeys");

keys.addEventListener('click', e =>{
    if(e.target.matches('button')){
        const key = e.target;
        const act = key.dataset.type;
        const keyContent = key.textContent;
        const displNumber = display.textContent;
        const clickedKeyType = calculator.dataset.clickedKeyType;

        //remove pressed class
        Array.from(key.parentNode.children).forEach(k=>
            k.classList.remove("pressed"))

        if(!act){
            if(displNumber === '0' || clickedKeyType === "operator"){
            display.textContent = keyContent;
            }else{
                display.textContent= displNumber + keyContent;
            }
        }
        if(
            act == "add"||
            act == "substruct"||
            act == "multiply"||
            act == "divide" 
        ){
            
         key.classList.add('pressed');
          calculator.dataset.clickedKeyType = 'operator';
          calculator.dataset.firstValue = displNumber;
          calculator.dataset.operator= act;
        }
        if(act == "decimal"){
            display.textContent= displNumber + "."
        }
        if(act== "clear"){
            location.reload();
        }
        if(act =="calculate"){
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displNumber;
            display.textContent = calculate(firstValue,operator,secondValue);

        }

        
    }
})


const calculate = (num1, operator, num2)=>{
    let result = "";

    if(operator === "add"){
        result = parseFloat(num1) + parseFloat(num2);
    }else if(operator === "substruct"){
        result = parseFloat(num1) - parseFloat(num2);
    }else if (operator === "multiply"){
        result = parseFloat(num1) * parseFloat(num2);
    }else if (operator === "divide"){
        result = parseFloat(num1) / parseFloat(num2);
    }
    return result;
}