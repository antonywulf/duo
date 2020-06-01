import React from 'react';

const AboutDUO = () => {
  return (
    <>
      <div className="container pt-5">
        <div className="jumbotron mt-2">
          <h1 className="display-4">Direct Universal Organizer</h1>
          <hr className="my-4" />
          <p className="lead">Helps organize your life easier</p>
          <p className="text-center">
            <a className="btn btn-primary btn-lg" href="#lol" role="button">
              Learn more
            </a>
          </p>
        </div>

        <hr id="lol" className="my-5" />

        <div className="container">
          <p className="lead text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur
            consequuntur cum dicta, dolorem enim, eos exercitationem hic illo nulla, perspiciatis
            quae quia quidem reiciendis rem repellendus sit ullam veniam.
          </p>

          <p id="lol" className="lead text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur
            consequuntur cum dicta, dolorem enim, eos exercitationem hic illo nulla, perspiciatis
            quae quia quidem reiciendis rem repellendus sit ullam veniam.
          </p>

          <p id="lol" className="lead text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores consectetur
            consequuntur cum dicta, dolorem enim, eos exercitationem hic illo nulla, perspiciatis
            quae quia quidem reiciendis rem repellendus sit ullam veniam.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutDUO;
