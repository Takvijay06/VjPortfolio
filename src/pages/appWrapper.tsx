import React from "react";
import Navbar from "../components/navbar";
import ContactUs from "../components/contactUs";
import Footer from "../components/footer";
import { BrowserRouter, Link } from "react-router-dom";

const AppWrapper = (props:any) => {
  return (
    <BrowserRouter>
      <Navbar />
      {props.children}
      <ContactUs />
      <Footer />
    </BrowserRouter>
  );
};

export default AppWrapper;
