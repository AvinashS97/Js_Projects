(function(){
    
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // code for display input...

    buttons.forEach(function(button){
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    // Code for Display output...

    equal.addEventListener('click', function(e){
        if(screen.value === ''){
            screen.value = "";
        } else {
                answer = eval(screen.value);
                screen.value = answer;   
        }  
    })

    // Code for clear the display...

    clear.addEventListener('click', function(e){
        screen.value = "";
    })

})();