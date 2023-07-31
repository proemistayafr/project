import "./mob.module.css";
import { isMobile } from 'react-device-detect';

export default function AndroidLarge1(props) {
  return (
    <div className={`${props.className} ${isMobile ? styles['android-large-1-mobile'] : styles['android-large-1-desktop']}`} style={props.style}>
      <div className="android-large-1-box_48114810box_483485x">
        <div className="android-large-1-zerttesh">
          <p className="android-large-1-zertte-text-0x">zertte</p>
          <p className="android-large-1-sh-text-1x">sh</p>
        </div>
        <p className="android-large-1-visitexplore">VISIT&EXPLORE</p>
        <div className="android-large-1-box_483485x">
          <p className="android-large-1-beyour-own-guide-v">
            BE YOUR OWN GUIDE! VISIT BEAUTIFUL PLACES IN KAZAKHSTAN AND DISCOVER ITS HISTORY IN REAL-TIME
          </p>
          <div className="android-large-1-box_488487x">
            <div className="android-large-1-twitter-11x" />
            <p className="android-large-1-introducing-zerttesh">
              Introducing Zerttesh
            </p>
          </div>
        </div>
      </div>
      <div
        className="android-large-1-box_48124813box_box_481548184819481648214822482348244825box_4827482848304832x"
      >
        <p className="android-large-1-experience-anew-way">
          experience a new way of researching
        </p>
        <p className="android-large-1-our-ai-powered-web-a">
          Our AI-powered web app brings you information and captivating facts about Kazakhstan sights you are visiting. It’s time for a journey of discovery, right at your fingertips!
        </p>
        <div
          className="android-large-1-box_box_4815481848194816482148224823x"
        >
          <div className="android-large-1-box_481548184819481648214822x">
            <div className="android-large-1-mausoleum-1x" />
            <p className="android-large-1-yassawi-mausoleum">
              yassawi mausoleum
            </p>
            <p className="android-large-1-the-construction-of">
              The construction of the mausoleum began in 1389, several centuries after Akhmet Yassawi's death, during the reign of Timur (Tamerlane), the Central Asian conqueror. The mausoleum complex includes various structures, with the main highlight being the impressive domed mausoleum, which houses the tomb of Akhmet Yassawi.
            </p>
            <div className="android-large-1-aishabibi-1x" />
            <p className="android-large-1-aisha-bibi-mausoleum">
              aisha bibi mausoleum
            </p>
            <p className="android-large-1-ahistorical-mausole">
              A historical mausoleum located in the southern region of Kazakhstan. It is an architectural gem and a significant cultural monument in Central Asia.
              <br />
              The mausoleum is believed to have been built in the 12th century, during the period of the Karakhanid dynasty. It is named after Aisha Bibi, who ...................
            </p>
          </div>
          <div className="android-large-1-generated-by-zertte">
            <p className="android-large-1-component-text-0x">*</p>
            <p className="android-large-1-generated-by-text-1x">
              generated by
            </p>
            <p className="android-large-1-component-text-2x"> </p>
            <p className="android-large-1-zertte-text-3x">Zertte</p>
            <p className="android-large-1-sh-text-4x">sh</p>
            <p className="android-large-1-component-text-5x">*</p>
          </div>
        </div>
        <div className="android-large-1-back-2x" />
        <p className="android-large-1-the-world-is-abook">
          “The world is a book, and those who do not travel read only a page.”—Saint Augustine
        </p>
        <div className="android-large-1-box_482748284830x">
          <p className="android-large-1-visit-see-explore">
            visit, see, explore
          </p>
          <div className="android-large-1-explore-the-beauty-o">
            <p className="android-large-1-explore-the-beauty-otext-0x">
              {"Explore the beauty of Kazakhstan with "}
            </p>
            <p className="android-large-1-zertte-text-1x">Zertte</p>
            <p className="android-large-1-sh-text-2x">sh</p>
          </div>
          <div className="android-large-1-rectangle-3x">
            <p className="android-large-1-get-location">Get Location</p>
          </div>
        </div>
        <div className="android-large-1-rectangle-2x">
          <div className="android-large-1-box_483548374838x">
            <p className="android-large-1-zerttesh-2023kaza">
              Zerttesh, 2023, Kazakhstan Aktau
            </p>
            <div className="android-large-1-linkedin-1x" />
            <div className="android-large-1-instagram-1x" />
          </div>
        </div>
      </div>
    </div>
  );
}

AndroidLarge1.defaultProps = {
  className: "",
  style: {},
};

