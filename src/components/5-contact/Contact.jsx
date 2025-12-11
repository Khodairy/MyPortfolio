import { useState, useEffect } from "react";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactAnimation from "../../animation/contact.json";

const Contact = () => {
  const [state, handleSubmit] = useForm("mzznjkad");
  const [showSuccess, setShowSuccess] = useState(false);

  // لما يتم الإرسال بنجاح
  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      // إخفاء الرسالة بعد ثانيتين
      const timer = setTimeout(() => setShowSuccess(false), 2000);

      // تنظيف الـ timer
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  // إعادة تهيئة الفورم بعد الإرسال
  useEffect(() => {
    if (state.succeeded) {
      // إعادة تهيئة الحقول
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
    }
  }, [state.succeeded]);

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information and Get notified when I publish
        something new.
      </p>

      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button type="submit" disabled={state.submitting} className="submit">
            {state.submitting ? "Submitting ..." : "Submit"}
          </button>

          {showSuccess && (
            <div
              className="flex"
              style={{
                fontSize: "18px",
                marginTop: "1.7rem",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <Lottie
                loop={false}
                style={{ height: 37 }}
                animationData={doneAnimation}
              />
              <span>Your message has been sent successfully 👌</span>
            </div>
          )}
        </form>

        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 355 }}
            animationData={contactAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
