import React from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router";

const jobList = [
  {
    id: 1,
    title: "Senior Journalist",
    type: "Full Time",
    location: "Dhaka, Bangladesh",
    desc: "We are looking for an experienced journalist to cover national and international news stories with accuracy and depth.",
  },
  {
    id: 2,
    title: "Front-End Developer",
    type: "Full Time",
    location: "Remote",
    desc: "Join our tech team to build and maintain our news platform using React and modern web technologies.",
  },
  {
    id: 3,
    title: "Social Media Manager",
    type: "Full Time",
    location: "Dhaka, Bangladesh",
    desc: "Manage our social media presence and grow our audience across Facebook, Twitter and Instagram.",
  },
  {
    id: 4,
    title: "Photojournalist",
    type: "Freelance",
    location: "Anywhere in Bangladesh",
    desc: "Capture powerful images that tell the stories behind the headlines for our print and digital platforms.",
  },
];

const Career = () => {
  return (
    <div className="w-11/12 mx-auto">
      <main className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#403F3F] mb-4">
            Join Our Team
          </h1>
          <p className="text-gray-500 text-lg">
            Be part of Bangladesh's most trusted news platform
          </p>
        </div>

        {/* Why Join Us */}
        <div className="bg-[#F3F3F3] rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-[#403F3F] mb-6 border-l-4 border-[#D72050] pl-4">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "🏆 Work with award-winning journalists",
              "💰 Competitive salary and benefits",
              "🌍 Cover local and international stories",
              "📈 Clear career growth path",
              "🏠 Flexible remote work options",
              "📚 Continuous learning and development",
            ].map((item, i) => (
              <p key={i} className="text-gray-600">
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Job Listings */}
        <div>
          <h2 className="text-2xl font-bold text-[#403F3F] mb-6 border-l-4 border-[#D72050] pl-4">
            Open Positions
          </h2>
          <div className="space-y-4">
            {jobList.map((job) => (
              <div
                key={job.id}
                className="border rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-4"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-bold text-[#403F3F] text-lg">
                      {job.title}
                    </h3>
                    <span className="text-xs bg-[#F3F3F3] text-[#D72050] border border-[#D72050] px-2 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">
                    📍 {job.location}
                  </p>
                  <p className="text-gray-500 text-sm">{job.desc}</p>
                </div>
                <Link to="/auth/login">
                  <button className="btn bg-[#403F3F] text-white px-8 whitespace-nowrap">
                    Apply Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#403F3F] mb-6 border-l-4 border-[#D72050] pl-4">
            Our Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏥",
                title: "Health Insurance",
                desc: "Full medical, dental and vision coverage for you and your family.",
              },
              {
                icon: "🎓",
                title: "Learning Budget",
                desc: "Annual budget for courses, conferences and professional development.",
              },
              {
                icon: "🏖️",
                title: "Paid Leave",
                desc: "Generous paid time off including national holidays and sick leave.",
              },
              
            ].map((benefit, i) => (
              <div key={i} className="border rounded-xl p-6">
                <p className="text-3xl mb-3">{benefit.icon}</p>
                <h3 className="font-bold text-[#403F3F] mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Apply CTA */}
        <div className="mt-12 bg-[#403F3F] rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">
            Don't See a Suitable Role?
          </h2>
          <p className="text-gray-300 mb-6">
            Send us your CV and we'll keep you in mind for future openings
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input flex-1 text-[#403F3F]"
            />
            <button className="btn bg-[#D72050] text-white border-none px-6">
              Send CV
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Career;
