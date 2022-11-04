import zuriLogo from "/src/assets/zuri.png"
import i4gLogo from "/src/assets/I4G.png"

const Footer = () => {
    return (
        <footer>
          <div><img src={zuriLogo} alt="" /></div>
          <div>
            <p>HNG Internship 9 Frontend Task</p>
          </div>
          <div><img src={i4gLogo} alt="" /></div>
        </footer>
    );
}
 
export default Footer;