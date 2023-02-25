import {motion, useAnimation} from 'framer-motion';
import Link from 'next/link';
import Backdrop from './backdrop';
import {FC, MouseEventHandler} from 'react';

function navModalVar(delayTime) {
  return {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {ease: 'easeOut', duration: 0.5, delay: delayTime},
    },
    hoverOn: {
      scale: 1.1,
    },
    hoverOff: {
      scale: 1,
    },
    hidden: {opacity: 0, scale: 1.1},
  };
}

const dropIn = {
  hidden: {
    opacity: 0,
  },
  visible: {opacity: 100, transition: {ease: 'easeOut', duration: 0.5}},
};

interface NavBarProps {
  handleClose: MouseEventHandler;
  modalOpen: Boolean;
}

const NavbarModal: FC<NavBarProps> = ({handleClose, modalOpen}) => {
  const control = useAnimation();
  control.start('visible');
  if (modalOpen) {
    return (
      <>
        <Backdrop handleClose={handleClose}>
          <motion.div
            onClick={e => {
              e.stopPropagation;
            }}
            className='navbarModal'
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
          >
            <Link href={'./meet'} passHref className='rmLink'>
              <motion.h1
                animate={control}
                className='thin'
                variants={navModalVar(0.1)}
                initial={'hidden'}
                whileHover={'hoverOn'}
                onHoverEnd={() => {
                  control.start('hoverOff');
                }}
              >
                Meet Me
              </motion.h1>
            </Link>
            <Link href={'../sweetwords'} passHref className='rmLink'>
              <motion.h1
                animate={control}
                className='thin'
                variants={navModalVar(0.3)}
                initial={'hidden'}
                whileHover={'hoverOn'}
                onHoverEnd={() => {
                  control.start('hoverOff');
                }}
              >
                Sweet Words
              </motion.h1>
            </Link>
            <Link href={'../galleries'} passHref className='rmLink'>
              <motion.h1
                animate={control}
                className='thin'
                variants={navModalVar(0.5)}
                initial={'hidden'}
                whileHover={'hoverOn'}
                onHoverEnd={() => {
                  control.start('hoverOff');
                }}
              >
                Galleries
              </motion.h1>
            </Link>
          </motion.div>
        </Backdrop>
      </>
    );
  }
};

export default NavbarModal;
