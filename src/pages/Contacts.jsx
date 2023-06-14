import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "./Contacts.module.css";
import { useEffect } from "react";
import Logo from "../components/Logo";
import Layout from "../components/Layout";

// Validation Schema
const schema = yup
  .object({
    name: yup.string().min(3, "Name must be at least 3 characters.").required(),
    email: yup.string().email().required("Email is required."),
    subject: yup
      .string()
      .min(3, "Subject must be at least 3 characters.")
      .required(),
    message: yup
      .string()
      .min(3, "Message must be at least 3 characters.")
      .required(),
  })
  .required();

function Contacts() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  // Change title
  useEffect(() => {
    document.title = "Mallmart - Contacts";
  }, []);

  // When data is valid goes in
  const onSubmit = (data) => {
    navigate("/contact-success");
  };

  return (
    <Layout>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.checkoutWrapper}
      >
        <div className={styles.headTitle}>
          <Logo></Logo>
          <h1 className={styles.title}>Contact us</h1>
        </div>
        <div className={styles.contactDetails}>Name</div>
        <div>
          <input
            {...register("name")}
            className={styles.formInfo}
            placeholder="Roxanne Franco"
          />
          {errors.name != null ? (
            <p className={styles.error}>{errors.name?.message}</p>
          ) : null}
        </div>
        <div className={styles.contactDetails}>Email</div>
        <div>
          <input
            {...register("email")}
            type="email"
            className={styles.formInfo}
            placeholder="roxanne@franco.com"
          />
          {errors.email != null ? (
            <p className={styles.error}>{errors.email?.message}</p>
          ) : null}
        </div>
        <div className={styles.contactDetails}>Subject</div>
        <div>
          <input
            {...register("subject")}
            className={styles.formInfo}
            placeholder="ex: Where is my order?"
          />
          {errors.subject != null ? (
            <p className={styles.error}>{errors.subject?.message}</p>
          ) : null}
        </div>
        <div className={styles.contactDetails}>Message</div>
        <div>
          <textarea
            {...register("message")}
            className={`${styles.formInfo} ${styles.textField}`}
            placeholder="ex: Your message here."
          />
          {errors.message != null ? (
            <p className={styles.error}>{errors.message?.message}</p>
          ) : null}
        </div>
        <input type="submit" className={styles.firstButton} value="Send" />
      </form>
    </Layout>
  );
}

export default Contacts;
