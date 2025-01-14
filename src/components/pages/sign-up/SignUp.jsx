import Navbar from "../../utils/navbar/Navbar";
import Footer from "../../utils/Footer/Footer";

const SignUp = () => {
  return (
    <div>
      <Navbar />
      <form>
        <input type="text" name="username" placeholder="username"></input>
        <input type="email" name="email" placeholder="email"></input>
        <input type="password" name="password" placeholder="password"></input>
        <input type="tel" name="contact" placeholder="contact"></input>
      </form>
      <Footer />
    </div>
  );
};

export default SignUp;
