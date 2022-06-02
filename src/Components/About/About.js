import React from 'react'
import './About.css'
import img32 from './Group 14.png'
import img33 from './vision.png'
import img34 from './gobeze2.png'
import melakImg from './melak.png'
import img36 from './liwam.png'
import img37 from './hide.png'

const profiles =[
  {
    name: 'Melaketsehay Mesele',
    title: 'CEO and Founder',
    image: melakImg,
    url: 'https'
  },
  {
    name: 'Melaketsehay Mesele',
    title: 'CEO and Founder',
    image: img36,
    url: ''
  }
]
export default function About() {
  return (
    <div>
     <div className="position-relative blend"> <img src={img32} class="img  blend" alt="..."/> 
        <div className="position-absolute top-50  usi ">
       
          {/* <h3 className='text-white fw-bold  med'>
          We are the leading development consulting  &<br/>
           
          organisation in Ethiopia implementing<br/>
          economic training projects. 
            

          </h3> */}

</div>
</div>
 <div className='container text-lg-center adds'>
   <h3 className='abo justify-content-center'>About us</h3>
   <p className='our ex'>Our experience in Ethiopian development since2006 spans a range of sectors and partnershipsBroadly organized, our expertise are years of experience in custom software development, we offerbusinesses, large and To earn global admiration as an
IT Outsourcer, by building and
maintaining long lasting relationship with people and technology and deliverfunctional software and excellent services. To earn global admiration as an
IT Outsourcer, by building and
maintaining long lasting relationship with people and technology and deliverfunctional software and excellent services.</p>
 </div>
 <div className='container qwer '>
   <div className='row '>
     <div className='col-lg-4 col-12 order-2 order-lg-1 '>
       <p className='text-start'>To earn global admiration as an
IT Outsourcer, by building and
maintaining long lasting relationship with people and technology and deliverfunctional software and excellent servicescompany across East Africa, IE Network Solutions strongly believes that partnerships are critical to this era of digital transformation. IE Network Solutions has been serving the needs of smart data infrastructure solutions and digitalization in different part.</p>
     </div>
     <div className='hide'>
       <img src={img37}/>
     </div>
     <div className='col-lg-1 col-6 order-1 order-lg-2 mm'>
       <img src ={img33}/>
     </div>
     <div className='col-lg-3 col-4 vv order-lg-3'>
       <h4>Vision</h4>
     </div>
   </div>
   <div className='row justify-content-end'>
     
     <div className='col-lg-2 col-6 order-lg-2 order-2'>
       <img src={img34}/>
       
     </div>
     <div className='col-lg-1 col-4 order-lg-1 order-1'><h4 className='misi text-align-start'>Mission</h4></div>

     
     <div className='col-lg-4 order-lg-4 order-3 '> <p className=''>
     To earn global admiration as an
IT Outsourcer, by building and
maintaining long lasting relationship with people and technology and deliverfunctional software and excellent services.company across East Africa, IE Network Solutions strongly believes that partnerships are critical to this era of digital transformation. IE Network Solutions has been serving the needs of smart data infrastructure solutions and digitalization in different part
     </p></div>
    
   </div>
 </div>
 <div className='container'>
   <div className='row'>
     <h4 className='text-start'>Meet Our Teams</h4>
  {profiles.map((profile, index)=>(
    <a href={profile.url} target='_blank' className='col-lg-4 col-6 text-center profile-link'>
      <div className=' profile '>
      
     <img src={profile.image}/>
  <div className='overlay'>
     <div className='ln-icn fa fa-linkedin text-white'> 

     </div>
    </div>
   <h5 className=' text-center'>{profile.name}</h5><h6 className=' '>{profile.title}</h6>
 </div>
    </a>
     
  ))}
    
   </div>
 </div>
 {/* <div class="myDIV">Hover over me.</div>
<div class="hide">I am shown when someone hovers over the div above.</div> */}

    </div>
  )
}
