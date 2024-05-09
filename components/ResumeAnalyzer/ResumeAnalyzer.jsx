import React from "react";
import axios from "axios";

const ResumeAnalyzerPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 text-center">Optimize job applications by analyzing resumes against job descriptions.</h1>
      <h3 className="text-2xl font-bold mb-10 text-center">Tailor resumes effectively for increased job application success.</h3>

      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="role" className="block font-medium mb-1">
            Role:
          </label>
          <input
            type="text"
            id="role"
            className="w-full px-4 py-2 border rounded border-fuchsia-600"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jobDescription" className="block font-medium mb-1">
            Job Description:
          </label>
          <textarea
            id="jobDescription"
            className="w-full px-4 py-2 border rounded border-fuchsia-600"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="resume" className="block font-medium mb-1">
            Resume:
          </label>
          <h5 className="text-sm mb-1">Please upload in the .pdf type file only</h5>
          <input
            type="file"
            id="resume"
            className="w-full px-4 py-2 border rounded border-fuchsia-600"
            accept=".pdf"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-sky-400 text-white px-4 py-2 rounded disabled:bg-gray-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ResumeAnalyzerPage;
