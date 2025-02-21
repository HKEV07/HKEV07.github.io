import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "hkev",
          from_email: form.email,
          to_email: "benaaitona@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="mt-8 xl:mt-12 flex flex-col xl:flex-row gap-6 xl:gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1 h-[180px] md:h-[320px] lg:h-[450px] w-full lg:w-[520px] order-1 lg:order-2"
        >
          <EarthCanvas />
        </motion.div>

        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 xl:flex-[0.75] bg-black-100 p-4 sm:p-6 lg:p-8 rounded-2xl order-2 xl:order-1"
        >
          <p className="text-secondary font-medium sm:text-[18px] text-[14px] uppercase tracking-wider">
            Get in touch
          </p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Contact.
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 lg:mt-12 flex flex-col gap-6 lg:gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 lg:mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 lg:mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your Email?"
                className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-3 lg:mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-3 sm:py-4 px-4 sm:px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium w-full"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-2.5 sm:py-3 px-6 sm:px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  ); 
};

export default SectionWrapper(Contact, "contact");
