import "./Affiliation.css";
const Affiliation = () => {
  return (
    <>
      {/* <div className="row d-flex justify-content-center mt-5">
        <h1 align="center">
          Certificates and Affiliations
          <hr />
        </h1>

        <div className="col-md-6">
          <div
            id="myCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            align="center"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                {" "}
                <img
                  src="https://i.imgur.com/bV1xmG5.jpg"
                  className="rounded"
                />{" "}
              </div>
              <div className="carousel-item">
                {" "}
                <img
                  src="https://i.imgur.com/vgMi4nw.jpg"
                  className="rounded"
                />{" "}
              </div>
              <div className="carousel-item">
                {" "}
                <img
                  src="https://i.imgur.com/vgMi4nw.jpg"
                  className="rounded"
                />{" "}
              </div>
              <div className="carousel-item">
                {" "}
                <img
                  src="https://i.imgur.com/vgMi4nw.jpg"
                  className="rounded"
                />{" "}
              </div>
              <div className="carousel-item">
                {" "}
                <img
                  src="https://i.imgur.com/hRlGe10.jpg"
                  className="rounded"
                />{" "}
              </div>
               <div className="carousel-item">
                {" "}
                <img
                  src="https://i.imgur.com/hRlGe10.jpg"
                  className="rounded"
                />{" "}
              </div>
            </div>
            <ol className="carousel-indicators list-inline">
              <li className="list-inline-item active">
                {" "}
                <a
                  id="carousel-selector-0"
                  className="selected"
                  data-bs-slide-to="0"
                  data-bs-target="#myCarousel"
                >
                  {" "}
                  <img
                    src="https://i.imgur.com/bV1xmG5.jpg"
                    className="img-fluid rounded"
                  />{" "}
                </a>{" "}
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  id="carousel-selector-1"
                  data-bs-slide-to="1"
                  data-bs-target="#myCarousel"
                >
                  {" "}
                  <img
                    src="https://i.imgur.com/vgMi4nw.jpg"
                    className="img-fluid rounded"
                  />{" "}
                </a>{" "}
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  id="carousel-selector-2"
                  data-bs-slide-to="2"
                  data-bs-target="#myCarousel"
                >
                  {" "}
                  <img
                    src="https://i.imgur.com/hRlGe10.jpg"
                    className="img-fluid rounded"
                  />{" "}
                </a>{" "}
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  id="carousel-selector-2"
                  data-bs-slide-to="3"
                  data-bs-target="#myCarousel"
                >
                  {" "}
                  <img
                    src="https://i.imgur.com/hRlGe10.jpg"
                    className="img-fluid rounded"
                  />{" "}
                </a>{" "}
              </li>
              <li className="list-inline-item">
                {" "}
                <a
                  id="carousel-selector-2"
                  data-bs-slide-to="2"
                  data-bs-target="#myCarousel"
                >
                  {" "}
                  <img
                    src="https://i.imgur.com/hRlGe10.jpg"
                    class="img-fluid rounded"
                  />{" "}
                </a>{" "}
              </li>
              <li class="list-inline-item">
                {" "}
                <a
                  id="carousel-selector-2"
                  data-bs-slide-to="2"
                  data-bs-target="#myCarousel"
                >
                  {" "}
                  <img
                    src="https://i.imgur.com/hRlGe10.jpg"
                    class="img-fluid rounded"
                  />{" "}
                </a>{" "}
              </li>
              <li class="list-inline-item">
                {" "}
                <a
                  id="carousel-selector-2"
                  data-bs-slide-to="2"
                  data-bs-target="#myCarousel"
                >
                  {" "}
                  <img
                    src="https://i.imgur.com/hRlGe10.jpg"
                    class="img-fluid rounded"
                  />{" "}
                </a>{" "}
              </li>
            </ol>
          </div>
        </div>
      </div> */}
      <div className="flex gap-5\ d-flex justify-content-center ">
        <h3>
          Badges that I earned 
        </h3>
      </div>
          <hr />
      <span className=" d-flex justify-content-center">
        <img
          alt="badgeimg1"
          src={require("../../images/badges/1.png")}
          className="m-1 badgeimg "
        />
        <img
          alt="badgeimg1"
          src={require("../../images/badges/2.png")}
          className="m-1  badgeimg"
        />
        <img
          alt="badgeimg1"
          src={require("../../images/badges/3.png")}
          className="m-1 badgeimg"
        />
        <img
          alt="badgeimg1"
          src={require("../../images/badges/4.png")}
          className="m-1 badgeimg"
        />
        <img
          alt="badgeimg1"
          src={require("../../images/badges/5.png")}
          className="m-1 badgeimg"
        />
      </span>
      <br />
      <br />
      <br />
    </>
  );
};

export default Affiliation;
