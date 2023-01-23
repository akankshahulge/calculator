let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) =>{
    
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = "";
      document.querySelector('input').value = string;
    }
    else if (e.target.innerHTML == '√'){
      sqrt();
    }

     else if (e.target.innerHTML == 'CE'){
      string = string.slice(0,-1);
      document.querySelector('input').value = string;
    }

     else if (e.target.innerHTML == 'pi'){
       pi();
     }

     else if (e.target.innerHTML == 'log') {
       log();
     }

     else if (e.target.innerHTML == '^') {
      square();
     }

     else if (e.target.innerHTML == '^3') {
      cube();
     }

     else if (e.target.innerHTML == 'e') {
      backspc();
    }

    else if (e.target.innerHTML == 'sin'){
      sin();
    }

     else if (e.target.innerHTML == 'cos') {
       cos();
     }

    else if (e.target.innerHTML == 'tan') {
       tan();
     }

     else if (e.target.innerHTML == '^10') {
       pow10();
     }

     else if (e.target.innerHTML == 'facto'){
       fact();
     }
     
     else if (e.target.innerHTML == '1/x') {
      divide();
    }

    else{
      console.log(e.target.innerHTML);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  
  });
})
  
  
  function sqrt(){
    string = Math.sqrt(string);
    document.querySelector("input").value = string;
  }

  function cuberoot(){
    string = Math.cbrt(string);
    document.querySelector("input").value = string;
  }

  function pi(){
    string = string*3.14159265359;
    document.querySelector("input").value = string;
  }
  function log(){
    string = Math.log(string);
    document.querySelector("input").value = string;
  }

  function square(){
    string = string*string;
    document.querySelector("input").value = string;
  }

  function cube(){
    string = string*string*string;
    document.querySelector("input").value = string;
  }

  function evalue(){
    string = 2.7182818285;
    document.querySelector("input").value = string;
  }

  function sin(){
    string = Math.sin(string);
    document.querySelector("input").value = string;
  }

  function cos(){
    string = Math.cos(string);
    document.querySelector("input").value = string;
  }

  function tan(){
    string = Math.tan(string);
    document.querySelector("input").value = string;
  }

  function pow10(){
    string = Math.pow(10,string);
    document.querySelector("input").value = string;
  }

  function fact(){
    var facto=1;
    for(var i=string;i>=1;i--){
        facto=facto*i;
    }
    string= facto;
    document.querySelector("input").value = string;

  }

  function divide(){
    string = 1/string;
    document.querySelector("input").value = string;
  }



  

  

  


