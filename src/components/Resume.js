import React from 'react';
import Footer from './footer';

function Resume() {
    return (
        <div className="wrapper">
            <div className="container-fluid padding">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 border bg-white shadow margin-bottom full-col-logo">
                        <div className="row header">
                            <div className="col-10 col-sm-11 col-lg-11 logo-col">
                            <img src="images/resume.png" alt="" width='80px' className='page-logo'/>
                            <h1 className='headerText'><b>Resume</b></h1>
                            <h5 className='underHeader'>My Qualifications</h5>
                            </div>
                            <div className="col-2 col-sm-1 col-lg-1 text-right">
                                <a href="/" className="btn-close rotate-center"></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 bg-white shadow border">
                        <div className="row middle">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 padding-bottom">
                            <h3 className='resume-h3'><b>Education</b></h3>
                            <div className="block-grey resume-table">
                        <table>
                           <tbody>
                              <tr>
                                 <td className="font-weight-m">Name</td>
                                 <td className="text-right">Saint-Petersburg <br/> State Institute of Technology</td>
                              </tr>
                              <tr>
                                 <td className="font-weight-m">Date</td>
                                 <td className="text-right">2016 - present time</td>
                              </tr>
                              <tr>
                                 <td className="font-weight-m">Role</td>
                                 <td className="text-right">Bachleor</td>
                              </tr>
                           </tbody>
                        </table>
                     </div>

                            </div>

                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                            <h3 className='resume-h3'><b>Expirience</b></h3>
                            <div className="block-grey resume-table">
                        <table>
                           <tbody>
                              <tr>
                                 <td className="font-weight-m">Company Name</td>
                                 <td className="text-right">Own Projects</td>
                              </tr>
                              <tr>
                                 <td className="font-weight-m">Date</td>
                                 <td className="text-right">2017 - present time</td>
                              </tr>
                              <tr>
                                 <td className="font-weight-m">Role</td>
                                 <td className="text-right">Front-end developer <br/> HTML/CSS-coder </td>
                              </tr>
                           </tbody>
                        </table>
                     </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 <col-xl-8></col-xl-8> bg-white shadow border">
                        <div className="row middle">
                            <div className="col-12 col-sm-12 col-lg-6 col-md-12">
                                <div className="row">
                                    <div className="col-12">
                                    <h3 className='resume-h3'><b>Professional skills</b></h3>
                                    <label className='progress-title'>JS</label>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}>
                                        <span>75%</span>
                                        </div>
                                     </div>
                                     <label className='progress-title'>CSS</label>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" style={{width: "65%"}}>
                                        <span>65%</span>
                                        </div>
                                     </div>
                                     <label className='progress-title'>HTML</label>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}>
                                        <span>70%</span>
                                        </div>
                                     </div>
                                     <label className='progress-title'>PHP</label>
                                    <div className="progress">
                                        <div className="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{width: "30%"}}>
                                        <span>30%</span>
                                        </div>
                                     </div>



                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-lg-6 col-md-12 language-skills">
                                    <h3 className='resume-h3 padding-top'><b>Language skills</b></h3>

                                    <div className="progress progress-language" style={{width:"290px"}}>
                                    <label className="progress-bar-label progress-title">Russian (Native)</label>
                                        <span className="ratyli" data-rate="5" data-ratemax="5">
                                        <span className="rate rate-full" style={{cursor:"default"}}>
                                            <i className="fa fa-star"></i>
                                            </span>
                                        <span className="rate rate-full" style={{cursor:"default"}}>
                                            <i className="fa fa-star"></i>
                                            </span>
                                            <span className="rate rate-full" style={{cursor:"default"}}>
                                            <i className="fa fa-star"></i></span>
                                            <span className="rate rate-full" style={{cursor:"default"}}>
                                            <i className="fa fa-star"></i></span><span className="rate rate-full" style={{cursor:"default"}}>
                                            <i className="fa fa-star"></i></span>
                                            </span>
                                    </div>
                                    <div className="progress progress-language" style={{width:"290px"}}>
                                    <label className="progress-bar-label progress-title">English</label>
                                        <span className="ratyli" data-rate="3" data-ratemax="5">
                                        <span className="rate rate-full" style={{cursor:"default"}}>
                                            <i className="fa fa-star"></i>
                                            </span>
                                            <span className="rate rate-full" style={{cursor:"default"}}>
                                            <i className="fa fa-star"></i>
                                            </span>
                                            <span className="rate rate-full" style={{cursor:"default"}}>
                                            <i className="fa fa-star"></i></span>
                                            <span className="rate rate-empty" style={{cursor:"default"}}>
                                            <i className="fa fa-star-o"></i></span>
                                            <span className="rate rate-empty" style={{cursor:"default"}}>
                                            <i className="fa fa-star-o"></i></span>
                                            </span>
                                    </div>


                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-lg-6 col-md-12 knwldg">
                            <h3 className='resume-h3 padding-top'><b>Knowledge</b></h3>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-lg-6 col-md-12">
                                    <ul>
                                       <label className='progress-title ul-title'>Front-end</label>
                                       <li>JS</li>
                                       <li>Symfony framework</li>
                                       <li>Docker, Composer</li>
                                       <li>Websockets</li>
                                       <li>Caching (Memcached)</li>
                                       <li>REST API (Swagger)</li>
                                       <li>Server administration</li>
                                    </ul>
                                        


                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-lg-6 col-md-12">
                                        <ul>
                                       <label className='progress-title ul-title'>Libs</label>
                                       <li>JQUERY</li>
                                       <li>Bootstrap</li>
                                       
                                    </ul>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-lg-6 col-md-12"> 
                                    <ul>
                                       <label className='progress-title ul-title'>Software</label>
                                       <li>JS</li>
                                       <li>Symfony framework</li>
                                       <li>Docker, Composer</li>
                                       <li>Websockets</li>
                                       <li>Caching (Memcached)</li>
                                       <li>REST API (Swagger)</li>
                                       <li>Server administration</li>
                                    </ul>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-lg-6 col-md-12">
                                        <ul>
                                       <label className='progress-title ul-title'>Common</label>
                                       <li>JS</li>
                                       <li>Symfony framework</li>
                                       <li>Docker, Composer</li>
                                       <li>Websockets</li>
                                       <li>Caching (Memcached)</li>
                                       <li>REST API (Swagger)</li>
                                       <li>Server administration</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 bg-white shadow border">
                        <div className="row middle">
                            <div className="col-12 text-center">
                                <h3 className='resume-h3'><b>Hobbies & Interests</b></h3>
                                <div className="circle-block "><span className="icon hover-animate"><i className="fa fa-gamepad"></i></span>
                                    <span className="name hover-animate">Video Games</span>
                                </div>
                                <div className="circle-block "><span className="icon hover-animate"><i className="fa fa-headphones"></i></span>
                                    <span className="name hover-animate">Music</span>
                                </div>
                                <div className="circle-block "><span className="icon hover-animate"><i className="fa fa-level-up"></i></span>
                                    <span className="name hover-animate">Studying</span>
                                </div>
                                <div className="circle-block "><span className="icon hover-animate"><i className="fa fa-terminal"></i></span>
                                    <span className="name hover-animate">Coding</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            <Footer/>
            </div>
    </div>
    );
}

export default Resume;