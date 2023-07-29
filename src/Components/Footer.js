function Footer (){
    return (
        <footer className="text-center text-lg-start text-white footer-bg footer">

            <section className="d-flex justify-content-between p-4 social-media-bg">
            <div className="me-5">
                <span>Get connected with us on social networks:</span>
            </div>

            <div>
                <a href="" className="text-white me-4"
                ><i className="fab fa-facebook-f"></i
                ></a>
                <a href="" className="text-white me-4"><i className="fab fa-twitter"></i></a>
                <a href="" className="text-white me-4"><i className="fab fa-google"></i></a>
                <a href="" className="text-white me-4"
                ><i className="fab fa-instagram"></i
                ></a>
                <a href="" className="text-white me-4"><i className="fab fa-linkedin"></i></a>
                <a href="" className="text-white me-4"><i className="fab fa-github"></i></a>
            </div>
            </section>

            <section>
            <div className="container text-center text-md-start mt-5">
                <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                    <h6 className="text-uppercase fw-bold">Droid Empire</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto custom-hr" />
                    <p>"You not find better deal anywhere else, I think." ―Watto</p>
                </div>


                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Products</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto custom-hr" />
                    <p><a href="#!" className="text-white custom-link">Bot Battlr</a></p>
                    <p><a href="#!" className="text-white custom-link">Battle Droids</a></p>
                    <p><a href="#!" className="text-white custom-link">Speeders</a></p>
                    <p>
                    <a href="#!" className="text-white custom-link"
                        >Battle Ships</a
                    >
                    </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto custom-hr" />
                    <p>
                    <a href="#!" className="text-white custom-link">Your Account</a>
                    </p>
                    <p>
                    <a href="#!" className="text-white custom-link"
                        >Become an Affiliate</a
                    >
                    </p>
                    <p>
                    <a href="#!" className="text-white custom-link">Shipping Rates</a>
                    </p>
                    <p><a href="#!" className="text-white custom-link">Help</a></p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold">Contact</h6>
                    <hr className="mb-4 mt-0 d-inline-block mx-auto custom-hr" />
                    <p>
                    <i className="fa-solid fa-location-dot mr-3 custom-contact"></i>
                    10012 Aterpol, Londres Nova, Mars
                    </p>
                    <p>
                    <i className="fas fa-home mr-3 custom-contact"></i> New York, NY
                    10012, US
                    </p>
                    <p>
                    <i className="fas fa-envelope mr-3 custom-contact"></i>
                    info@droidempire.space
                    </p>
                    <p>
                    <i className="fas fa-phone mr-3 custom-contact"></i> + 01 234 567 88
                    </p>
                    <p>
                    <i className="fas fa-print mr-3 custom-contact"></i> + 01 234 567 89
                    </p>
                </div>

                </div>
            </div>
            </section>

            <div className="text-center p-3 footer-copyright-bg">
            © 2023 Copyright:
            <a className="text-white" href="https://mdbootstrap.com/"
                >droidempire.space</a
            >
            </div>

      </footer>
    )
}


export default Footer;