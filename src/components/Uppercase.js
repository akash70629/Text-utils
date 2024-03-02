import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function Uppercase(props) {


    const [text, setText] = useState("");



    const handleOnChange = (event) => {
        setText(event.target.value)

    }


    //uppercase function
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }


    //lowercase function
    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    }



    //Copy Text function
    const copytext = () => {
        let newText = text;


        // if (!navigator.clipboard) {
        //     // Clipboard API not supported
        //     console.error("Clipboard API is not available in this browser.");
        //     return;
        // }



        navigator.clipboard.writeText(newText).then(() => {


            const button = document.getElementById("copy");


            if (text === '') {

                button.innerHTML = "Text Box is Empty";
                button.style.backgroundColor = "yellow";

                setTimeout(() => {
                    button.innerHTML = "Copy Text";
                    button.style.backgroundColor = "";
                }, 3000);



            } else {

                button.innerHTML = "Copied!";
                button.style.backgroundColor = "yellow";

                setTimeout(() => {
                    button.innerHTML = "Copy Text";
                    button.style.backgroundColor = "";
                }, 3000);
            }

        })


    }




    //Clear Text function
    const cleartext = () => {
        setText('');

        const button = document.getElementById("clear");



        if (text === '') {

            button.innerHTML = "Text Box is Empty";
            button.style.backgroundColor = "yellow";

            setTimeout(() => {
                button.innerHTML = "Clear Text";
                button.style.backgroundColor = "";
            }, 3000);

        } else {

            button.innerHTML = "Cleared!";
            button.style.backgroundColor = "yellow";

            setTimeout(() => {
                button.innerHTML = "Clear Text";
                button.style.backgroundColor = "";
            }, 3000);
        }

    }



    // Remove Space function
    const removespace = () => {
        let newText = text.replace(/\s{2,}/g, ' ').trim();
        setText(newText);

    }




    return (

        <>

            {/* buttons design */}


            <div className="mb-3" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <label className="form-label ">Enter text here</label>

                <textarea className="form-control" id="myBox" rows="8" placeholder='Write here ....' value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'black' : 'white', color: props.mode === 'light' ? 'black' : 'white' }}></textarea>


                <button className="btn btn-warning my-3 mx-1" onClick={handleUpClick}>Convert to Uppercase</button>

                <button className="btn btn-warning my-3 mx-1" onClick={handleLowClick}>Convert to Lowercase</button>


                <button className="btn btn-warning my-3 mx-1" id="copy" onClick={copytext} >Copy Text</button>

                <button className="btn btn-warning my-3 mx-1" id="clear" onClick={cleartext}>Clear Text</button>

                <button className="btn btn-warning my-3 mx-" onClick={removespace} >Remove Extra Spaces</button>
            </div>





            {/* results */}


            <div className="container" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>

                <div className="child">

                    <div style={{ display: 'inline-block', marginRight: '15px' }}>
                        Word {text.split(" ").filter(word => word !== "").length}

                    </div>




                    <div style={{ display: 'inline-block', marginRight: '15px' }}>
                        Charecter {text.length}

                    </div>




                    <div style={{ display: 'inline-block', marginRight: '15px' }}>

                        Sentences {text.split(".").filter(Sentences => Sentences !== "").length}
                    </div>




                    <div style={{ display: 'inline-block', marginRight: '15px' }}>
                        Paragraphs {text.split("\n").filter(paragraphs => paragraphs !== "").length}

                    </div>


                    <div style={{ display: 'inline-block' }}>

                        Spaces {text.split(" ").length - 1}

                    </div>




                </div>
            </div>


        </>
    )
}
