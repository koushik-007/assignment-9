import React from 'react';

const LogInForm = (props) => {
  const {handleSubmit, handleBlour, toggleLogInToSignUp} = props;
    return (
        <div className="createCard mb-3">
          <div className="cardBody">
          <h3 style={{fontWeight: "bold"}} className="mb-3">Login</h3>
          <form onSubmit={handleSubmit}>
           <input type="email" name="email" id="" onBlur={handleBlour} className="mb-3 createAccountInput" placeholder="Username or Email" required/>
           <br/>
           <input type="password" name="password" id="" className="mb-3 createAccountInput" placeholder="Password" required/>
           <br/>
           <input type="submit" value="Login" className="button mb-3"/>
          </form>
          <div className="text-center">
            <h5  style={{display: "inline"}}>Don’t have an account?</h5>
            <button className="creactAccountButton" onClick={()=>toggleLogInToSignUp()}>Create an account</button>
          </div>
          </div>
      </div>
    );
};

export default LogInForm;