function calc()
            {
                var n1 = parseFloat(document.getElementById('n1').value);
                var n2 = parseFloat(document.getElementById('n2').value);
                var oper = document.getElementById('operators').value;

                if(document.getElementById("n1").value.length == 0)
                {
                    alert("Fill Num 1 please");
                    document.getElementById("n1").style.border="2px solid red";

                  /*  var link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.type ='text/css';
                    link.href = 'field.css'; */
                    
                }
                else if(document.getElementById("n2").value.length == 0)
                {
                    alert("Fill Num 2 please");
                    document.getElementById("n2").style.border="2px solid red";
                }

                
                if(oper === '+')
                {
                    document.getElementById('result').value = n1+n2;
                }
                
                else if(oper === '-')
                {
                    document.getElementById('result').value = n1-n2;
                }
                
                else if(oper === '/')
                {
                    document.getElementById('result').value = n1/n2;
                }
                
                else if(oper === 'X')
                {
                    document.getElementById('result').value = n1*n2;
                }

                if(result.value === "NaN")
                {
                   
                   window.alert("Please enter the proper value");
                }
            }


setInterval(function(){
    document.getElementById("n1").value = ''; 
    document.getElementById("n2").value = ''; 
    document.getElementById("result").value = ''; 
    document.getElementById("operators").value = 'sp';
}, 10000)