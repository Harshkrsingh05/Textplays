import React from 'react'

export default function features(props){
    let myStyle= {
        color: props.mode ==='dark'?'white':'#1c2133',
        backgroundColor: props.mode==='dark'?'#1c2133':'white'
      }
    return(
        <>
        <div className="container px-4 py-5 pb-70" style={myStyle} id="icon-grid">
            <h2 className="pb-2 border-bottom">Features</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
            <div className="col d-flex align-items-start">
                <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
            <div>
            <h4 className="fw-bold mb-0">Uppercase/Lowercase Conversion</h4>
            <p>Easily convert your text to either uppercase or lowercase, depending on your preference. Whether you want to emphasize a message or create a more subdued tone, our tool can handle it with a click of a button.</p>
            </div>
            </div>
            <div className="col d-flex align-items-start">
            <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
            <div>
            <h4 className="fw-bold mb-0">Encryption and Decryption</h4>
          <p>Protect sensitive information or add an element of mystery to your text with our encryption and decryption feature. Safely encrypt your text using advanced algorithms, and decrypt it when needed with the right key or password.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
        <div>
          <h4 className="fw-bold mb-0">Sentence Case</h4>
          <p>Ensure your text adheres to proper grammar by converting it to sentence case. Our feature automatically capitalizes the first letter of each sentence, giving your text a polished and professional appearance.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
        <div>
          <h4 className="fw-bold mb-0">Title Case</h4>
          <p>Make your headlines, titles, or subject lines stand out by applying title case to your text. With this feature, you can automatically capitalize the first letter of each word, excluding articles and conjunctions, for a more aesthetically pleasing presentation.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
        <div>
          <h4 className="fw-bold mb-0">Character Count and Word Count</h4>
          <p> Get accurate character and word counts for your text. This feature helps you stay within specific limits, whether you're crafting a tweet, writing an essay, or composing an email.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
        <div>
          <h4 className="fw-bold mb-0">Text Reversal</h4>
          <p>Flip your text backwards for creative purposes or to add a unique touch to your messages. Surprise your friends, create intriguing social media posts, or simply have fun with this feature.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
        <div>
          <h4 className="fw-bold mb-0">Narration </h4>
          <p>Convert your text into spoken words with our built-in narration feature. Simply input your text, choose your preferred voice, and listen to a clear and natural-sounding audio rendition of your content.</p>
        </div>
      </div>
      <div className="col d-flex align-items-start">
        <svg className="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
        <div>
          <h4 className="fw-bold mb-0">Readability Enhancement</h4>
          <p>Improve the readability of your text by eliminating extra spaces and ensuring consistent spacing throughout. Our tool intelligently detects and removes unnecessary spaces, making your text clean and visually appealing.</p>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}