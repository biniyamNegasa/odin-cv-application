import { FaGithub, FaLinkedin, FaXTwitter, FaTelegram } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import ExternalLink from "./ExternalLink";
import LinksList from "./LinksList";
import Title from "./Title";
import "../styles/Heading.css";

function Heading({ name, title, email, github, linkedin, twitter, telegram }) {
  return (
    <div className="heading">
      <Title name={name} title={title} />
      <LinksList>
        <ExternalLink url={`mailto:${email.url}`}>
          <FiMail />
          <span>{email.label}</span>
        </ExternalLink>
        <ExternalLink url={github.url}>
          <FaGithub />
          <span>{github.label}</span>
        </ExternalLink>
        <ExternalLink url={linkedin.url}>
          <FaLinkedin />
          <span>{linkedin.label}</span>
        </ExternalLink>
        <ExternalLink url={twitter.url}>
          <FaXTwitter />
          <span>{twitter.label}</span>
        </ExternalLink>
        <ExternalLink url={telegram.url}>
          <FaTelegram />
          <span>{telegram.label}</span>
        </ExternalLink>
      </LinksList>
    </div>
  );
}

export default Heading;
