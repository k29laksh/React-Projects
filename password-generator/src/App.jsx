import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "~`!@#$%^&*()_";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const passwordRef= useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password)
  }, [password])

  // const handleLengthChange = (e) => {
  //   setLength(e.target.value);
  // };

  // const handleNumberChange = () => {
  //   setNumberAllowed(!numberAllowed);
  // };

  // const handleCharChange = () => {
  //   setCharAllowed(!charAllowed);
  // };

  return (
    <div className="text-white w-full max-w-lg mx-auto shadow-md rounded-lg text-center bg-gray-800 mt-10">
      <div className="text-2xl pt-8">Password generator</div>

      <div className="my-4 rounded-lg inline-block overflow-hidden">
        <input
          className="outline-none w-64 px-2 py-2 text-black"
          type="text"
          value={password}
          placeholder="Password"
          ref={passwordRef}

          readOnly
        />
        <button onClick={copyPasswordToClipboard} className="outline-none bg-red-500 hover:bg-red-600 text-white h-10 px-1">
          Copy
        </button>
      </div>

      <div className="flex items-center gap-x-4 justify-center pb-8">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            max={100}
            min={0}
            value={length}

            // onChange={handleLengthChange}
            className="cursor-pointer w-28"
            onChange={(e) => {setLength(e.target.value)}}
            />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="number"
            checked={numberAllowed}
            // onChange={handleNumberChange}
            onChange={()=>{setNumberAllowed(prev=>!prev)}}
          />
          <label className="" htmlFor="number">
            Number
          </label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="char"
            checked={charAllowed}
            // onChange={handleCharChange}
            onChange={()=>{setCharAllowed(prev=>!prev)}}

          />
          <label className="" htmlFor="char">
            Character
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
