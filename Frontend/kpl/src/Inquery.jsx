import { useState } from "react";
import Navbar from "./Navbar";
import "./inquery.css";
import axios from 'axios';

function Inquery() {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    number: "",
    address: "",
    message: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/inquery", formData)
      .then(response => {
        console.log("Form submitted successfully:", response.data);
      })
      .catch(error => {
        console.error("There was an error submitting the form:", error);
      });

    console.log("User Data: ", formData);
  };

  return (
    <div className="bg-white">
      <Navbar />
      <div className="inquerybanner max-w-4xl mx-auto">
        <img src="../public/inquerybanner.svg" alt="" />
      </div>
      <form onSubmit={handleSubmit} className="mt-10 max-w-4xl mx-auto">
        <div className="mb-5 flex">
          <label
            htmlFor="name"
            className="w-[5rem] bg-black block text-sm font-mono text-gray-900 dark:text-white rounded-l pt-2.5 pl-2"
          >
            Name
          </label>
          <input
            onChange={handleChange}
            name="username"
            type="text"
            id="name"
            className="border border-gray-300 font-mono text-sm rounded-r focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="John"
            required
          />
        </div>
        <div className="mb-5 flex">
          <label
            htmlFor="email"
            className="w-[5rem] bg-black block text-sm font-mono text-gray-900 dark:text-white rounded-l pt-2.5 pl-2"
          >
            Email
          </label>
          <input
            onChange={handleChange}
            name="email"
            type="email"
            id="email"
            className="border border-gray-300 font-mono text-sm rounded-r focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-5 flex">
          <label
            htmlFor="number"
            className="w-[5rem] bg-black block text-sm font-mono text-gray-900 dark:text-white rounded-l pt-2.5 pl-2"
          >
            Number
          </label>
          <input
            onChange={handleChange}
            name="number"
            type="tel"
            id="number"
            className="border border-gray-300 font-mono text-sm rounded-r focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="91+ 9054140***"
            required
          />
        </div>
        <div className="mb-5 flex">
          <label
            htmlFor="address"
            className="w-[5rem] bg-black block text-sm font-mono text-gray-900 dark:text-white rounded-l pt-2.5 pl-2"
          >
            Address
          </label>
          <input
            onChange={handleChange}
            name="address"
            type="text"
            id="address"
            className="border border-gray-300 font-mono text-sm rounded-r focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-black dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="25 Radhe Residency, Baroda Road, Halol, Gujarat, India"
            required
          />
        </div>
        <div className="mb-5 flex">
          <label
            htmlFor="message"
            className="w-[5rem] bg-black block text-sm font-mono text-gray-900 dark:text-white rounded-l pt-10 pl-2"
          >
            Message
          </label>
          <textarea
            onChange={handleChange}
            name="message"
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm rounded-r border focus:ring-blue-500 focus:border-blue-500 bg-white border-gray-600 placeholder-gray-400 text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="mb-5 text-white bg-black hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Inquery;
