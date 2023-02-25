import Head from 'next/head';
import {motion, useAnimation} from 'framer-motion';
import {useEffect} from 'react';
import Navbar from '../components/Navbar';
import {useInView} from 'react-intersection-observer';
import Link from 'next/link';
import {useRef} from 'react';
import handleSubmit from '../components/functions';

const pageVariants = {
  visible: {
    transition: {staggerChildren: 0.15, duration: 2},
  },
  hidden: {},
};

export function textVariants(delayTime) {
  return {
    visible: {
      opacity: 1,
      scale: 1,
      transition: {ease: 'easeOut', duration: 0.5, delay: delayTime},
    },
    hoverOff: {
      scale: 1,
      transition: {ease: 'easeOut', duration: 0.5, delay: 0},
    },
    hoverOn: {
      scale: 1.2,
      transition: {ease: 'easeOut', duration: 0.2},
    },
    hidden: {opacity: 0, scale: 1.1},
  };
}

const whiteVariants = {
  hidden: {},
  visible: {},
};

const orangeVariants = {
  hidden: {x: -20, y: 50},
  visible: {x: 0, y: 0, transition: {ease: 'easeOut', duration: 0.9, delay: 0}},
};

const yellowVariants = {
  hidden: {x: 50, y: 70},
  visible: {x: 0, y: 0, transition: {ease: 'easeOut', duration: 0.9, delay: 0}},
};

const flowerVariants = {
  hidden: {y: -20, opacity: 80},
  visible: {y: 0, opacity: 100, transition: {ease: 'easeOut', duration: 0.9, delay: 0}},
};

const childVariants = {
  visible: {
    opacity: 100,
    transition: {ease: 'easeInOut', duration: 0.8},
  },
  hidden: {opacity: 0},
};

