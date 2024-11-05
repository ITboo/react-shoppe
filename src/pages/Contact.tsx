import React from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import "./style/Contact.css";
type ContactForm = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
};
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactForm>();
  const submit: SubmitHandler<ContactForm> = (data) => {
    console.log(data);
  };
  const error: SubmitErrorHandler<ContactForm> = (data) => {
    console.log(data);
  };
  const isEmail = (_) => {
    return true;
  };

  return (
    <section className="contact">
      <div className="contact__text">
        <h2>Contact Us</h2>
        <p>
          Say Hello send us your thoughts about our products or share your ideas
          with our Team!
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit(submit, error)}>
        <div className="form-wrapper">
          <input
            type="text"
            placeholder="First Name"
            aria-invalid={errors.first_name ? true : false}
            {...register("first_name", { required: true, validate: isEmail })}
          />
          <input
            type="text"
            placeholder="Last Name"
            {...register("last_name", { required: true, validate: isEmail })}
          />
          <input
            type="email"
            placeholder="email"
            {...register("email", { required: true, validate: isEmail })}
          />
          <input type="tel" placeholder="phone" />
        </div>
        <textarea
          className="contact-textarea"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          {...register("message", { required: true, validate: isEmail })}
        ></textarea>
        <div className="contact-btns">
          <button className="send">Send</button>
          <button type="button" onClick={() => reset()} className="reset">
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
