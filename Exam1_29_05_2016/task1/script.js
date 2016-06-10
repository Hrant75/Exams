function calculate(){
    console.log('func calc');

    for(i=1; i<5; i++){
        var element = document.getElementById('colInput'+i);
        var val = element.value;

        console.log(i);

        if(typeof val  == 'NaN' || val == ''){
            console.log('not number');
            element.placeholder='number please';
            return;
        }
        val = parseInt(element.value);
        if(val < 0 || val > 100){
            element.value=0;
            alert('value of column '+i+' shuld be between 0 and 100');
            return;
        }
        console.log('end of function');
        document.getElementById('column'+i).style.height=val*3+'px';
    }
}