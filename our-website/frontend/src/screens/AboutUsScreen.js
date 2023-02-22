import React from "react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="AboutUsContainer">
      <Helmet>
        <title>About Us</title>
      </Helmet>
      <h1>About Us</h1>
      <div className="AboutUs">
        <p>
          <h6 className="summery">
            I am a passionate and highly motivated software developer. I like to
            challenge myself, learn, develop and explore existing and new
            fields. I specialize in Full-Stack/ Backend/ Frontend development
            and I am highly knowledgeable in React.js, Node.js, Express,
            JavaScript, MongoDB, and Java.
          </h6>
        </p>

        <p>
          <h6 className="summery">
            In this project, I demonstrated my programming abilities and gained
            additional knowledge and experience in this field. I enjoyed working
            in a team and creating this beautiful site, which can be used by a
            wide variety of people.
          </h6>
        </p>
        <ul className="teamList">
          <li className="person">
            <strong>Rafael Navon</strong> - Full Stack Developer
            <br />
            <a href="https://www.linkedin.com/in/rafael-navon/">
              My Linkedin profile
            </a>
            <br />
            <br />
            <img
              src="https://media.licdn.com/dms/image/C4E03AQHEw_eJ8c3JMw/profile-displayphoto-shrink_400_400/0/1616965889497?e=1681948800&v=beta&t=9GRHUTUCwThdwXcNVcb-DXVXqjldWeswaX56CJk_6T0"
              width="200"
              height="200"
            />
            <br />
          </li>
        </ul>
      </div>
      <h3>Contact Us</h3>
      <ul className="ContactList">
        <li>Email: contact@anastacia.com</li>
        <li>Phone: (555) 555-5555</li>
        <li>Address: Tel-Aviv, Israel</li>
      </ul>
    </div>
  );
};

export default AboutUs;
