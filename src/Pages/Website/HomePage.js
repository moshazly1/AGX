// import Heders from "./Heders";
// import Text from "./Text";
// import SocialMidia from "./SocialMidia";
// import AboutUs from "../information/AboutUs";
// import HSolutions from "../Dashbord/HSolutions";
// import Footer from "./Footer";

// import { useState, useEffect } from "react";

// export default function HomePage() {
//   const images = [
//     "../../Imge/HomePage/HomePage1.jpg",
//     "../../Imge/HomePage/HomePage2.jpg",
//     "../../Imge/HomePage/HomePage3.jpg",
//     "../../Imge/HomePage/HomePage4.jpg",
//     "../../Imge/HomePage/HomePage5.jpg",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 3000); // كل 3 ثواني

//     return () => clearInterval(interval); // لما الكمبوننت يتشال من الشاشة
//   }, []);
//   return (
//     <div
//       className="homepage"
//       style={{ backgroundImage: `url(${images[currentIndex]})` }}
//     >
//       <div className="cover">
//         <div className="blue-circle-right"></div>
//         <div className="blue-circle-left"></div>

//         <Heders />
//         <Text />
//         <SocialMidia />
//       </div>

//       <AboutUs />
//       <HSolutions />
//       <Footer />
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import Heders from "./Heders";
import Text from "./Text";
import SocialMidia from "./SocialMidia";
import AboutUs from "../information/AboutUs";
import HSolutions from "../Dashbord/HSolutions";
import Footer from "./Footer";

// الصور
import HomePage1 from "../../Imge/HomePage/HomePage3.jpg";
import HomePage2 from "../../Imge/HomePage/HomePage2.jpg";
import HomePage3 from "../../Imge/HomePage/HomePage1.jpg";
import HomePage4 from "../../Imge/HomePage/HomePage5.jpg";
import HomePage5 from "../../Imge/HomePage/HomePage4.jpg";

export default function HomePage() {
  const images = [HomePage1, HomePage2, HomePage3, HomePage4, HomePage5];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage">
      <div className="background-wrapper">
        {images.map((img, i) => (
          <div
            key={i}
            className={`background-image ${i === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <div className="cover">
        <div className="blue-circle-right"></div>
        <div className="blue-circle-left"></div>
        <Heders />
        <Text />
        <SocialMidia />
      </div>

      <AboutUs />
      <HSolutions />
      <Footer />
    </div>
  );
}
