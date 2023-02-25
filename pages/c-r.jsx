import Navbar from '../components/Navbar';
import {useRef} from 'react';
import handleSubmit from '../components/functions';
import Head from 'next/head';

export default function CR({}) {
  const inquireRef = useRef(null);
  function handleClickInquiry(event) {
    event.preventDefault();
    inquireRef.current?.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <main>
      <div>
        {/*  This site was created in Webflow. https://www.webflow.com  */}
        {/*  Last Published: Tue Dec 13 2022 20:26:53 GMT+0000 (Coordinated Universal Time)  */}
        <Head>
          <meta charSet='utf-8' />
          <title>Carley and Riley</title>
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          <link href='images/favicon.ico' rel='shortcut icon' type='image/x-icon' />
          <meta content='width=device-width, initial-scale=1' name='viewport' />
        </Head>
        {/* [if lt IE 9]><![endif] */}
        <Navbar clickhandle={handleClickInquiry}></Navbar>
        <div className='fullgallerysection wf-section'>
          <div id='w-node-ace8ea72-528f-88cb-4198-dad4aa6ae5e0-ecd1e4f8' className='headingdiv'>
            <h1
              id='w-node-a014f17c-690b-09f5-2cc8-a508babee0dd-ecd1e4f8'
              className='fullgalleryheading'
            >
              Carley + Riley
            </h1>
          </div>
          <div
            id='w-node-f8c8ac85-ca65-df50-d3ef-a3840e8ed6f3-ecd1e4f8'
            className='fullgalleryleftflex'
          >
            <img
              src='images/CarleyandRileyWedding_0031-900x600.jpeg'
              loading='lazy'
              sizes='50vw'
              alt=''
              srcSet='images/CarleyandRileyWedding_0031-900x600-p-500.jpeg 500w, images/CarleyandRileyWedding_0031-900x600-p-800.jpeg 800w, images/CarleyandRileyWedding_0031-900x600.jpeg 900w'
            />
            <img
              src='images/CarleyandRileyWedding_0047.jpeg'
              loading='lazy'
              sizes='50vw'
              alt=''
              srcSet='images/CarleyandRileyWedding_0047-p-500.jpeg 500w, images/CarleyandRileyWedding_0047-p-800.jpeg 800w, images/CarleyandRileyWedding_0047.jpeg 800w'
            />
            <img
              src='images/CarleyandRileyWedding_0226-900x600.jpeg'
              loading='lazy'
              sizes='50vw'
              alt=''
              srcSet='images/CarleyandRileyWedding_0226-900x600-p-500.jpeg 500w, images/CarleyandRileyWedding_0226-900x600-p-800.jpeg 800w, images/CarleyandRileyWedding_0226-900x600.jpeg 900w'
            />
            <img
              src='images/CarleyandRileyWedding_0204-768x606.jpeg'
              loading='lazy'
              sizes='50vw'
              alt=''
              srcSet='images/CarleyandRileyWedding_0204-768x606-p-500.jpeg 500w, images/CarleyandRileyWedding_0204-768x606.jpeg 768w'
            />
            <img
              src='images/CarleyandRileyWedding_0016-768x1100.jpeg'
              loading='lazy'
              sizes='50vw'
              alt=''
              srcSet='images/CarleyandRileyWedding_0016-768x1100-p-500.jpeg 500w, images/CarleyandRileyWedding_0016-768x1100.jpeg 768w'
            />
            <img
              src='images/CarleyandRileyWedding_0356.jpeg'
              loading='lazy'
              sizes='50vw'
              alt=''
              srcSet='images/CarleyandRileyWedding_0356-p-500.jpeg 500w, images/CarleyandRileyWedding_0356.jpeg 769w'
            />
            <img
              src='images/CarleyandRileyWedding_0835-900x600.jpeg'
              loading='lazy'
              sizes='50vw'
              alt=''
              srcSet='images/CarleyandRileyWedding_0835-900x600-p-500.jpeg 500w, images/CarleyandRileyWedding_0835-900x600-p-800.jpeg 800w, images/CarleyandRileyWedding_0835-900x600.jpeg 900w'
            />
          </div>
          <div
            id='w-node-_7501dc93-0f67-d7ce-70b4-b4002f5ded29-ecd1e4f8'
            className='fullgalleryrightflex'
          >
            <img
              src='images/CarleyandRileyWedding_0041-768x1151.jpeg'
              loading='lazy'
              sizes='50vw'
              alt=''
              srcSet='images/CarleyandRileyWedding_0041-768x1151-p-500.jpeg 500w, images/CarleyandRileyWedding_0041-768x1151.jpeg 768w'
            />
            <img
              src='images/CarleyandRileyWedding_0002-768x1006.jpeg'
              loading='lazy'
              sizes='50vw'
              alt=''
              srcSet='images/CarleyandRileyWedding_0002-768x1006-p-500.jpeg 500w, images/CarleyandRileyWedding_0002-768x1006.jpeg 768w'
            />
            <img
              src='images/CarleyandRileyWedding_0635-805x600.jpeg'
              loading='lazy'
              sizes='50vw'
              srcSet='images/CarleyandRileyWedding_0635-805x600-p-500.jpeg 500w, images/CarleyandRileyWedding_0635-805x600-p-800.jpeg 800w, images/CarleyandRileyWedding_0635-805x600.jpeg 805w'
              alt=''
            />
            <img
              src='images/CarleyandRileyWedding_0319-900x600.jpeg'
              loading='lazy'
              sizes='50vw'
              srcSet='images/CarleyandRileyWedding_0319-900x600-p-500.jpeg 500w, images/CarleyandRileyWedding_0319-900x600-p-800.jpeg 800w, images/CarleyandRileyWedding_0319-900x600.jpeg 900w'
              alt=''
            />
            <img
              src='images/CarleyandRileyWedding_0368-900x600.jpeg'
              loading='lazy'
              sizes='50vw'
              srcSet='images/CarleyandRileyWedding_0368-900x600-p-500.jpeg 500w, images/CarleyandRileyWedding_0368-900x600-p-800.jpeg 800w, images/CarleyandRileyWedding_0368-900x600.jpeg 900w'
              alt=''
            />
            <img
              src='images/CarleyandRileyWedding_0417-900x600.jpeg'
              loading='lazy'
              sizes='50vw'
              srcSet='images/CarleyandRileyWedding_0417-900x600-p-500.jpeg 500w, images/CarleyandRileyWedding_0417-900x600-p-800.jpeg 800w, images/CarleyandRileyWedding_0417-900x600.jpeg 900w'
              alt=''
            />
          </div>
        </div>
        {/* [if lte IE 9]><![endif] */}
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
              Get a wedding with <span className='text-span'>no hassle</span>
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
    </main>
  );
}
