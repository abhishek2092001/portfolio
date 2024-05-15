import React from 'react'

const Projects = () => {
  
  const togit1=()=>{
    window.location.href = 'https://github.com/abhishek2092001/Gchat-app';
  }
  const tocrypto=()=>{
    window.location.href = 'http://cryptoverse-react20.netlify.app/';
  }
  
  return (

      <div className='Project-title'>
        <h1>PROJECTS</h1>
        <p className="p-para">Here you will find some of my personal projects that I created.</p>
        <div className="project1">
            <div className="p1-detail">
                <h1>Multi chat web Application</h1>
                 <p className='parachat'>• A Multichat web application where multiple users can join the group chat and message each other. <br />
•Used HTML , CSS , Javascript , Nodejs , Expressjs. <br />
• Web socket in Nodejs is used to establish the Realtime connection between the users.</p>
            </div>
            <div className="but-detail1"><button className='Details' onClick={togit1} >Details</button></div>
        </div>

        <div className="project1">
            <div className="p1-detail">
                <h1>CryptoVerse</h1>
                 <p className='parachat'>• Built a completely responsive crypto currency website that shows the current prices and information about crypto currencies. <br />
•Used HTML | CSS | JavaScript | React | CoinGecko API | Chartjs | Netlify. <br />
• Users can analyze the growth of each crypto currency by using the graph.<br/>
•Successfully deployed the website on Netlify.
</p>
            </div>
            <div className="but-detail1"><button className='Details' onClick={tocrypto}>Details</button></div>
        </div>

        <div className="project1">
            <div className="p1-detail">
                <h1>portfolio website</h1>
                 <p className='parachat'>• Created the portfolio website. <br />
•Used HTML , CSS , Javascript ,React js ,firebase. <br />
• Firebase is used to store the contact details.</p>
            </div>
            <div className="but-detail1"><button className='Details'>Details</button></div>
        </div>
      </div>
    

  )
}

export default Projects
