import React from "react";
import Tab from './tab';

export default ({ name }) => (
  <div style={{ textAlign: "center" }}>
    <Tab />
    <form>
      <h4>Login Form</h4>
      <div style={{ flex: 1, flexDirection: "column" }}>
        <div style={{ flex: 1, marginTop: 10 }}>
          <label style={{ flex: 1 }}>
            Username:
            <input type="text" name="name" />
          </label>
        </div>
      </div>
      <input type="submit" value="Log in" />
    </form>
  </div>
);
