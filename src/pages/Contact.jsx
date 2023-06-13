import styles from "./Contact.module.css";
import { useEffect } from "react";
import Layout from "../components/Layout";

function Contact() {
  // Change title
  useEffect(() => {
    document.title = "Mallmart - Contacts";
  }, []);

  return (
    <Layout>
      <h1>contact</h1>
    </Layout>
  );
}

export default Contact;
