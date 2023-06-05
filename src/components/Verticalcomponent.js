import icon1 from "../iconfa1.png"
import icon2 from "../iconfa2.png"
import icon3 from "../iconfa3.png"

const VerticalSocialMedia = () => {
    const containerStyle = {
      position: 'fixed',
      top: '40%',
      left: '2%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    };
  
    const iconStyle = {
      margin: '10px',
      width: '30px',
      height: '30px',
    };
  
    return (
      <div style={containerStyle}>
        <a href="https://www.facebook.com">
          <img
            src={icon1}
            alt="Facebook"
            style={iconStyle}
          />
        </a>
        <a href="https://www.instagram.com">
          <img
            src={icon2}
            alt="Instagram"
            style={iconStyle}
          />
        </a>
        <a href="https://www.twitter.com">
          <img
            src={icon3}
            alt="Twitter"
            style={iconStyle}
          />
        </a>
      </div>
    );
  };
  
  export default VerticalSocialMedia;