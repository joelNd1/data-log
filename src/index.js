import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const Lakelist= [
  {id: '1', name: "me", AnnoyingLevel:"low"},
  {id: '2', name: "auntie da", AnnoyingLevel:"N/A"},
  {id: '3', name: "sausage noodle", AnnoyingLevel:"extra high"},
  {id: '4', name: "rosa", AnnoyingLevel:'ultimate'}
  
];


function App({lakes}){
  return( 
    <ul>
     {lakes.map(
       lakes =>(
       <div>
         <h2>{lakes.name}</h2>
         <label>
         Annoyance Level:<p id='heading'>{lakes.AnnoyingLevel}</p>
         <hr/>

         </label>
       </div>
       ))}
    </ul>
  );
}



ReactDOM.render(
<App lakes={Lakelist}/>,
  document.getElementById('root')
); 