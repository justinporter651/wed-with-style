import Navbar from '../components/Navbar';
import {useRef} from 'react';
import handleSubmit from '../components/functions';
import Head from 'next/head';

export default function StyledShoot({}) {
  const inquireRef = useRef(null);
  function handleClickInquiry(event) {
    event.preventDefault();
    inquireRef.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <div>
      {/*  This site was created in Webflow. https://www.webflow.com  */}
      {/*  Last Published: Thu Dec 29 2022 22:31:39 GMT+0000 (Coordinated Universal Time)  */}
      <Head>
        <meta charSet='utf-8' />
        <title>Styled Shoot</title>
        <meta content='width=device-width, initial-scale=1' name='viewport' />
        <link href='images/favicon.ico' rel='shortcut icon' type='image/x-icon' />
        <meta content='width=device-width, initial-scale=1' name='viewport' />
      </Head>
      <Navbar clickhandle={handleClickInquiry}></Navbar>
      <div className='fullgallerysection wf-section'>
        <div id='w-node-ace8ea72-528f-88cb-4198-dad4aa6ae5e0-0a7fed4d' className='headingdiv'>
          <h1
            id='w-node-a014f17c-690b-09f5-2cc8-a508babee0dd-0a7fed4d'
            className='fullgalleryheading'
          >
            Styled Shoot
          </h1>
        </div>
        <div
          id='w-node-f8c8ac85-ca65-df50-d3ef-a3840e8ed6f3-0a7fed4d'
          className='fullgalleryleftflex'
        >
          <img
            src='images/g1.jpeg'
            loading='lazy'
            sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            srcSet='images/g1-p-500.jpeg 500w, images/g1-p-800.jpeg 800w, images/g1-p-1080.jpeg 1080w, images/g1-p-1600.jpeg 1600w, images/g1-p-2000.jpeg 2000w, images/g1-p-2600.jpeg 2600w, images/g1.jpeg 2667w'
            alt=''
          />
          <img
            src='images/g1p8.jpeg'
            loading='lazy'
            sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            srcSet='images/g1p8-p-500.jpeg 500w, images/g1p8-p-800.jpeg 800w, images/g1p8-p-1080.jpeg 1080w, images/g1p8-p-1600.jpeg 1600w, images/g1p8-p-2000.jpeg 2000w, images/g1p8-p-2600.jpeg 2600w, images/g1p8.jpeg 2667w'
            alt=''
          />
          <img
            src='images/g1_p24.jpeg'
            loading='lazy'
            sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            srcSet='images/g1_p24-p-500.jpeg 500w, images/g1_p24-p-800.jpeg 800w, images/g1_p24-p-1080.jpeg 1080w, images/g1_p24-p-1600.jpeg 1600w, images/g1_p24-p-2000.jpeg 2000w, images/g1_p24-p-2600.jpeg 2600w, images/g1_p24-p-3200.jpeg 3200w'
            alt=''
          />
          <img
            src='images/CarleyandRileyWedding_0204-768x606.jpeg'
            loading='lazy'
            sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            srcSet='images/CarleyandRileyWedding_0204-768x606-p-500.jpeg 500w, images/CarleyandRileyWedding_0204-768x606.jpeg 768w'
            alt=''
          />
          <img
            src='images/g1_p14.jpeg'
            loading='lazy'
            sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            srcSet='images/g1_p14-p-500.jpeg 500w, images/g1_p14-p-800.jpeg 800w, images/g1_p14-p-1080.jpeg 1080w, images/g1_p14-p-1600.jpeg 1600w, images/g1_p14-p-2000.jpeg 2000w, images/g1_p14-p-2600.jpeg 2600w, images/g1_p14.jpeg 2667w'
            alt=''
          />
        </div>
        <div
          id='w-node-_7501dc93-0f67-d7ce-70b4-b4002f5ded29-0a7fed4d'
          className='fullgalleryrightflex'
        >
          <img
            src='images/g1p6.jpeg'
            loading='lazy'
            sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            srcSet='images/g1p6-p-500.jpeg 500w, images/g1p6-p-800.jpeg 800w, images/g1p6-p-1080.jpeg 1080w, images/g1p6-p-1600.jpeg 1600w, images/g1p6-p-2000.jpeg 2000w, images/g1p6-p-2600.jpeg 2600w, images/g1p6.jpeg 2667w'
            alt=''
          />
          <img
            src='images/g1_p22.jpeg'
            loading='lazy'
            sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            srcSet='images/g1_p22-p-500.jpeg 500w, images/g1_p22-p-800.jpeg 800w, images/g1_p22-p-1080.jpeg 1080w, images/g1_p22-p-1600.jpeg 1600w, images/g1_p22-p-2000.jpeg 2000w, images/g1_p22-p-2600.jpeg 2600w, images/g1_p22-p-3200.jpeg 3200w'
            alt=''
          />
          <img
            src='images/g1_p16.jpeg'
            loading='lazy'
            sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            srcSet='images/g1_p16-p-500.jpeg 500w, images/g1_p16-p-800.jpeg 800w, images/g1_p16-p-1080.jpeg 1080w, images/g1_p16-p-1600.jpeg 1600w, images/g1_p16-p-2000.jpeg 2000w, images/g1_p16-p-2600.jpeg 2600w, images/g1_p16.jpeg 2667w'
            alt=''
          />
          <img
            src='images/g1_p12.jpeg'
            loading='lazy'
            sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            srcSet='images/g1_p12-p-500.jpeg 500w, images/g1_p12-p-800.jpeg 800w, images/g1_p12-p-1080.jpeg 1080w, images/g1_p12-p-1600.jpeg 1600w, images/g1_p12-p-2000.jpeg 2000w, images/g1_p12-p-2600.jpeg 2600w, images/g1_p12.jpeg 2667w'
            alt=''
          />
          <img
            src='images/g1_p20.jpeg'
            loading='lazy'
            sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            srcSet='images/g1_p20-p-500.jpeg 500w, images/g1_p20-p-800.jpeg 800w, images/g1_p20-p-1080.jpeg 1080w, images/g1_p20-p-1600.jpeg 1600w, images/g1_p20-p-2000.jpeg 2000w, images/g1_p20-p-2600.jpeg 2600w, images/g1_p20-p-3200.jpeg 3200w'
            alt=''
          />
        </div>
      </div>
      {/* [if lte IE 9]><![endif] */}
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
