import React, { useState, useRef, useLayoutEffect} from 'react';
import SocialTabs from './socialtabs';
import Particles from 'react-particles-js';
import {AnimateOnChange, HideUntilLoaded} from 'react-animation';
import '../css/mystyle.css';

function Body(){
    const skills = [
        'Web Developer',
        'FrontEnd',
        'ReactJS',
        'HTML',
        'JQuery',
        'CSS',
        'BackEnd',
        'PHP',
        'PhalconPHP',
        'PostgreSQL',
        'RESTful API',
        'ExpressJS',
        'CodeIgniter',
        'MariaDB'
    ];

    const [current, setCurrent] = useState(0)
    const [currentWidth, setCurrentWidth] =  useState(0)
    const [currentTextStyle, setCurrentTextStyle] = useState({})
    const currentTextRef = useRef()
    const nextTextRef = useRef()
    
    const nextItem = current => {
        if (current === skills.length - 1) {
            return 0
        } else {
            return current + 1
        }
    }
  
    useLayoutEffect(() => {
        const interval = setInterval(() => {
            setCurrent(nextItem(current))

            nextTextRef.current.innerText = skills[nextItem(current)]
            
            const nextTextSize = nextTextRef.current.clientWidth

            setCurrentWidth(nextTextSize+10)
            
            setCurrentTextStyle ({
                opacity: 0
            })
            
            setTimeout(() => {
                setCurrentTextStyle ({
                    opacity: 1
                })
            }, 500)

        }, 2000)
        
        return (() => {
            clearInterval(interval)
        })
    })

    return (
        <section className="hero is-black is-fullheight" style={{position:"relative"}}>
            <Particles style={{position:"absolute"}}/>
            <div className="hero-body">
                <div className="container">
                    <p>Hello! I am</p>
                    <h1 className="title is-1">Gigih Hadi Prakoso.</h1>
                    <h2 className="subtitle is-4">
                        <AnimateOnChange className="foo" durationOut={500}>
                            <div className="conts" style={{width: currentWidth ?currentWidth + 'px': 'auto'}}>
                                <div className="text-width-wrapper" style={currentTextStyle} ref={currentTextRef}>
                                    {skills[current]}
                                </div>
                            </div>
                        </AnimateOnChange>
                    </h2>
                    <h2 className="subtitle is-4 hidden-text" ref={nextTextRef} />
                </div>
            </div>
            <div className="hero-footer" >
                <nav className="tabs is-fullwidth">
                    <div className="container">
                        <ul>
                            <li><a href="https://www.facebook.com/gigihhadi.prakoso.10" target="_blank"><span className="icon is-small"><i className="fab fa-facebook-f"></i></span> Facebook</a></li>
                            <li><a href="https://www.linkedin.com/in/gigihhadi" target="_blank"><span className="icon is-small"><i className="fab fa-linkedin"></i></span> LinkedIn</a></li>
                            <li><a href="https://www.instagram.com/gigihhadip/" target="_blank"><span className="icon is-small"><i className="fab fa-instagram"></i></span> Instagram</a></li>
                            <li><a href="https://www.github.com/gigihhadiprakoso" target="_blank"><span className="icon is-small"><i className="fab fa-github"></i></span> Github</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </section>
    );
}
export default Body;