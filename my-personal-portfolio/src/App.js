import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <>
    <section className="section intro">
        <nav>
            <div className="personal__logo">T</div>
            <ul className="nav__link--list">
                <li>
                    <a href="#" className="
                    nav__link--anchor
                    link__hover-effect
                    ">About Me</a>
                </li>
                <li>
                    <a href="#" className="
                    nav__link--anchor
                    link__hover-effect
                    ">Skills</a>
                </li>
                <li>
                    <a href="#" className="
                    nav__link--anchor
                    link__hover-effect
                    ">Projects</a>
                </li>
                <li>
                    <a href="#" className="
                    nav__link--anchor
                    link__hover-effect
                    ">Say Hello!</a>
                </li>
                <li>
                    <a href="#" className="
                    nav__link--anchor
                    nav__link--anchor-primary
                    ">Resume</a>
                </li>
            </ul>
        </nav>
        <header className="introduction">
            <h1 className="intro__hello">Hi there!<span className="emoji wave-hand animated">👋🏼</span></h1>
        
            <h2 className="intro_tagline"> 
                I'm 
                <span className="name">Tahira Shaukat.</span><br/>
                I like to code, write, and read about anything and everything. Sometimes I design stuff, too.
            </h2>
            <h3 className="intro__contact">
                <span>Say Hi!</span>
                <span className="pointer__icon">&#128073;&#127996;</span>
                <span>
                    <a href="mailto:tahira.shaukat95@gmail.com" target="blank" className="highlight-link">tahira.shaukat95@gmail.com</a>
                </span>
            </h3>
        </header>
    </section>
    <section className="section background">
        <h2 className="section__title">About Me</h2>
        <div className="section__content"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></div>   
    </section>
    <section className="section skills">
        <div className="section__title">Skills</div>
        <div className="section__content">
                <div className="skillz__category">
                    <div className="skillz_category--label">LANGUAGES</div>
                    <ul>
                        <li className="skillz__category--item">▹ Python</li>
                        <li className="skillz__category--item">▹ HTML</li>
                        <li className="skillz__category--item">▹ CSS</li>
                        <li className="skillz__category--item">▹ JavaScript</li>
                        <li className="skillz__category--item">▹ SQL</li>
                        <li className="skillz__category--item">▹ Java</li>  
                    </ul>
                </div>
                <div className="skillz__category">
                    <div className="skillz_category--label">FRAMEWORKS</div>
                    <ul>
                        <li className="skillz__category--item">▹ TensorFlow</li>
                        <li className="skillz__category--item">▹ Node.js</li>   
                    </ul>
                </div>
                <div className="skillz__category">
                    <div className="skillz_category--label">TOOLS</div> 
                    <ul>
                        <li className="skillz__category--item">▹ Zsh</li>
                        <li className="skillz__category--item">▹ Git & GitHub</li>
                        <li className="skillz__category--item">▹ MySQL</li>
                        <li className="skillz__category--item">▹ Figma</li>    
                    </ul>
                </div>
            </div>
    </section>

    <section className="section projects">
        <h1 className="section__title">Some Things I've Built</h1>

            <ul className="project__list">
                <li className="project">
                    <div className="project__wrapper">
                            
                    </div>
                </li>
            </ul>
    
    </section >

    <section className="section contact">
      <div className="contact-container">
        <h1 className="section__title">Get In Touch!</h1>
        <div className="container">
          <form id="contact" action="" method="post">
            <fieldset>
              <input placeholder="Your name" type="text" tabindex="1" required autofocus/>
            </fieldset>
            <fieldset>
              <input placeholder="Your Email Address" type="email" tabindex="2" required/>
            </fieldset>
            <fieldset>
              <textarea placeholder="Type your message here...." tabindex="5" required></textarea>
            </fieldset>
            <fieldset>
              <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
    </>

    
  );
}

export default App;
