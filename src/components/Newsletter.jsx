import React, { useState } from "react";
import iconList from "../assets/images/icon-list.svg";
import illustration from "../assets/images/illustration-sign-up-desktop.svg";

const Newsletter = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const isEmail = /\S+@\S+\.\S+/.test(formData.email);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email } = formData;

    if (!isEmail || email === "") {
      setError("Valid email required");
    } else if (isEmail) {
      setFormData({
        email: "",
      });
      setIsSubmitted(true);
      setError("");
    }
  };

  return (
    <div className="text-[#242742] font-semibold h-full w-full lg:w-auto md:w-auto">
      {!isSubmitted && (
        <div className="bg-white lg:p-6 md:p-6 lg:h-auto md:h-auto h-screen w-full flex lg:flex-row md:flex-row flex-col-reverse justify-center items-center gap-6 lg:rounded-3xl md:rounded-3xl">
          <div className="flex flex-col gap-5 lg:w-[60%] lg:h-full h-[60%] w-full lg:p-10 p-6">
            <h1 className="lg:text-6xl text-5xl font-bold">Stay updated!</h1>
            <p className="">
              Join 60,000+ product managers receiving monthly updates on:
            </p>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-4 w-full">
                <span>
                  <img src={iconList} alt="icon-list" className="h-5"/>
                </span>
                Product discovery and building what matters
              </p>
              <p className="flex items-center gap-4">
                <span>
                  <img src={iconList} alt="icon-list" className="h-5"/>
                </span>
                Measuring to ensure updates are a success
              </p>
              <p className="flex items-center gap-4">
                <span>
                  <img src={iconList} alt="icon-list" className="h-5"/>
                </span>
                Add much more!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-sm">
                  <label>Email Adress</label>
                  {error && <p className="text-[#ff6257]">{error}</p>}
                </div>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@company.com"
                  className={`border ${
                    error
                      ? "border-[#ff6257] text-[#ff6257] bg-red-100"
                      : " border-[#949494] focus:border-black"
                  } outline-none p-4 rounded-xl cursor-pointer`}
                />
              </div>

              <button className="bg-[#242742] text-white p-4 rounded-xl cursor-pointer hover:bg-[#ff6257] hover:shadow-2xl hover:shadow-[#ff6257] transition-all ease-in-out duration-500">
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>
          <div className="lg:w-[40%] lg:h-full w-full h-[40%]">
            <img
              src={illustration}
              alt="illustration site"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      )}
      {isSubmitted && (
        <div className=" bg-white lg:w-[450px] md:w-[400px] md:h-auto lg:h-auto w-full h-screen p-13 flex flex-col justify-between items-start lg:gap-6 md:gap-6 lg:rounded-3xl md:rounded-3xl">
          <div className="flex flex-col gap-6 justify-center items-start mt-40 lg:mt-0 md:mt-0">
            <img src={iconList} alt="icon-ist" className="h-12" />
            <h1 className="text-5xl font-bold">Thanks for Subscribing!</h1>
            <p className="text-sm md:text-lg">
              A confirmation email has been sent to{" "}
              <span className="font-bold">{formData.email}</span>. Please open
              it and click the button inside to confirm your subscription.
            </p>
          </div>

          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-[#242742] w-full text-center text-white p-4 rounded-xl cursor-pointer hover:bg-[#ff6257] hover:shadow-2xl hover:shadow-[#ff6257] transition-all ease-in-out duration-500"
          >
            Dismiss message
          </button>
        </div>
      )}
    </div>
  );
};

export default Newsletter;
