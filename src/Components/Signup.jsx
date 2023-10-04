import React from 'react'
import  { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div>
      <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 login-section-wrapper">
          <div class="brand-wrapper">
            <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="logo" class="logo"/>
          </div>
          <div class="login-wrapper my-auto">
            <h1 class="login-title">Sign up</h1>
            <form action="#!">
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="email@example.com"/>
              </div>
              <div class="form-group mb-4">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="enter your passsword"/>
              </div>
              <div class="form-group mb-4">
                <label for="password">Confirm Password</label>
                <input type="password" name="password" id="password" class="form-control" placeholder="enter your passsword"/>
              </div>
              <input name="signup" id="signup" class="btn btn-block login-btn" type="button" value="signup"/>
            </form>
            <p class="login-wrapper-footer-text">Already have an account? <Link to="/login"><h4 href="#!" class="text-reset">Login here</h4></Link></p>
          </div>
        </div>
        <div class="col-sm-6 px-0 d-none d-sm-block">
          <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" alt="login image" class="login-img"/>
        </div>
      </div>
    </div>
  </main>
    </div>
  )
}

export default Signup
