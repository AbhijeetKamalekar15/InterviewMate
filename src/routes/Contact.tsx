import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [successMessage, setSuccessMessage] = useState(""); // State for success message

  const onSubmit = async (data: any) => {
    const userInfo = {
      access_key: "74e62c4b-b697-436d-ae3b-0ca535e4bb0e",
      name: data.username,
      email: data.email,
      message: data.message,
    };

    try {
      await axios.post("https://api.web3forms.com/submit", userInfo);
      setSuccessMessage("Message sent!"); // Set success message
      reset();

      // Remove the success message after 5 seconds
      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-6 px-2 sm:px-4 lg:px-6 dark:bg-slate-900">
      <div className="max-w-2xl w-full space-y-6 p-6 rounded-lg shadow-md bg-gray-100 dark:bg-slate-900 dark:text-white relative">
        

        {/* Success message */}
        {successMessage && (
          <div className="text-center text-green-600 font-semibold mb-4">
            {successMessage}
          </div>
        )}

        <div className="text-center">
          <h2 className="text-xl text-blue-700 font-bold dark:text-white">
            Contact Us
          </h2>
        </div>

        <div className="flex flex-col gap-4 md:flex-row justify-between">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-2">
            <h3 className="text-sm font-medium text-gray-700 mb-2 dark:text-white">
              Send us a message
            </h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Your Name"
                  className="bg-transparent text-black text-sm w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-1 dark:text-white"
                  {...register("username", { required: true })}
                />
                {errors.username && (
                  <span className="text-xs text-red-500 font-semibold">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="bg-transparent text-black text-sm w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-1 dark:text-white"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-xs text-red-500 font-semibold">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="message"
                  placeholder="Your Message"
                  className="bg-transparent text-black text-sm w-full px-2 py-6 border rounded-md focus:outline-none focus:ring-1 dark:text-white"
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <span className="text-xs text-red-500 font-semibold">
                    This field is required
                  </span>
                )}
              </div>
              <div>
                <Button size={"sm"} className="w-full bg-blue-600 hover:bg-blue-700">Send Message</Button>
              </div>
            </form>
          </div>

          <div className="w-full md:w-1/2 md:pl-2">
            <h3 className="text-sm font-medium text-gray-700 mb-2 dark:text-white">
              Contact Information
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-1">
                <FaPhone className="text-red-500 text-sm" />
                <span>+91 9529512659</span>
              </li>
              <li className="flex items-center space-x-1">
                <FaEnvelope className="text-pink-500 text-sm" />
                <span>abhijeetkamalekar15@gmail.com</span>
              </li>
              <li className="flex items-center space-x-1">
                <FaMapMarkerAlt className="text-green-500 text-sm" />
                <span>Sangli, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
