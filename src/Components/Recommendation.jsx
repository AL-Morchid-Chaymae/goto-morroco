import React, { useState } from "react";

import "../Styles/Recommendation.css";

import Destination1 from "../assets/Destination1.jpg";
import Destination2 from "../assets/Destination2.jpg";
import Destination3 from "../assets/Destination3.jpg";
import Destination4 from "../assets/Destination4.jpg";
import Destination5 from "../assets/Destination5.jpg";
import Destination6 from "../assets/Destination6.jpg";
import info1 from "../assets/info1.png";
import info2 from "../assets/info2.png";
import info3 from "../assets/info3.png";

function Recommendation() {
  const [active, setActive] = useState();

  const data = [
    {
      image: Destination1,
      title: "Essaouira",
      subTitle: "Essaouira's stunning coastline is a major draw for visitors, offering pristine beaches and opportunities for water sports such as windsurfing and kitesurfing.",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination2,
      title: "Chefchaouen",
      subTitle: "The Blue Pearl of Morocco,surrounded by the stunning landscapes of the Rif Mountains, Chefchaouen offers plenty of opportunities for outdoor adventures. ",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination3,
      title: "Merzouga",
      subTitle: "Gateway to the Sahara, is a destination like no other, offering visitors the chance to experience the beauty and magic of the Sahara Desert. ",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      image: Destination4,
      title: "Marrakech",
      subTitle: "Vibrant Fusion of History and Culture,is surrounded by stunning natural beauty. The city is nestled at the foot of the Atlas Mountains, which offer plenty of opportunities for outdoor adventures, including hiking, trekking. ",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      image: Destination5,
      title: "Fes",
      subTitle: "A Cultural and Historical Gem,is a city that offers a truly immersive experience, with its rich history, vibrant culture, and stunning architecture. Whether you're exploring the city's historic sites, shopping in its bustling markets,",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      image: Destination6,
      title: "El Hoceima",
      subTitle: "A Coastal Gem of Morocco, is a hidden gem of Morocco, offering visitors a unique blend of natural beauty, cultural heritage, and culinary delights.Whether you're looking to relax on the beach, explore the mountains, or  ",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  return (
    <section id="recommendation" className="recommendation">
      <div className="title">
        <h1>Recommend</h1>
        <div className="CategoryBar">
          <ul>
            {packages.map((pkg, index) => {
              return (
                <li
                  key={index}
                  className={active === index + 1 ? "Active" : ""}
                  onClick={() => setActive(index + 1)}>
                  {pkg}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="recommendationBox">
        {data.map((item) => {
          return (
            <div className="box">
              <div className="image">
                <img src={item.image} alt="image" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>

              <div className="price">
                <div>
                  <img src={info1} alt="image" />
                  <img src={info2} alt="image" />
                  <img src={info3} alt="image" />
                </div>

                <p>${item.cost}</p>
              </div>

              <div className="details">
                <p>1500 kms</p>
                <p>{item.duration}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Recommendation;
