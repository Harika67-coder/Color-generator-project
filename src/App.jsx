import { useState } from "react";
import Values from 'values.js';
import SingleColor from "./SingleColor";

const App = () => {
  const [color,setColor]=useState('');
  const [colors,setColors]=useState(new Values('#f15025').all(10));
 
 const addColor=(color)=>{
      const newColors=new Values(color).all(10);
      setColors(newColors);
      }
    
  return <section className="main">
    <h4>Color Generator</h4>
    <form className="form-in" onSubmit={(e)=>{
      e.preventDefault();
      addColor(color);
    }}>
        <input type="color" value={color} className="color-input" onChange={(e)=>{
          setColor(e.target.value);
        }}/>  
        <input type="text" value={color} className="text-input" placeholder='#f15025' onChange={(e)=>{
          setColor(e.target.value);
        }}/>
        <button type="submit" style={{background:color,width:"90px",height:"42px",verticalAlign:"top",borderTopLeftRadius:"0px",border:"none",color:"white",letterSpacing:"2px"}}>Submit</button>
        
    </form>
    <SingleColor colors={colors}/>
    
  </section>
};
export default App;
