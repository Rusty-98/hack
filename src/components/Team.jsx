import React, { useEffect } from 'react'
import '../styles/Team.css'
import { useNavigate } from 'react-router-dom';
const Team = () => {

    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('auth');
        if (!auth) {
            navigate('/login');
        }
    }, [])


    return (
        <div className='bg-[#e3f2fd] mt-16 min-h-screen'>
            <section className='bg-[#e3f2fd]'>
                <div className="title">
                    <span className="title1">Mentors</span><br />
                </div>

                <div className="contenedor">
                    <div className="box grid-item">
                        <div className="imgBX img1"></div>
                        <div className="contentBx">
                            <h2>Hayden</h2><br />
                            <h3>
                                Front-end
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum, felis sed ultrices gravida.
                            </p>
                            <div className="followme">
                                <h5>Follow me on</h5>
                                <a href="#">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBX img2"></div>
                        <div className="contentBx">
                            <h2>Lula</h2><br />
                            <h3>
                                UI/UX
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum, felis sed ultrices gravida.
                            </p>
                            <div className="followme">
                                <h5>Follow me on</h5>
                                <a href="#">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBX img3"></div>
                        <div className="contentBx">
                            <h2>Natalie</h2><br />
                            <h3>
                                Back-end
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum, felis sed ultrices gravida.
                            </p>
                            <div className="followme">
                                <h5>Follow me on</h5>
                                <a href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#e3f2fd]'>
                <div className="title">
                    <span className="title1">Research Team</span><br />
                </div>

                <div className="contenedor">
                    <div className="box grid-item">
                        <div className="imgBX img4"></div>
                        <div className="contentBx">
                            <h2>Hayden</h2><br />
                            <h3>
                                Front-end
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum, felis sed ultrices gravida.
                            </p>
                            <div className="followme">
                                <h5>Follow me on</h5>
                                <a href="#">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBX img5"></div>
                        <div className="contentBx">
                            <h2>Lula</h2><br />
                            <h3>
                                UI/UX
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum, felis sed ultrices gravida.
                            </p>
                            <div className="followme">
                                <h5>Follow me on</h5>
                                <a href="#">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBX img6"></div>
                        <div className="contentBx">
                            <h2>Natalie</h2><br />
                            <h3>
                                Back-end
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum, felis sed ultrices gravida.
                            </p>
                            <div className="followme">
                                <h5>Follow me on</h5>
                                <a href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-[#e3f2fd]'>
                <div className="title">
                    <span className="title1">Dev Team</span><br />
                </div>

                <div className="contenedor">
                    <div className="box grid-item">
                        <div className="imgBX img1"></div>
                        <div className="contentBx">
                            <h2>Hayden</h2><br />
                            <h3>
                                Front-end
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum, felis sed ultrices gravida.
                            </p>
                            <div className="followme">
                                <h5>Follow me on</h5>
                                <a href="#">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBX img2"></div>
                        <div className="contentBx">
                            <h2>Lula</h2><br />
                            <h3>
                                UI/UX
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum, felis sed ultrices gravida.
                            </p>
                            <div className="followme">
                                <h5>Follow me on</h5>
                                <a href="#">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="box">
                        <div className="imgBX img3"></div>
                        <div className="contentBx">
                            <h2>Natalie</h2><br />
                            <h3>
                                Back-end
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum, felis sed ultrices gravida.
                            </p>
                            <div className="followme">
                                <h5>Follow me on</h5>
                                <a href="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team
