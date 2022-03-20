import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white",

    // })
  let myStyle = {
      color: props.mode ==='dark'?'white': '#042743',
      backgroundColor: props.mode === 'dark'?'#042743':'white',
      borderColor: props.mode ==='dark'?'white': '#042743',
  }

    return (
        <div className='container' >
            <h1 className='my-3' style={{color: props.mode ==='dark'?'white': '#042743'}}>About Us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>  Analyze your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textutils gives you a way tp analyze your text quickly and efficiently, Be it word count, character count or remove spaces from a document. </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong> Free to use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextYtils is a free character counter tool that provides instant character count & word count statistics for a giventext,
                                TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ Character limit.  </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>  Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browsers such as Firefox, Chrome, internet explorer,Safari, opera. It suits 
                                to count characters in facebook , blog, books, excel document, pdf document, essays, etx. </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
