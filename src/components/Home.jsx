
import React from 'react'
import '../styles/Home.css'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { useEffect, useState, useRef } from 'react'
import ServiceCard from './serviceCard'
import ProjectCard from './projectCard'

import Trophy from '../assets/Icons/Trophy.png'
import Bug from '../assets/Icons/Bug.png'
import Light from '../assets/Icons/lightning.png'
import Clock from '../assets/Icons/Clock.png'

import Facebook from '../assets/Logo/facebook.svg'
import Instagram from '../assets/Logo/instagram.svg'
import Github from '../assets/Logo/github.svg'
import Stack from '../assets/Logo/stack-overflow.svg'
import Mail from '../assets/Icons/Message.png'
import Pin from '../assets/Icons/Pin.png'

import JavascriptLogo from '../assets/Logo/js.png'
import PythonLogo from '../assets/Logo/py.png'

const Home = () => {

    const [professions] = useTypewriter({
        words: ['Computer Science Student.', 'Web Developer.', 'Web Designer.', 'Programmer.'],
        loop: {},

        
    })

    const btnReference = useRef('start-btn');

    const scrollMain = () => {
        let target = document.getElementById('sec')
        window.scrollTo(0, target.offsetHeight)
    }

    return (
        <>
            <section className="fir">
                <div className="txt-cnt">
                    <h1 className="hero-head">Transforming Ideas to Webflows</h1>
                    <p className="hero-p">Explore the Synergy between Design and Development for a visually perfect experience.</p>
                    <button onClick={scrollMain} ref={btnReference} className='hero-con-btn'>Continue <span className='arrow'></span></button>
                    <h4 className="greeting">Welcome</h4>
                </div>
            </section>
            <section className="sec" id='sec'>
                <div className="sec-txt-cnt">
                    <h1 className="name">Muhammad Talha Siddiqui</h1>
                    <h3 className="intro">I am a <span className='prof'>{professions}</span><Cursor /></h3>
                    <p className="initial">I am Muhammad Talha, an Intermediate Computer Science student currently studying in college. With a passion for web development and computer science, I am dedicated to enhancing my skills and knowledge in the field.</p>
                    <p className="final">As an intermediate-level computer science student, I am deeply immersed in various technology projects, showcasing a versatile skill set in web development, desktop applications, and data science. My primary tools include JavaScript, Python, React, Express, MongoDB, and C++. Javascript, React are done for my Frontend Projects, comprising Express and MongoDB responsible for Backend. Python is done for Data Science and Desktop Application with company of C++.</p>
                    <div className="btn-cnt">
                        <a href="#" className='sec-btn'>Resume</a>
                    </div>
                </div>
            </section>
            <section className="thir">
                <div className="thir-txt-cont-cnt">
                    <h3 className="thir-head-before">SERVICES</h3>
                    <h1 className="thir-hero-head">Exceeding Expectations</h1>
                    <p className="thir-par">Offering bespoke web development solutions that blend innovation with precision to elevate your digital presence.</p>
                    <div className="service-card-cnt">
                        <ServiceCard image={Trophy} heading='Expertise in Figma to Webflow' description='Seamlessly transform your designs from Figma to Webflow with my expertise, ensuring pixel-perfect implementation and interactive, responsive websites.' />
                        <ServiceCard image={Bug} heading='Comprehensive Testing' description='Ensure your projects are robust and error-free with my comprehensive testing services, covering functionality, performance, and user experience.' />
                        <ServiceCard image={Light} heading='Interactivity and Responsiveness' description='Enhance user experience with dynamic interactivity and seamless responsiveness, ensuring your website looks and performs flawlessly on all devices.' />
                        <ServiceCard image={Clock} heading='Product Delivery on Time' description='Depend on timely and efficient product delivery, ensuring your projects are completed and launched as scheduled without compromising quality.' />
                    </div>
                    <a href="#sec" className='thir-btn'>Learn More</a>
                </div>
            </section>
            <section className="forth">
                <div className="forth-txt-cont-cnt">
                    <h3 className="thir-head-before">PROJECTS</h3>
                    <h1 className="thir-hero-head">My Latest Projects</h1>
                    <p className="thir-par">Discover My Latest Creations that showcase the Designing Innovations and Digital Essentials. Feel free to Explore for More.</p>
                    <div className="project-card-cnt">
                        <ProjectCard image={JavascriptLogo} projectHeading='Todo List App' projectDescription='A sleek and efficient to-do list app built with vanilla JavaScript, designed to help you manage tasks effortlessly with a clean and intuitive interface.' />
                        <ProjectCard image={JavascriptLogo} projectHeading='Tic Tac Toe Game' projectDescription='A classic Tic Tac Toe game created in vanilla JavaScript, offering a smooth and interactive experience with a simple, user-friendly interface.' />
                        <ProjectCard image={PythonLogo} projectHeading='QR Code Generator' projectDescription='A robust QR code generator built with Python, enabling you to create customized QR codes quickly and easily.' />
                    </div>
                    <a href="#sec" className='thir-btn'>More Projects</a>
                </div>
            </section>
            <section className="lst-cntct">
                <div className="cntct-txt-cnt">
                    <h3 className="thir-head-before">CONTACT</h3>
                    <h1 className="thir-hero-head">Get In Touch</h1>
                    <p className="thir-par">Reach out to collaborate or discuss innovative web solutions—I'm here to connect.</p>
                    <p className="cntct-par">Thank you for your interest in getting in touch with me. I welcome your feedback, questions, and suggestions. If you have a specific question or comment, please feel free to email me directly at <a href="#" className='email-a'>talhaz5518@gmail.com</a></p>
                    <div className="cntct-link-cnt">
                        <a href="#" className='scl-a'>
                            <img src={Facebook} alt="" className="scl-lnk-img" />
                            <h3 className="scl-lbl">Follow me on</h3>
                            <h3 className="scl-name">Facebook</h3>
                        </a>
                        <a href="#" className='scl-a'>
                            <img src={Instagram} alt="" className="scl-lnk-img" />
                            <h3 className="scl-lbl">Follow me on</h3>
                            <h3 className="scl-name">Instagram</h3>
                        </a>
                        <a href="#" className='scl-a'>
                            <img src={Github} alt="" className="scl-lnk-img" />
                            <h3 className="scl-lbl">Follow me on</h3>
                            <h3 className="scl-name">Github</h3>
                        </a>
                        <a href="#" className='scl-a'>
                            <img src={Stack} alt="" className="scl-lnk-img" />
                            <h3 className="scl-lbl">Follow me on</h3>
                            <h3 className="scl-name">Stack-Overflow</h3>
                        </a>
                        <div className="scl-a">
                            <img src={Mail} alt="" className='cntct-aftr-img' />
                            <h3 className="scl-name">talhaz5518@gmail.com</h3>
                        </div>
                        <div className="scl-a">
                            <img src={Pin} alt="" className='cntct-aftr-img' />
                            <h3 className="scl-name">Naval Anchorage, Islamabad</h3>
                        </div>
                    </div>
                    <a href="#sec" className='thir-btn'>Contact Me</a>
                </div>
            </section>
        </>
    )
}

export default Home
