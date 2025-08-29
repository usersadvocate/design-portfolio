import { useParams } from "react-router-dom";
import "../styles/components/aboutPageLayout.scss";
import sideProjectsData from "../data/sideProjectsData";
import BlogLayout from "../components/BlogLayout";
import TweetLayout from "../components/TweetLayout";
import AboutPageLayout from "../components/AboutPageLayout";
import BackLink from "../components/ui/BackLink";

export default function About() {
  const { id } = useParams();
  const data = id && sideProjectsData[id];

  if (!data) {
    return <div className="about-layout">No content found for ID: {id}</div>;
  }

  if (data.type === "blog") {
    return <BlogLayout data={data} backLink={<BackLink />} />;
  }

  if (data.type === "about") {
    return <AboutPageLayout data={data} />;
  }

  return <TweetLayout data={data} />;
}
