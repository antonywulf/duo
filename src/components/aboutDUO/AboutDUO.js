import React from 'react';
import { motion } from 'framer-motion';

import styles from './AboutDUO.module.scss';
import { HandThumbsUp } from '../ui/svg/svg';

const AboutDUO = () => {
  return (
    <>
      <div className={`container pt-3 px-0 ${styles.block}`}>
        <div className={`jumbotron mt-4 px-4 pb-0 ${styles.bgJumbotron}`}>
          <h1 style={{ fontWeight: 450 }} className={`display-4 ${styles.h1}`}>
            <motion.div
              className={`d-inline-block ${styles.red}`}
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'tween', delay: 0.2, duration: 1 }}
            >
              D
            </motion.div>
            irect
            <br />
            <motion.div
              className={`d-inline-block ${styles.blue}`}
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'tween', delay: 0.3, duration: 1 }}
            >
              U
            </motion.div>
            niversal
            <br />
            <motion.div
              className={`d-inline-block ${styles.green}`}
              initial={{ x: '-100vw' }}
              animate={{ x: 0 }}
              transition={{ type: 'tween', delay: 0.4, duration: 1 }}
            >
              O
            </motion.div>
            rganizer
          </h1>
          <p className={`lead text-uppercase my-4 ${styles.slogan}`}>
            Helps organize your life easier <HandThumbsUp />
          </p>
        </div>

        <div className="px-3">
          <hr style={{ backgroundColor: '#999ea3' }} className="mb-0" />
          <hr style={{ backgroundColor: '#999ea3' }} className="mt-1 mb-5" />
        </div>

        <div className={`container ${styles.content}`}>
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

          <p id="lol" className="lead text-center mb-0">
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
