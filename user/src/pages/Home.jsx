import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Header from "../components/blogs/Header";
import Cards from "../components/blogs/Cards";
import NewsletterSignup from "../components/blogs/NewsLetterSignup";
import BlogTagsList from "../components/blogs/BlogTagsList";

function Home() {
  const [activeTag, setActiveTag] = useState("All");

  const HandleActiveTag = (tag) => {
    console.log("tag clicked.", tag);
    setActiveTag(tag);
  };

  const value = true;

  return (
    <div>
      <Navbar value={value} />
      <div className="mx-8 sm:mx-16 xl:mx-24">
        <Header />
        <BlogTagsList activeTag={activeTag} HandleActiveTag={HandleActiveTag} />
        <Cards activeTag={activeTag} />
        <NewsletterSignup />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
