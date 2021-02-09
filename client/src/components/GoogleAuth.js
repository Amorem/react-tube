import React from "react";
import { GoogleLogin } from "react-google-login";
import Button from "../styles/Auth";
import { authenticate } from "../utils/api-client";
import { SignInIcon } from "./Icons";

function GoogleAuth() {
  return (
    <GoogleLogin
      clientId="317215786691-6l3eb9g9s36dbsb61ojddl2nodr2at94.apps.googleusercontent.com"
      cookiePolicy="single_host_origin"
      onSuccess={authenticate}
      onFailure={authenticate}
      render={(renderProps) => (
        <Button
          tabIndex={0}
          type="button"
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <span className="outer">
            <span className="inner">
              <SignInIcon />
            </span>
            sign in
          </span>
        </Button>
      )}
    />
  );
}

export default GoogleAuth;
