import React from 'react'

export default function Footer(props){
    return (
        <footer className={`bg-${props.mode} text-center text-lg-start`}>
          <div className={`text-center p-3 text-${props.mode==='light'?'dark':'light'}`}>
            © 2023 :
            <a className={`text-${props.mode==='light'?'dark':'light'}`} href="https://github.com/Harshkrsingh05"> HarshProduction</a>
          </div>
        </footer>
    )
}