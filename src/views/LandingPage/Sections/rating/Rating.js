import React from 'react';
import './Rating.css';

const Rating = () => {
  return (
    <>
      {/* <!-- START Rating --> */}
      <section class="py-5">
        <div class="container">
          <div class="row pb-3">
            <div class="col-lg-12">
              <div class="text-center">
                <h1 class="rating-headline mt-0">
                  Become the ultra legend you want to be
                </h1>
                <h1 class="rating-headline mt-0">
                  with sendwin productive tool.
                </h1>
                <div class="mt-4">
                  <a
                    href="/pricing"
                    class="btn-white"
                    style={{ paddingTop: '12px', paddingBottom: '12px' }}
                  >
                    Get started now <i class="mdi mdi-arrow-right ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr class="hr-line mt-5" />
        </div>
      </section>
      {/* <!-- END Rating -->  */}
    </>
  );
};

export default Rating;
