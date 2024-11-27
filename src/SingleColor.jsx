import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
const SingleColor = ({colors}) => {
  
  return <section className='colors'>
     {colors.map((color,index)=>{
          const {hex,weight}=color;
          const saveToClipboard=async ()=>{
            if(navigator.clipboard)
            {
              try{
                await navigator.clipboard.writeText(`#${hex}`);
                toast.success('Color copied to clipboard');
              }
              catch(error)
              {
                toast.error('Failed to copy color to clipboard');
              }
            }
            else{
              toast.error('clipboard access not available');
            }
          }
          return (
          <article className={index>10?'color-light':'color'} style={{background:`#${hex}`}} key={index} onClick={saveToClipboard}>
            <p>{weight}%</p>
           <p>#{hex}</p>
          </article>
          )
    })}
    <ToastContainer position='top-center' />
  </section> 
}

export default SingleColor