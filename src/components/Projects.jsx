import React from 'react';
import Chat from './Chat';
import '../styles/projects.css';

const Projects = () => {
    const projectsData = [
        {
            type: 'Website',
            title: 'AI Chatbot Website',
            description: 'Development of an AI chatbot website using natural language processing (NLP) and machine learning (ML) techniques.',
            image: '/p1.jpg',
            githubLink: 'https://github.com/',
            viewLink: 'https://dribbble.com/'
        },
        {
            type: 'App',
            title: 'AI Image Recognition App',
            description: 'Development of an AI-powered image recognition app for identifying objects, scenes, or people in images.',
            image: '/p2.jpg',
            githubLink: 'https://github.com/',
            viewLink: 'https://dribbble.com/'
        },
        {
            type: 'Website',
            title: 'AI Recommendation System',
            description: 'Implementation of an AI-powered recommendation system for suggesting personalized content to users based on their preferences and behavior.',
            image: '/p3.jpg',
            githubLink: 'https://github.com/',
            viewLink: 'https://dribbble.com/'
        },
        {
            type: 'App',
            title: 'AI Language Translation App',
            description: 'Development of an AI language translation app for translating text or speech from one language to another using deep learning models.',
            image: '/p4.jpg',
            githubLink: 'https://github.com/',
            viewLink: 'https://dribbble.com/'
        },
        {
            type: 'Website',
            title: 'AI Image Generation Website',
            description: 'Creation of an AI content generation website for generating text, articles, or creative content using natural language generation (NLG) models.',
            image: 'https://images.unsplash.com/photo-1672257493461-704902362c1d?crop=entropy&cs=srgb&fm=jpg&ixid=M3wzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MTI3NjY0OTV8&ixlib=rb-4.0.3&q=85',
            githubLink: 'https://github.com/',
            viewLink: 'https://dribbble.com/'
        },
    ];

    return (
        <>
            <section className="projects section overflow-hidden" id="projects">
                <h2 className="section__title-1">
                    <span>Completed Projects.</span>
                </h2>
                <div className="projects__container container grid">
                    {projectsData.map((project, index) => (
                        <article className="projects__card" key={index}>
                            <div className="projects__image">
                                <img src={project.image} alt="image" className="projects__img" />
                                <a href="#" className="projects__button button">
                                    <i className="ri-arrow-right-up-line" />
                                </a>
                            </div>
                            <div className="projects__content">
                                <h3 className="projects__subtitle">{project.type}</h3>
                                <h2 className="projects__title">{project.title}</h2>
                                <p className="projects__description">{project.description}</p>
                            </div>
                            <div className="projects__buttons">
                                <a href={project.githubLink} target="_blank" className="projects_link">
                                    <i className="ri-github-line" /> Source Code
                                </a>
                                <a href={project.viewLink} target="_blank" className="projects_link">
                                    <i className="ri-dribbble-line" /> View
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
                <Chat />
            </section>
            <section className="projects section overflow-hidden" id="projects">
                <h2 className="section__title-1">
                    <span>Ongoing Projects.</span>
                </h2>
                <div className="projects__container container grid">
                    {projectsData.map((project, index) => (
                        <article className="projects__card" key={index}>
                            <div className="projects__image">
                                <img src={project.image} alt="image" className="projects__img" />
                                <a href="#" className="projects__button button">
                                    <i className="ri-arrow-right-up-line" />
                                </a>
                            </div>
                            <div className="projects__content">
                                <h3 className="projects__subtitle">{project.type}</h3>
                                <h2 className="projects__title">{project.title}</h2>
                                <p className="projects__description">{project.description}</p>
                            </div>
                            <div className="projects__buttons">
                                <a href={project.githubLink} target="_blank" className="projects_link">
                                    <i className="ri-github-line" /> Source Code
                                </a>
                                <a href={project.viewLink} target="_blank" className="projects_link">
                                    <i className="ri-dribbble-line" /> View
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
                <Chat />
            </section>
        </>
    );
};

export default Projects;
