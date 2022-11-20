import React from "react";

const currentYear = Date.getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright © {currentYear} </p>
    </footer>
  );
}

export default Footer;
