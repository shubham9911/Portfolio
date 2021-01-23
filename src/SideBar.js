import React from 'react';
import './SideBar.css';
import * as FaIcons from 'react-icons/fa';

function SideBar() {
    
    return (
        <div className='side_bar'>
            <img className='my_pic2' src='/my_pic2.jpg' />
            <h1 className='side_bar_H1'>Shubham Sharma</h1>
            <div className='side_bar_data'>
                <a href='mailto: shubh9911am@gmail.com'><p className='email'><FaIcons.FaEnvelope color='white'/> shubh9911am@gmail.com</p></a>
                <div className='side_bar_btn'>
                    <a href='#intro'><button>INTRODUCTION</button></a>
                    <a href='#skills'  data-nav-section='skills' ><button>SKILLS</button></a> 
                    <button>PROJECTS</button>
                    <button>EDUCATION</button>
                    <button>CERTIFICATES</button>
                </div>
                <div className='social_icons' >
                    <a href='https://github.com/shubham9911'><i><FaIcons.FaGithub/></i></a>
                    <a href='https://www.instagram.com/imshubham9911/'><i><FaIcons.FaInstagram/></i></a>
                    <a href='https://m.facebook.com/Shubham8802'><i><FaIcons.FaFacebook/></i></a>
                    <a href='https://www.linkedin.com/in/shubham-sharma-4b667a169/'><i><FaIcons.FaLinkedin/></i></a>
                    
                </div>
            </div>
            
        </div>
    )
}

export default SideBar
