import Navbar from '../components/Navbar';
import {useRef} from 'react';
import handleSubmit from '../components/functions';
import Head from 'next/head';

export default function SweetWords({}) {
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
          <title>Sweet Words</title>
          <meta content='width=device-width, initial-scale=1' name='viewport' />
          <link href='images/favicon.ico' rel='shortcut icon' type='image/x-icon' />
          <meta content='width=device-width, initial-scale=1' name='viewport' />
        </Head>
        <Navbar Number={1} clickhandle={handleClickInquiry}></Navbar>
        <div className='testimonies wf-section'>
          <h1 className='heading'>Sweet Words</h1>
          <blockquote className='testimonyblockquote'>
            We had a wonderful wedding at the Grand Hotel and Vicki made it all run like clockwork!
            It was beautiful and calm because of the attention to detail and the wonderful
            suggestions make by Vicki and her assistant Debbie. Vicki was with us every step of the
            way and even steered us to ways to save money! She was in constant contact the entire
            time leading up to the wedding and we cannot say enough good things about our experience
            and Vicki&#39;s professionalism
            <br />
            <br />- <span className='ipbold'>Ellen Wood</span>
          </blockquote>
          <blockquote className='testimonyblockquote'>
            A hurricane came through on the exact day of my daughters wedding, changing nearly every
            aspect of Vicki&#39;s meticulously coordinated plan, as well as the availability of
            vendors and locations. But Vicki was the essence of calm and rearranged it all in no
            time. Her network of contacts was crucial to moving locations and filling in for vendors
            who could no longer travel. <br />
            <br />
            We had a fantastic rehearsal dinner and gorgeous ceremony. My only regret is not booking
            her to handle the whole process from the very start! She was an absolute pleasure to
            work with and even for snag-free wedding planning (if there is such a thing), she makes
            the process so simple. Can&#39;t recommend her enough!
            <br />
            <br />- <span className='ipbold'>Jane Abernathy</span>
          </blockquote>
          <blockquote className='testimonyblockquote'>
            Vicki is amazing. She truly made the day worry free by making sure all of our ideas came
            to life. She is very organized and is available through your planning anytime you need
            assistance. From the first meeting to heading off on our wedding night every detail of
            the timeline was taken care of by Vicki. She truly takes pride in the work she does and
            cares about the wedding and clients as if they were family. Whether you are looking for
            someone with great communication, organizational skills, creativity, planning and
            budgeting she does it all. She was such a blessing to have on out special day.
            <br />
            <br />- <span className='ipbold'>Lauren Fuqua</span>
          </blockquote>
          <blockquote className='testimonyblockquote'>
            &#34;Wow, she’s really great,&#34; was our family’s echoed response following any time
            we spent with Vicki. We liked Vicki the moment we met her. A perfect balance of Southern
            warmth and cool head, she left no doubt in our minds that we made the right decision to
            work with a wedding planner. While we were married in Fairhope, my husband and I did the
            majority of our planning from our home in Austin, but Vicki’s responsiveness and
            cheerful flexibility bridged those 900 miles just fine. She asked smart questions,
            remembered small details, listened without judgment, and acted quickly and thoroughly to
            make the most of our time and our budget. She was always ready with a referral or an
            alternate solution, and if you have ever seen her, you know you can trust her good
            taste. You expect a planner to be organized and efficient, which of course, she has
            nailed – we always knew what to expect next. But it is tranquility that you’re really
            after, and Vicki has this innate air of calm reassurance and gentle authority you don’t
            find in just anyone. It was this quality that we valued most during our time with her,
            and why we felt relaxed and unruffled whenever we knew she was around – following up on
            flowers, herding guests, coordinating cleanup. She probably even talked the weather into
            the rainbow it unrolled right before our ceremony. Our wedding was the beautiful,
            special, happy occasion you hope for, and if we had to do it again, we’d begin once more
            with Vicki.
            <br />
            <br />- <span className='ipbold'>Erin O’Connor</span>
          </blockquote>
          <blockquote className='testimonyblockquote'>
            My wedding weekend was perfect thanks to Vicki! <br />
            <br />
            We got married in the midst of massive storms.....I had NO idea that weather the day of
            the wedding impacted almost every vendor&#39;s timing. Vicki handled it all flawlessly -
            from power outages, hurricane force winds, flooding and blocked roads - nothing phased
            her. <br />
            <br />
            Vicki handled the logistics leading up to our big day and day of planning. I planned my
            wedding in Fairhope from Dallas. Having Vicki for guidance, coordination, suggestions
            and everything made it all possible. All of our wedding events were perfectly executed.
            <br />
            <br />
            Vicki is a real pleasure to work with - thank you for making everything perfect!
            <br />
            <br />‍<br />- <span className='ipbold'>Mary Flynn</span>
          </blockquote>
          <blockquote className='testimonyblockquote'>
            Vicki did a beautiful job at our wedding ceremony!!! She is well-organized,
            professional, and has a great attitude. I don&#39;t know what else to say except that
            she is great at her job!! I would so recommend her to other brides. Thank you Vicki!!!
            <br />
            <br />- <span className='ipbold'>Nho</span>
          </blockquote>
          <blockquote className='testimonyblockquote'>
            Vicki, <br />
            You are amazing!! You made my wedding day a dream come true! I appreciate you in so many
            ways! You handled everything we threw your way so wonderfully and made my wedding
            perfection!!
            <br />
            Thanks a million!!
            <br />
            <br />- <span className='ipbold'>Courtney Fleshman</span>
          </blockquote>
          <blockquote className='testimonyblockquote'>
            Although my daughter and I were fairly organized I can&#39;t imagine the wedding and
            reception being as successful without Vicki&#39;s help. Knowing that she was
            coordinating the vendors during the days leading up to the wedding and at the reception
            venue the day of the wedding ensuring that everything was as we had planned saved us
            from what could have been a very stressful day. Months before the wedding I felt a
            wedding coordinator was an unnecessary extravagance, but using Wed With Style turned out
            to be one of the best decisions we made. Thanks for all your help, Vicki.
            <br />
            <br />- <span className='ipbold'>Jorge Alsip</span>
          </blockquote>
          <blockquote className='testimonyblockquote'>
            Wed-with-style came to my rescue! I am notorious for biting off more than I can
            chew...working full time, numerous volunteer responsibilities, teenage twin daughters, a
            house full of animals, and the list goes on and on. I honestly thought I could pull off
            planning and implementing the perfect wedding day for us! Nearly one month in to it, I
            quickly realized I was drowning and I needed HELP!!!! Meeting with Vicki was most
            definitely a &#34;God thing&#34; and being able to pass on the torch was a miracle
            (especially for those who know me well). I like to refer to Vicki as the blond version
            of me. She not only took all the details but transformed my ideas and made them a
            reality. Vicki is friendly, organized, gets the job done, and has built an amazing
            business based on integrity and hard work. Our wedding day was honestly like a fairy
            tale. Thanks to Vicki and Wed-with-style, Wade and I will forever treasure the beautiful
            memories of our wedding day
            <br />
            <br />- <span className='ipbold'>Kade Laws Andrews</span>
          </blockquote>
          <blockquote className='testimonyblockquote'>
            Dear Vicki,
            <br />
            <br />I cannot thank you enough for all your help with my daughter&#39;s wedding this
            past weekend. This being a true destination wedding you were invaluable in connecting us
            with fabulous vendors. We felt confident everything was planned just so, but, then we
            had to deal with a potential tropical storm or hurricane! You found the perfect
            relocation for our reception and relieved our stress. Everything went off without a
            hitch. The hurricane or tropical storm never came, thank goodness. Our daughter&#39;s
            day was beautiful!
            <br />
            <br />
            But, you made sure everything would be perfect either way. Thank you for everything! You
            are truly the BEST!
            <br />
            <br />- <span className='ipbold'>Kenwyn Riddle</span>
          </blockquote>
          <blockquote className='testimonyblockquote'>
            So glad to have had Vicki as the coordinator during the last wedding at which I played
            harp with my trio of vocal, flute &amp; harp. She was efficient and made sure everything
            was ready to go when the wedding day was here.
            <br />
            Thanks, Vicki.
            <br />
            <br />- <span className='ipbold'>Jeanne O’Connell</span>
          </blockquote>
          <blockquote className='testimonyblockquote'>
            Vicki,
            <br />
            <br />
            Words cannot express how grateful I am for all you did to ensure Sean and I had a
            perfect day. The decorations were gorgeous, and you were always so kind, caring and
            professional-even when I was panicking. Thank you for helping make the night one Sean
            &amp; I will never forget. You truly were a blessing to me. No detail went unnoticed. I
            don&#39;t have the words to express how lucky we were to have you! Thank you for
            everything, Katherine
            <br />
            <br /> <span className='ipbold'>Katherine Corbin</span>
          </blockquote>
          <blockquote className='testimonyblockquote'>
            Dear Vicki,
            <br />
            <br />
            It was a pleasure meeting you are Emily and Leslie&#39;s wedding. I am so glad that they
            had you there to help with all details. As you know, the tragic loss of Emily&#39;s dad
            3 months prior was all in our hearts. You truly made everything beautiful. Thanks for
            hanging with us on such a joyous day with a wonderful angel named Danny looking over his
            daughter. God is great and loves us unconditionally. <br />
            Thanks again!!!
            <br />
            <br />- <span className='ipbold'>Becky Kersh</span>
          </blockquote>
          <blockquote className='testimonyblockquote'>
            I hired Vicki to plan my daughter&#39;s birthday party...BEST decision I made!! I told
            Vicki my vision for the party and she did the rest! I knew everything would be taken
            care of with Vicki behind the scene... and I was right! It was so stress free and I
            could completely enjoy my daughter on her big party day! Thank You Vicki! I plan to use
            your services for many more parties to come! I am a VERY happy and satisfied client!!! -{' '}
            <span className='ipbold'>Janel Gay</span>
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
        {/* [if lte IE 9]><![endif] */}
      </div>
    </main>
  );
}
