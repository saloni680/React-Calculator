import { useState } from "react";
import "./styles.css";

export default function App() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    let n = e.target.value;
    setNum(num + n);
  };

  const handleClear = () => {
    setNum("");
    setResult("");
  };

  const finalResult = () => {
    let res = eval(num);
    setResult(res + "=");
  };
  const handleX = () => {
    setNum(num.substring(0, num.length - 1));
    setResult("");
  };

  return (
    <div className="container">
      <div className="calci">
        <div className="display">
          <div className="disp">
            {num}
            <div className="disp1">{result}</div>
          </div>
        </div>

        <div className="inputButtons">
          <div className="buttons">
            <button label="C" value="C" onClick={handleClear}>
              C
            </button>
            <button label="X" value="X" onClick={handleX}>
              X
            </button>
            <button label="%" value="%" onClick={handleClick}>
              %
            </button>
            <button label="/" value="/" onClick={handleClick}>
              /
            </button>
            <button label="7" value="7" onClick={handleClick}>
              7
            </button>
            <button label="8" value="8" onClick={handleClick}>
              8
            </button>
            <button label="9" value="9" onClick={handleClick}>
              9
            </button>
            <button label="*" value="*" onClick={handleClick}>
              *
            </button>
            <button label="4" value="4" onClick={handleClick}>
              4
            </button>
            <button label="5" value="5" onClick={handleClick}>
              5
            </button>
            <button label="6" value="6" onClick={handleClick}>
              6
            </button>
            <button label="-" value="-" onClick={handleClick}>
              -
            </button>
            <button label="1" value="1" onClick={handleClick}>
              1
            </button>
            <button label="2" value="2" onClick={handleClick}>
              2
            </button>
            <button label="3" value="3" onClick={handleClick}>
              3
            </button>
            <button label="+" value="+" onClick={handleClick}>
              +
            </button>
            <button label="00" value="00" onClick={handleClick}>
              00
            </button>
            <button label="0" value="0" onClick={handleClick}>
              0
            </button>
            <button label="." value="." onClick={handleClick}>
              .
            </button>
            <button label="=" value="=" onClick={finalResult}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
