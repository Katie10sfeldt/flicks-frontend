import React from 'react';
import palette from '../palette';
import Button from './Button';

const body ={
  fontFamily:"'Nunito', 'sans-serif'"
};

const headerMainTextStyle = {
    color: palette('black')
};

const logoHead = {
  height: '125px'
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
  color: palette('orange'),
  fontSize: '300%',
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

export default function HomePage() {
  
    return (
      
      <div style={body}>
      <div style={headerDivStyle}>
        <div style={box}/>
        <img style={logoHead} src="./images/logo.png" alt="logo"/>
        <h1 style={headerMainTextStyle}>flicks</h1>
        <h6 style={headerMainTextStyle}>what someone means when they say "add it to my list"</h6>
        <Button button={{buttonLabel: 'sign up now!'}} buttonOnClick = {() => {alert('signed up')}}/>
        <Button button={{
          buttonLabel: 'learn more', 
          buttonColor: palette('primary'), 
          textColor: palette('secondary'),
          border: true
        }} 
        buttonOnClick = {() => {alert('signed up')}}/>

        <div style={box}/>
      </div>

      <div style={componentsSection}>
        <hr style={line}/>
        <h2 style={sectionHeader}>Watch lists, finally organized</h2>
        <hr style={line}/>

        <div class="container" style={iconSection}>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12" style={iconBox}>
              <i style={icon} class="fas fa-list"/>
              <p style={iconCaption}>Maintain your list of shows that are currently available on various streaming services</p>
            </div>
            <div class="col-lg-4 col-md-6 sol-sm-12" style={iconBox}>
              <i style={icon} class="fas fa-share-square"/>
              <p style={iconCaption}>"flick" and "be flicked" - Share viewing recommendations with your friends</p>
            </div>
            <div class="col-lg-4 col-md-6 sol-sm-12" style={iconBox}>
              <i style={icon} class="fas fa-film"/>
              <p style={iconCaption}>Feel accomplished knowing you're finally keeping track of those movies and shows you've been meaning to watch</p>
            </div>
          </div>
        </div>

      </div>

      </div>
      
      );
}



