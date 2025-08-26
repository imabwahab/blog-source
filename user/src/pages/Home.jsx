import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/blogs/HeroSection";
import Cards from "../components/blogs/Cards";
import NewsletterSignup from "../components/blogs/NewsLetterSignup";
import BlogTagsList from "../components/blogs/BlogTagsList";

function Home() {
  const [activeTag, setActiveTag] = useState("all");

  const HandleActiveTag = (tag) => {
    console.log("tag clicked.", tag);
    setActiveTag(tag.toLowerCase());
  };

  return (
    <div className="dark:bg-dark-midnight transition-colors duration-300">
      <Navbar  />
      <div className="mx-8 sm:mx-16 xl:mx-24">
        <HeroSection />
        <BlogTagsList activeTag={activeTag} HandleActiveTag={HandleActiveTag} />
        <Cards activeTag={activeTag} />
        <NewsletterSignup />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
