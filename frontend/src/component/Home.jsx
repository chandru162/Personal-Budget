import homeimg1 from '../assets/images/homeimg1.jpg'
import homeimg2 from '../assets/images/homeimg2.jpg'
import homeimg4 from '../assets/images/homeimg4.jpg'
import homeimg3 from '../assets/images/homeimg3.avif'
import '../css section/Home.css'
export default function Home() {
  return (
    <div className='home-body'>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={homeimg2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={homeimg4} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={homeimg1} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={homeimg3} className="d-block w-100" alt="..." />
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
      </div>
      <div className='imagediv4'>
        <div>
          <img src="..." alt="img1" />
        </div>
        <div>
          <img src="..." alt="img2" />
        </div>
        <div>
          <img src="..." alt="img3" />
        </div>
        <div>
          <img src="..." alt="img4" />
        </div>
      </div>
      <div className='animationdiv'>
        

      </div>

      <div className='start-div'>
        <div className="card text-center h-100">
          <div className="card-body">
            <h5 className="card-title">This is your Personal Budget</h5>
            <p className="card-text">"Take control of your finances with our intuitive personal budget tools. Easily track expenses, set goals, and achieve financial peace of mind."</p>
            <a href="/log-in" className="btn btn-primary">Let's Start</a>
          </div>
        </div>
      </div>
      


    </div>
  )
}
