import Footer from "/src/components/Footer";
import Header from "/src/components/Header";
import LinksSection from "/src/components/LinksSection";
import slackIcon from "/src/assets/slack.png";
import githubIcon from "/src/assets/github.png";


const Home = () => {
    return (
        <main>
            <Header />
            <LinksSection />
            <div className="social__logos">
                <div><img src={slackIcon} alt="slack icon" /></div>
                <div><img src={githubIcon} alt="github icon" /></div>
            </div>
            <Footer />
        </main>
    );
}
 
export default Home;