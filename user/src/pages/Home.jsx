import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import BlogList from "../components/BlogList";
import Cards from "../components/Cards";
import Footer from "../components/footer";

function Home() {
  const [activeTag, setActiveTag] = useState("All");

  const HandleActiveTag = (tag) => {
    console.log("tag clicked.", tag);
    setActiveTag(tag);
  };

  return (
    <div>
      <Navbar />
      <div className="mx-8 sm:mx-16 xl:mx-24">
        <Header />
        <BlogList activeTag={activeTag} HandleActiveTag={HandleActiveTag} />
        <Cards activeTag={activeTag} />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
