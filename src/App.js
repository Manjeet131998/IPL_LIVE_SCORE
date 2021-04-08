import React,{Fragment, useEffect, useState} from "react";
import logo from './logo.svg';
import './App.css';
import {Button, Grid} from "@material-ui/core";
import Navbar from './components/Navbar';
import MyCard from './components/MyCard';
import {getMatches} from './api/Api';

function App() {

  const [matches, setMatches] = useState([]);


  useEffect (()=>{
    {getMatches().then((data)=>{
      setMatches(data.matches)
      console.log(data.matches);
    }).catch((error)=>alert('could not load'));}

  },[]);
  return (
    <div className="App">
        <Navbar/>
        
      <h1>Cricket Live Score!!</h1>
     <Grid container>
       <Grid sm="2">

       </Grid>
       <Grid sm="8">
       {
        matches.map((match)=>(
          <MyCard match={match}/>
        ))
      }
       </Grid>

     </Grid>


      
    
      
      </div>
  );
}

export default App;
