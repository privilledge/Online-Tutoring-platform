import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Tuttor from "../assets/tutorr.avif";
import Banner from "../assets/illustration-1.svg";

const Student = () => {
  return (
    <>
      <Header />
      <div className="container col-xxl-8 px-4 py-2">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={Tuttor}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">For students.</h1>
            <p className="lead">
              We connect learners to exceptional tutors online, for free. We
              offer a vast range of programs that can be tailored to each
              student the tutors work with.Our goal is to help students not just
              understand a subject, but understand how to learn and develop
              their potential in the future.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------ */}

      {/* --------------------------------------------------------------------------------------------- */}
      <div className="px-4 py-5 my-5 student-form">
        <h3 className=" fw-bold">One student. One tutor. Every week</h3>
        <div className="row">
          <p className="font-weight-bold">
            Complete this form to connect with an enrollment advisor and learn
            about our academic tutoring programs.
          </p>
          <div className="row">
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div data-mdb-input-init className="form-outline ">
                <label className="form-label" htmlFor="form8Example1">
                  Firstname
                </label>
                <input
                  type="text"
                  id="form8Example1"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example2">
                  Lastname
                </label>
                <input
                  type="text"
                  id="form8Example2"
                  className="form-control"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example3">
                  Phone number
                </label>
                <input
                  type="number"
                  id="form8Example3"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example4">
                  Email
                </label>
                <input
                  type="email"
                  id="form8Example4"
                  className="form-control"
                />
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example5">
                  I need help:
                </label>
                <select className="form-control" id="form8Example5">
                  <option></option>
                </select>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example3">
                  First name
                </label>
                <select className="form-control" id="form8Example5">
                  <option></option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example4">
                  Last name
                </label>
                <select className="form-control" id="form8Example5">
                  <option></option>
                </select>
              </div>
            </div>
            <div className="col-lg-4 col-sm-12 col-md-6">
              <div data-mdb-input-init className="form-outline">
                <label className="form-label" htmlFor="form8Example5">
                  Email address
                </label>
                <select className="form-control" id="form8Example5">
                  <option></option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-check terms-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="defaultCheck1"
            />
            <label
              className="form-check-label termLabels"
              htmlFor="defaultCheck1"
            >
              By submitting my phone number and email address, I agree to be
              conducted regarding Royalty Tutorial Services, and agree to terms
              and conditions.
            </label>
          </div>
          <button type="button" className="btn btn-dark student-submit">
            Submit
          </button>
        </div>
      </div>
      {/* ------------------------------------------------------------------------------------------------------ */}
      <div className="subjects-container">
        <h1 className="display-5 fw-bold text-center">Subjects</h1>
        <div className="px-4 py-5 my-5 text-center shadow ">
          <div className="col-lg-12 mx-auto ">
            <div className="row subs">
              <div className=" col-lg-3 row1">
                <h4 className="subject-header">English</h4>
                <ul>
                  <li></li>
                </ul>
              </div>
              <div className=" col-lg-3">
                <h4 className="subject-header">Maths</h4>
              </div>
              <div className=" col-lg-3">
                <h4 className="subject-header">Business</h4>
                <ul>
                  <li></li>
                </ul>
              </div>
              <div className=" col-lg-3">
                <h4 className="subject-header">Others</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-5 my-5 text-center bg-light">
        <h1 className="display-6 fw-bold">Top rated tutors</h1>

        <div
          id="carouselMultiItemExample"
          className="carousel slide carousel-dark text-center"
          data-mdb-ride="carousel"
        >
          <div className="d-flex justify-content-center mb-4">
            <button
              className="carousel-control-prev position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample"
              data-mdb-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next position-relative"
              type="button"
              data-mdb-target="#carouselMultiItemExample"
              data-mdb-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="carousel-inner py-4">
            <div className="carousel-item active">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <img
                      className="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                      alt="avatar"
                      style={{ width: 150 + "px" }}
                    />
                    <h5 className="mb-3">Anna Deynah</h5>
                    <p>UX Designer</p>
                    <p className="text-muted">
                      <i className="fas fa-quote-left pe-2"></i>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                  </div>

                  <div className="col-lg-4 d-none d-lg-block">
                    <img
                      className="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                      alt="avatar"
                      style={{ width: 150 + "px" }}
                    />
                    <h5 className="mb-3">John Doe</h5>
                    <p>Web Developer</p>
                    <p className="text-muted">
                      <i className="fas fa-quote-left pe-2"></i>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid
                      commodi.
                    </p>
                  </div>

                  <div className="col-lg-4 d-none d-lg-block">
                    <img
                      className="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                      alt="avatar"
                      style={{ width: 150 + "px" }}
                    />
                    <h5 className="mb-3">Maria Kate</h5>
                    <p>Photographer</p>
                    <p className="text-muted">
                      <i className="fas fa-quote-left pe-2"></i>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <img
                      className="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(3).webp"
                      alt="avatar"
                      style={{ width: 150 + "px" }}
                    />
                    <h5 className="mb-3">John Doe</h5>
                    <p>UX Designer</p>
                    <p className="text-muted">
                      <i className="fas fa-quote-left pe-2"></i>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                  </div>

                  <div className="col-lg-4 d-none d-lg-block">
                    <img
                      className="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp"
                      alt="avatar"
                      style={{ width: 150 + "px" }}
                    />
                    <h5 className="mb-3">Alex Rey</h5>
                    <p>Web Developer</p>
                    <p className="text-muted">
                      <i className="fas fa-quote-left pe-2"></i>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid
                      commodi.
                    </p>
                  </div>

                  <div className="col-lg-4 d-none d-lg-block">
                    <img
                      className="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp"
                      alt="avatar"
                      style={{ width: 150 + "px" }}
                    />
                    <h5 className="mb-3">Maria Kate</h5>
                    <p>Photographer</p>
                    <p className="text-muted">
                      <i className="fas fa-quote-left pe-2"></i>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <img
                      className="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(6).webp"
                      alt="avatar"
                      style={{ width: 150 + "px" }}
                    />
                    <h5 className="mb-3">Anna Deynah</h5>
                    <p>UX Designer</p>
                    <p className="text-muted">
                      <i className="fas fa-quote-left pe-2"></i>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quod eos id officiis hic tenetur quae quaerat ad velit ab
                      hic tenetur.
                    </p>
                  </div>

                  <div className="col-lg-4 d-none d-lg-block">
                    <img
                      className="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(8).webp"
                      alt="avatar"
                      style={{ width: 150 + "px" }}
                    />
                    <h5 className="mb-3">John Doe</h5>
                    <p>Web Developer</p>
                    <p className="text-muted">
                      <i className="fas fa-quote-left pe-2"></i>
                      Ut enim ad minima veniam, quis nostrum exercitationem
                      ullam corporis suscipit laboriosam, nisi ut aliquid
                      commodi.
                    </p>
                  </div>

                  <div className="col-lg-4 d-none d-lg-block">
                    <img
                      className="rounded-circle shadow-1-strong mb-4"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(7).webp"
                      alt="avatar"
                      style={{ width: 150 + "px" }}
                    />
                    <h5 className="mb-3">Maria Kate</h5>
                    <p>Photographer</p>
                    <p className="text-muted">
                      <i className="fas fa-quote-left pe-2"></i>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Student;