import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Applications</h2>
          <p>
            Our product offers a wide range of practical applications in various industries. Whether you are in manufacturing, healthcare, logistics, or any other sector, our solution can be tailored to meet your specific needs. Streamline your processes, improve efficiency, and enhance productivity with our innovative technology. From real-time data analytics to intelligent automation, our solution empowers you to drive growth and achieve your business goals. Explore the possibilities and discover how our product/service can revolutionize your operations.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4">
                {" "}
                <i className={d.icon}></i>
                <div className="service-desc">
                  <h3>{d.name}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
