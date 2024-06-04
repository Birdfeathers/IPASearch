
import './App.css';
//import Search from './WordSearch';

import dictionary from './dictionary'
import React, { useState, useEffect, useRef} from "react";

const dictionaryObj = {};
const reverseDict = {};

const ArpabettoIPA = {
  AA:"ɑ", //vowel, monophthong
  AE:"æ", //vowel, monophthong
  AH:"ə", //vowel, monophthong
  AO:"ɔ", //vowel, long monophthong
  AW:"aw", //vowel, diphthong
  AY:"aj", //vowel, diphthong
  EH:"ɛ", //vowel, monophthong
  ER:"ɚ", //vowel, r-colored
  EY:"ej", //vowel, diphthong
  IH:"ɪ", //vowel, monophthong
  IY:"i", //vowel, long monophthong
  OW:"ow", //vowel, diphthong
  OY:"oj", //vowel, diphthong
  UH:"ʊ", //vowel, monophthong
  UW:"uw", //vowel, diphthong (sometimes this one is considered a long monophthong instead)
  B:"b", //consonant, labial stop
  CH:"tʃ", //consonant, postalveolar affricate (or alveolar)
  D:"d", //consonant, alveolar stop
  DH:"ð", //consonant, interdental fricative (or alveolar)
  F:"f", //consonant, labiodental fricative (or labial)
  G:"g", //consonant, velar stop
  HH:"h", //consonant, glottal fricative
  JH:"dʒ",
  K:"k",
  L:"l",
  M:"m",
  N:"n",
  NG:"ŋ",
  P:"p",
  R:"ɹ",
  S:"s",
  SH:"ʃ",
  T:"t",
  TH:"θ",
  V:"v",
  W:"w",
  Y:"j",
  Z:"z",
  ZH:"ʒ"
}

function stressHandler(terminalChar, IPAChar)
{ 
  if(!IPAChar) return;
  let ending = "";
  if(IPAChar.length == 2){
    ending = IPAChar[1];
    IPAChar = IPAChar[0];
  }
  if(terminalChar == "1"){
   IPAChar = IPAChar + "\u0301";
   
  }
  if(terminalChar == "2")
    IPAChar = IPAChar + "\u0300";
  IPAChar = IPAChar + ending;
  return IPAChar;
}

function AddAppend(key, value, list)
{
  if(list[key]) {
    list[key].push(value);
  }
  else {
    list[key] = [value];
  }
}

function processEntry(word)
{
  word = word.split(" ");
  word[0] = word[0].split("(")[0];// takes away paranthesis

  let IPA = "";
  for(let i=2; i < word.length; i++)
  {
    let letter = word[i];
    const terminalChar = letter[letter.length -1];
    if( terminalChar=== "1" || terminalChar === "0" || terminalChar === "2")
    {
      letter = letter.slice(0, -1);

    }

    let IPAChar = ArpabettoIPA[letter]
    IPAChar = stressHandler(terminalChar, IPAChar);
    IPA = IPA.concat(IPAChar)

  }

  const spelling = [word[0]];

  AddAppend(spelling, IPA, dictionaryObj);
  AddAppend(IPA, spelling, reverseDict);

}

function returnEntryList()
{
  const wordList = dictionary.split('\n');
  wordList.forEach(word => processEntry(word))

}

returnEntryList();

function SearchCriteria({setResults: setResults, results: results})
{
  const [spellingSearch, setSpellingSearch] = useState([]);
  const [mode, setMode] = useState("spelling");
  return<form onSubmit = { async(event) =>{
    event.preventDefault();
    {if(mode == "spelling")
       setResults(dictionaryObj[spellingSearch.toUpperCase()])
    else
        setResults(reverseDict[spellingSearch])
    }
    
    

}}>
    <select onChange = {(event) => {
      setMode(event.target.value)
    }}>
      <option value = "spelling">
        <p>Search by spelling</p>
      </option>
      <option value= "IPA">
        <p>Search by pronunciation</p>
      </option>
    </select>
     <input type = "text" placeholder = "Word Spelling"  value={spellingSearch}  
    onChange={(event) => {
        setSpellingSearch(event.target.value);
            }}/>
    <input type = "submit"></input>
</form>
}


function Search()
{
 
  //const shown = dictionaryArr[0]
  const [results, setResults] = useState([]);
  //const [spellingSearch, setSpellingSearch] = useState([]);

  return <div>
 {/* <form onSubmit = { async(event) =>{
            event.preventDefault();
            setResults(dictionaryObj[spellingSearch.toUpperCase()])

        }}>
             <input type = "text" placeholder = "Word Spelling"  value={spellingSearch}  
            onChange={(event) => {
                setSpellingSearch(event.target.value);
                    }}/>
            <input type = "submit"></input>
        </form> */}
{<SearchCriteria  setResults = {setResults} results = {results}/>}
  <h2>Results: </h2>
  {!results? <p>This word is not in the dictionary.</p>: 
        results.map((word, indx) => {
            return <p key = {indx}>{word}</p>
        })}
  </div>
}

function App() {
  return (
    <div className="App">
  
      
        <h1>Type in a word. </h1>
      
      <Search /> 
    </div>
  );
}

export default App;
 
// search for pronunciation 
// search for minimal pairs
// search for categories of sounds
