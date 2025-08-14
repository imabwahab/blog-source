import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import NewsletterSignup from "../components/NewsLetterSignup";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <section className="py-16 px-4 text-center bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="text-lg text-gray-600">
              We're a team of passionate creators, developers, and dreamers
              dedicated to building impactful digital experiences.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
              <p className="text-gray-600">
                Our mission is to empower people and businesses through
                intuitive design and scalable technology. We believe in solving
                real-world problems with creativity and empathy.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p className="text-gray-600">
                To become a leading force in digital innovation, creating
                solutions that make life simpler, better, and more connected.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values / Highlights */}
        <section className="py-16 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              What We Value
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: "Innovation",
                  desc: "We push boundaries and challenge norms to build better solutions.",
                },
                {
                  title: "Integrity",
                  desc: "We act honestly and transparently in everything we do.",
                },
                {
                  title: "Collaboration",
                  desc: "We believe in the power of teamwork and shared success.",
                },
                {
                  title: "Empathy",
                  desc: "We design with people in mind, always listening and learning.",
                },
                {
                  title: "Excellence",
                  desc: "We strive for quality and never settle for less.",
                },
                {
                  title: "Growth",
                  desc: "We’re always learning, evolving, and improving.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded shadow hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optional: Team Section */}
        {/* <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Meet the Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="p-4">
                <img
                  src="/team1.jpg"
                  alt="Team Member"
                  className="rounded-full w-32 h-32 mx-auto mb-4 object-cover"
                />
                <h4 className="text-lg font-semibold">Jane Doe</h4>
                <p className="text-sm text-gray-500">CEO & Founder</p>
              </div>
            </div>
          </div>
        </section> */}
      </div>
      <NewsletterSignup />
      <Footer />
    </>
  );
};

export default About;
