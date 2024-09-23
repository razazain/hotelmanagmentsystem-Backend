import React from 'react'

const Login = () => {
  return (
    <div>
        


        {/* <!-- Contact Section Begin --> */}
    <section class="contact-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4">
                    <div class="contact-text">
                        <h2>Login Account </h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td class="c-o">Address:</td>
                                    <td>856 Cordia Extension Apt,US</td>
                                </tr>
                                <tr>
                                    <td class="c-o">Phone:</td>
                                    <td>(12) 345 67890</td>
                                </tr>
                                <tr>
                                    <td class="c-o">Email:</td>
                                    <td>info.sona@gmail.com</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="col-lg-7 offset-lg-1">
                    <form action="#" class="contact-form">
                        <div class="row">
                        
                            <div class="col-lg-12">
                                <input type="email" placeholder="Your Email"/>
                            </div>
                            <div class="col-lg-12">
                                <input type="password" placeholder="Your Password"/>
                            </div>
                          
                            <div class="col-lg-12">
                              
                                <button type="submit">Login </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
       
          
        </div>
    </section>
    {/* <!-- Contact Section End --> */}



    </div>
  )
}

export default Login