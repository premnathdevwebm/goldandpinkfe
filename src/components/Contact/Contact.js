import styles from "./Contact.module.css"

import icon1 from "./iconfa1.png"
import icon2 from "./iconfa2.png"
import icon3 from "./iconfa3.png"

const SocialMedia = () => {
  
    const iconStyle = {
      margin: '10px',
      width: '30px',
      height: '30px',
    };
  
    return (
      <div>
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
  

const Contact = () => {
  return (
    <div>
      <h2>Get in touch with us and book your appointments!</h2>
      <section>
        <h3>Let's Chat</h3>
        <div>
          <div>Phone</div>
          <div>123-456-7890</div>
          <div>Email</div>
          <div>info@mysite.com</div>
          <div>Social Media</div>
          <SocialMedia />
        </div>
        <div>
          <form>
            <label for="firstname">First Name </label>
            <input id="firstname" required/>
            <label for="lastname">Last Name </label>
            <input id="lastname" required/>
            <label for="email">Email </label>
            <input id="email" required/>
            <label for="Message">Message </label>
            <textarea id="Message" required/>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Contact