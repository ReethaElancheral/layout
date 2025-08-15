
import Blog from "../components/blog/Blog";
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";






const BlogPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Navbar/>
      <main className="flex-grow bg-white ">
  <Blog/>
      </main>
<Footer/>
    </div>
  );
};

export default BlogPage;
