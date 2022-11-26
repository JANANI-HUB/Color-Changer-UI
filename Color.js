import React, { useState } from 'react'
import Select from 'react-select'
import './Color.css';

function Form() {
  var colors=[
    {
       value:1,
       label:"Gold"
    },
    {
       value:2,
       label:"Plum"
    },
    {
       value:3,
       label:"Darkseagreen"
    },
    {
       value:4,
       label:"PaleVioletRed"
    },
  ];
  var [setbgcolor,ddlvalue]=useState(colors.label);
  var ddlhandle = (e) => {
    ddlvalue(e.label);
  }
  return (
    <>
    
    <h1>COLOUR CHANGER-UI</h1>
      <div className='h'>
      {/* <style>{'h {background-color:'+setbgcolor+';}'}</style> */}

        <Select options={colors} onChange={ddlhandle} className="sl">
        </Select>
      </div>
        <div className='drop'>
            <style>{'.drop {background-color:'+setbgcolor+';}'}</style> 
          <h3> {setbgcolor}</h3>
        </div>
        
    </>
  )
}

export default Form