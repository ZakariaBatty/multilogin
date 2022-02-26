import React from 'react';
import './Rating.css';

const Rating = () => {
  return (
    <>
      {/* <!-- START Rating --> */}
      <section className="py-5">
        <div className="container">
          <div className="row pb-3">
            <div className="col-lg-12">
              <div className="text-center">
                <h1 className="rating-headline mt-0">
                  Become the ultra legend you want to be
                </h1>
                <h1 className="rating-headline mt-0">
                  with sendwin productive tool.
                </h1>
                <div className="mt-4">
                  <a
                    href="/pricing"
                    className="btn-white"
                    style={{ paddingTop: '12px', paddingBottom: '12px' }}
                  >
                    Get started now <i className="mdi mdi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-line mt-5" />
        </div>
      </section>
      {/* <!-- END Rating -->  */}
    </>
  );
};

export default Rating;
