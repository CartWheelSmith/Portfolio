import {Link} from 'react-scroll'
import DownArrow from './DownArrow';
import SocialMedia from './SocialMedia';
;


function Home() {
  return (
      <div>
    <section id="intro" className="main style1 dark fullscreen">
    <div className="content">
        <header>
            <h2>Hello</h2>
        </header>
        <p>Welcome to <strong>My Portfolio</strong> <br />
        This Portfolio has been built from a boilerplate in HTML, CSS, and javascript, and I've made my own changes to it.
         I've turned it into a REACT app and hosted it on Github as an example of my own work.</p>
        <footer>
            <Link to="one" spy={true} smooth={true}><DownArrow /></Link>
        </footer>
    </div>
    </section>

    <section id="one" className="main style2 right dark fullscreen">
    <div className="content box style2">
        <header>
            <h2>About Me</h2>
        </header>
        <p>Hello my name is <b>Ayrton Frieslaar.</b><br/>
        I have a passion for creating and editing code to build out and develop solutions.
         I enjoy learning and implementing different types of technologies that can potentially better current apps or make working on new solutions easier.</p>
    </div>
    <Link to="two" spy={true} smooth={true}><DownArrow /></Link>
    </section>

    <section id="two" className="main style2 left dark fullscreen">
    <div className="content box style2">
        <header>
            <h2>Skills</h2>
        </header>
        <p>I mainly work using Web related languages, such as HTML, JavaScript and PHP, where I'm currently learning more methods on utilising them more efficiently.<br/>
        I also make use of a variety of the following technologies in work or personal projects: WordPress, Python, REACT, SQL, and a variety of other technologies as well.        
        </p>
    </div>
    <Link to="work" spy={true} smooth={true}><DownArrow /></Link>
    </section>

    <section id="work" className="main style3 primary">
    <div className="content">
        <header>
            <h2>My Work</h2>
            <p>Below is a list of projects and tests I've done using varies technologies.</p>
        </header>

            <div className="gallery">
                <article className="from-left">
                    <a href="https://cartwheelsmith.github.io/ChatApp/" className="image fit"><img src="images/thumbs/01.jpg"/></a>
                </article>
                <article className="from-right">
                    <a href="images/fulls/02.jpg" className="image fit"><img src="images/thumbs/02.jpg" title="Airchitecture II" alt="" /></a>
                </article>
                <article className="from-left">
                    <a href="images/fulls/03.jpg" className="image fit"><img src="images/thumbs/03.jpg" title="Air Lounge" alt="" /></a>
                </article>
                <article className="from-right">
                    <a href="images/fulls/04.jpg" className="image fit"><img src="images/thumbs/04.jpg" title="Carry on" alt="" /></a>
                </article>
                <article className="from-left">
                    <a href="images/fulls/05.jpg" className="image fit"><img src="images/thumbs/05.jpg" title="The sparkling shell" alt="" /></a>
                </article>
                <article className="from-right">
                    <a href="images/fulls/06.jpg" className="image fit"><img src="images/thumbs/06.jpg" title="Bent IX" alt="" /></a>
                </article>
            </div>

    </div>
    </section>

    <section id="contact" className="main style3 secondary">
    <div className="content">
        <header>
            <h2>You can follow me.</h2>
            <p>Or send a direct email <a href="">here.</a></p>
        </header>
        <div className="box">
            <SocialMedia />
        </div>
    </div>
    </section>
    </div>
    );
}

export default Home;
