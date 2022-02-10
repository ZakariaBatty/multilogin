import React from 'react';
import './Work.css';

import tab3 from '../../../../assets/images/tab3.png';
import tab4 from '../../../../assets/images/tab4.png';
import tab from '../../../../assets/images/tab.png';

const Work = () => {
  const changePositionImg = () => {
    if (window.scrollY >= 2500) {
      console.log(window.scrollY);
      document.getElementById('tab-3').style.right = '0';
      document.getElementById('tab-3').style.transform =
        'perspective(1500px) rotateY(-40deg)';
      document.getElementById('tab-2').style.right = '15.9%';
      document.getElementById('tab-2').style.transform =
        'translateX(50%) perspective(1500px) rotateY(-40deg)';
      document.getElementById('tab-1').style.right = '31.4%';
      document.getElementById('tab-1').style.transform =
        'translateX(100%) perspective(1500px) rotateY(-40deg)';
    }
  };

  window.addEventListener('scroll', changePositionImg);
  return (
    <>
      {/* <!-- END HOW IT WORKS 1 --> */}

      <div style={{ position: 'relative', height: '148vh' }}>
        <section
          className="hero-section"
          style={{ position: 'sticky', top: '15%' }}
        >
          <div className="container">
            <div className="row animator" style={{ position: 'relative' }}>
              <div className="col-md-6">
                <div className="mt-4 get-started">
                  <h1 className="hero-title" style={{ fontSize: '3rem' }}>
                    Different browser profiles in a single window
                  </h1>
                  <p className="mb-4 font-16 text-white-48">
                    Select a plan below and start sharing session instead of
                    sharing password.
                  </p>
                  <a href="/pricing" className="btn-get-started">
                    Get Started Now <i className="mdi mdi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
              <div style={{ position: 'absolute', pointerEvents: 'none' }}>
                <div
                  className="text-md-end mt-3 mt-md-0"
                  style={{
                    position: 'relative',
                    paddingTop: '30%',
                    width: '100%',
                    margin: 'auto',
                    ransform: 'translateY(25%)',
                    display: 'table',
                  }}
                >
                  <img src={tab3} id="tab-3" className="tab-3" alt="tab3" />
                  <img src={tab4} id="tab-2" className="tab-2" alt="tab2" />
                  <img src={tab} id="tab-1" className="tab-1" alt="tab" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Work;
