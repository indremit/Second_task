import React from 'react';
import './App.css';

let numberResult: string;
let sameResult: string;
let mathResult: string;
let wavePatternResult: string;
let chainResult: string;


function App() {

  // 1
  const numbersArray = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  numberFunction(numbersArray);

  // 2
  let line = "dkkddd";
  sameFunction(line);

  // 3
  let mathArray;
  mathArray=[65, 60, 75, 55, 60, 63, 64, 45];
  mathFunction(mathArray);

  // 4
  let stringForWave: string = "hello";
  wavePattern(stringForWave);

  // 5
  let chain: string;
  let charArray: Array<number> = [];
  let reducedChain: string;
 
  chain = "ebcBdDbDCBdDdbEBpP";

  for(let i=0; i < chain.length; i++) {
    charArray.push(chain.charCodeAt(i));
  }

  reducedChain = reduceChain(charArray);
  chainResult = (reducedChain.length).toString();

  return (
    <div className="App">
      <header className="App-header">

        <p>
          1. Write a function that takes the average of an array of number and returns the nearest whole number.
          <br></br>
          <b>Data:</b> [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
          <br></br>
          <b>Result:</b> {numberResult}
        </p>

        <p>
          2. Write a function which checks if the same amount of 'd' and 'k' is in the string.
          <br></br>
          <b>Data:</b> "dkkddd"
          <br></br>
          <b>Result:</b> {sameResult}
        </p>

        <p>
        3. Write a function which would:
          <br></br>
          1) Multiply each number by itself. 2)Add them all together. 3)Take the square root of the result. 4)Divide by two.
          <br></br>
          <b>Data:</b> [65, 60, 75, 55, 60, 63, 64, 45]
          <br></br>
          <b>Result:</b> {mathResult}
        </p>

        <p>
        4. Create a wave pattern out of a string.
          <br></br>
          <b>Data:</b> "hello"
          <br></br>
          <b>Result:</b> {wavePatternResult}
        </p>

        <p>
        5. Chain reduction. How many units remain after fully reacting the polymer in the provided sequence?
          <br></br>
          <b>Data:</b> "ebcBdDbDCBdDdbEBpP"
          <br></br>
          <b>Result:</b> {chainResult}
        </p>

      </header>
    </div>
  );
}
export default App;

  
function numberFunction(nr: any){
  let sum = 0;
  for( let i = 0; i < nr.length; i++ ){
      sum += nr[i];
  }

  const avg = sum/nr.length;
  numberResult = (Math.round(avg)).toString();
}

function sameFunction(lettersArray: string){
  let sumK = 0;
  let sumD = 0;
  let result: boolean;

  for( let i = 0; i < lettersArray.length; i++ ){
    if (lettersArray[i] === 'd'){
      sumD++;
    }
    if (lettersArray[i] === 'k'){
      sumK++;
    }

    if (sumD == sumK) {
      result = true;
    } else {
      result = false;
    }
    sameResult = result.toString();
  }
}

function mathFunction(math: any){
  let math2 = [];
  let sum: number = 0;
  let mResult;
  console.log('math 1: ', math);
  
  for (let i = 0; i < math.length; i++) {
    // Multiply each number by itself.
    math2.push(math[i] * math[i]);
    // Add them all together
    sum += (math[i] * math[i]);
  }
  // Take the square root of the result
  Math.sqrt(sum);
  mResult = (Math.sqrt(sum))/2;
  mathResult = mResult.toString();
}

function wavePattern(line: any){
  let stringArray = [];
  let stringStart;
  let stringEnd;
  let newString: string;

  line.toLowerCase();

  for (let i = 0; i < line.length; i++) {
    stringStart = line.slice(0, i);
    stringEnd = line.slice(i+1);
    newString = stringStart + line.charAt(i).toUpperCase() + stringEnd;

    stringArray.push(newString);
  }
  wavePatternResult = stringArray.toString();
}

function reduceChain(line: any): any {
  let line0: Array<number> = [];
  line0 = line;
  let newChain: Array<number> = [];

  for(let i=0; i < line.length; i++) {
    let firstChar: number;
    let secondChar: number;

    firstChar = line[i];
    secondChar = line[i+1];
    if ((firstChar - secondChar == 32) || (secondChar - firstChar == 32)){
      i++;
    } else {
      newChain.push(line[i]);
    }  
  }

  if (line0.length === newChain.length) {
    return newChain;
  } else if (line0.length !== newChain.length) {
    return reduceChain(newChain);
  }
}

