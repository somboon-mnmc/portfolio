import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="h-100 py-20 flex flex-col gap-y-20 justify-center items-cente bg-slate-100"
    >
      <h1 className="text-center text-3xl">About</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="imageContainer relative w-full">
          <img
            className="w-[400px] absolute right-20 rounded-xl"
            src="https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp"
          />
        </div>
        <div className="textAboutMe border w-[65%]">
          <h1 className="text-2xl mb-2">
            A dedicated junior Front-end Developer 📍
          </h1>
          <p>
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
