import React,{ useState } from 'react'
import { Buffer } from 'buffer';

export default function TextForm(props) {
    
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to loewercase", "success");
    }
    const handleErClick = ()=>{
        let newtext=text.replaceAll(/\s/g,'');
        setText(newtext)
        props.showAlert("Spaces remove", "success");
    }
    const handleClearClick = ()=>{
    let newtext=''
    setText(newtext)
    props.showAlert("Textarea cleared", "success");
    }     
    const handleCcClick = ()=>{
    let newtext = text.split(". ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(". ");
        setText(newtext)
        props.showAlert("Converted to Capitalise case", "success");
    }   
    const handleTitleClick= ()=>{
        let newtext = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newtext)
        props.showAlert("Converted to Title case", "success");
    }
    const handleReverseClick =() => {
        let splitWord = text.split("");
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newtext = joinedWords
        setText(newtext)
        props.showAlert("Text Reversed", "success");
    }
    const handleCopy = ()=>{
        var text= document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied", "success");
    }
    const handleExtraSpace = () =>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "))
        props.showAlert("Deleted extra spaces", "success");
    }
    const handleSpeak=() =>{
        let msg = new SpeechSynthesisUtterance();
        msg.text=text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Voice in progress", "success");
    }
    const handleEncode=()=>{
        let newtext=Buffer.from(text).toString('Base64');
        setText(newtext)
        props.showAlert("Text Encoded", "success");
    }
    const handleDecode=()=>{
        let newtext = Buffer.from(text, 'base64').toString('ascii');
        setText(newtext)
        props.showAlert("Text Decoded", "success");
    }

    const handleOnChange = (event)=>{
        // console.log("On change");
        setText(event.target.value)
    //     let inputText = document.getElementById('myBox').value;
    //     let inputTextLength = '';
    //     if(inputText !== '')
    //     {
    //       inputTextLength = inputText.split(" ").length;
    //     }
    //     else
    //     {
    //       inputTextLength = 0;
    //     }
    //     setText(inputTextLength);
     }


    const [text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" placeholder="EnterTextHere" value={text} onChange={handleOnChange} style={{color: props.mode==='dark'?'white':'black',backgroundColor: props.mode==='dark'?'rgb(38 65 90)':'#dbe9f4'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>UPPERCASE</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpace}>Delete Extra Space</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCcClick}>Capitalized case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTitleClick}>Title Case</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleErClick}>RemoveSpace</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleReverseClick}>Reverse text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-warning mx-1 my-1" onClick={handleSpeak}>Speak</button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleEncode}>Encode text</button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleDecode}>Decode text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear All</button>
    </div>
    <div className="container pb-70 my-3  "style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary </h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.45*text.split(" ").filter((element)=>{return element.length!==0}).length} sec to read.</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview."}</p>
    </div>
    </>
  )
}
