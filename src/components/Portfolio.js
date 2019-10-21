import React from 'react';
import Footer from './footer';


function Portfolio() {
    return (
        <div className="wrapper">
        <script type="text/javascript" src="/js/save.js"></script>
            <div className="container-fluid padding">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 border bg-white shadow margin-bottom full-col-logo">
                        <div className="row header">
                            <div className="col-10 col-sm-11 col-lg-11 logo-col">
                            <img src="images/portfolio.png" alt="" width='80px' className='page-logo'/>
                            <h1 className='headerText'><b>Portfolio</b></h1>
                            <h5 className='underHeader'>Some of my projects</h5>
                            </div>
                            <div className="col-2 col-sm-1 col-lg-1 text-right">
                                <a href="/" className="btn-close rotate-center"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 bg-white shadow border">


                    </div>
                </div>
            <Footer/>
            </div>
    </div>
    );
}

export default Portfolio;