export default function Home() {
  const b1control = useAnimation();
  const b2control = useAnimation();
  const b3control = useAnimation();
  const b4control = useAnimation();

  const [b1, b1Visible] = useInView({threshold: 0.2});
  const [b2, b2Visible] = useInView({threshold: 0.2});
  const [b3, b3Visible] = useInView({threshold: 0.2});
  const [b4, b4Visible] = useInView({threshold: 0.2});

  const inquireRef = useRef(null);
  const seeRef = useRef(null);

  function handleClickInquiry(event) {
    event.preventDefault();
    inquireRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  function handleSeeInquiry(event) {
    event.preventDefault();
    seeRef.current?.scrollIntoView({behavior: 'smooth'});
  }

  useEffect(() => {
    if (b1Visible) {
      b1control.start('visible');
      console.log('visible');
    }
  }, [b1Visible, b1control]);

  useEffect(() => {
    if (b2Visible) {
      b2control.start('visible');
    }
  }, [b2Visible, b2control]);

  useEffect(() => {
    if (b3Visible) {
      b3control.start('visible');
    }
  }, [b3Visible, b3control]);

  useEffect(() => {
    if (b4Visible) {
      b4control.start('visible');
    }
  }, [b4Visible, b4control]);

  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <title>Wed With Style</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link href='images/favicon.ico' rel='shortcut icon' type='image/x-icon' />
      </Head>
      <Navbar Number={1} clickhandle={handleClickInquiry}></Navbar>
      <div className='hero wf-section'>
        <div className='div-block' />
        <div className='div-block-2' />
        <motion.div
          id='w-node-f2bc15a1-2799-bc00-d54e-d750135b8bcd-f4176a24'
          className='herocontent'
          ref={b1}
          initial='hidden'
          animate={b1control}
          variants={pageVariants}
        >
          <motion.div
            id='w-node-f5740b6d-221f-18b1-8136-8ef1e949b14e-f4176a24'
            className='text-block'
            variants={childVariants}
          >
            <span className='goldtext'>&#34;She left no doubt</span> in our minds that we made the
            right decision&#34;
          </motion.div>
          <motion.div className='herobuttons' variants={pageVariants}>
            <motion.p
              id='w-node-_89033218-27ba-58dc-92a7-aaac1fda3d74-f4176a24'
              className='herobutton w-button'
              variants={childVariants}
              onClick={handleSeeInquiry}
            >
              See More
            </motion.p>
            <motion.a
              id='w-node-_49e0a3ca-f22d-388f-c704-ef1a5054f097-f4176a24'
              className='herobutton w-button'
              onClick={handleClickInquiry}
              variants={childVariants}
            >
              Inquire Now
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      <div ref={seeRef} className='vickibenefits wf-section'>
        <div id='w-node-e0569252-0f42-aa5e-d8c6-6247d79b44b3-f4176a24' className='fadedgradient' />
        <motion.div
          className='benefitsblock'
          ref={b2}
          animate={b2control}
          initial='hidden'
          variants={childVariants}
        >
          <h1 id='w-node-_3ee960b0-0bc8-17b0-0c90-cb1a1cf72a86-f4176a24' className='benefitstitle'>
            Spend your time worrying about the special things.
            <br />
            <br />
            Get over 300 successful weddings of experience on your side
          </h1>
        </motion.div>
        <motion.div
          id='w-node-_3327fe62-88c4-b065-37d2-59f56ea2de0d-f4176a24'
          className='centeringgrid'
        >
          <motion.div
            className='styledp'
            animate={b2control}
            initial='hidden'
            variants={pageVariants}
          >
            <motion.div className='whitecircle' variants={whiteVariants} />
            <motion.div className='orangecircle' variants={orangeVariants} />
            <motion.div className='yellowcircle' variants={yellowVariants} />
            <motion.div className='styledppic' variants={childVariants} />
            <motion.div
              id='w-node-dc342154-3438-bb91-228b-2e989115becb-f4176a24'
              className='flower'
              variants={childVariants}
            />
            <motion.div
              id='w-node-e6a28215-18bb-496d-2f6f-70bede3258e1-f4176a24'
              className='flower rotated'
              variants={childVariants}
            />
            <motion.div className='flowerdiv' variants={flowerVariants} />
          </motion.div>
        </motion.div>
      </div>
      <div className='planssection wf-section'>
        <img
          src='images/kim-josh-Getting-Ready-0020.jpg'
          loading='lazy'
          id='w-node-_1070b7d5-025c-8c2f-ea00-e98491f831d4-f4176a24'
          sizes='(max-width: 991px) 100vw, 928.765625px'
          srcSet='images/kim-josh-Getting-Ready-0020-p-500.jpg 500w, images/kim-josh-Getting-Ready-0020-p-800.jpg 800w, images/kim-josh-Getting-Ready-0020.jpg 956w'
          className='image'
          alt=''
        />
        <h1 id='w-node-f885df6d-5d94-8099-8157-b0426e27afcb-f4176a24' className='plantitle'>
          How easy your best day can be:
        </h1>
        <h1 id='w-node-c3538365-d5c5-d93d-a80e-4a56b6fb8ad8-f4176a24' className='tailoredplans'>
          <span className='ipbold'>Inquire</span> about your plan
        </h1>
        <h1 id='w-node-baa203ee-6702-1e49-707d-b65b44b4ad09-f4176a24' className='tailoredplans'>
          <span className='ipbold'>Decide</span> on the right plan for you and confirm your date
        </h1>
        <h1 id='w-node-ab0c33bb-670c-7c61-a658-3ec665156923-f4176a24' className='tailoredplans'>
          <span className='ipbold'>We guide</span> you through your ideal wedding day
        </h1>
        <h1 id='w-node-_9fb75bc2-03f3-d811-4836-297a19343ffa-f4176a24' className='tailoredplans'>
          <span className='ipbold'>Rest easy, and enjoy</span> a great day!
        </h1>
        <div id='w-node-_325b1c79-02d1-e213-ddfd-e621e59f5f43-f4176a24' className='ipbuttonsdiv'>
          <a
            id='w-node-_14335927-c9e6-937f-2478-c5b5df09a67b-f4176a24'
            className='inquirebutton w-button'
            onClick={handleClickInquiry}
          >
            Inquire Now
          </a>
          <Link href={'/sweetwords'} passHref className='redbutton w-button'>
            See Testimonies
          </Link>
        </div>
      </div>
      <div className='testimonies wf-section'>
        <h1 className='heading'>Testimonies</h1>
        <blockquote className='testimonyblockquote'>
          We had a wonderful wedding at the Grand Hotel and Vicki made it all run like clockwork! It
          was beautiful and calm because of the attention to detail and the wonderful suggestions
          make by Vicki and her assistant Debbie{' '}
          <Link href='/sweetwords' className='rmLink'>
            <strong className='cursor'>...Read more</strong>
          </Link>
          <br />
          <br />- <span className='ipbold'>Ellen Wood</span>
        </blockquote>
        <blockquote className='testimonyblockquote'>
          A hurricane came through on the exact day of my daughter&#39;s wedding, changing nearly
          every aspect of Vicki&#39;s meticulously coordinated plan, as well as the availability of
          vendors and locations. But Vicki was the essence of calm and rearranged it all in no time
          <Link href='/sweetwords' className='rmLink'>
            <strong className='cursor'>... Read more</strong>
          </Link>
          <br />
          <br />- <span className='ipbold'>Jane Abernathy</span>
        </blockquote>
        <blockquote className='testimonyblockquote'>
          &#34;Wow, she’s really great,&#34; was our family’s echoed response following any time we
          spent with Vicki. We liked Vicki the moment we met her. A perfect balance of Southern
          warmth and cool head, she left no doubt in our minds that we made the right decision to
          work with a wedding planner
          <Link href='/sweetwords' className='rmLink'>
            <strong className='cursor'>... Read more</strong>
          </Link>
          <br />
          <br />- <span className='ipbold'>Erin O’Connor</span>
        </blockquote>
      </div>
      <div className='footer footerwhite wf-section'>
        <div id='w-node-_95dd2333-a32e-1e41-85fd-c8675be079e3-f4176a24' className='w-form'>
          <form
            id='email-form'
            name='email-form'
            data-name='Email Form'
            onSubmit={handleSubmit}
            className='form'
            ref={inquireRef}
          >
            <h1 id='w-node-_95dd2333-a32e-1e41-85fd-c8675be079e5-f4176a24' className='heading-3'>
              Get a wedding with <span className='text-span'>peace of mind</span>
            </h1>
            <div>
              <label htmlFor='name' className='fieldlabel'>
                Your Name
              </label>
              <input
                type='text'
                className='text-field w-input'
                maxLength={256}
                name='name'
                id='name'
              />
              <label htmlFor='email' className='fieldlabel'>
                Significant Other&#39;s Name
              </label>
              <input
                type='text'
                className='text-field-1 w-input'
                maxLength={256}
                name='SOName'
                id='SOname'
                required
              />
              <label htmlFor='email' className='fieldlabel'>
                Email Address
              </label>
              <input
                type='email'
                className='text-field-1 w-input'
                maxLength={256}
                name='email'
                id='email'
                required
              />
              <label htmlFor='date' className='fieldlabel'>
                Wedding Date
              </label>
              <input
                type='date'
                className='text-field-1 w-input'
                maxLength={256}
                name='Date'
                id='date'
                required
              />
            </div>
            <div>
              <label htmlFor='referral' className='fieldlabel'>
                How did you hear about us?
              </label>
              <input
                type='text'
                className='text-field-1 w-input'
                maxLength={256}
                name='referral'
                id='referral'
              />
              <label htmlFor='thoughts' className='fieldlabel'>
                Other thoughts
              </label>
              <input
                type='text'
                className='text-field-1 w-input'
                maxLength={256}
                name='thoughts'
                id='thoughts'
              />
              <input
                type='submit'
                defaultValue='Inquire'
                id='w-node-_95dd2333-a32e-1e41-85fd-c8675be079fe-f4176a24'
                className='submit-button w-button'
              />
            </div>
          </form>
          <div className='w-form-done' id='w-form-success'>
            <div>
              Thank you! Your submission has been received. I will get back with you as soon as
              possible!
            </div>
          </div>
          <div className='w-form-fail' id='w-form-fail'>
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
        <div id='w-node-_3aaaf85f-2aa8-5c71-caf9-28e41badcbf1-f4176a24' className='div-block-9'>
          <img
            src='images/Faraday-3.jpg'
            loading='lazy'
            id='w-node-_95dd2333-a32e-1e41-85fd-c8675be079e2-f4176a24'
            sizes='(max-width: 767px) 100vw, (max-width: 9600px) 25vw, 2400px'
            srcSet='images/Faraday-3-p-500.jpg 500w, images/Faraday-3-p-800.jpg 800w, images/Faraday-3-p-1080.jpg 1080w, images/Faraday-3-p-1600.jpg 1600w, images/Faraday-3-p-2000.jpg 2000w, images/Faraday-3.jpg 2400w'
            className='footeri'
            alt=''
          />
          <div className='div-block-10' />
          <div className='div-block-11' />
        </div>
      </div>
    </div>
  );
}
