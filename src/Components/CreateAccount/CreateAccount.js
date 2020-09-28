import React from 'react';
import  "./CreateAccount.css";

const CreateAccount = (props) => {

const {handleSubmit, handleBlour, toggleLogInToSignUp} = props;
  
    return (
        <div className="createCard mb-3">
          <div className="cardBody">
          <h3 style={{fontWeight: "bold"}} className="mb-3">Create an account</h3>
          <form onSubmit={handleSubmit}>
              <input type="text" name="name" onBlur={handleBlour}  className="mb-3 createAccountInput" placeholder="First Name" required/>
                    <br/>
              <input type="text" name="lastName" onBlur={handleBlour} className="mb-3 createAccountInput" placeholder="Last Name" required/>
                    <br/>
              <input type="email" name="email" onBlur={handleBlour} className="mb-3 createAccountInput" placeholder="Username or Email" required/>
                    <br/>
              <input type="password" name="password" onBlur={handleBlour} className="mb-3 createAccountInput" placeholder="Password" required/>
                    <br/>
              <input type="password" name="confirmPassword" onBlur={handleBlour} className="mb-4 createAccountInput" placeholder="Confirm Password" required/>
          
              <input type="submit" value="Create an account" className="button mb-3"/>
          </form>
          <div className="text-center">
            <h5  style={{display: "inline"}}>Already have an account?</h5>
            <button className="creactAccountButton" onClick={()=>toggleLogInToSignUp()}>login</button>
          </div>
          </div>
      </div>
    );
};

export default CreateAccount;