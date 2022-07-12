import React, {useState} from 'react'


export default function TextForm(props){
    const [text, setText]=useState('');
    const handleUpClick =()=>{
        console.log('upclick was clicked');
        const newText= text.toUpperCase();
        setText(newText);
        
    }
    const handleOnChange =(event)=>{
        console.log('on change');
        setText(event.target.value);
    }

    const handleLoClick = ()=>{
        const newText= text.toLowerCase();
        setText(newText);
    }

    const handleClearClick= ()=>{
        const newText='';
        setText(newText);
    }
// const extractEmail= ()=>{
//     let regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
//    text.split(" ").forEach((mail)=>{
//         if(regex.test(mail)){
//             console.log("your email address is "+mail)
//         }
//     })
// }
    return(
        <>
        
<div className="my-3 mb-3 container" style={{color:props.mode==='light'?'black':'white'}}>
  <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>Enter Your Text Below</h2></label>
  <textarea className="form-control" style={{backgroundColor:props.mode==='light'?'white':'grey',
color:props.mode==='light'?'black':'white' }} id="exampleFormControlTextarea1" value={text} placeholder='enter your text here' onChange={handleOnChange} rows="10"></textarea>
  <button className="btn btn-primary my-2" onClick={handleUpClick}>ToUpperCase</button>
  <button className="btn btn-warning my-2 mx-3" onClick={handleLoClick}>ToLowerCase</button>
  <button className="btn btn-danger my-2" onClick={handleClearClick}>Clear Text</button>
  {/* <button className="btn btn-success my-2 mx-2" onClick={extractEmail}>Extract Email</button>
   */}
</div>

<div className='container my-2' style={{color:props.mode==='light'?'black':'white'}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} number of words and {text.length} characters</p>
    <p>{0.0008*text.split(" ").length} minutes read</p>
</div>
</>
    )
}