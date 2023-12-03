import React, { useState } from "react";
import "./App.css";




const generateRandomPassword =(range,includeUpperCase, includeLowerCase, includeLNumbers, includeSymbols) =>{
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = "1234567890";
  const symbols = `!@#$%^&*()_+:">?<}|{?}`;


  //Here we are checking whether the chekbox is true or not , if chekcbox is true then only we have to inlude characters write follow this process

  let chars = '';
  let newChars = uppercase + lowercase + numberChars + symbols
  if(includeUpperCase) chars += uppercase
  if(includeLowerCase) chars += lowercase
  if(includeLNumbers) chars +=numberChars
  if(includeSymbols) chars +=symbols

  console.log("chars",chars,"charsLength", chars.length)
  console.log("newchars",newChars, "newchars",newChars.length)

  let password = '';

  console.log(range)


  if(includeUpperCase || includeLowerCase || includeLNumbers || includeSymbols){
    for(let i=0 ; i<range; i++){
      const randomPassword = Math.floor(Math.random() * chars.length)
      console.log("passy",randomPassword,"character",chars[randomPassword])
      console.log("if")
      password += chars[randomPassword]
    }
    
  }
  else{
    for(let i=0 ; i<range; i++){
      const randomPassword = Math.floor(Math.random() * newChars.length)
      console.log("passy",randomPassword,"character",newChars[randomPassword])
      console.log("else")
      password += newChars[randomPassword]
  
    }
  }


  

  return password

}

const App = () => {

  const [password, setPassword] = useState("");
  const [includeUpperCase, setIncludeUpperCase] = useState(false);
  const [includeLowerCase, setIncludeLowerCase] = useState(false);
  const [includeLNumbers, setIncludeLNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [range, setRange] = useState(0);
  // console.log(range)



  const handleGeneratePassword = () => {
    const newPassword = generateRandomPassword(
      range,
      includeUpperCase,
      includeLowerCase,
      includeLNumbers,
      includeSymbols
    );
    setPassword(newPassword);
  };

  console.log(password)
 // copy to clipboard
  const handleCopyClipBoard =() =>{
    navigator.clipboard.writeText(password)
    .then(()=>{
      alert("password copied to clipboard")
    }).catch((err)=>{
      console.log('Failed to Copy',err)
    })
  }



  // console.log(includeUpperCase,includeLowerCase,includeLNumbers,includeSymbols)

  return (
    <main className="password-gen">
      <div className="first">
        <h2>Password : {password}</h2>
        <button onClick={handleCopyClipBoard}>copy</button>
      </div>
      <div className="second">
        <h2>charcater length</h2>
        <h2>{range}</h2>
      </div>
      <div className="third">
        <input type="range" min={8} max={30} value={range} onChange={(e)=>setRange(e.target.value)} />
      </div>

      <div className="fourth">

        <div className="fourth-1">
          <div>
            <label htmlFor="includeUpperCase">UpperCase</label>
            <input
              type="checkbox"
              id="includeUpperCase"
              checked={includeUpperCase}
              onChange={(e) => setIncludeUpperCase(e.target.checked)}
            />
          </div>

          {/* //checkbox-2 */}
          <div>
            <label htmlFor="includeLowerCase">LowerCase</label>
            <input
              type="checkbox"
              id="includeLowerCase"
              checked={includeLowerCase}
              onChange={(e) => setIncludeLowerCase(e.target.checked)}
            />
          </div>
        </div>

        {/* // */}

        <div className="fourth-2">
          <div>
            <label htmlFor="includeLNumbers">Numbers</label>
            <input
              type="checkbox"
              id="includeLNumbers"
              checked={includeLNumbers}
              onChange={(e) => setIncludeLNumbers(e.target.checked)}
            />
          </div>
          {/* //4 th */}

          <div>
            <label htmlFor="includeSymbols">Symbols</label>
            <input
              type="checkbox"
              id="includeSymbols"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
            />
          </div>
        </div>
      </div>

      <div className="fifth">
        <h2>strength: </h2>
        <h2>Medium</h2>
      </div>

      <div className="sixth">
        <button onClick={()=>range>0 ? handleGeneratePassword(range): alert("select range to generate password")}>Generate Password</button>
      </div>
    </main>
  );
};

export default App;

