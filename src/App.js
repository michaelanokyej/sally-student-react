import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
        <header className="resumeHead">
            <h1 className="studentName">Sally Student</h1>
            <ul className="contact">
                <li><a href="#" className="cell">+15718829684</a></li>
                <li><a href="mailto:sallystudent@thinkful.com" className="email">Email</a></li>
                <li className="address">65 Belcrest RD</li>
            </ul>
            <div className="imgWrapper">
                <img src="https://ia.media-imdb.com/images/M/MV5BMTY5NzE3NzU3MF5BMl5BanBnXkFtZTgwMjg0NTQ5MDE@._V1_UX214_CR0,0,214,317_AL_.jpg" alt="Image Of student" className="studentImage"></img>
            </div>   
        </header>
        <main className="mainBody">
            <section className="experience">
                <h2 className="sectionTitle">Work Experience</h2>
                <h3 className="title">Web Developer</h3>
                <p className="datesOfEmp">01/20/2018 - 12/15/2019</p>
                <h5 className="dutyHeader">Duties</h5>
                <ul className="duties">
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>
                <h3 className="title">Jr. Web Developer</h3>
                <p className="datesOfEmp">01/20/2019 - 12/15/2020</p>
                <h5 className="dutyHeader">Duties</h5>
                <ul className="duties">
                    <li>Lorem ipsum dolor sit.</li>
                    <li>Lorem ipsum dolor sit amet.</li>
                    <li>Lorem, ipsum dolor.</li>
                    <li>Lorem ipsum dolor sit.</li>
                </ul>
            </section>
            <section className="education">
                <h2 className="sectionTitle">Education</h2>
                <h3 className="sch">John Hopkins university</h3>
                <h5 className="fieldOfStudy">Field Of Study</h5>
                <ul className="courses">
                    <li>Major: information Technology</li>
                    <li>Minor: Marketing</li>
                </ul>
                <h3 className="sch">Thinkful</h3>
                <h5 className="fieldOfStudy">Field Of Study</h5>
                <ul className="courses">
                    <li>Major: Web Development</li>
                    <li>Minor: Data Science</li>
                </ul>
            </section>
        </main>
    </div>
  );
}

export default App;
