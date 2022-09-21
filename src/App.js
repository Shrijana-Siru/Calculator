import React from "react";
import { useState } from "react";
import "./App.css";

function App() {

const[input,setInput] = useState("");

const handleClick = (e) => {
    setInput(input.concat(e.target.name))
  }
console.log(input);

const clearBtn = () => {
  setInput("");
}

const equals = () => {
  setInput(eval(input).toString())
}



  return (
    <div className="Main-container">
      <div className="screen">
        <input className="textArea" value={input}></input>
      </div>

      <div className="buttons">
        <button className="button gray" onClick={clearBtn}>
          AC
        </button>

        <button className="button gray" name="%" onClick={handleClick}>
          %
        </button>

        <button className="button gray" ame="" onClick={handleClick}>
          +/-
        </button>

        <button className="button orange" name="/" onClick={handleClick}>
          /
        </button>

        <button className="button white" name="7" onClick={handleClick}>
          7
        </button>

        <button className="button white" name="8" onClick={handleClick}>
          8
        </button>

        <button className="button white" name="9" onClick={handleClick}>
          9
        </button>

        <button className="button orange" name="*" onClick={handleClick}>
          *
        </button>

        <button className="button white" name="4" onClick={handleClick}>
          4
        </button>

        <button className="button white" name="5" onClick={handleClick}>
          5
        </button>

        <button className="button white" name="6" onClick={handleClick}>
          6
        </button>

        <button className="button orange" name="-" onClick={handleClick}>
          -
        </button>

        <button className="button white" name="1" onClick={handleClick}>
          {" "}
          1
        </button>

        <button className="button white" name="2" onClick={handleClick}>
          {" "}
          2
        </button>

        <button className="button white" name="3" onClick={handleClick}>
          {" "}
          3
        </button>

        <button className="button orange" name="+" onClick={handleClick}>
          +
        </button>
      </div>

      <div className="lastbtn">
        <button className="button white-zero" name="0" onClick={handleClick}>
          {" "}
          0{" "}
        </button>
        <button className="button white-dot" name="." onClick={handleClick}>
          {" "}
          .{" "}
        </button>
        <button className="button orange-equals" name="=" onClick={equals}>
          {" "}
          ={" "}
        </button>
      </div>
    </div>
  );
}

export default App;
