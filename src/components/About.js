import React from 'react'


export default function about(props){

let myStyle= {
  color: props.mode ==='dark'?'white':'#1c2133',
  backgroundColor: props.mode==='dark'?'#1c2133':'white'
}
// add button then set onclick and then use function to make dark and light theme and setmystyle using hook

  return (
    <>
            <div className="container pb-70" style={myStyle}  >
              <h1 className='my-3'>About Us</h1>
              <div className="accordion" id="accordionExample">
              <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button" type="button"  style={myStyle}   data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                An Easy Way To Change Uppercase to Lowercase And Title Capitalization and many more.
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body"  style={myStyle}  >
                Have you ever typed out a document, made a few capitalization mistakes and wished you won't have to waste much time editing? It happens a lot, and if you are using a typical word processing tool, you will have your mistakes autocorrected as you type, but those kinds of software only correct grammatical errors. If you have to capitalize on a whole portion, you will need to do it manually. And that takes time. However, with an online text transforming tool like ours, you can easily transform the case of your texts. All you have to do is copy and paste your text, then select the case you want to transform it to.
                The Change Uppercase to Lowercase Tool is one of several SEO tools available on our site SmallSEOTools.com. It is an online text Converter that can receive both upper cases and lower case letters as input and do a text transform on them into desired cases.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Free to use.
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle} >
                  Welcome to our website, your go-to destination for all your needs, and the best part? It's completely free! We believe that access to valuable resources and services should never come at a cost, which is why our platform is designed to provide an exceptional user experience without any charges. Whether you're searching for information, seeking entertainment, or looking to connect with like-minded individuals, our website offers a wide array of features and tools to cater to your interests. Discover a world of possibilities and enjoy the freedom to explore, learn, and engage without worrying about subscription fees or hidden charges. Join our community today and experience the true essence of a free online platform.
                  </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Browser compatible.
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                where compatibility meets convenience! We take pride in creating a user-friendly experience that seamlessly integrates with your preferred browser. Our website is designed to be fully compatible with all major web browsers, ensuring that you can access our content and features without any hassle. Whether you're using Chrome, Firefox, Safari, or any other popular browser, you can enjoy a smooth and optimized browsing experience on our platform. Say goodbye to compatibility issues and enjoy the freedom to explore our website, hassle-free, regardless of your browser choice. Start exploring today and unlock a world of possibilities right at your fingertips!
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                  Establishment of Textplays website.
                </button>
              </h2>
              <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                This website comes in may 2023 when I am learning Reactjs from a youtuber name codewithharry. I am currently learning reactJS and after that I will learn backend development in ExpressJS and nodeJS. This is my practice website and there are many more available on my github account.My end goal is to make a full stack MERN website before 2024 and becoming a full stack web developer.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                  Harsh production.
                </button>
              </h2>
              <div id="collapsefive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                  <p>Harsh Productions is a professional website production company dedicated to creating high-quality and impactful websites for individuals and businesses. With a team of skilled designers and developers, Harsh Productions focuses on delivering tailor-made solutions that align with the unique goals and vision of their clients.</p> 
                  <p>                  The company takes pride in its commitment to excellence, attention to detail, and innovative approach to web design and development. Harsh Productions understands that a website is more than just an online presence; it is a powerful tool for businesses to engage with their audience, showcase their products or services, and drive growth.</p>
                  <p>Whether it's a simple informational website, an e-commerce platform, or a complex web application, Harsh Productions has the expertise to deliver a seamless user experience and visually captivating design. They employ cutting-edge technologies and industry best practices to ensure websites are fast, secure, and responsive across different devices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </>
    )
}