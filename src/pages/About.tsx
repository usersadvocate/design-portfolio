import { useParams } from "react-router-dom";

export default function About() {
  const { id } = useParams();
  return <div>About page for ID: {id}</div>;
}