import profilePic from "/src/assets/samuel.jpg";
import shareIcon from "/src/assets/share-icon.png";
import moreIcon from "/src/assets/more-icon.png";

const Header = () => {
    return (
        <header>
            <div className="profile-pic">
                <img src={profilePic} alt="Profile picture" id="profile__img"/>
                {/* <img src="" alt="" /> */}
            </div>
            <div className="names__holder">
                <a id="twitter" href="https://twitter.com/Ola_Sammy1" target="blank">@Ola_Sammy1</a>
                <p id="slack">sammy</p>
            </div>
            <div><img src={shareIcon} alt="" className="share__icon"/></div>
            <div><img src={moreIcon} alt="" className="more__icon"/></div>
        </header>
    );
}
 
export default Header;