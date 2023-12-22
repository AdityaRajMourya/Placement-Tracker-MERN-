import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const majorRecruiters = [
  { id: 1, name: 'to-the-new', website: 'https://www.tothenew.com' },
  { id: 2, name: 'nagarro', website: 'https://www.nagarro.com' },
  { id: 3, name: 'ivp', website: 'https://www.ivp.com' },
  { id: 4, name: 'app-inventive', website: 'https://www.app-inventive.com' },
  { id: 5, name: 'argil', website: 'https://www.argil.com' },
  { id: 6, name: 'byjus', website: 'https://www.byjus.com' },
  { id: 7, name: 'cvent', website: 'https://www.cvent.com' },
  { id: 8, name: 'foresight', website: 'https://www.foresight.com' },
  { id: 9, name: 'forest-lake', website: 'https://www.forestlake.com' },
  { id: 10, name: 'gemalto', website: 'https://www.gemalto.com' },
  { id: 11, name: 'hitachi-consulting', website: 'https://www.hitachi.com' },
  { id: 12, name: 'infosys', website: 'https://www.infosys.com' },
  { id: 13, name: 'knoldus', website: 'https://www.knoldus.com' },
  { id: 14, name: 'symbiotic', website: 'https://www.infosys.com' },
  { id: 15, name: 'zs', website: 'https://www.zs.com' },
];

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };
  return (
    <div className="container mx-auto mt-8 p-4 rounded shadow-md text-center">
      <h2 className="text-5xl text-white drop-shadow-xl font-extrabold mb-4">Unlock Opportunities, Realize Potential</h2>
      <p className="text-2xl text-white drop-shadow-xl font-extrabold mb-4">Your Career Awaits at Placement Tracker</p>
      <Slider {...settings} className="hide-arrows">
        <div>
          <img src="./images/Office1.jpg" alt="1"  className="w-full rounded-lg h-80 object-cover" />
        </div>
        <div>
          <img src="./images/Office2.jpg" alt="2"  className="w-full rounded-lg h-80 object-cover" />
        </div>
        <div>
          <img src="./images/Office3.jpg" alt="3" className="w-full rounded-lg h-80 object-cover"  />
        </div>
      </Slider>
      <p className="text-2xl mt-6 text-white bg-white p-4 bg-white bg-opacity-25 p-6 rounded-md backdrop-filter backdrop-blur-md shadow-lg">
        Explore the features of our app and stay updated with the latest placement activities.
      </p>      
      <div className="mt-8">
        <h3 className="text-2xl text-white font-bold mb-4">Our Major Recruiters</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {majorRecruiters.map((company) => (
            <div key={company.id} className="bg-white p-4 rounded shadow-md">
              <img src={`./images/logos/${company.name}.jpg`} alt={company.name} className="mx-auto mb-2" />
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
                Visit Website
              </a>
            </div>
          ))}
        </div>
    </div>
    </div>
  );
};

export default Home;
