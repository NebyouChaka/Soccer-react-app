import React, { useState } from "react";
import { Form, Input, TextArea, Button, Select } from "semantic-ui-react";




class ContactForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      
        <div id="formContainer">
          <form id="form" action="#" method="POST">
            <fieldset>
              <h1>Subscription Form</h1>
              <div id="fullName">
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div id="otherInputs">
                {/* <input
                type="number"
                name="npi"
                id="npi"
                placeholder="NPI number"
                required
              />
              <input
                type="address"
                name="address"
                id="address"
                placeholder="Business Address"
                required
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Telephone Number"
                required
              /> */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  required
                />
              </div>
              <br />
              <br />
              <input type="submit" name="submit" id="submit" />
            </fieldset>
          </form>
        </div>
     
    );
  }
}
export default ContactForm;

