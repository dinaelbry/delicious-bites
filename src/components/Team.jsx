import React from "react";

export default function Team() {
  return (
    <div className="team py-4 my-4">
      <div className="heading text-center">
        <h3>
          <span> Our </span> Team
        </h3>
      </div>

      <div className="boxes container mt-5 ">
        <div className="row text-center g-3">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="team-img">
                <img
                  src="./images/team2.avif"
                  alt=""
                  className="rounded-circle"
                  width={220}
                  height={220}
                />
              </div>
              <h5>Emily Chen</h5>
              <span>Founder & Head Chef</span>
              <p >
                Emily's passion for artisanal food led her to create Delicious
                Bites after years in the culinary industry.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="team-img">
                <img
                  src="./images/team3.avif"
                  alt=""
                  className="rounded-circle"
                  width={220}
                  height={220}
                />
              </div>
              <h5>Marcus Johnson</h5>
              <span>Operations Director</span>
              <p>
                Marcus ensures all our products are crafted to perfection and
                delivered fresh to your doorstep.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-4">
            <div className="box">
              <div className="team-img">
                <img
                  src="./images/team1.avif"
                  alt=""
                  className="rounded-circle"
                  width={220}
                  height={220}
                />
              </div>
              <h5>Sophia Rodriguez</h5>
              <span>Product Developer</span>
              <p>
                Sophia combines traditional recipes with innovative techniques
                to create our unique product line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
