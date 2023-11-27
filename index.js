let numbers=document.querySelectorAll('.numb');
        let result=document.getElementsByClassName('result')[0];

        numbers.forEach(function(n){
            n.addEventListener( 'click', function(){
                    let numbValue=n.textContent;
                        result.textContent+=numbValue;

            });

        });
        let clear=document.querySelectorAll('.clear');

        clear.forEach(function(n){
            n.addEventListener( 'click', function(){
                    let numbValue=n.textContent;
                        result.textContent='';

            });

        });
        let percent=document.querySelectorAll('.percent')[0];
            percent.onclick=()=>{
                    let numbValue=result.textContent;
                    if (numbValue === '') {
        return;}
                    if(numbValue[numbValue.length - 1] === '+' ||
                        numbValue[numbValue.length - 1] === '-' ||
                        numbValue[numbValue.length - 1] === 'x' ||
                        numbValue[numbValue.length - 1] === '÷'||
                        numbValue[numbValue.length - 1]==='%'){
                        
                    let finalValue=numbValue.slice(0,-1);
                    result.textContent =finalValue+'%';
                                    }

                    
                    else{
                    result.textContent+='%';}};
                    

        let backspace=document.querySelectorAll('.backspace');

        backspace.forEach(function(n){
            n.addEventListener( 'click', function(){
                    let numbValue=result.textContent;
                    let finalValue=numbValue.slice(0,-1);
                        result.textContent=finalValue;

            });

        });
        let add=document.querySelectorAll('.add')[0];
            add.onclick=()=>{
                    let numbValue=result.textContent;
                if(numbValue[numbValue.length - 1] === '+' ||
                        numbValue[numbValue.length - 1] === '-' ||
                        numbValue[numbValue.length - 1] === 'x' ||
                        numbValue[numbValue.length - 1] === '÷' ||
                        numbValue[numbValue.length - 1] === '%'){
                    let finalValue=numbValue.slice(0,-1);
                    result.textContent = finalValue + '+';
                                    }
                    else
                    result.textContent+='+'};
            let minus=document.querySelectorAll('.minus')[0];
            minus.onclick=()=>{
                    let numbValue=result.textContent;
                    if(numbValue[numbValue.length - 1] === '+' ||
                        numbValue[numbValue.length - 1] === '-' ||
                        numbValue[numbValue.length - 1] === 'x' ||
                        numbValue[numbValue.length - 1] === '÷' ||
                        numbValue[numbValue.length - 1] === '%'){
                    let finalValue=numbValue.slice(0,-1);
                    result.textContent = finalValue + '-';
                                    }
                    else
                    result.textContent+='-'};
                    let mult=document.querySelectorAll('.mult')[0];
            mult.onclick=()=>{
                    let numbValue=result.textContent;
                    if (numbValue === '') {
        return;}
                    if(numbValue[numbValue.length - 1] === '+' ||
                        numbValue[numbValue.length - 1] === '-' ||
                        numbValue[numbValue.length - 1] === 'x' ||
                        numbValue[numbValue.length - 1] === '÷' ||
                        numbValue[numbValue.length - 1] === '%'){
                    let finalValue=numbValue.slice(0,-1);
                    result.textContent = finalValue + 'x';
                                    }
                    else
                    result.textContent+='x'};
                    let division=document.querySelectorAll('.division')[0];
            division.onclick=()=>{
                    let numbValue=result.textContent;
                    
                    if (numbValue === '') {
        return;}
                    if(numbValue[numbValue.length - 1] === '+' ||
                        numbValue[numbValue.length - 1] === '-' ||
                        numbValue[numbValue.length - 1] === 'x' ||
                        numbValue[numbValue.length - 1] === '÷' ||
                        numbValue[numbValue.length - 1] === '%'){
                    let finalValue=numbValue.slice(0,-1);
                    result.textContent = finalValue + '÷';
                                    }
                    else
                    result.textContent+='÷'};
           let equals=document.querySelectorAll('.equals')[0]; 
                    equals.onclick=()=>{
                        let evalString = result.textContent.replace(/%/g, "*(1/100)*");
                            evalString = evalString.replace(/x/g, "*");
                            evalString = evalString.replace(/÷/g, "/");
                            try {
                        let numbValue=eval(evalString);
                            result.textContent=numbValue;}
                            catch(error){
                                result.textContent='Error';
                            }
                    }