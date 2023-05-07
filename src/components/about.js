import React from "react";

const About = () => {
  const [teamMembers, setTeamMembers] = React.useState([
    { name: "Jayant", email: "j13@gmial.com" },
    { name: "hitesh", email: "h13@gmial.com" },
  ]);
  return (
    <>
      <div>About Us</div>
      {teamMembers?.map((member, index) => {
        return (
          <div>
            <p>{member.name}</p>
            <p>{member.email}</p>
          </div>
        );
      })}
    </>
  );
};
export default About;
