import React from 'react';
import Footer from './footer';
function Profile() {
    return (
        <div className="wrapper">
            <div className="container-fluid padding">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 border bg-white shadow margin-bottom full-col-logo">
                        <div className="row header">
                            <div className="col-10 col-sm-11 col-lg-11 logo-col">
                            <img src="images/profile.png" alt="" width='80px' className='page-logo'/>
                            <h1 className='headerText'><b>PROFILE</b></h1>
                            <h5 className='underHeader'>About me</h5>
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
                            <div className="col-12 col-sm-12 col-lg-12 col-xl-7">
                                <h2 className='hello'>Hello, I am a full-stack developer</h2>
                                <p>Over the past few years I had the opportunity to participate in various projects, learn different technologies.
                                </p>
                                <p>
                                I am always open to gaining new skills and the more I learn the more I am able to see that I still have many things ahead. I am developing my own projects, most of them are Open Source.
                                </p>
                                <p>
                                Most of my time I spend on web development. In addition to web technologies, I work on electronic devices, including circuit design and writing firmware for microcontrollers. I enjoy working in the convergence of technologies and creating non-trivial, quality products.
                                 </p>
                                <p>
                                I like dealing with non-standard tasks. In my projects I try to avoid using various frameworks, which facilitate the development process.
                                </p>

                                <button className='btn btn-secondary cv-button'>Download CV</button>
                            </div>
                            <div className="col-12 col-sm-12 col-lg-12 col-xl-5">
                                <div className="block-grey">
                        <table>
                           <tbody>
                              <tr>
                                 <td className="font-weight-m">Name</td>
                                 <td className="text-right">Starchenko Sergey</td>
                              </tr>
                              <tr>
                                 <td className="font-weight-m">Date of birth</td>
                                 <td className="text-right">04-04.2019</td>
                              </tr>
                              <tr>
                                 <td className="font-weight-m">E-mail</td>
                                 <td className="text-right"><a href="mailto:blackdream1337@gmail.com">blackdream1337@gmail.com</a></td>
                              </tr>
                              <tr>
                                 <td className="font-weight-m">Phone</td>
                                 <td className="text-right"><a href="tel:+7-999-999-99-99">+7-999-999-99-99</a></td>
                              </tr>
                              <tr>
                                 <td className="font-weight-m">Website</td>
                                 <td className="text-right"><a href="https://blackdream1337.github.io">blackdream1337.github.com</a></td>
                              </tr>
                              <tr>
                                 <td colSpan="2" className="font-weight-m"><i className="fa fa-circle green-marker" aria-hidden="false"></i>Not Hired</td>
                              </tr>
                           </tbody>
                        </table>
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

export default Profile;