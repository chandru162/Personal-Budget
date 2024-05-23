// import designerlogo from '../assets/images/Designer.png'
import homeimg1 from '../assets/images/homeimg1.jpg'
import homeimg2 from '../assets/images/homeimg2.jpg'
import homeimg4 from '../assets/images/homeimg4.jpg'
export default function Home() {
  return (
    <div>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                  <div className="carousel-item active">
                      {/* <img src={homeimg4}  className="d-block w-100" alt="..." width={"100vw"} height={"700vh"}/> */}
                  </div>
                  <div className="carousel-item">
                      {/* <img src={homeimg2}  className="d-block w-100" alt="..." width={"100vw"} height={"700vh"}/> */}
                  </div>
                  <div className="carousel-item">
                      {/* <img src={homeimg1}  className="d-block w-100" alt="..." width={"100vw"} height={"700vh"}/> */}
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
    </div>
  )
}
