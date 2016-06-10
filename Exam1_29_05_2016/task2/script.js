function calculate() {

    document.getElementById('inp1').style.border= '1px solid #ccc';
    document.getElementById('inp2').style.border= '1px solid #ccc';

    var x = document.getElementById('inp1').value;
    var y = document.getElementById('inp2').value;
    var z;

    if(x=='' || y=='') return;


    if(isNaN(x)){
        document.getElementById('inp1').style.border= '3px solid red';
        return;
    }
    if(isNaN(y)){
        document.getElementById('inp2').style.border= '3px solid red';
        return;
    }

    x=parseInt(x);
    y=parseInt(y);


    switch(document.getElementById('mySelect').value) {
        case '+':
               z=x+y;
            break;
        case '-':
              z=x-y;
            break;
        case '/':
                z=x/y;
            break;
        case '*':
                 z=x*y;
            break;
    }

    document.getElementById("out3").value = z;
}