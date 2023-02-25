import Head from 'next/head';
import Navbar from '../components/Navbar';
import {useRouter} from 'next/router';
import {useRef} from 'react';
import handleSubmit from '../components/functions';

export default function Galleries({}) {
  const inquireRef = useRef(null);
  function handleClickInquiry(event) {
    event.preventDefault();
    inquireRef.current?.scrollIntoView({behavior: 'smooth'});
  }
  const router = useRouter();
  return (
    <main>
      <div>
        <Head>
          <meta charSet='utf-8' />
          <title>Galleries</title>
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          <link href='images/favicon.ico' rel='shortcut icon' type='image/x-icon' />
          <meta content='width=device-width, initial-scale=1' name='viewport' />
        </Head>
        <Navbar Number={1} clickhandle={handleClickInquiry}></Navbar>
        <div className='gallerysection'>
          <div
            className='gallerydiv g1div'
            onClick={() => {
              router.push('/c-r');
            }}
          >
            <div className='galleryshade' />
            <h1
              id='w-node-a5b364ca-a748-bdf2-98eb-117526dc5461-b7f4bfd1'
              className='galleryheading'
            >
              Carley and Riley
            </h1>
          </div>
          <div
            className='gallerydiv g2div'
            onClick={() => {
              router.push('/k-j');
            }}
          >
            <div className='galleryshade' />
            <h1
              id='w-node-_7229f33f-6942-5ed0-658a-0a50d9a6dc8a-b7f4bfd1'
              className='galleryheading'
            >
              Kim and Josh
            </h1>
          </div>
          <div
            className='gallerydiv g3div'
            onClick={() => {
              router.push('/h-j');
            }}
          >
            <div className='galleryshade' />
            <h1
              id='w-node-d3d7ce4b-6506-3c40-586f-56bf3924f6ac-b7f4bfd1'
              className='galleryheading'
            >
              Halie and Joe
            </h1>
          </div>
          <div
            className='gallerydiv g4div'
            onClick={() => {
              router.push('/mf-c');
            }}
          >
            <div className='galleryshade' />
            <h1
              id='w-node-f0cdd463-376a-bf26-4621-00b86946145b-b7f4bfd1'
              className='galleryheading'
            >
              Mary Francis and Craig
            </h1>
          </div>
          <div
            className='gallerydiv g5div'
            onClick={() => {
              router.push('/l-p');
            }}
          >
            <div className='galleryshade' />
            <h1
              id='w-node-c97a177b-afb9-d813-d0c7-e249bc0707be-b7f4bfd1'
              className='galleryheading'
            >
              Lisa and Preston
            </h1>
          </div>
          <div
            className='gallerydiv g6div'
            onClick={() => {
              router.push('/styledshoot');
            }}
          >
            <div className='galleryshade' />
            <h1
              id='w-node-_86e7f307-42c7-bcda-b0c6-3dfbb6ebeb9c-b7f4bfd1'
              className='galleryheading'
            >
              Styled Shoot
            </h1>
          </div>
          <div
            className='gallerydiv g7div'
            onClick={() => {
              router.push('/ml-h');
            }}
          >
            <div className='galleryshade' />
            <h1
              id='w-node-aaf74633-9ab4-765b-ce4f-ad3c1e35c5d4-b7f4bfd1'
              className='galleryheading'
            >
              Mary Lackey and Hill
            </h1>
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
