import Head from "next/head";
import background from "../assets/background-image.png";
import backgroundMobile from "../assets/background-image-mobile.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Eighteleven</title>
        <meta name="description" content="Eighteleven" />
        <link rel="icon" href="/811icon.webp" />
      </Head>
      <div className="desktop-view">
        <Image
          src={background}
          alt="background-image"
          className="background-image"
        />
        <div className="buttons-wrapper">
          <div>
            <Link href={"menu"}>
              <button className="button" role="button">
                Menu
              </button>
            </Link>
          </div>
          <div>
            <a
              href="https://www.instagram.com/811.eighteleven/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button" role="button">
                Instagram
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="mobile-view">
        <div className="buttons-wrapper">
          <div>
            <Link href={"menu"}>
              <button className="button" role="button">
                Menu
              </button>
            </Link>
          </div>
          <div>
            <a
              href="https://www.instagram.com/811.eighteleven/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="button" role="button">
                Instagram
              </button>
            </a>
          </div>
        </div>
        <Image
          src={background}
          alt="background-image"
          className="background-image"
        />
      </div>
    </div>
  );
}
