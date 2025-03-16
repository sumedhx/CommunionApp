import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/hero-img.jpg"; 
import InfoCard from "../components/InfoCard";
import FeedbackCard from "../components/FeedbackCard";

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <h1>Connect Communities</h1>
          <p>Bringing communities together through events and shared experiences.</p>
          <span>
            <button id="explore">
              <Link to="/events">Explore Events</Link>
            </button>
            <button>
              <Link to="/">Download App</Link>
            </button>
          </span>
        </div>  
        <div className="hero-img">
          <div className="img-text">
            <h1>Unite, Innovate, Connect</h1>
            <h1>Together, We Thrive 😇</h1>
            <p>Connecting People Across Faiths & Interests</p>
          </div>
          <img src={heroImage} alt="Image" />
        </div>   
      </section>

      <section className="app-info">
        <div className="title">
          <h1>What is CommunionHub? </h1>
          <p>Bridging gaps between faiths with tech and fun!</p>
        </div>
        <div className="card">
          <InfoCard title={"Connect Communities"} desc={"Bridging gaps between faiths with tech and fun!"} />
          <InfoCard title={"Unlimited Advantages"} desc={"Unite, Innovate, and Inspire."} />
          <InfoCard title={"Engage & Connect"} desc={"Build meaningful relationships."} />
          <InfoCard title={"Inclusive & Spiritual"} desc={"A digital space for shared values"} />
        </div>
      </section>

      <section className="feedback">

        <div className="title">
          <h1>Trusted by Over 1500+ Active Global Users</h1>
          <p>Join a growing community of over 1500 users worldwide who trust us to connect, engage, and thrive together.</p>
        </div>

        <div className="feedbackList">
          <FeedbackCard 
          desc={"Communion has transformed how I connect with my community, fostering unity and understanding among diverse faiths."}
          name={"John"}
          country={"US"}
          />
          <FeedbackCard 
          desc={"Communion has transformed how I connect with my community, fostering unity and understanding among diverse faiths."}
          />
          <FeedbackCard 
          desc={"Communion has transformed how I connect with my community, fostering unity and understanding among diverse faiths."}
          name={"John"}
          country={"US"}
          />
        </div>  
      
      </section>
    </>
  )
}

export default Home;
