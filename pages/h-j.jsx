import Navbar from '../components/Navbar';
import {useRef} from 'react';
import handleSubmit from '../components/functions';
import Head from 'next/head';

export default function HJ({}) {
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
          <title>Haley and Joe</title>
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          <link href='images/favicon.ico' rel='shortcut icon' type='image/x-icon' />
          <meta content='width=device-width, initial-scale=1' name='viewport' />
        </Head>
        <Navbar clickhandle={handleClickInquiry}></Navbar>
        <div className='fullgallerysection wf-section'>
          <div id='w-node-ace8ea72-528f-88cb-4198-dad4aa6ae5e0-9875d88f' className='headingdiv'>
            <h1
              id='w-node-a014f17c-690b-09f5-2cc8-a508babee0dd-9875d88f'
              className='fullgalleryheading'
            >
              Halie + Joe
            </h1>
          </div>
          <div
            id='w-node-f8c8ac85-ca65-df50-d3ef-a3840e8ed6f3-9875d88f'
            className='fullgalleryleftflex'
          >
            <img
              src='images/Langlois-SneakPeek9.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek9-p-500.jpg 500w, images/Langlois-SneakPeek9-p-800.jpg 800w, images/Langlois-SneakPeek9-p-1080.jpg 1080w, images/Langlois-SneakPeek9-p-1600.jpg 1600w, images/Langlois-SneakPeek9-p-2000.jpg 2000w, images/Langlois-SneakPeek9-p-2600.jpg 2600w, images/Langlois-SneakPeek9-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek8.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek8-p-500.jpg 500w, images/Langlois-SneakPeek8-p-800.jpg 800w, images/Langlois-SneakPeek8-p-1080.jpg 1080w, images/Langlois-SneakPeek8-p-1600.jpg 1600w, images/Langlois-SneakPeek8-p-2000.jpg 2000w, images/Langlois-SneakPeek8-p-2600.jpg 2600w, images/Langlois-SneakPeek8-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek26.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek26-p-500.jpg 500w, images/Langlois-SneakPeek26-p-800.jpg 800w, images/Langlois-SneakPeek26-p-1080.jpg 1080w, images/Langlois-SneakPeek26-p-1600.jpg 1600w, images/Langlois-SneakPeek26-p-2000.jpg 2000w, images/Langlois-SneakPeek26-p-2600.jpg 2600w, images/Langlois-SneakPeek26-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek4.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek4-p-500.jpg 500w, images/Langlois-SneakPeek4-p-800.jpg 800w, images/Langlois-SneakPeek4-p-1080.jpg 1080w, images/Langlois-SneakPeek4-p-1600.jpg 1600w, images/Langlois-SneakPeek4-p-2000.jpg 2000w, images/Langlois-SneakPeek4-p-2600.jpg 2600w, images/Langlois-SneakPeek4-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek28.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek28-p-500.jpg 500w, images/Langlois-SneakPeek28-p-800.jpg 800w, images/Langlois-SneakPeek28-p-1080.jpg 1080w, images/Langlois-SneakPeek28-p-1600.jpg 1600w, images/Langlois-SneakPeek28-p-2000.jpg 2000w, images/Langlois-SneakPeek28-p-2600.jpg 2600w, images/Langlois-SneakPeek28-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek12.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek12-p-500.jpg 500w, images/Langlois-SneakPeek12-p-800.jpg 800w, images/Langlois-SneakPeek12-p-1080.jpg 1080w, images/Langlois-SneakPeek12-p-1600.jpg 1600w, images/Langlois-SneakPeek12-p-2000.jpg 2000w, images/Langlois-SneakPeek12-p-2600.jpg 2600w, images/Langlois-SneakPeek12-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek23.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek23-p-500.jpg 500w, images/Langlois-SneakPeek23-p-800.jpg 800w, images/Langlois-SneakPeek23-p-1080.jpg 1080w, images/Langlois-SneakPeek23-p-1600.jpg 1600w, images/Langlois-SneakPeek23-p-2000.jpg 2000w, images/Langlois-SneakPeek23-p-2600.jpg 2600w, images/Langlois-SneakPeek23-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek20.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek20-p-500.jpg 500w, images/Langlois-SneakPeek20-p-800.jpg 800w, images/Langlois-SneakPeek20-p-1080.jpg 1080w, images/Langlois-SneakPeek20-p-1600.jpg 1600w, images/Langlois-SneakPeek20-p-2000.jpg 2000w, images/Langlois-SneakPeek20-p-2600.jpg 2600w, images/Langlois-SneakPeek20-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
          </div>
          <div
            id='w-node-_7501dc93-0f67-d7ce-70b4-b4002f5ded29-9875d88f'
            className='fullgalleryrightflex'
          >
            <img
              src='images/Langlois-SneakPeek11.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek11-p-500.jpg 500w, images/Langlois-SneakPeek11-p-800.jpg 800w, images/Langlois-SneakPeek11-p-1080.jpg 1080w, images/Langlois-SneakPeek11-p-1600.jpg 1600w, images/Langlois-SneakPeek11-p-2000.jpg 2000w, images/Langlois-SneakPeek11-p-2600.jpg 2600w, images/Langlois-SneakPeek11-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek10.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek10-p-500.jpg 500w, images/Langlois-SneakPeek10-p-800.jpg 800w, images/Langlois-SneakPeek10-p-1080.jpg 1080w, images/Langlois-SneakPeek10-p-1600.jpg 1600w, images/Langlois-SneakPeek10-p-2000.jpg 2000w, images/Langlois-SneakPeek10-p-2600.jpg 2600w, images/Langlois-SneakPeek10-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek5.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek5-p-500.jpg 500w, images/Langlois-SneakPeek5-p-800.jpg 800w, images/Langlois-SneakPeek5-p-1080.jpg 1080w, images/Langlois-SneakPeek5-p-1600.jpg 1600w, images/Langlois-SneakPeek5-p-2000.jpg 2000w, images/Langlois-SneakPeek5-p-2600.jpg 2600w, images/Langlois-SneakPeek5-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek1.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek1-p-500.jpg 500w, images/Langlois-SneakPeek1-p-800.jpg 800w, images/Langlois-SneakPeek1-p-1080.jpg 1080w, images/Langlois-SneakPeek1-p-1600.jpg 1600w, images/Langlois-SneakPeek1-p-2000.jpg 2000w, images/Langlois-SneakPeek1-p-2600.jpg 2600w, images/Langlois-SneakPeek1-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek2.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek2-p-500.jpg 500w, images/Langlois-SneakPeek2-p-800.jpg 800w, images/Langlois-SneakPeek2-p-1080.jpg 1080w, images/Langlois-SneakPeek2-p-1600.jpg 1600w, images/Langlois-SneakPeek2-p-2000.jpg 2000w, images/Langlois-SneakPeek2-p-2600.jpg 2600w, images/Langlois-SneakPeek2-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek7.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek7-p-500.jpg 500w, images/Langlois-SneakPeek7-p-800.jpg 800w, images/Langlois-SneakPeek7-p-1080.jpg 1080w, images/Langlois-SneakPeek7-p-1600.jpg 1600w, images/Langlois-SneakPeek7-p-2000.jpg 2000w, images/Langlois-SneakPeek7-p-2600.jpg 2600w, images/Langlois-SneakPeek7-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek17.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek17-p-500.jpg 500w, images/Langlois-SneakPeek17-p-800.jpg 800w, images/Langlois-SneakPeek17-p-1080.jpg 1080w, images/Langlois-SneakPeek17-p-1600.jpg 1600w, images/Langlois-SneakPeek17-p-2000.jpg 2000w, images/Langlois-SneakPeek17-p-2600.jpg 2600w, images/Langlois-SneakPeek17-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
            />
            <img
              src='images/Langlois-SneakPeek22.jpg'
              loading='lazy'
              alt=''
              srcSet='images/Langlois-SneakPeek22-p-500.jpg 500w, images/Langlois-SneakPeek22-p-800.jpg 800w, images/Langlois-SneakPeek22-p-1080.jpg 1080w, images/Langlois-SneakPeek22-p-1600.jpg 1600w, images/Langlois-SneakPeek22-p-2000.jpg 2000w, images/Langlois-SneakPeek22-p-2600.jpg 2600w, images/Langlois-SneakPeek22-p-3200.jpg 3200w'
              sizes='(max-width: 479px) 100vw, (max-width: 767px) 50vw, 300px'
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
    </main>
  );
}
