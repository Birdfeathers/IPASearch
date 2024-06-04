import dictionary from './dictionary.js'
import React, { useState, useEffect, useRef} from "react";

const dictionaryArr = dictionary.split('\n');

// function Search()
// {
//     return <div>
//       dictionaryArr.map((word, indx) => {
//             return <p key = {indx}>{word}</p>
//         })}
//     </div>
// }

function Search()
{
  return <div>
    {
        dictionaryArr.length
        }
  </div>
}

export default Search;