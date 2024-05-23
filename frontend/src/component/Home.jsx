// import designerlogo from '../assets/images/Designer.png'
import homeimg1 from '../assets/images/homeimg1.jpg'
import homeimg2 from '../assets/images/homeimg2.jpg'
import homeimg4 from '../assets/images/homeimg4.jpg'
export default function Home() {
  return (
    <div className='home-body'>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={homeimg2} class="d-block w-50 h-70" alt="image 4"/>
      </div>
      <div class="carousel-item">
        <img src={homeimg4} class="d-block w-50 h-70" alt="image 2"/>
      </div>
      <div class="carousel-item">
        <img src={homeimg1} class="d-block w-50 h-70" alt="image 1"/>
      </div>
    </div>
  </div>
    </div>
  )
}
