import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './About.css'

function About() {
    return (
        <div className="container" style={{marginTop:"80px"}}>
        <div className="row">
            <div className="col-lg-6 mission text-end">
              <p className="mission">Mission</p><br/>
              <p className="mission-desc" style={{marginTop:"20px"}}>Enabling people's participation in creating positive social change by establishing equity and equality in opportunities.</p>
            </div>   
        </div>
        <div className="row">
        <div className="col-lg-6"></div>
            <div className="col-lg-6 mission text-start">
              <p className="mission" style={{marginLeft:"20px",fontSize:"40px"}}>About</p><br/>
              <p className="about-desc" style={{marginTop:"20px"}}>A problem like inequality becomes very prominent and complex in a vast country like India, with a large number of remote pockets and a still larger population. Access to basic resources and facilities of education, healthcare and opportunities in general is a big challenge for a large number of people. RESILIENT INITIATIVES FOR SOCIAL EMPOWERMENT (RISE) FOUNDATION was established in December 2019, based on the idea that even the biggest social issues can be tackled when people support people. While our country makes great progress on critical ends like medical care, educational infrastructure and job opportunities with newer avenues that the digital world is creating for us, we believe it is also a chance to bring to the center, those who live on it's very peripheries.</p>
            </div>   
        </div>
        <div className="row">
        <div className="col-lg-6"></div>
            <div className="col-lg-6 mission text-end">
              <p className="about-desc2" style={{marginTop:"20px"}}> RISE was co-founded by Ananth Sudarshan and Shweta Subbiah, two passionate individuals who have dedicated most of their careers and individual lives to uplifting and empowering disadvantaged sections of the society. While the platform is committed to tackling the problem at a larger scale, the objective is to encourage more people to participate in directly being a changemaker, or support someone in creating social impact.</p>
            </div>   
        </div>
        </div>
    )
}

export default About
