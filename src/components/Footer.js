import React from 'react'
// import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../styles/Footer.css";
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <EmailIcon />
            <LinkedInIcon />
            <TwitterIcon />
            <GitHubIcon />
        </div>
        <p>&copy; 2024 tri_dev03.com</p>
    </div>
  )
}

export default Footer