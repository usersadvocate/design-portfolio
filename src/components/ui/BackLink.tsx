import { Link } from "react-router-dom";
import ArrowLeft from "../../icons/arrow-left.svg";

export default function BackLink() {
  return (
    <Link className="back-link" to="/about">
      <ArrowLeft className="back-link-icon" />
      Back to Home
    </Link>
  );
}
