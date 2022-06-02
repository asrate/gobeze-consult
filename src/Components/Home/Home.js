import React from 'react'
import './Home.css'
import img1 from './1Z5A0086 1.png'
import img2 from './1Z5A0848 2.png'
import img3 from './1Z5A9356 1.png'
import img4 from './1Z5A9388 1.png'
import img5 from './sira.png'
import img6 from './go.png'
import img7 from './training.png'
import img8 from './iceaddis 1.png'
import img9 from './shega 2.png'
import img10 from './seeLogo 1.png'
import img11 from './bc 1.png'
import img12 from './rfc 1.png'
import img13 from './h1.png'
import img14 from './h2.png'
import img15 from './h3.png'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
          <div className="position-relative"> <img src={img1} class="img img1" alt="..."/> 
        <div className="position-absolute top-50  usi ">
       
          <h3 className='text-white fw-bold  med'>
          We are the leading development consulting  &<br/>
           
          organisation in Ethiopia implementing<br/>
          economic training projects. 
            

          </h3>

</div>
        </div>
        <div className='container-fluid rect'>
          <div className='container'>
          <div class="row align-items-center">
    <div class="col-12 col-lg-5 col-lg-start">
      <h4 className='about'>About us</h4>
      <p className='ab11'>Our experience in Ethiopian development since2006 spans a range of sectors and partnershipsBroadly organized, our expertise are  years of experience in custom software development, we offerbusinesses, large and </p>
      <div className='pasr'>
      <div className='exp center-0 '>
       
      <h4 className='not-exp '>read more</h4>
      </div>
      </div>
    </div>
    <div class="col-12 col-lg-5">
     
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
     
    </div>
          </div>
        </div>
        
    </div>
    <div className='container service  p-59'>
      <h4 className='se text-lg-center'>Our Services</h4>
      {/* <h4 className='line'></h4> */}
    
      <div class="card-group">
  <div class="card col-md-12">
    <img src={img5} class="card-img-top ser1" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Gosira</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
   
  </div>
  <div class="card col-md-12 ">
    <img src={img6} class="card-img-top ser1" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Go accelerate</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
   
  </div>
  <div class="card col-md-12">
    <img src={img7} class="card-img-top ser1" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Gobeze Training</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
  
  </div>
</div>
 
 </div>
 
<div className='container service text-col start text-lg-center p-59 '>
<h4 className='se'>Our Partners</h4>
  <div className='row'>
    <div className='col-lg-4 col-12'>
    <img src={img8} class="card-img-top ser" alt="..."/>
    </div>
    <div className='col-lg-4 col-12'>
    <img src={img9} class="card-img-top ser" alt="..."/>
    </div>
    <div className='col-lg-4 col-12'>
    <img src={img10} class="card-img-top ser" alt="..."/>
    </div>
    <div className='col-lg-4 col-12'>
    <img src={img11} class="card-img-top ser" alt="..."/>
    </div>
    <div className='col-lg-4 col-12'>
    <img src={img12} class="card-img-top ser" alt="..."/>
    </div>
  </div>
</div>
<div className='container-fluid ne'>
  <div className='container'>
    <div className='row'>
      <div className='text-lg-center text-col-center'>
         <h2 className='se fw-semibold'>News</h2>
      </div>
    </div>
 
    <div className='row pp'>
      <div className='col-lg-4 col-md-4 col-12'>

      <div class="card ma" >
  <img src={img13} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='exp'>

<h4 className="not-exp "><Link to="/" className="link ">read more</Link>
  </h4>
</div>
  </div>
</div>

      </div>
      <div className='col-lg-4 col-md-4 col-12'>

      <div class="card ma" >
  <img src={img14} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='exp'>

    <h4 className="not-exp "><Link to="/" className="link ">read more</Link>
      </h4>
    </div>
  </div>
</div>

      </div>
      <div className='col-lg-4 col-md-4 col-12 '>

      <div class="card ma" >
  <img src={img15} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='exp'>

    <h4 className="not-exp "><Link to="/" className="link ">read more</Link>
      </h4>
    </div>
  </div>
</div>

      </div>
    </div>
  </div>
</div>


    </div>
   
  )
}

export default Home