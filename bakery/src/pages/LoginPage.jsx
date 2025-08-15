
import Footer from "../components/home/Footer";
import Navbar from "../components/home/Navbar";
import AuthPage from "../components/login/AuthPage";




const LoginPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
<Navbar/>
      <main className="flex-grow bg-white ">
 <AuthPage/>
      </main>
<Footer/>
    </div>
  );
};

export default LoginPage;
