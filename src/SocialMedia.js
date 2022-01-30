import './SocialMedia.css';



function SocialMedia(){
    return(
        <ul className='SMul'>
        <li className='SMli'><a className="aGithub" href='https://github.com/CartWheelSmith'><i className='fab fa-github'></i></a></li>
        <li className='SMli'><a className="aLinkedin" href='https://www.linkedin.com/in/ayrton-frieslaar-7129b1183'><i className="fab fa-linkedin-in"></i></a></li>
        {/* <li className='SMli'><i class="fab fa-facebook-f"></i></li> */}
        {/* <li className='SMli'><i class="fab fa-twitter"></i></li> */}
        {/* <li className='SMli'><i class="fab fa-instagram"></i></li> */}
       {/* <li className='SMli'><i class="fab fa-youtube"></i></li> */}
     </ul>
    )
}

export default SocialMedia;