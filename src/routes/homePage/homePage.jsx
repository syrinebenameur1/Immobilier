import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";
import { AuthContext } from "../../context/AuthContext";

function HomePage() {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser)
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">TrustHome: Your No. 1 Choice for Safe Renting and Buying </h1>
          <p>
          Start your journey towards finding the perfect property today with our dedicated team ready to assist you in making informed decisions that match your lifestyle and aspirations.
          Trust in our commitment to transparency and security, offering verified property information and secure transactions for your peace of mind.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
      <img src="https://i.pinimg.com/564x/1a/1a/21/1a1a218cfcb499b77bbbb03575f12267.jpg" alt=""  />
      </div>
    </div>
  );
}

export default HomePage;
