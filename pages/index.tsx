import { Tab } from "@headlessui/react";
import classNames from "classnames";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Masonry from "react-masonry-css";

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

export default function Home() {
  return (
    <div className="h-full bg-[url('/photography-bg.jpg')] bg-top bg-cover overflow-auto">
      <Head>
        <title>Neva Appartments</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="fixed top-0 w-full z-10 flex justify-between items-center h-[90px] px-10">
        <span className="uppercase text-lg font-medium">
          Photography Portfolio
        </span>
        <Link
          href="#"
          className="rounded-3xl bg-white text-stone-700 px-3 py-2 hover:bg-opacity-90"
        >
          Get in touch
        </Link>
      </header>

      <main className="pt-[110px]">
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
                  <img src="/ocean 1.jpg" alt="ocean 1" className="my-4" />
                  <img src="/ocean 2.jpg" alt="ocean 1" className="my-4" />
                  <img src="/ocean 3.jpg" alt="ocean 1" className="my-4" />
                  <img src="/ocean 4.jpg" alt="ocean 1" className="my-4" />
                </Masonry>
              </Tab.Panel>
              <Tab.Panel>Oceans</Tab.Panel>
              <Tab.Panel>Forests</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </main>

      <footer className="h-[90px] flex justify-center items-center uppercase text-lg font-medium">
        <p>Placeholder for footer</p>
      </footer>
    </div>
  );
}
