import "../../styles/components/footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__headline">
        Curious minds build better things.
        <br />
        Let’s team up.
      </h2>
      <div className="footer__list">
        <li>
          <a
            href="https://www.linkedin.com/in/julia-pchelova/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://x.com/itsthearcher"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </li>
      </div>
      <div className="footer__copyright">design & code ©2025</div>
    </footer>
  );
}
