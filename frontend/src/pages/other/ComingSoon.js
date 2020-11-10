import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import socialNetworks from "../../data/SocialNetworks/socials";
import Countdown from "react-countdown";
import Renderer from "../../components/Countdown/Renderer";
import SubscribeEmail from "../../components/Newsletter/SubscribeEmail";

const ComingSoon = () => {
  return (
    <Fragment>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Roboto:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            .cs-07-countdown .single-countdown__time{
              background-image: url(${
                process.env.PUBLIC_URL +
                "/assets/img/background/coming-soon.jpg"
              })
            }
          `}
        </style>
      </Helmet>
      <div
        className="cs-07-page-wrapper h-100 bg-img d-flex flex-column justify-content-between"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/img/background/coming-soon.jpg"
          })`,
        }}
      >
        {/*====================  header ====================*/}
        <header className="cs-07-header space-pt--30 space-pb--30">
          <div className="container">
            <div className="row">
              <div className="col-6">
                {/* logo */}
                <div className="cs-07-logo space-mb--35">
                  <Link to={process.env.PUBLIC_URL + "/"}>
                    <img
                      src={process.env.PUBLIC_URL + "/assets/img/logo/logo.svg"}
                      className="img-fluid"
                      alt="Samteriors"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/*====================  End of header  ====================*/}
        {/*====================  content ====================*/}
        <div className="cs-07-content">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 ml-auto mr-auto">
                <h2 className="cs-07-content__title text-center">
                  We Are Coming Soon
                </h2>
                <p className="cs-07-content__text text-center">
                  Created this cute series of 3D artworks featuring all sorts of
                  different video games, looking at their phones &amp; on their
                  laptops or just lazing around.
                </p>
                {/* countdown */}
                <div className="cs-07-countdown space-mt--50">
                  <Countdown
                    date={new Date("July 07, 2021 12:12:00")}
                    renderer={Renderer}
                  />
                </div>
                <div className="cs-07-subscription-wrapper space-mt--50 text-center">
                  {/* subscribe email */}
                  <SubscribeEmail mailchimpUrl="https://gmail.us2.list-manage.com/subscribe/post?u=696736434709b1f7c18a2765b&amp;id=c5f58b02d8" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of content  ====================*/}
        {/*====================  footer ====================*/}
        <footer className="cs-07-footer space-pt--25 space-pb--25">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                {/* copyright */}
                <div className="cs-07-copyright">
                  &copy; {new Date().getFullYear() + " "}
                  <a
                    href="https://brandynodoyo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Asepji
                  </a>
                  , all rights reserved
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* social icons */}
                <ul className="cs-07-social-icons d-flex align-items-center justify-content-center justify-content-md-end">
                  <li>
                    {socialNetworks.map((social) => (
                      <a
                        key={social.id}
                        href={`https://${social.networkName}.com/${social.username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className={`fa fa-${social.networkName}`} />
                      </a>
                    ))}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        {/*====================  End of footer  ====================*/}
      </div>
    </Fragment>
  );
};

export default ComingSoon;
