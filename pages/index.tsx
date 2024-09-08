import { Tab } from "@headlessui/react";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Masonry from "react-masonry-css";
import LightGalleryComponent from "lightgallery/react";
import type { LightGallery } from "lightgallery/lightgallery";
// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import bgImage from "../public/photography-bg.jpg";
import ocean1 from "../public/ocean 1.jpg";
import ocean2 from "../public/ocean 2.jpg";
import ocean3 from "../public/ocean 3.jpg";
import ocean4 from "../public/ocean 4.jpg";
import React, { useRef, useState } from "react";
import ContactPopup from "./contactPopup";

const tabs = [
  {
    key: "all",
    display: "All",
  },
  {
    key: "oceans",
    display: "Oceans",
  },
  {
    key: "forests",
    display: "Forests",
  },
];

const images = [ocean1, ocean2, ocean3, ocean4];
const unavailableDates = [
  new Date(2023, 8, 10), // Note: Months are zero-indexed by JavaScript Date (i.e., 8 = September)
  new Date(2023, 8, 15),
  new Date(2023, 8, 20),
  new Date(2023, 8, 25),
];

export default function Home() {
  const lightboxRef = useRef<LightGallery | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="h-full overflow-auto">
      <Head>
        <title>Neva Appartments</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Image
        className="fixed left-0 top-0 z-0"
        src={bgImage}
        alt="backgrounImage"
        placeholder="blur"
        priority={true}
      />

      <div className="fixed left-0 top-0 w-full h-full z-10 from-stone-900 bg-gradient-to-t "></div>

      <header className="fixed top-0 w-full z-30 flex justify-between items-center h-[90px] px-10">
        <span className="uppercase text-lg font-medium">
          Photography Portfolio
        </span>
        <button
          onClick={togglePopup}
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Get in touch
        </button>
        {showPopup && <ContactPopup onClose={togglePopup} />}
      </header>

      <main className="relative pt-[110px] z-20">
        <div className="flex flex-col items-center h-full">
          <Tab.Group>
            <Tab.List className="flex items-center gap-12">
              {tabs.map((tab) => (
                <Tab key={tab.key} className="p-2">
                  {({ selected }) => (
                    <span
                      className={classNames(
                        "uppercase text-lg",
                        selected ? "text-white" : "text-stone-600"
                      )}
                    >
                      {tab.display}
                    </span>
                  )}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className=" h-full max-w-[900px] w-full p-2 sm:p-4 my-6">
              <Tab.Panel>
                <Masonry
                  breakpointCols={2}
                  className="flex gap-4"
                  columnClassName=""
                >
                  {images.map((image, idx) => (
                    <Image
                      key={image.src}
                      src={image}
                      alt="placeholder"
                      className="my-4 hover:opacity-70 cursor-pointer"
                      placeholder="blur"
                      onClick={() => {
                        lightboxRef.current?.openGallery(idx);
                      }}
                    />
                  ))}
                </Masonry>
                <LightGalleryComponent
                  onInit={(ref) => {
                    if (ref) {
                      lightboxRef.current = ref.instance;
                    }
                  }}
                  speed={500}
                  plugins={[lgThumbnail, lgZoom]}
                  dynamic
                  dynamicEl={images.map((image) => ({
                    src: image.src,
                    thumb: image.src,
                  }))}
                />
              </Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forests</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="relative h-[90px] flex justify-center items-center uppercase text-lg font-medium z-20">
        <p>Placeholder for footer</p>
      </footer>
    </div>
  );
}
