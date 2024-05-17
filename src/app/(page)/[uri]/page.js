import { Page } from "@/models/Page";
import { User } from "@/models/User";
import { Event } from "@/models/Event";
import {
  faDiscord,
  faFacebook,
  faGithub,
  faInstagram,
  faTelegram,
  faTiktok,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faLink,
  faLocationDot,
  faMobile,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import mongoose from "mongoose";
import { btoa } from "next/dist/compiled/@edge-runtime/primitives";
import Image from "next/image";
import Link from "next/link";

export const buttonsIcons = {
  email: faEnvelope,
  mobile: faPhone,
  instagram: faInstagram,
  facebook: faFacebook,
  discord: faDiscord,
  tiktok: faTiktok,
  youtube: faYoutube,
  whatsapp: faWhatsapp,
  github: faGithub,
  telegram: faTelegram,
};

function buttonLink(key, value) {
  if (key === "mobile") {
    return "tel:" + value;
  }
  if (key === "email") {
    return "mailto:" + value;
  }
  return value;
}

export default async function UserPage({ params }) {
  try {
    // Extracting URI from params
    const uri = params?.uri;

    if (!uri) {
      // Handle the case where URI is missing or invalid
      throw new Error("Invalid URI");
    }

    // Connecting to MongoDB
    mongoose.connect(process.env.MONGO_URI);

    // Fetching page information
    const page = await Page.findOne({ uri });

    if (!page) {
      // Handle the case where the page with the given URI is not found
      throw new Error(`Page with URI ${uri} not found`);
    }

    // Fetching user information
    const user = await User.findOne({ email: page.owner });

    if (!user) {
      // Handle the case where the user with the owner's email is not found
      throw new Error(`User with email ${page.owner} not found`);
    }

    // Creating an event
    await Event.create({ uri: uri, page: uri, type: "view" });

    // Rendering the UI
    return (
      <div className="bg-[#e2e8f0] text-black min-h-screen">
        <div
          className={`bg-gray-400 bg-cover bg-center ${page.bgType === "color" ? '' : ''} h-48 sm:h-64 md:h-72 lg:h-80 xl:h-96`}
          style={
            page.bgType === "color"
              ? { backgroundColor: page.bgColor }
              : { backgroundImage: `url(${page.bgImage})` }
          }
        ></div>
        <div className=" border-4 rounded-full aspect-square w-40 h-40 mx-auto relative -top-20 -mb-12">
          <Image
            className="rounded-full w-full h-full object-cover"
            src={user.image}
            alt="avatar"
            width={256}
            height={256}
          />
        </div>
        <h2 className="text-2xl text-center mb-1">{page.displayName}</h2>
        <h3 className="text-md flex gap-2 justify-center items-center text-[0f172a]/70">
          <FontAwesomeIcon className="h-4" icon={faLocationDot} />
          <span>{page.location}</span>
        </h3>
        <div className="max-w-xs mx-auto text-center my-2">
          <p>{page.bio}</p>
        </div>
        <div className="flex gap-2 items-center justify-center mt-4 pb-4">
          {Object.keys(page.buttons).map((buttonKey) => (
            <Link
              key={buttonKey}
              href={buttonLink(buttonKey, page.buttons[buttonKey])}
              className="rounded-full bg-[#0f172a] shadow-lg shadow-slate-500 text-white p-2 flex items-center justify-center hover:scale-125 transform transition duration-300 "
            >
              <FontAwesomeIcon
                className="w-5 h-5"
                icon={buttonsIcons[buttonKey]}
              />
            </Link>
          ))}
        </div>
        <div className="max-w-2xl  mx-auto grid gap-6 p-4 px-8  ">
          {page.links.map((link) => (
            <Link
              key={link.url}
              target="_blank"
              ping={
                process.env.URL +
                "api/click?url=" +
                btoa(link.url) +
                "&page=" +
                page.uri
              }
              className="bg-[#1e293b] shadow-lg shadow-slate-600 p-4 rounded-xl flex items-center hover:shadow-lg hover:scale-105 transform transition duration-300"
              href={link.url}
            >
              <div className="w-16 h-16 bg-white rounded-full overflow-hidden flex-shrink-0">
                {link.icon && (
                  <Image
                    className="w-16 h-16 object-cover"
                    src={link.icon}
                    alt="icon"
                    width={40}
                    height={40}
                  />
                )}
                {!link.icon && (
                  <FontAwesomeIcon
                    icon={faLink}
                    className="w-8 h-8 text-[#cbd5e1] mx-4 my-4 "
                  />
                )}
              </div>
              <div className="ml-4">
                <h3 className="text-xl font-bold text-[#cbd5e1]">
                  {link.title}
                </h3>
                <p className="text-gray-300">{link.subtitle}</p>
              </div>
            </Link>
          ))}
        </div>
        <footer className="bg-[#1e293b] text-white py-4 mt-20 ">
          <div className="container mx-auto text-center">
            <p>
              &copy; {new Date().getFullYear()} Your Linkhub. All rights
              reserved.
            </p>
            <p className="mt-2">Designed with ❤️ by {page.displayName}</p>
          </div>
        </footer>
      </div>
    );
  } catch (error) {
    // Handle any errors that occurred during the execution
    console.error("Error in UserPage:", error.message);

    // Return a generic error message or redirect to an error page
    return <div>Error: Something went wrong</div>;
  }
}
