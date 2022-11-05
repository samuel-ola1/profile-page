import { Link } from "react-router-dom";

const LinksSection = () => {
    return (
        <section className="links__section">
            <a className="twitter__section" href="https://twitter.com/Ola_Sammy1" target="blank">Twitter Link</a>
            <a href="https://training.zuri.team/" id="btn__zuri" target="blank">Zuri Team</a>
            <a href="http://books.zuri.team" id="books" target="blank" title="Find design and coding books here">Zuri Books</a>
            <a href='https://books.zuri.team/python-for-beginners?ref_id=sammy' target="blank" id="book__python">Python Books</a>
            <a href="https://background.zuri.team" target="blank" id="pitch">Background Check for Coders</a>
            <a href="https://books.zuri.team/design-rules" target="blank" id="book__design">Design Books</a>
            <Link to="/contact" id="contact">Contact me</Link>
      </section>
    );
}
 
export default LinksSection;