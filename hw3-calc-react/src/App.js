import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CalcDisplay from './CalcDisplay';
import ButtonPannel from './ButtonPanel';
import { useEffect, useState } from 'react';

function App() {
  const [calcReady, setCalcReady] = useState(false);

  function sFact(num)
  {
      var rval=1;
      for (var i = 2; i <= num; i++)
          rval = rval * i;
      return rval;
  }

  /* array of all buttons */
  let btns = document.querySelectorAll('button');
  console.log(btns.length);

  /* the screen of the calculator */
  let calcScreen = document.getElementById('oPrint');

  // re render page after 1s
  setTimeout(() => {
    if(calcReady === false)
      setCalcReady(true)
  }, 1000);



  useEffect(()=>{
    let realData = '';   
    btns.forEach(function (btn) {

      // AC button. Clear the calculator screen
      if(btn.id=== "clear")
      {
        btn.addEventListener('click', function(){
          realData ="";
          calcScreen.value ="";
  
        });
      }
      else if(btn.id === "zero")
      {
        btn.addEventListener('click', function(){
          const val = btn.innerHTML
          if(calcScreen.value.length >= 1 && calcScreen.value[0]!== "0")
          {
            realData = realData + val;
            calcScreen.value = calcScreen.value + val;
          }
          else
          {
            realData = 0;
            calcScreen.value = 0;
          }
        });
      }
      else if(btn.id ==="fact"){
        btn.addEventListener('click', function(){
          if(realData !== "")
          {
            calcScreen.value = sFact(eval(realData));
          }
        });

      }
      // = 'equal' button; evaluate screen 
      else if(btn.id ==="equal")
      {
        btn.addEventListener('click', function(){
          calcScreen.value = eval(realData);
          console.log(realData);
        });
        
      }
      // handles power button
      else if(btn.name ==="pow")
      {
        btn.addEventListener('click', function() {
          realData = eval(realData) + btn.value;
          calcScreen.value = calcScreen.value + "^";
        });
  
      }
      // button for that require to use the math module. cos, sin, log
      else if (btn.name ==="math")
      {
        btn.addEventListener('click', function(){
          const val = btn.value;
          if(realData !== "")
          {
            /* if button has value 'sqrt'; data = Math.sqrt(data) */
            realData = "Math." + val + "(" + eval(realData) + ")";
            calcScreen.value = eval(realData);
          }
        });
  
      }
      // button that looks different than CS equivalent
      // ex: multiplication: x vs *; div : / vs &div;
      else if(btn.name ==="difVal")
      {
        btn.addEventListener('click', function() {
          const val = btn.value;
          realData = realData + btn.value;
          calcScreen.value = calcScreen.value + val;
        });
      
      }
      else if(btn.id === "deg"){
        btn.addEventListener('click', function() {

        });

      }
      // the rest of the buttons: Add it to the screen 
      else
      {
        btn.addEventListener('click', function() {
        const val = btn.innerHTML;
        if(calcScreen.value[0]=== "0")
        {
          realData = realData + val;
          calcScreen.value = val;
        }
        else
        {
          realData = realData + val;
          calcScreen.value = calcScreen.value + val;
        }

      });
  
      }
    
    });
    
  })

  return (
    <div>
      <CalcDisplay/>
      <ButtonPannel/>
    </div>
  );
}

export default App;
