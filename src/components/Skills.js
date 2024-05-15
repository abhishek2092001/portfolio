import React from 'react'

const Skills = () => {
  const gotocontact=()=>{
    window.scrollTo({top:2650,left:0,behavior:'smooth'});
   }
  return (
    <div className='skillset'>
      <div className="cont know-me" >
        <h1>Get to know me!</h1>
        <p className='know-me-para'>I'm a Web Developer building the Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section. <br /><br />

 Feel free to Connect or Follow me on my Linkedin.
<br /><br />
I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
<button className='but contact1' onClick={gotocontact}>Contact</button>
      </div>
      <div className="cont skills" >
        <h1>My Skills</h1>
        <div className="skillssets">
            <div className="tech">HTML</div>
            <div className="tech">CSS</div>
            <div className="tech">JAVASCRIPT</div>
            <div className="tech">C++</div>
            <div className="tech">REACT JS</div>
            <div className="tech">EXPRESS JS BASICS</div>
            <div className="tech">NODE JS</div>
            <div className="tech">MONGODB</div>
            <div className="tech">MY SQL BASICS</div>
             <div className="tech">BOOTSTRAP</div>
        </div>
      </div>
    </div>
  )
}

export default Skills
