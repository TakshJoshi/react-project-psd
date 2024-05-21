// import React from 'react';
import Card from './card';
import Nigga1 from '../assets/nigga1.jpg';
import Nigga2 from '../assets/nigga2.jpg';
import Nigga3 from '../assets/nigga3.jpg';

const Leader = () => {
  const leaders = [
    {
      image: Nigga1,
      title: 'Hugo Silva',
      description: 'Some quick example text to build the card title and make up the bulk of the card\'s content.'
    },
    {
      image: Nigga2,
      title: 'Imanol Arias',
      description: 'Some quick example text to build on the title and make up the bulk of the card\'s content.'
    },
    {
      image: Nigga3,
      title: 'Javier Bardem',
      description: 'Some quick example text to build on the title and make up the bulk of the card\'s content.'
    }
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="head3">OUR TEAM LEADERS</div>
          <div className="head3-dash"></div>
          <div className="head3-p">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda temporibus nemo deserunt quae pariatur a atque ratione vel aliquam fuga provident delectus obcaecati quo, facere molestiae voluptatem. Veritatis, natus commodi! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis maxime, aut distinctio architecto accusantium, blanditiis ut, voluptate?
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        {leaders.map((leader, index) => (
          <div key={index} className="col-md-4 mb-4">
            <Card {...leader} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leader;
