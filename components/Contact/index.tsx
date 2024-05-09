"use client"
import NewsLatterBox from "./NewsLatterBox";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contact = () => {
  const form = useRef(null);
  const [loading,setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const uploadForm = async(e) => {
    e.preventDefault();
    setLoading(true)
    await emailjs.sendForm("service_irsy5nj","template_yy3rv2s",form.current,{
      publicKey: "C2DRqUR4tRquIWAU8"
    })
    setShowModal(true)
    setLoading(false)
    
    form.current.reset();
  }
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div
              className="wow fadeInUp shadow-three dark:bg-slate-900 mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Assistance? Submit a Support Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Have questions or facing issues? Submit a support ticket, and we'll assist you promptly via email.
              </p>
              <form ref={form} onSubmit={uploadForm}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="fname"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your First Name
                      </label>
                      <input
                        required
                        type="text"
                        name="first_name"
                        placeholder="Enter your first name"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="lname"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Last Name
                      </label>
                      <input
                        required
                        type="text"
                        name="last_name"
                        placeholder="Enter your last name"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="contact"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Contact Number
                      </label>
                      <input
                        required
                        name="contact"
                        type="number"
                        placeholder="Enter your contact number"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button disabled={loading} className="shadow-submit dark:shadow-submit-dark rounded-sm bg-fuchsia-500 px-9 py-4 text-base font-medium text-white duration-300 hover:bg-fuchsia-800/90">
                      {loading? 
                        <svg viewBox="25 25 50 50">
                          <circle r="20" cy="50" cx="50" color="cyan"></circle>
                        </svg>:"Submit Ticket"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-slate-300 dark:bg-slate-500 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid bg-slate-300 dark:bg-slate-500 border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Thank You
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-red-500 background-transparent font-bold opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 bg-slate-300 dark:bg-slate-500 text-lg leading-relaxed">
                    Thank You for contacting us, We ill call you shortly.
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
