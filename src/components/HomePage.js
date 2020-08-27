import React from 'react';
import palette from '../palette';
import Button from './Button';
import Footer from './Footer';
import ModalButton from './ModalButton';
import SignUpButton from './SignUpButton';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTwitter, faFacebookF } from '@fortawesome/free-brands-svg-icons';


const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: palette('white'),
    border: 'none',
    borderRadius: '10px',
    outline: '0',
    boxShadow: `5px 5px 30px  ${palette('black')}`,
    padding: '2%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    color: palette('orange')
  }
}));




const body ={
  fontFamily:"'Nunito', 'sans-serif'",
  fontSize: '20px'
};

const mainTitle = {
  color: palette('black'),
  fontSize: '350%'
};

const headerText = {
  color: palette('black'),
};

const logoHead = {
  height: '125px',
  marginLeft: '5%'
};

const logoTitle = {
  
};

const titleButtons = {
  textAlign: 'left',
  marginLeft: '20px'
};

const flexHead = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};

const headerDivStyle = {
  backgroundColor: palette('yellow'),
  padding: '10px 0'
};

const box = {
  width: '100%',
  height: '50px',
  margin: '10px 0',
  backgroundImage:`linear-gradient(to right, ${palette('white')} 50px, transparent 1px), linear-gradient(${palette('primary')} 100px, transparent 1px)`,
  backgroundSize: '100px 100px'
}

const sectionHeader = {
  color: palette('secondary'),
  fontWeight: '200'
};

const line = {
  width: '200px'
};

const componentsSection = {
  backgroundColor: palette('white'),
  padding: '1% 10%'
}; 

const iconSection = {
  margin: '20px auto',
};

const icon = {
  color: palette('secondary'),
  fontSize: '250%',
  marginBottom: '15px'
};

const iconBox = {
  textAlign: 'center',
  marginTop: '20px'
};

const iconCaption = {
  width: '200px',
  margin: 'auto',
  textAlign: 'left'
};

const streamingSection = {
  width: '100%',
  marginBottom: '32%'
};

const streamLine = {
  listStyle: 'none',
  width: '100%',
  paddingLeft: '0px',
  marginBottom: '0px'
};

const streamListItem = {
  display: 'block',
  float: 'left',
  width: '16.66%'
};

const logoImage = {
  width: '100%',
  margin: '0',
  overflow: 'hidden',
  backgroundColor: palette('black')
};

const logo = {
  width: '100%',
  height: 'auto',
  transform: 'scale(1.15)',
  transition: 'transform 0.5s, opacity 0.5s'
};


const reviewSection = {
  backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),url(./images/popcorn.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundColor: palette('white'),
  padding: '1% 10%'
};

const quote = {
  color: palette('grey'),
  padding: '1% 10%'
};

const customer = {
  color: palette('secondary'),
  textAlign: 'right'
};

const quoteBlock = {
  margin: '30px 0'
};

const signUpSection = {
  backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)),url(./images/sock.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  padding: '1% 10% 4%',
};

const signUpHeader = {
  marginRight: '20px',
  paddingTop: '1%'
};

