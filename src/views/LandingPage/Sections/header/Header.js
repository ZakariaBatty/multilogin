import React from 'react';
import './Header.css';

const header = () => {
  const changeWidth = () => {
    if (window.scrollY >= 500) {
      document.getElementById('vidoeAnimation').style.transform = 'scale(0.3)';
    }
    if (window.scrollY >= 700) {
      document.getElementById('vidoeAnimation').style.transform = 'scale(0.6)';
    }
    if (window.scrollY >= 900) {
      document.getElementById('vidoeAnimation').style.transform = 'scale(1)';
    }
  };
  window.addEventListener('scroll', changeWidth);

  return (
    <>
      {/* START HOW IT WORKS 1  */}
      <div className="blacker" style={{ color: 'white' }}>
        <section className="py-5">
          <div
            className="col-md-12 text-center"
            style={{
              maxWidth: '1200px',
              margin: 'auto',
              padding: '40px 0',
              marginTop: '80px',
            }}
          >
            <h2>Meet multilogin</h2>
            <h1 style={{ fontSize: '5em' }}>Future of Browsing</h1>
            <div
              style={{
                textAlign: 'center',
                margin: '30px auto',
                maxWidth: '800px',
              }}
            >
              Use multiple accounts on your favourite website. Log into multiple
              accounts on the same site simultaneously. No more need for
              secondary browsers, private sessions, let Sendwin handle these for
              you.
            </div>
            <div style={{ textAlign: 'center' }}>
              <a
                className="btn-white"
                href="/pricing"
                style={{ paddingTop: '12px', paddingBottom: '12px' }}
              >
                Get Started Now <i className="fas fas-arrow"></i>
              </a>
            </div>
          </div>
        </section>

        <section
          className="py-5 video-container"
          style={{ height: '200vh', padding: '20px' }}
        >
          <div
            id="vidoeAnimation"
            className="col-md-12 how-it-works-video video-box"
            style={{ maxWidth: '1200px', margin: 'auto' }}
          >
            <iframe
              width="1190"
              height="740"
              style={{ maxHeight: '588px' }}
              src="https://www.youtube-nocookie.com/embed/IBqwA9jNZZ0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            {/* <video src="../assets/videos/features-1.mp4" type="video/mp4" alt="How it works?" id="">  */}
          </div>
        </section>
        {/* END HOW IT WORKS 1  */}
      </div>
    </>
  );
};

export default header;
