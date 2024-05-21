import React from 'react';
import vedio from '../assets/gambling-vedio.mp4'
const Numbers = () => {
  return (
    <>
      <div id='num' className="container-fluid">
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
      <div className="empty">
        <div className="numbers  ">
          <div className="col-md-3 mb-4">
            <div className="">
              <div className="num1">2500</div>
              <div className="numcar">HAPPY CLIENTS</div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="">
              <div className="num2">300</div>
              <div className="numcar2">FULL NOTEBOOKS</div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="">
              <div className="num2">120</div>
              <div className="numcar2">TEAMMATES</div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="">
              <div className="num2">30</div>
              <div className="numcar2">STORES</div>
            </div>
          </div>
        </div>
      </div>
      <div className="dotted">
        <video width="80%" height="auto" controls>
          <source src={vedio} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div></div>
    </>
  );
};

export default Numbers;
