import React from 'react';

const SocialNetworkFooter = () => {
  return (
    <>
      <div className="footer__socials">
        <h5 className="footer__title">Redes sociales </h5>
        <div className="footer__socials__socials">
          <div className="footer__social">
            <a href="#">
              <span className="fa fa-facebook"></span>
            </a>
          </div>
          <div className="footer__social">
            <a href="#">
              <span className="fa fa-twitter"></span>
            </a>
          </div>
          <div className="footer__social">
            <a href="#">
              <span className="fa fa-instagram"></span>
            </a>
          </div>
          <div className="footer__social">
            <a href="#">
              <span className="fa fa-youtube"></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialNetworkFooter;
