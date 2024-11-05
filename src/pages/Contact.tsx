import React from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import "./style/Contact.css";
type ContactForm = {
  first_name: string;
  last_name: string;
  email: string;
  message: string;
  phone: string;
};
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ContactForm>({ mode: "onBlur" });
  const submit: SubmitHandler<ContactForm> = (data) => {
    console.log(data);
    reset();
  };
  const error: SubmitErrorHandler<ContactForm> = (data) => {
    console.log(data);
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
          <div className="">
            <input
              type="text"
              placeholder="First Name"
              aria-invalid={errors.first_name ? true : false}
              {...register("first_name", {
                required: "This field is required ",
                minLength: {
                  value: 5,
                  message: "Minimum 5 symbols",
                },
              })}
            />
            <div className="err">
              {errors?.first_name && (
                <p>
                  {errors?.first_name?.message || "Oops, something went wrong!"}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Last Name"
              {...register("last_name", {
                required: "This field is required ",
                minLength: {
                  value: 5,
                  message: "Minimum 5 symbols",
                },
              })}
            />
            <div className="err">
              {errors?.last_name && (
                <p>
                  {errors?.last_name?.message || "Oops, something went wrong!"}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "This field is required ",
              })}
            />
            <div className="err">
              {errors?.email && (
                <p>{errors?.email?.message || "Oops, something went wrong!"}</p>
              )}
            </div>
          </div>
          <div className="">
            <input
              type="tel"
              placeholder="Phone"
              {...register("phone", {
                required: "This field is required ",
              })}
            />
            <div className="err">
              {errors?.phone && (
                <p>{errors?.phone?.message || "Oops, something went wrong!"}</p>
              )}
            </div>
          </div>
        </div>
        <textarea
          className="contact-textarea"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message"
          {...register("message", { required: true })}
        ></textarea>
        <div className="contact-btns">
          <button className={isValid ? "send" : "disabled"} disabled={!isValid}>
            Send
          </button>
          <button type="button" onClick={() => reset()} className="reset">
            Reset
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
