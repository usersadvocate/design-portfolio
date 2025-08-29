import { Link } from "react-router-dom";
import "../styles/components/aboutSection.scss";

export default function AboutSection() {
  return (
    <section className="about" id="about">
      <p className="about__title">
        As a designer with a{" "}
        <a
          href="https://github.com/julpchelova"
          target="_blank"
          rel="noopener noreferrer"
          className="about__title-note"
        >
          frontend background
          <span className="about__title-label">check my github</span>
          <svg
            className="about__title-arrow"
            xmlns="http://www.w3.org/2000/svg"
            width="67"
            height="67"
            viewBox="0 0 67 67"
            fill="none"
          >
            <path
              d="M53.728 7.50276C50.6223 8.09599 47.6445 8.67759 44.6667 9.24755C44.0735 9.36387 43.6547 9.4453 42.887 9.46856C42.3171 9.49182 41.1073 9.51509 41.212 8.89859C41.3516 8.39842 41.5145 8.06109 42.5264 7.75866C45.1436 6.99096 47.8539 6.61873 50.5408 6.23488C52.9138 5.89755 54.7283 5.67655 56.8454 5.50207C57.8341 5.42064 58.2296 5.90918 58.1132 6.81648C58.0086 7.63071 57.9155 8.46821 57.6596 9.24755C56.7523 12.0625 55.7752 14.8425 54.8214 17.6458C54.7051 17.9948 54.6353 18.2739 54.4375 18.6694C54.1933 19.1463 54.0421 19.5069 53.5419 19.3673C53.065 19.2394 53.0882 18.5415 53.1697 18.1925C53.7862 15.2613 55.1587 9.23592 55.1587 8.89859C53.6349 9.87568 52.2042 10.7481 50.82 11.7019C41.212 18.3903 32.1624 25.7068 24.9622 35.0821C19.2625 42.5033 14.54 50.4712 11.0504 59.1602C10.841 59.672 10.5851 60.1722 10.3292 60.6491C9.99189 61.3005 9.70109 61.5797 9.35213 61.4285C8.73564 61.0562 8.85195 60.5561 8.91011 60.1489C9.0148 59.3347 9.29397 58.5321 9.5615 57.7528C13.2488 47.3654 19.1113 38.2693 26.1952 29.9059C33.4652 21.3215 42.352 14.7146 51.832 8.84043C52.3438 8.54964 53.5419 7.71214 53.728 7.50276Z"
              fill="black"
            />
          </svg>
        </a>
        , I thrive in complex environments where I can grow through challenge,
        solve creatively, and balance rapid iteration with deep, thoughtful
        design solutions.
      </p>
      <ul className="about__list">
        <li>
          <Link to="/about/ai">Working with AI;</Link>
        </li>
        <li>
          <Link to="/about/pet_project">Exploring design engineering;</Link>
        </li>
        <li>
          <Link to="/about/community">Building community connections;</Link>
        </li>
      </ul>
    </section>
  );
}
