import React ,{useState} from 'react'
import '../../bootstrap.min.css'
import './Donate.css'
import {useHistory} from 'react-router-dom';

function Donate() {
    
const history = useHistory();

const [fName,setFname] = useState("");
const [lName,setLname] = useState("");
const [email,setEmail] = useState("");
const [PAN,SetPAN] = useState("");
const [aadhar,setAadhar] = useState("");
const [UTR,setUTR] = useState("");
const [address,setAddress] = useState("");

const handleSubmit= (e) => {
    e.preventDefault();
    console.log(fName,lName,email,PAN,aadhar,UTR,address);
}

    return (
        <div  className="container" style={{marginTop:"120px"}}>
            <p className="text-center donate">Donate</p>
            <div className="container" style={{maxWidth:"600px"}}>
            <form class="form-fluid row g-3 " onSubmit={handleSubmit}>
  <div class="col-md-6">
    <label  class="form-label">First Name*</label>
    <input id="inputID" type="text" placeholder="Your First Name" class="form-control" onChange={(e)=>{setFname(e.target.value)}} required/>
  </div>
  <div class="col-md-6">
    <label  class="form-label">Last Name*</label>
    <input id="inputID" type="text" placeholder="Your Last Name" class="form-control" required  onChange={(e)=>{setLname(e.target.value)}}/>
  </div>
  <div class="col-12">
    <label  class="form-label">Your Email*</label>
    <input id="inputID" type="email" class="form-control"  placeholder="Your Email Address"  onChange={(e)=>{setEmail(e.target.value)}} required />
  </div>
  <div class="col-12">
    <label class="form-label">PAN Card*</label>
    <input id="inputID" type="text" class="form-control"  placeholder="Your PAN Number"  onChange={(e)=>{SetPAN(e.target.value)}} required />
  </div>
  
  <div class="col-12">
    <label  class="form-label">AADHAAR Card*</label>
    <input id="inputID" type="text" class="form-control"  placeholder="Your Aadhaar Number"  onChange={(e)=>{setAadhar(e.target.value)}}required/>
  </div>
  <div class="col-12">
  <label  class="form-label">UTR Number*</label>
    <input id="inputID" type="text" class="form-control"  placeholder="Your UTR Number"  onChange={(e)=>{setUTR(e.target.value)}} required/>
  </div>
  <div class="col-md-6">
    <label  class="form-label">Your Address*</label>
    <textarea id="inputID"  class="form-control" placeholder="Your Postal Address" onChange={(e)=>{setAddress(e.target.value)}}/>
  </div>
  <div class="col-12 text-center">
    <button type="submit" class="submit-btn" onClick={() => history.push("/confirm")}>Submit</button>
  </div>
  
</form>
                
            </div>
        </div>
    )
}

export default Donate