export default function HomePage() {
  const style = useStyles();
  
    return (
      
      <div style={body}>
      <div style={headerDivStyle}>
        <div style={box}/>

        <div style={flexHead}>
        <div style={logoTitle}>
          <img style={logoHead} src="./images/logo.png" alt="logo"/>
        </div>
        <div style={titleButtons}>
          <h1 style={mainTitle}>flicks</h1>
          <h5 style={headerText}>what someone means when they say "add it to my list"</h5>
          <ModalButton>
            <div className={style.paper} >
              <h1>sign in with:</h1>
              <SignUpButton 
                  button={{
                      buttonText:'Google', 
                      buttonColor: palette('google'),
                      buttonIcon: <FontAwesomeIcon icon={faGoogle} size="lg" />
                  }}
              />
              <SignUpButton 
                  button={{
                      buttonText:'Twitter', 
                      buttonColor: palette('twitter'),
                      buttonIcon: <FontAwesomeIcon icon={faTwitter} size="lg" />
                  }}
              />
              <SignUpButton 
                  button={{
                      buttonText:'Facebook', 
                      buttonColor: palette('facebook'),
                      buttonIcon: <FontAwesomeIcon icon={faFacebookF} size="lg" />
                  }}
              />
            </div>
        </ModalButton>
          <Button button={{
            buttonLabel: 'learn more', 
            buttonColor: palette('primary'), 
            textColor: palette('secondary'),
            border: true
          }} 
          buttonOnClick = {() => {alert('signed up')}}/>
        </div>
        </div>

        <div style={box}/>
      </div>

      <div style={componentsSection}>
        <hr style={line}/>
        <h2 style={sectionHeader}>Watch lists, finally organized</h2>
        <hr style={line}/>

        <div className="container" style={iconSection}>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12" style={iconBox}>
              <i style={icon} className="fas fa-list"/>
              <p style={iconCaption}>Maintain your list of shows that are currently available on various streaming services</p>
            </div>
            <div className="col-lg-4 col-md-6 sol-sm-12" style={iconBox}>
              <i style={icon} className="fas fa-share-square"/>
              <p style={iconCaption}>"flick" and "be flicked" - Share viewing recommendations with your friends</p>
            </div>
            <div className="col-lg-4 col-md-6 sol-sm-12" style={iconBox}>
              <i style={icon} className="fas fa-film"/>
              <p style={iconCaption}>Feel accomplished knowing you're finally keeping track of those movies and shows you've been meaning to watch</p>
            </div>
          </div>
        </div>
      </div>

      <div style={streamingSection}>
        <ul style={streamLine}>
          <li style={streamListItem}>
            <figure style={logoImage}>
              <img style={logo} src="./images/amazon.jpg" alt="Amazon-logo"/>
            </figure>
          </li>
          <li style={streamListItem}>
            <figure style={logoImage}>
              <img style={logo} src="./images/apple.jpg" alt="Apple-logo"/>
            </figure>
          </li>
          <li style={streamListItem}>
            <figure style={logoImage}>
              <img style={logo} src="./images/cbs.png" alt="CBS-logo"/>
            </figure>
          </li>
          <li style={streamListItem}>
            <figure style={logoImage}>
              <img style={logo} src="./images/disneyplus.jpg" alt="Disney-plus-logo"/>
            </figure>
          </li>
          <li style={streamListItem}>
            <figure style={logoImage}>
              <img style={logo} src="./images/hbo.jpg" alt="HBO-logo"/>
            </figure>
          </li>
          <li style={streamListItem}>
            <figure style={logoImage}>
              <img style={logo} src="./images/hulu.jpeg" alt="Hulu-logo"/>
            </figure>
          </li>
        </ul>
        <ul style={streamLine}>
        <li style={streamListItem}>
            <figure style={logoImage}>
              <img style={logo} src="./images/netflix.jpeg" alt="Netflix-logo"/>
            </figure>
          </li>
          <li style={streamListItem}>
            <figure style={logoImage}>
              <img style={logo} src="./images/peacock.jpeg" alt="Peacock-logo"/>
            </figure>
          </li>
          <li style={streamListItem}>
            <figure style={logoImage}>
              <img style={logo} src="./images/quibi.jpg" alt="Quibi-logo"/>
            </figure>
          </li>
          <li style={streamListItem}>
            <figure style={logoImage}>
              <img style={logo} src="./images/showtime.jpg" alt="Showtime-logo"/>
            </figure>
          </li>
          <li style={streamListItem}>
            <figure style={logoImage}>
              <img style={logo} src="./images/starz.jpeg" alt="Starz-logo"/>
            </figure>
          </li>
          <li style={streamListItem}>
            <figure style={logoImage}> 
              <img style={logo} src="./images/text.png" alt="let us know what service you use, from these to so many more"/>
            </figure>
          </li>
        </ul>
      </div>

      <div style={reviewSection}>
          <hr style={line}/>
          <h2 style={sectionHeader}>Users love flicks!</h2>
          <hr style={line}/>
        <div className="row">
          <div className="col-lg-12 col-md-6 col-sm-12" style={quoteBlock}>
            <blockquote style={quote}>"It's so nice being able to share my interests with my friends. I can honestly say 'I will definitely watch that!' now"</blockquote>
            <cite style={customer}>- Andrew J</cite>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12" style={quoteBlock}>
            <blockquote style={quote}>"I don't have to try to mentally keep track of my list of shows- or who recommended them!"</blockquote>
            <cite style={customer}>- Debbie S</cite>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12" style={quoteBlock}> 
            <blockquote style={quote}>"My friends can actually see what shows I have access to, so now they don't recommend things I can't watch. It makes my list so much more manageable!"</blockquote>
            <cite style={customer}>- Kelly M</cite>
          </div>
        </div>
      </div>

      <div className="sign-up" style={signUpSection}>

        <div style={signUpHeader}>
          <hr style={line}/>
          <h2 style={sectionHeader}>Sign up, and start your list today!</h2>
          <hr style={line}/>
        </div>

        <ModalButton>
          <div className={style.paper} >
              <h1>sign in with:</h1>
              <SignUpButton 
                  button={{
                      buttonText:'Google', 
                      buttonColor: palette('google'),
                      buttonIcon: <FontAwesomeIcon icon={faGoogle} size="lg" />
                  }}
              />
              <SignUpButton 
                  button={{
                      buttonText:'Twitter', 
                      buttonColor: palette('twitter'),
                      buttonIcon: <FontAwesomeIcon icon={faTwitter} size="lg" />
                  }}
              />
              <SignUpButton 
                  button={{
                      buttonText:'Facebook', 
                      buttonColor: palette('facebook'),
                      buttonIcon: <FontAwesomeIcon icon={faFacebookF} size="lg" />
                  }}
              />
          </div>
        </ModalButton>
        <Button button={{
          buttonLabel: 'sign in', 
          buttonColor: palette('white'), 
          textColor: palette('secondary'),
          border: true
        }} 
          buttonOnClick = {() => {alert('signed up')}}/>
        
      </div>
      <Footer />

      </div>
      
      );
}



