import React ,{useState} from 'react'

export default function TextForm(props) {
  let handleUpclick=()=>{
    // console.log('uppercase clicked!');
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert('converted to upperCase','succes')
    
    
  }
  let handleDownclick=()=>{
    // console.log('uppercase clicked!');
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert('converted to LowerCase','succes')
    
  }
  let handleClear=()=>{
    // console.log('uppercase clicked!');
    let newText='';
    setText(newText);
    props.showAlert('Text Clear ','succes')
    
    
  }
  let handleCopy=()=>{
    var text=document.getElementById('mybox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('text Copied!','succes')
  }

//

const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert('Hadling the Extra Spaces','succes')
}

  let handleOnchange=(event)=>{
    // console.log('onChange');
    setText(event.target.value);
    
  }
  const[text,setText]=useState('');
  // to change the text we  will use setText....
  // setText('new text');


  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">         
            <textarea className="form-control" value={text} onChange={handleOnchange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}   id="mybox" rows="8"></textarea>
           

     </div>
            <button className='btn btn-primary mx-1' onClick={handleUpclick}>Convert to UpperCase</button>
            <button className='btn btn-primary mx-1' onClick={handleDownclick}>Convert to LowerCase</button>
            <button className='btn btn-primary mx-1' onClick={handleClear}>Clear</button>
            <button className='btn btn-primary mx-1'  onClick={handleCopy}>Copy</button>
            <button className='btn btn-primary mx-1'  onClick={handleExtraSpaces}>Remove Extra Space</button>
      <div className='container my-2'style={{color: props.mode==='dark'?'white':'black'}}>
         <h2>Your text Summary</h2>
         <p>Word:{text.split(' ').length-1}</p>
         <p>characters:{text.length}</p>
         <p>Minutes Read:{0.008*text.split(' ').length}</p>
         <h4>Preview</h4>
         <p>{text.length>0?text:'Enter something in the textbox above to preview it here'}</p>
      </div>
 </div>
 </>
  )
}
