import '../App.css';
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';

const Gallery = () => {
  const totalImages = 5; 

  const generateImages = () => {
    const images = [];
    for (let i = 1; i <= totalImages; i++) {
      images.push(
        <div key={i} className={`carousel-img carousel-img${i}`}>
          <img id='img' src={eval(`image${i}`)} className="d-block w-100" alt={`Image${i}`} />
        </div>
      );
    }
    return images;
  };

  return (
    <>
      <h2 id='gallery' className='galleryhead'>OUR GALLERY</h2>
      <p className='galleryp'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste assumenda blanditiis consectetur odio aperiam laudantium officiis magnam porro a aliquam debitis aspernatur, reprehenderit eaque omnis sapiente quis sint deleniti.</p>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-images-container">
              {generateImages()}
            </div>
          </div>
        </div>
        <div className='controlblk'>
          <a className='iconleft' href="#carouselExampleControls" role="button" data-slide="prev" >&lt;</a>
          <a className='iconleft' href="#carouselExampleControls" role="button" data-slide="next" >&gt;</a>
        </div>
      </div>
    </>
  );
}

export default Gallery;
