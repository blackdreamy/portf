import React from 'react';
import Footer from './footer';


function Contact() {
    return (
        <div className="wrapper">
        <script type="text/javascript" src="/js/save.js"></script>
            <div className="container-fluid padding">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 border bg-white shadow margin-bottom full-col-logo">
                        <div className="row header">
                            <div className="col-10 col-sm-11 col-lg-11 logo-col">
                            <img src="images/contact.png" alt="" width='80px' className='page-logo'/>
                            <h1 className='headerText'><b>Contact</b></h1>
                            <h5 className='underHeader'>So call me maybe</h5>
                            </div>
                            <div className="col-2 col-sm-1 col-lg-1 text-right">
                                <a href="/" className="btn-close rotate-center"></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row row justify-content-center">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 bg-white shadow border">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 padding-bottom">
                            <h3 className='resume-h3 padding-top'><b>Contact info</b></h3>

                            <div className="block-grey">
                        <table>
                           <tbody>
                              <tr>
                                 <td className="font-weight-m">Name</td>
                                 <td className="text-right">Starchenko Sergey</td>
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

export default Contact;