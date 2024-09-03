import React from 'react';
import './Gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Gallery() {
    return (
        <div className="container-fluid my-4">
              <div className="col-12 text-center">
                    <div className="title-container">
                        <hr className="title-line" />
                            <h3 className="title-header mx-3">Work Gallery</h3>
                        <hr className="title-line" />
                    </div>
                </div>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="path-to-your-image1.jpg" className="d-block w-100" alt="First Slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First Slide</h5>
                            <p>Description of first slide</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="path-to-your-image2.jpg" className="d-block w-100" alt="Second Slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second Slide</h5>
                            <p>Description of second slide</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="path-to-your-image3.jpg" className="d-block w-100" alt="Third Slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third Slide</h5>
                            <p>Description of third slide</p>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Gallery;
