import './App.css';
import React, { useState } from 'react';
import back from './icons/back.jpg'
function App() {

  const [di, setDi] = useState('');


  var globr = null

  function cal(a) {


    console.log("in 1 : ", di)
    if (/[+*-/%]$/g.test(a)) {
      if (/[+*-/%]$/g.test(di)) {
        console.log('in special')
        setDi(di.slice(0, di.length - 1) + a)
        return
      }
    }


    switch (a) {
      case 'C':
        setDi('')
        return

      case 'del':
        setDi(di.slice(0, di.length - 1))
        return

      case 'sign':
        sqrroo(3)
        return

      case 'sqr':
        sqrroo(1)
        return

      case 'roo':
        sqrroo(0)
        return

      default:
        setDi(di + a)
    }

  }


  function sqrroo(u) {
    if (!/[+*-/%]$/g.test(di)) {    // If the number to be squared is not an operator (that is the string at the last index should !== operator)

      // calcu length of the string(number) that is going to be squared , we find it's length to find the closest operator to it

      // To see if the string at last index is number or float 

      let srList = di.split(/[+-/*%(]/).reverse()
      console.log("srList is : ", srList)
      let temp = parseInt(srList)  // u=1 then int else float 
      console.log("temp is : ", temp)

      let len = temp.toString().length   // length of the number that is going to be squared

      if (di.at(-(len) - 1) === '.') {   // if true means it is a float value 
        temp = parseFloat(srList[1] + '.' + srList[0])
        len = temp.toString().length
        console.log("temp is : ", temp)
      }
      let temp1 = null;

      if (u === 3) {   // if sign choosen
        console.log("======")

        console.log("in sign")
        temp1 = temp
        temp1 = temp1.toString()
        const pss = di.lastIndexOf(di.at((-len) - 1))
        if (/[+-]/.test(di[pss])) {   // if the closest operator is + or -

          console.log("yes it is + or -")
          let sig = null
          di[pss] === '+' ? sig = '-' : sig = '+'
          setDi(di.slice(0, pss) + sig + di.slice(pss + 1,))
        }
        else {
          console.log("IN ELSE")

          setDi(di.slice(0, pss + 1) + '-' + temp1)
        }

        console.log("======")
        return


      }

      temp1 = u ? Math.pow(temp, 2) : Math.sqrt(temp)   // u===1 for squaring and u===0 for square root

      console.log("temp1 is : ", temp1)
      let tempS = temp1.toString()
      console.log("tempS is : ", tempS)

      // const ps = di.lastIndexOf('+')
      const ps = di.lastIndexOf(di.at((-len) - 1))    // Index of closes operator

      setDi(di.slice(0, ps + 1) + tempS)
      return
    }
    else return

  }



  function caly() {
    console.log('in caly 11')

    if (/[-*+/%()]/.test(di)) {       // Do calculation if any operator is present
      globr = eval(di).toString()
      setDi(eval(di).toString())

    }
    // else {                        // Do nothing if no operator is present
  }


  return (
    < div className="App" >
      <div className="contain">
        <div className="cells">{di}</div>
        <button className="cells" onClick={() => cal('(')}>(</button>
        <button className="cells" onClick={() => cal(')')}>)</button>
        <button className="cells" onClick={() => cal('C')}>C</button>
        <button className="cells" onClick={() => cal('del')}><img src={back} alt="back" /></button>
        <button className="cells" onClick={() => cal('/')}>1/x</button>
        <button className="cells" onClick={() => cal('sqr')}>x²</button>
        <button className="cells" onClick={() => cal('roo')}>√x</button>
        <button className="cells" onClick={() => cal('%')}>÷</button>
        <button className="cells" onClick={() => cal(7)}>7</button>
        <button className="cells" onClick={() => cal(8)}>8</button>
        <button className="cells" onClick={() => cal(9)}>9</button>
        <button className="cells" onClick={() => cal('*')}>*</button>
        <button className="cells" onClick={() => cal(4)}>4</button>
        <button className="cells" onClick={() => cal(5)}>5</button>
        <button className="cells" onClick={() => cal(6)}>6</button>
        <button className="cells" onClick={() => cal('-')}>-</button>
        <button className="cells" onClick={() => cal(1)}>1</button>
        <button className="cells" onClick={() => cal(2)}>2</button>
        <button className="cells" onClick={() => cal(3)}>3</button>
        <button className="cells" onClick={() => cal('+')}> +</button>
        <button className="cells" onClick={() => cal('sign')}>+/-</button>
        <button className="cells" onClick={() => cal(0)}>0</button>
        <button className="cells" onClick={() => cal('.')}>.</button>
        <button className="cells" onClick={caly} id='eq'>=</button>
      </div>
    </div >
  );
}
export default App;