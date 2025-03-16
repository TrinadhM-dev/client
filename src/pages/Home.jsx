import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Home.css";
function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2>Hi,I'm Trinadh, a Passionate Frontend Solutions Expert</h2>
        <div className='prompt'><p> Welcome to my portfolio! I specialize in creating intutive, responsive and stunning modern web practices..</p>
        <LinkedInIcon/>
        <EmailIcon/>
        <GitHubIcon/>
        </div>
      </div>
        <div className='skills'>
          <h1>Skills</h1>
          <ol className='list'>
          <li className='item'>
            <h2>Front-End </h2>
            <span>React JS, Angular, Redux, HTML, CSS, React Native, Flutter, NPM,YARN, Bootstrap, Material UI, Tailwind CSS, Styled Components</span>
          </li>

          <li className='item'>
            <h2>Back-End </h2>
            <span>Node JS, Express JS,GraphQL,Apollo Server,My SQL,MongoDB, AWS S3, MS SQL</span>
          </li>
          <li className='item'>
            <h2>Languages </h2>
            <span>Javascript, Typescript, Java,C</span>
          </li>
          </ol>
        </div>
    </div>
  )
}

export default Home