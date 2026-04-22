import React from "react";
import Header from "../../components/Header/Header";

const About = () => {
  return (
    <div className="w-11/12 mx-auto">
      <main className="max-w-4xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#403F3F] mb-4">
            About The Dragon News
          </h1>
          <p className="text-gray-500 text-lg">
            Journalism Without Fear or Favour
          </p>
        </div>

        {/* Mission */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#403F3F] mb-4 border-l-4 border-[#D72050] pl-4">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The Dragon News is committed to delivering accurate, unbiased, and
            timely news to readers across Bangladesh and beyond. We believe in
            the power of truth and the importance of a free press in building a
            just and informed society. Our team of dedicated journalists works
            tirelessly to bring you stories that matter.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {[
            { number: "10+", label: "Years of Service" },
            { number: "500+", label: "News Articles" },
            { number: "50+", label: "Journalists" },
            { number: "1M+", label: "Monthly Readers" },
          ].map((stat, i) => (
            <div key={i} className="text-center border rounded-xl p-6">
              <h3 className="text-3xl font-bold text-[#D72050]">
                {stat.number}
              </h3>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#403F3F] mb-6 border-l-4 border-[#D72050] pl-4">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Accuracy",
                desc: "We verify every story before publishing to ensure our readers receive only factual information.",
              },
              {
                title: "Independence",
                desc: "Our editorial decisions are free from political and commercial influence.",
              },
              {
                title: "Transparency",
                desc: "We are open about our sources, methods, and any corrections we make.",
              },
            ].map((value, i) => (
              <div key={i} className="border rounded-xl p-6">
                <h3 className="font-bold text-[#403F3F] mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        

        {/* Team Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#403F3F] mb-6 border-l-4 border-[#D72050] pl-4">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Rahim Uddin",
                role: "Editor in Chief",
                img: "https://randomuser.me/api/portraits/men/32.jpg",
              },
              {
                name: "Fatema Khanam",
                role: "Senior Journalist",
                img: "https://randomuser.me/api/portraits/women/44.jpg",
              },
              {
                name: "Karim Hossain",
                role: "Tech Reporter",
                img: "https://randomuser.me/api/portraits/men/56.jpg",
              },
              {
                name: "Nusrat Jahan",
                role: "Sports Reporter",
                img: "https://randomuser.me/api/portraits/women/68.jpg",
              },
            ].map((member, i) => (
              <div key={i} className="text-center border rounded-xl p-6">
                <img
                  src={member.img}
                  className="w-16 h-16 rounded-full mx-auto mb-3"
                />
                <h3 className="font-bold text-[#403F3F] text-sm">
                  {member.name}
                </h3>
                <p className="text-gray-500 text-xs mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 bg-[#403F3F] rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-2">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-gray-300 mb-6">
            Get the latest news delivered straight to your inbox
          </p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input flex-1 text-[#403F3F]"
            />
            <button className="btn bg-[#D72050] text-white border-none px-6">
              Subscribe
            </button>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 bg-[#F3F3F3] rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold text-[#403F3F] mb-2">
            Get In Touch
          </h2>
          <p className="text-gray-500 mb-1">📧 contact@dragonnews.com</p>
          <p className="text-gray-500 mb-1">📞 +880 1234 567890</p>
          <p className="text-gray-500">📍 Dhaka, Bangladesh</p>
        </div>
      </main>
    </div>
  );
};

export default About;
