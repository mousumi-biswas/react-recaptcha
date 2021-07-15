import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Register = () => {
  const registrationForm = () => (
    <form>
      <input
        type="text"
        className="form-control"
        placeholder="your name"
        autoFocus
      />
      <br />
      <input
        type="email"
        className="form-control"
        placeholder="your email"
        autoFocus
      />
      <br />
      <input
        type="password"
        className="form-control"
        placeholder="******"
        autoFocus
      />
      <br />

      <div className="form-group">
        <ReCAPTCHA sitekey="6LdmVZkbAAAAALsKOcPpW6tIQVYk_UrKtXtKmAFp" />
      </div>

      <br />
      <button type="submit" className="btn btn-raised">
        Register
      </button>
    </form>
  );

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4>Register</h4>

          {registrationForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
