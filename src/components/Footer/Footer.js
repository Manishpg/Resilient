import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './footer.css'

function Footer() {
    return (
        <div className="container" style={{marginTop:"130px"}}>
            <div className="row">
                   <div className="col-lg-6 text-start address" >
                     <p className="address-1">Registered Address</p>
                     <p className="address-2">RESILIENT INITIATIVES FOR SOCIAL EMPOWERMENT FOUNDATION, Workafella Business Centre 150/1, Infantry Road, Bangalore KA 560001 IN</p>
                    <br/>
                    
                    <p className="contact">Contacts</p>
                    <div className="">
                        <p>+91 9143090457</p>
                        <p style={{marginTop:"-10px"}}>info@resilientinitiatives.org </p>
                    </div>

                   </div>
                   <div className="col-lg-6">
                   <div style={{width: "100%"}}>
                   <iframe title="Google Map" allowfullscreen="true" loading="lazy" style={{border:"0"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.826064121621!2d77.59303900476475!3d12.982974287667773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1750a342aceb%3A0xd4ff935b9554b3b0!2sWorkafella%20Infantry%20Road%20-%20Office%20Space%20Rent%20in%20Bangalore%20%26%20Coworking!5e0!3m2!1sen!2sin!4v1622484285655!5m2!1sen!2sin" width="100%" height="400" ></iframe>
                                 </div>
                   </div>
            </div>
            <img src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=184,h=48,fit=scale-down/A1ayJ1rpDvCXbKg9/copyright-mePenGyv2OsX7XGe.png" alt="" />
        </div>
    )
}

export default Footer
