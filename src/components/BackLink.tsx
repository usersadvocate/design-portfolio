import ArrowLeft from "../icons/arrow-left.svg";

export default function BackLink() {
  return (
    <a className="back-link" href="/">
      <ArrowLeft className="back-link-icon" />
      Back to Home
    </a>
  );
}
