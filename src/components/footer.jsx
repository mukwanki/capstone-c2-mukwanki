// eslint-disable-next-line no-unused-vars
import React from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa6";

const FooterLink = [
  {
    title: "Accueil",
    link: "/#accueil",
  },
  {
    title: "Commande",
    link: "/#commande",
  },
  {
    title: "Decouvert",
    link: "/#decouvert",
  },
  {
    title: "Profil",
    link: "/#profil",
  },
  {
    title: "Sign-up",
    link: "/#signup",
  },
];

const Footer = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-secondary to-secondary/90 text-white">
        <div className="bg-black/40 min-h-[400px]">
          <div className="container grid md:grid-cols-3 pb-20 pt-5 ">
            <div className="py-8 px-4">
              <a
                href="#"
                className="font-semibold tracking-widest text-2xl sm:text-3xl font font-cursive"
              >
                Food Récup
              </a>
              <p className="pt-4">
                Luttons contre le gaspilage alimentaire ensemble
              </p>
            </div>

            <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10 ">
              <div className="py-8 px-4">
                <h1 className="text-xl font-semibold sm:text-left mb-3">
                  Company
                </h1>
                <ul className="space-y-3">
                  {FooterLink.map((data, index) => (
                    <li
                      key={index}
                      className="flex hover:scale-105 duration-200"
                    >
                      <a href={data.link}>{data.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-8 px-4">
                <h1 className="text-xl font-semibold sm:text-left mb-3">
                  Service
                </h1>
                <ul className="space-y-3">
                  {FooterLink.map((data, index) => (
                    <li
                      key={index}
                      className="flex hover:scale-105 duration-200"
                    >
                      <a href={data.link}>{data.title}</a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="py-8 px-4 col-span-2 sm:col-auto">
                <h1 className="text-xl font-semibold sm:text-left mb-3">
                  Adress
                </h1>
                <div>
                  <p className="mb-3">Gombe,Kinshasa</p>
                  <p>+243 813 742 62</p>
                  <div className="space-y-3 mt-6">
                    <a href="#">
                      <FaFacebook className="text-3xl inline-block hover:scale-105 duration-200" />
                    </a>
                    <a href="#">
                      <FaInstagram className="text-3xl inline-block hover:scale-105 duration-200" />
                    </a>
                    <a href="#">
                      <FaTiktok className="text-3xl inline-block hover:scale-105 duration-200" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
