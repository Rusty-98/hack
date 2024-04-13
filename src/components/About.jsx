import React from 'react';
import '../styles/about.css';

const About = () => {

    const auth = localStorage.getItem('auth');
    if (!auth) {
        window.location.href = '/login';
    }
    const aboutData = {
        title: "About Us",
        description: "We are a team of passionate individuals dedicated to delivering high-quality education and empowering students to achieve their academic goals. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus velit ducimus, enim inventore earum, eligendi nostrum pariatur necessitatibus eius dicta a voluptates sit deleniti autem error eos totam nisi neque voluptates sit deleniti autem error eos totam nisi neque.",
        skills: ["Web Design", "Photoshop & Illustrator", "Coding"]
    };

    return (
        <div className="w-full mt-16">
            <div className="about-section flex flex-col md:flex-row items-center justify-between overflow-hidden">
                <img src="https://fadzrinmadu.github.io/hosted-assets/responsive-about-us-section-using-html/pic.jpg" className=' md:w-[50%] md:h-[80vh] rounded-lg' alt="" />
                <div className="inner-container rounded-xl border-4 border-orange-600 mr-3 shadow-md shadow-black">
                    <h1>{aboutData.title}</h1>
                    <p className="text">
                        {aboutData.description}
                    </p>
                    <div className="skills">
                        {aboutData.skills.map((skill, index) => (
                            <span key={index}>{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
