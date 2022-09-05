import './App.css';
import BannerPrincipal from './assets/BannerPrincipal.webp';
import FotoServicios1 from './assets/work.jpeg';
import FotoServicios2 from './assets/work2.jpg';
import Producto from './assets/watchApple.png'
import Noticias from './assets/workingWith.jpg'

function App() {
  return (
    <div className="App">
      <nav id="navbar" className="navbar navbar-expand-lg" >
        <div className="container text center">
          <div className="row justify-content-between">
            <div className="col-6 col-md-1">

              <a className="navbar-brand" href="#">LOGO</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
            <div className="col-xl-6 align-self-center">
              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                  {/* #1 */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      HOME
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  {/* #2 */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      PAGES
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  {/* #3 */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      BLOGS
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  {/* #4 */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      PORTFOLIO
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  {/* #5 */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      ELEMENT
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                  {/* #6 */}
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      DEMO
                    </a>
                    <ul className="dropdown-menu">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>


                  <div className="col align-self-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" style={{ marginLeft: '1rem' }} className="bi bi-search" viewBox="0 0 16 16" >
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </div>
                  <div className="col align-self-center">
                    <button className="btnBuy" style={{ marginLeft: '2rem' }}>Buy Now!</button>
                  </div>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </nav>
      <main>
        <section1>
          <div className="contenedorTexto">
            <p className="textoBanner">WELCOME TO INBUILD</p>
            <p className="textoBorde">GLOBAL STANDARTD</p>
            <p className="textoBanner">BUILD ALL THE UNIQUE PATTERNS</p>
          </div>
          <img src={BannerPrincipal} style={{ width: '100%' }} alt="principal-bannner" />
        </section1>
        <section2>
          <div className="container marginTop" >
            <div className="row">
              <div className="col">
                <img src={FotoServicios1} style={{ width: '100%' }} alt="principal-bannner" />
              </div>
              <div className="col-sm-4 marginTop ">
                <div className="row">
                  <h1>With all <br /> package services</h1>
                  <p>
                    Lorem Ipsum solor sit amet, consectetur adipisicing will be
                    distracted by readable content of a page when looking at its
                    layout it has a normal letters ...
                  </p>
                </div>
                <div className="row">
                  <button className="btnRead">Read More</button>
                </div>
              </div>
            </div>
            <div className="row" style={{ marginTop: '1rem' }}>
              <div className="col-sm-6 orden">
                <div className="row" style={{ width: '60%', marginLeft: '10rem' }}>
                  <h2>Innovative solutions <br /> from great experts</h2>
                  <p >
                    Lorem Ipsum solor sit amet, consectetur adipisicing will be
                    distracted by readable content of a page when looking at its
                    layout it has a normal letters ...
                  </p>
                </div>
                <div className="col">
                  <button className="btnRead" style={{ marginLeft: '10rem' }}>Read More</button>
                </div>
              </div>
              <div className="col-sm-6">
                <img src={FotoServicios2} style={{ width: '100%' }} alt="principal-bannner" />
              </div>
            </div>
          </div>
        </section2>
        <section3>
          <div className="container marginTop">
            <div className="row">
              <div className="col-3">
                <h2><strong>Our <br /> great service</strong></h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry.Lorem Ipsum has benn the industry's standart dummy text
                  ever since the 1500s, when an unknow printer took a galley of type
                  and scrambled it to make ...
                </p>
              </div>
              <div className="col">
                <div class="card-group">
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">
                        <div className="circle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#48acbd" class="bi bi-display" viewBox="0 0 16 16">
                            <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z" />
                          </svg>
                        </div>
                        Unique
                      </h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing will be distracted by the readable content ...
                      </p>
                      <a href="/">READ MORE</a>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">
                        <div className="circle">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#48acbd"
                            height="20px"
                            width="20px"
                            viewBox="0 0 448 512"
                          >
                            <path
                              d="M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM384 96H256V224H384V96zM384 288H256V416H384V288zM192 224V96H64V224H192zM64 416H192V288H64V416z"
                            />
                          </svg>
                        </div>
                        Responsive</h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing will be distracted by the readable content ...
                      </p>
                      <a href="/">READ MORE</a>
                    </div>

                  </div>
                  <div class="card">
                    <div class="card-body">
                      <h5 class="card-title">
                        <div className="circle">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#48acbd" class="bi bi-lightning-charge" viewBox="0 0 16 16">
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z" />
                          </svg>
                        </div>
                        Technology
                      </h5>
                      <p class="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing will be distracted by the readable content ...
                      </p>
                      <a href="/">READ MORE</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section3>
        <section4>
          <div className="container box" style={{ color: 'white' }}>
            <p >STRONG FOUNDATION</p>
            <h2><strong>Working process with our <br /> latest projects</strong></h2>
          </div>


        </section4>
        <section5>
          <div className="container box marginTop" >
            <div className="row">
              <h2 >Branding Projects</h2>
              <p>
                Loremp ipsum dolor sit amet, consectetur adipisicing will be
                distracted by the readable content ...
              </p>
            </div>
            <div className="row">
              <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                  <div class="card">
                    <img src={Producto} className="card-img-top" alt="Apple Watch" />
                    <div class="card-body">
                      <p class="card-text">WATCHES</p>
                      <h5 class="card-title">Apple Watch</h5>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card">
                    <img src={Producto} className="card-img-top" alt="Apple Watch" />
                    <div class="card-body">
                      <p class="card-text">BUSINESS</p>
                      <h5 class="card-title">Creative Website</h5>
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card">
                    <img src={Producto} className="card-img-top" alt="Apple Watch" />
                    <div class="card-body">
                      <p class="card-text">TECHNOLOGIES</p>
                      <h5 class="card-title">Tesla Motors</h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card">
                    <img src={Producto} className="card-img-top" alt="Apple Watch" />
                    <div class="card-body">
                      <p class="card-text">COSMETICS</p>
                      <h5 class="card-title"> Beauty Salon</h5>
                    </div>
                  </div>
                </div><div class="col">
                  <div class="card">
                    <img src={Producto} className="card-img-top" alt="Apple Watch" />
                    <div class="card-body">
                      <p class="card-text">COMMUNICATE</p>
                      <h5 class="card-title">Twillio API</h5>
                    </div>
                  </div>
                </div><div class="col">
                  <div class="card">
                    <img src={Producto} className="card-img-top" alt="Apple Watch" />
                    <div class="card-body">
                      <p class="card-text">PLANNING</p>
                      <h5 class="card-title">Time Art</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section5>
        <section6>
          <div className="container box marginTop">
            <div className="row">
              <h2><strong>Latest News</strong></h2>
              <p>Loremp ipsum dolor sit amet, consectetur adipisicing will be distracted by the readable content ...</p>
            </div>
            <div className="row">
              <div className="col-4 boxImg">
                <div className="overText1">
                  <div className="col textUp1">
                    <p>Events</p>
                    <p><strong>18 October 2020</strong></p>
                  </div>
                  <div className="col textDown1">
                    <h3>Exclusive New product</h3>
                    <p>Loremp ipsum dolor sit amet, consectetur adipisicing ...</p>
                  </div>
                </div>
                <img src={Noticias} className="imgNoticias" />

              </div>
              {/* _____________________ */}
              <div className="col-4 boxImg">
                <div className="overText2">
                  <p className="  textColor">Writing</p>
                  <h2 className="textColor" style={{ fontSize: '1.8rem' }}>Benefit program design</h2>
                </div>
                <img src={Noticias} className="imgNoticias" />
              </div>
              {/* _____________________ */}

              <div className="col-4 boxImg">
                <div className="overText1">
                  <div className="col textUp1">
                    <p>Programming</p>
                    <p><strong>07 October 2020</strong></p>
                  </div>
                  <div className="col textDown1">
                    <h4><strong>Content creation for team</strong></h4>
                    <p>Loremp ipsum dolor sit amet, consectetur adipisicing ...</p>
                  </div>
                </div>
                <img src={Noticias} className="imgNoticias" />
              </div>
            </div>
          </div>
        </section6>
        <section7>
          <div style={{ background: 'black' }}>
            <div className="container marginTop" style={{ background: 'black' }}>
              <div className="row">
                <div className="col-3">
                  <h1>iNBUILD</h1>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
                <div className="col-3">
                  <p>USEFUL LINKS</p>
                  <hr className="hr" />
                  <div className="accordion accordion-flush" id="accordionFlushExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          About us
                        </button>
                      </h2>
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder.</div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                          Services
                        </button>
                      </h2>
                      <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Portfolio
                        </button>
                      </h2>
                      <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder </div>
                      </div>
                    </div>
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="flush-headingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                          Contact us
                        </button>
                      </h2>
                      <div id="flush-headingFour" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body">Placeholder </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <p>OUR CONTACTS</p>
                  <hr className="hr" />

                  <div className="col">
                    <div className="row">
                      <div className="col-sm-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                        </svg>
                      </div>
                      <div className="col">
                        <div className="col"> 1023 California, US.</div>
                        <div className="col"> 34/5 Leavenwroth Street, Us</div>
                      </div>
                    </div>
                  </div>

                  <div className="col" style={{ marginTop: '0.5rem' }}>
                    <div className="row">
                      <div className="col-sm-2" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                        </svg></div>
                      <div className="col">
                        <div className="col"> +1 246 912 5491</div>
                        <div className="col"> +1 246 912 5491</div>
                      </div>
                    </div>
                  </div>

                  <div className="col" style={{ marginTop: '0.5rem' }}>
                    <div className="row">
                      <div className="col-sm-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
                          <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                        </svg></div>
                      <div className="col">
                        <div className="col"> support@inbuild.com</div>
                        <div className="col"> www.yourcompany.com</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3">
                  <p>SUBSCRIBE</p>
                  <hr className="hr" />
                  <div className="col"> <p>Lorem Ipsum is simply dummy text of the printing</p></div>
                  <div className="col">
                    <input type="email" class="form-control-sm" id="exampleFormControlInput1" placeholder="name@example.com" />
                    <button className="btn btn-sm btn-primary">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send-fill" viewBox="0 0 16 16">
                        <path d="M15.964.686a.5.5 0 0 0-.65-.65L.767 5.855H.766l-.452.18a.5.5 0 0 0-.082.887l.41.26.001.002 4.995 3.178 3.178 4.995.002.002.26.41a.5.5 0 0 0 .886-.083l6-15Zm-1.833 1.89L6.637 10.07l-.215-.338a.5.5 0 0 0-.154-.154l-.338-.215 7.494-7.494 1.178-.471-.47 1.178Z" />
                      </svg>
                    </button>
                  </div>
                  <div className="col icons " >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16">
                      <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                      <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" style={{background:'black-light'}}>
              <div className="row">
                <div className="col-6">
                  <p >©2021 All Rights Reserved</p> </div>
                <div className="col-4">
                  <p>Privacy Policy
                    | Terms of Use |
                    Our Support</p>
                </div>
                <div className="col-2">
                  <a href="#navbar" style={{textDecoration:'none'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section7>
      </main>


    </div>
  );
}

export default App;
