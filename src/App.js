import office from './image/office.jpg';
import './App.css'
import { Parallax } from 'react-parallax';
import { useRef, useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import Aboutme from './components/Aboutme';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
const home=useRef();
  const about=useRef();
  const project=useRef();
  const contact=useRef();
  
  const scrollhandler=(eleRef)=>{
    console.log(eleRef);
    window.scrollTo({top:eleRef.current.offsetTop,behavior:'smooth'});
  }

  const[dis,setdis]=useState(true);
  const[count, setcount]=useState(0);
  
  return (
    <div className="App">
      
      
    <div className="content" >
    <div  className='burgermenu' onClick={()=>{setdis(!dis)}}>
      <GiHamburgerMenu />
      </div>
  
      
  
      <ul className= {dis?'nav-bar-mob':'nav-bar-dkt'}  >
      <li  > <a  onClick={()=>scrollhandler(home)}>HOME</a> </li>
      <li > <a  onClick={()=>scrollhandler(about)}>ABOUT</a> </li>
      <li > <a  onClick={()=>scrollhandler(project)}>PROJECTS</a> </li>
      <li > <a  onClick={ ()=>scrollhandler(contact)}>CONTACT</a> </li>
    </ul>
    <img className='image' src="portfolio-icon.png" alt="no image found" />
  </div>
    <Parallax bgImage={office} strength={600} >
    <div ref={home} className="container">
    <div className="container1">
        <div className="container2 cont2">
           <p className='hey'>HEY, I'M ABHISHEK SAXENA</p>
           <p className="para">
           A Frontend focused Web Developer building the Frontend <br></br>of Websites  and Web Applications that leads to the success of the overall product
           </p>
           <button className='but'onClick={()=>scrollhandler(project)}>Projects</button>
        </div>
        <div className="container2 cont3">
          <img className="photo"></img>
        </div>
    </div>
    </div>
    </Parallax>
   <div ref={about} id="About-me"><Aboutme/></div> 
    <div id="skills-set"><Skills/></div>
    <div ref={project} id="Projects"><Projects/></div> 
   <div ref={contact} id="Contacts"><Contact/></div> 
  <Footer/>
    </div>
  );
}

export default App;
