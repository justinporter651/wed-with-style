import Navbar from '../components/Navbar';
import {useRef} from 'react';
import handleSubmit from '../components/functions';
import Head from 'next/head';

export default function Meet({}) {
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
          <title>Meet Me</title>
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          <link href='images/favicon.ico' rel='shortcut icon' type='image/x-icon' />
        </Head>
        <Navbar Number={0} clickhandle={handleClickInquiry}></Navbar>
        <div className='section w-clearfix wf-section meet-section'>
          <div className='meetidiv w-clearfix'>
            <img
              src='images/Faraday-3.jpg'
              loading='lazy'
              id='w-node-c1f8316e-115d-e09b-0599-2c611bb23ef0-43c31b9e'
              sizes='100vw'
              alt=''
              srcSet='images/Faraday-3-p-500.jpg 500w, images/Faraday-3-p-800.jpg 800w, images/Faraday-3-p-1080.jpg 1080w, images/Faraday-3-p-1600.jpg 1600w, images/Faraday-3-p-2000.jpg 2000w, images/Faraday-3.jpg 2400w'
              className='image-2'
            />
            <div className='div-block-5 meetdivblock' />
            <div className='div-block-8' />
          </div>
          <div>
            <h1 className='heading-2'>Nice to Meet You!</h1>
            <p className='paragraph'>
              I’m Victoria Stankoski, owner, lead stylist and designer at Wed With Style. You can
              usually find me first thing in the morning at the gym. I’m definitely a morning person
              and not only does it help me physically take on a 15 hour (+) wedding day, working out
              does wonders for me mentally! Not to mention it balances out my sweet tooth and all
              that wedding cake I eat, but we don’t really need to talk about that! I love all
              things pretty and consider myself a girly girl. Living in a house with all boys,
              (including my Shih-Poo, Domino) designing and planning is a fun outlet for me.
              <br />
              <br />
              People often refer to me as the queen of organization. I’m known for my meticulous
              attention to detail, if it’s not organized when I get there, it will be before I
              leave! I love helping serve my brides with all of their planning and problem solving
              needs, whatever that entails. I am a certified mediator and that often comes in handy
              while organizing a wedding, brides and their families do not always see eye to eye
              during the wedding planning process!
              <br />
              <br />I work with brides all over the Southeastern Gulf Coast. I am so blessed to work
              with so many wonderful families and I have made some amazing friends during the
              process. I love that I get to help them make their big day the unforgettable wedding
              event that they have always dreamt of!
              <br />
              <br />
              Most recently, I have been working with other extremely talented wedding and event
              vendors and creating beautiful styled shoots as inspiration for current trends and
              design ideas for today’s weddings. Some of these collaborations can be found in
              publications such as, Gulf Coast Bride, The Southeastern Bride and Southern Style
              Weddings.
              <br />
              <br />
              Also, here’s my three rules for each day:
              <br />
              <br />
              <strong>1. Circuits, cardio and weights!</strong> These are the workouts I do in the
              morning, and they come in helpful when I’m moving things around while setting up
              weddings!
              <br />
              <strong>2. Massages are a must!</strong> I simply can not go without a good massage.
              It’s the ultimate escape from my sometimes (often) crazy schedule!
              <br />
              <span>
                <strong>3.</strong>
              </span>{' '}
              I agree with Mark Twain: “
              <strong>Too much of anything is bad, but too much champagne is just right!</strong>”
              Champagne should always be available, for whenever the occasion arises… like when
              there is champagne in the refrigerator after a long day!
            </p>
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
