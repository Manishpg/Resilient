import React from 'react'
import './Program.css';
import '../../bootstrap.min.css'


function Program() {
    return (
        <div className="container" style={{marginTop:"120px"}}>
        <div className="text-center">
            <p className="program">Our Programs</p>
            <p style={{fontSize:"18px"}}>RISE works on multi-faceted, approach based programs with a singular objective of promoting equity and equality in the society. Some of the programs undertaken by the organization are:</p>
        </div>
        <div className="text-center" style={{fontSize:"18px"}}>
        <div className="row " style={{marginTop:"80px"}}>
            <div className="col-lg-6">- Promoting equality in basic survival resources across the country: We at RISE believe that basic needs are a human right. Hence, finding solutions to problems like malnutrition, hunger and lack of sanitation are the primary to existence. RISE aims to connect with and help individuals and organizations striving to solve these problems.</div>
            <div className="col-lg-6"></div>
        </div>
        <div className="row ">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">- Promoting gender equality across the country: Inequality of gender, economically and socially is another area RISE aims at addressing. For women from disadvantaged communities, the magnitude of this problem is even bigger. To tackle this problem, the biggest step is to work closely with women and their families in order to create a change in existing mindset. This involves collaborating and partnering with organizations and people who are already working in the space, to find inlets and create local changemakers willing to create an impact.</div>
        </div>
        <div className="row ">
            <div className="col-lg-6">- Bridging the urban-rural divide: In a large country like ours, the difference in living conditions and standards are more pronounced than ever before when we pitch a highly developed city next to a remote village. There are thousands of villages across the country that do not have access to a hospital within a 50 km radius. Under these circumstances, a large number of people also migrate to bigger towns and cities in the hope of a better life and better access, but only end up spending decades in make-shift settlements with no access to even basic human needs of health and sanitation. RISE aims at bridging this gap by promoting better living conditions and access for those who hail from remote pockets and rural areas.</div>
            <div className="col-lg-6"></div>
        </div>
        <div className="row ">
            <div className="col-lg-6"></div>
            <div className="col-lg-6">- Promote access to education and vocational training opportunities: One of the major steps in promoting equality is making a basic human right like education accessible to all, irrespective of their socio-economic limitations. RISE works to promote equal access to education and vocational training as a primary way to empower those without access to opportunities.</div>
        </div>
        </div>
        </div>
    )
}

export default Program
