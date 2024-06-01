import React, { useState, useEffect } from 'react';
import Slider from './Slider';
import CustomCarousel from './CustomCarousel';
import newpro from '../assets/new.js';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleProject = () => {
        navigate('/project');
    }

    const images = [
        {
            imgURL:
                "/one.jpg",
            imgAlt: "img-1"
        },
        {
            imgURL:
                "/two.webp",
            imgAlt: "img-2"
        },
        {
            imgURL:
                "three.png",
            imgAlt: "img-3"
        },
        {
            imgURL:
                "four.webp",
            imgAlt: "img-4"
        }
    ];

    return (
        <div className="w-full mt-24 pt-10">
            {loading ? <Slider /> : (
                <div className="text-center mb-8 w-[90vw] mx-auto">
                    <header>
                    <h1 className="text-3xl md:text-6xl font-bold font-serif tracking-wide text-gray-800">Welcome to the VaiTech R&D (VRD) Company</h1>
                        <p className="text-gray-600 my-10 text-3xl">Empowering Innovation</p>
                        <CustomCarousel>
                            {images.map((image, index) => (
                                <img key={index} src={image.imgURL} alt={image.imgAlt} />
                            ))}
                        </CustomCarousel>
                    </header>
                    <section className="mt-16 bg-slate-400 rounded-xl shadow-md shadow-black">
                        <h2 className="text-4xl font-bold mb-6 text-center">Our Mission</h2>
                        <div className="mx-auto md:px-10 flex flex-col md:flex-row items-center justify-between">
                            <div className='w-[80%] h-full md:mr-5 rounded-xl overflow-hidden'>
                                <img src="https://cdni.iconscout.com/illustration/premium/thumb/concept-of-mission-and-target-archiving-1793886-1519788.png?f=webp" alt="" className='w-full h-full object-cover' />
                            </div>
                            <div className='flex flex-col mt-10 md:mt-0 justify-center'>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    At VaiTech R&D Company, our mission is to foster innovation and drive technological advancement through cutting-edge research, collaborative partnerships, and knowledge dissemination. We are committed to pushing the boundaries of what's possible, exploring new horizons, and creating impactful solutions that address the challenges of today and shape the possibilities of tomorrow.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="mt-16 bg-slate-400 rounded-xl shadow-md shadow-black">
                        <h2 className="text-4xl font-bold mb-6 text-center">Our Services</h2>
                        <div className='flex flex-col md:flex-row items-center justify-evenly md:px-10'>
                            <video autoPlay muted loop src="https://cdnl.iconscout.com/lottie-pack/preview/delivery-142-99069.mp4?h=210&modified_at=1636602507" className='rounded-xl md:mr-10'></video>
                            <ul className="text-lg md:text-2xl text-gray-700 mt-10 md:mt-0 text-left">
                                <li className='-mt-5 ml-5'>○ Research & Development</li>
                                <li className='mt-5 ml-5'>○ Consulting</li>
                                <li className='mt-5 ml-5'>○ Product Innovation</li>
                                <li className='mt-5 ml-5'>○ Training & Workshops</li>
                            </ul>
                            <ul className="text-lg md:text-2xl text-gray-700 mt-10 md:mt-0 text-left">
                                <li className='-mt-5 ml-5'>○ Chat Portal</li>
                                <li className='mt-5 ml-5'>○ Research Repository</li>
                                <li className='mt-5 ml-5'>○ Student Attendance System</li>
                                <li className='mt-5 ml-5'>○ Project Discussion Platform</li>
                            </ul>
                        </div>
                    </section>
                    <section className="mt-16 bg-slate-400 rounded-xl shadow-md shadow-black">
                        <h2 className="text-4xl font-bold mb-6">Latest Projects</h2>
                        <div className='flex items-center md:px-10 justify-center gap-10'>
                            <div className='w-[100px] md:w-[20vw] h-[80px] md:h-[8vw] overflow-hidden'>
                                <img src={newpro} alt="" className='w-full h-[90%] object-cover' />
                            </div>
                            <button onClick={handleProject} className='text-lg md:text-2xl font-bold tracking-wide text-white bg-blue-600 px-10 py-2 rounded-lg'>Explore!</button>
                        </div>
                    </section>
                </div>
            )}
        </div>
    );
}

export default Home;
