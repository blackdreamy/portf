import React from 'react';
import './App.css';
import './Portfolio.css'
import Footer from './components/footer';
function App() {
    return (
        <div className="wrapper">
    	<div className="container-fluid padding">
    		<div className="row justify-content-center">
    			<div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 border bg-white shadow margin-bottom">
    				<div className="row">
    					<div className="col-xs-12 col-sm-5 col-lg-5 text-center header-padding-avatar border-right">
   						<img src="images/me.jpg" alt='me' className='avatar'/> 					
    					</div>

    					<div className="col-xs-12 col-sm-7 col-lg-7 text-center header-padding">
    					<span className='my-name'>STARCHENKO SERGEY</span>
    					<p>Front-end developer since 2017</p>
    					<div className="row">
    					<div className="col-12">
    					<div className="btn-group" role="group">
						  <a href="/"><i className="fa fa-github header-icon"></i></a>
						  <a href="/"><i className="fa fa-stack-overflow header-icon"></i></a>
						  <a href="/"><i className="fa fa-envelope header-icon"></i></a>
						  
						  
						</div>
    					</div>
    					</div>
    					</div>
    				</div>
    			</div>
    		</div>

    		<div className="row justify-content-center">
    			<div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 border-right border-left border-bottom text-center bg-white shadow">
    			<div className="row justify-content-center">

    			<div className="col-xs-3 col-xl-3 col-lg-6 image-padding">
    			<a href="/profile">
			      <figure>
			        <img src="images/profile.png" alt=""/>
			        <figcaption className='image-text'>Profile</figcaption>
			      </figure>
			      </a>
			    </div>

			    <div className="col-xs-3 col-xl-3 col-lg-6 image-padding">
			    <a href="/resume">
			      <figure>
			        <img src="images/resume.png" alt=""/>
			        <figcaption className='image-text'>Resume</figcaption>
			      </figure>
			      </a>
			    </div>

			    <div className="col-xs-3 col-xl-3 col-lg-6 image-padding">
			    <a href="/portfolio">
			      <figure>
			        <img src="images/portfolio.png" alt=""/>
			        <figcaption className='image-text'>Portfolio</figcaption>
			      </figure>
			      </a>
			    </div>

			    <div className="col-xs-3 col-xl-3 col-lg-6 image-padding">
			    <a href="/contact">
			      <figure>
			        <img src="images/contact.png" alt=""/>
			        <figcaption className='image-text'>Contact</figcaption>
			      </figure>
			      </a>
			    </div>

    			</div>
    			</div>
    		</div>

    		<Footer/>
    	</div>

    </div>
    );
}

export default App;