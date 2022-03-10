import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Uppercase", "success")
       
    }
    const handleLoClick =()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleExtraspaces =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success")
    }
    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0.9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard!", "success")
    }
    const handleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
    const handleClearClick =()=>{
        let newText = '';
        setText(newText)
        props.showAlert("Cleared text", "success")
    }
    const [text, setText] = useState("");
   
    return (
        <>
             <div className="container" style={{color: props.mode==='dark'?'white': '#042743'} }>
                         <h1>{props.heading}</h1>
                      <div className="mb-3">
                      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey': 'white', color: props.mode==='dark'?'white': '#042743'} } id="myBox" rows="8"></textarea>
                     </div>
                 <button className="btn btn-primary mx-2" onClick={handleUpClick}>Covert to Uppercase</button>
                 <button className="btn btn-primary mx-2" onClick={handleLoClick}>Covert to Lowercase</button>
                 <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                 <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
                 <button className="btn btn-primary mx-2" onClick={handleExtraspaces}>Remove Extra Space</button>
                 </div>

            <div className="container my-2" style={{color: props.mode==='dark'?'white': '#042743'}} >
                    <h2>Your text summary</h2>
                 <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length}Minutes to read</p>
            </div>
                 <div className='container'  style={{color: props.mode==='dark'?'white': '#042743'}}>
                     <h2>Preview</h2>
                     <p>{text.length>0?text: "Enter something in the textbox above to preview here "}</p>
                 </div>
        </>
  )
}


