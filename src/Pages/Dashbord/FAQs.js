import { Link } from "react-router-dom";
import { useState } from "react";
import BackGroundImge from "../../Imge/2-scaled.jpg";
import SocialMedia from "../Website/SocialMidia";
import Footer from "../Website/Footer";
import Heders from "../Website/Heders";

export default function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);

  const questions = [
    {
      question: "What services does your company offer?",
      answer: `We provide full web development services, including business websites, e-commerce platforms, admin dashboards, booking systems, and system upgrades or maintenance.`,
    },
    {
      question: "Do you offer custom designs or use templates?",
      answer: `We offer fully custom designs tailored to your brand identity. We can also use modern templates if you prefer a faster and more cost-effective solution.`,
    },
    {
      question: "What technologies do you use?",
      answer: `* React.js for frontend development to deliver fast and responsive user interfaces.\n* .NET Core for backend development to ensure stability, performance, and high security.`,
    },
    {
      question: "Why do you use React and .NET?",
      answer: `React provides a smooth user experience with dynamic, fast-loading interfaces.\n.NET offers strong backend architecture that’s secure, scalable, and ideal for business applications.\nTogether, they deliver a powerful full-stack solution.`,
    },
    {
      question: "What is your development process?",
      answer: `1. We receive your requirements or idea.\n2. We analyze and plan the project.\n3. We design and develop your solution.\n4. You review and approve the results.\n5. We launch your site and provide ongoing support.`,
    },
    {
      question: "How long does a project take?",
      answer: `Depending on the project scope, most websites take 2 to 4 weeks from start to launch.`,
    },
    {
      question: "Do you provide technical support after launch?",
      answer: `Yes. We offer maintenance plans that include performance checks, bug fixes, security updates, and continuous improvements.`,
    },
    {
      question: "Is the website mobile-friendly?",
      answer: `Yes, all of our websites are fully responsive and optimized for desktops, tablets, and mobile phones.`,
    },
    {
      question: "Can I manage my website after delivery?",
      answer: `Yes, we build admin dashboards that are easy to use, allowing you to update content, products, and settings with no coding knowledge.`,
    },
    {
      question: "Can you connect to external APIs?",
      answer: `Absolutely. We can integrate your site with any third-party APIs like payment gateways, Google Maps, shipping services, CRM tools, and more.`,
    },
    {
      question: "Do you offer business-specific solutions?",
      answer: `Yes, we build custom systems for business needs such as:\n1 Internal company portals\n2 Custom dashboards\n3 Reporting systems\n4 Client service portals`,
    },
    {
      question: "Can you deliver both a web and mobile version of my project?",
      answer: `Yes, we can also build mobile versions using React Native or Blazor Hybrid, so your app works smoothly on both web and mobile platforms.`,
    },
    {
      question: "Do you work with clients outside Egypt?",
      answer: `Yes, we work with clients worldwide using remote communication tools like Zoom, Slack, and Trello.`,
    },
    {
      question: "What payment methods do you accept?",
      answer: `We accept bank transfers, Vodafone Cash (for Egypt), PayPal, and other methods depending on your location.`,
    },
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <div
        className="inner-header"
        style={{
          backgroundImage: `url(${BackGroundImge})`,
        }}
      >
        <div className="cover"></div>
        <figcaption>
          <nav>
            <Link className="linkeH" to="/">
              Home
            </Link>
            <Link className="linkeA" to="/faq">
              FAQ
            </Link>
          </nav>
        </figcaption>
      </div>

      <div className="faq-container">
        <div className="hed">
          <span className="solign solign-page">FAQ</span>
          <h1 className="hed-h1">Frequently Asked Questions</h1>
        </div>

        {questions.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleQuestion(index)}>
              {item.question}
            </div>
            <div
              className={`faq-answer ${activeIndex === index ? "open" : ""}`}
            >
              {activeIndex === index &&
                item.answer
                  .split("\n")
                  .map((line, i) => <p key={i}>{line.trim()}</p>)}
            </div>
          </div>
        ))}
      </div>

      <Heders />
      <SocialMedia />
      <Footer />
    </>
  );
}
