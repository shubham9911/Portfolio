import React from 'react'
import './Introduction.css';
import * as GrIcons from 'react-icons/gr';

function Introduction() {
    return (
        <div id='intro' className='Intro'>
            <div className='Intro_data'>
                <h1>HI!<br></br>
                    I'm Shubham
                </h1>
                <a href='https://drive.google.com/file/d/10CDhE2_qaOOWtyKRwNG0EVop1JYF3hFr/view?usp=sharing'><button>My Resume <GrIcons.GrDownload/></button></a>
                <div className='Intro_about'>
                    <p>
                        
                    </p>
                </div>
            </div>
        </div>
       
    )
}

export default Introduction
