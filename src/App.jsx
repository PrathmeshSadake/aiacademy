import ContactForm from "./components/ContactForm";
import DialogDemo from "./components/Dialog";

const App = () => {
  return (
    <div style={{ width: "100%" }}>
      <header className='notification-background'>
        <div className='container'>
          <p>
            <DialogDemo
              buttonText={"Enroll now to avail the Early Bird offer."}
            />{" "}
            <span className='time'>Limited Seats only</span>
          </p>
        </div>
      </header>
      <header>
        <div className='header'>
          <div className='containers logo-container'>
            <img className='logo' src='./images/logo.png' alt='logo' />
            <div className='contacts'>
              <a href='tel:+919035175757'>
                <img src='./images/call.png' alt='call' />{" "}
                <span> +91 90351 75757</span>
              </a>
              <a href='https://wa.me/+919035175757'>
                <img src='./images/whatsapp.png' alt='whatsapp' />{" "}
                <span> +91 90351 75757</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className='sec1'>
        <h1>
          India&apos;s 1st
          <br />
          <div>
            <img src='./images/chatgpt.png' alt='chtgpt' />
            ChatGpt and Generative AI
            <br />
            Full Course
          </div>
        </h1>
      </div>
      <div className='sec2'>
        <div className='container'>
          <div className='features'>
            <div className='weekend'>
              <img src='./images/5W.png' alt='weekend' />
              <p>5-Weekends Program</p>
            </div>
            <div className='weekend'>
              <img src='./images/cclassroom-coaching.png' alt='weekend' />
              <p>Classroom Training</p>
            </div>
            <div className='weekend'>
              <img src='./images/b2p.png' alt='weekend' />
              <p>Beginner to Professional</p>
            </div>
            <div className='weekend'>
              <img src='./images/salary_hike.png' alt='weekend' />
              <p>Upto 300% Hike in Salary</p>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='sec3'>
          <div className='row'>
            <div className='col-md-6 '>
              <h1>
                Understand <span className='highlight'>100%</span>
                <br />
                Capabalities of GPT{" "}
              </h1>
              <p className='link'>
                <i>#Basicstoadvance</i>
              </p>
            </div>
            <div className='col-md-6 aiimage'>
              <img
                src='./images/AI-image.png'
                alt='AI-Image'
                className='AIImage'
              />
            </div>
          </div>
          <span className='button'>
            {/* <button id='brochure'>Apply Now</button> */}
            <DialogDemo buttonText={"Apply Now"} />
            <img src='./images/users.png' alt='users' />
          </span>
        </div>
        <div className='container'>
          <div className='sec5'>
            <h2>Upcoming Batches</h2>
            <div className='row'>
              <div className='col-md-6 col-xs-12'>
                <div className='upcomingbatches'>
                  <div className='batch'>
                    <div className='date'>
                      <span className='mark'>Sold out</span>
                      <input type='radio' name='batchSelection' />
                      <p>29th Sep</p>
                    </div>
                    <div className='timings'>
                      <p>
                        10:30 AM - 2:30 PM
                        <br />
                        <span className='day'>Saturday</span>
                      </p>
                    </div>
                  </div>

                  <div className='batch'>
                    <div className='date'>
                      <input type='radio' name='batchSelection' />
                      <p>28th Oct</p>
                    </div>
                    <div className='timings'>
                      <p>
                        10:30 AM - 2:30 PM
                        <br />
                        <span className='day'>Saturday</span>
                      </p>
                    </div>
                  </div>

                  <div className='batch'>
                    <div className='date'>
                      <input type='radio' name='batchSelection' />
                      <p>18th Nov</p>
                    </div>
                    <div className='timings'>
                      <p>
                        10:30 AM - 2:30 PM
                        <br />
                        <span className='day'>Saturday</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-xs-12 '>
                <div className='linearbackground'>
                  <h2>
                    40 Hours Program{" "}
                    <span className='ofon'>(Offline / Online)</span>
                  </h2>
                  <p>
                    <img
                      src='./images/Tick-Square.png'
                      alt='checkbox'
                      className='ticksquare'
                    />{" "}
                    20 Hrs Classroom + 20 Hrs Self-Paced Learning
                  </p>
                  <p>
                    <img
                      src='./images/Tick-Square.png'
                      alt='checkbox'
                      className='ticksquare'
                    />{" "}
                    5 Weeks (Only Saturday)
                  </p>
                  <button className='sec5button'>10:30 AM - 2:30 PM</button>
                </div>
                <div className='locationmobile'>
                  <p>
                    Location :{" "}
                    <span>
                      Indiranagar, Bangalore <br />
                      <a
                        className='map-button'
                        href='https://maps.app.goo.gl/VNpkQTbmwrx8ibjQ9'
                        target='_blank'
                        rel='noreferrer'
                      >
                        <img src='./images/google-maps.png' alt='google maps' />
                        <span>AI Academy</span>
                      </a>
                      <br /> (25 Mts away from Indiranagar Metro){" "}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='sec6'>
          <div className='row'>
            <h2>Program Fees</h2>
            <div className='col-md-6 col-xs-12'>
              <span className='price'>
                <span className='price'>
                  <span>&#8377;</span>14,999
                </span>
                <span className='fullprice'>
                  <del>
                    <span>&#8377;</span>20,999
                  </del>
                </span>
              </span>
              <p className='seats'>
                <span>Early bird</span>
                <span>
                  {" "}
                  offer ends soon. Only{" "}
                  <span
                    style={{
                      fontWeight: "700",
                      color: "#8D8D8D",
                      fontSize: "16px",
                    }}
                  >
                    <b>23</b>
                  </span>{" "}
                  seats left.
                </span>
              </p>
              <span>
                <span className='price'>
                  <span>&#8377;</span>20,999
                </span>
                <span className='fullprice'>Oct 20th Onwards</span>
              </span>
            </div>
            <div className='col-md-6 col-xs-12'>
              <span className='button'>
                <DialogDemo buttonText={"Apply Now"} />

                <img src='./images/users.png' alt='users' className='users' />
              </span>
              <p className='link' style={{ padding: "10px 0" }}>
                <i>#takethelead</i>
              </p>
            </div>
          </div>
          <p className='whocandothiscourse'>Who can do this course?</p>
          <div className='features'>
            <div className='whotakecourse'>
              <div className='batch'>
                <div className='image'>
                  <img src='./images/induvidual.png' alt='induvidual' />
                </div>
                <div className='content'>
                  <p style={{ marginBottom: 0 }}>Individuals</p>
                  <div className='day'>With keen interest in AI</div>
                </div>
              </div>

              <div className='batch'>
                <div className='image'>
                  <img src='./images/enterprenour.png' />
                </div>
                <div className='content'>
                  <p style={{ marginBottom: 0 }}>Entrepreneurs / CXOs</p>
                  <div className='day'>
                    Who wish to understand the complete capabilities of
                    GPT-powered AI
                  </div>
                </div>
              </div>

              <div className='batch'>
                <div className='image'>
                  <img src='./images/developers.png' />
                </div>
                <div className='content'>
                  <p style={{ marginBottom: 0 }}>
                    Developers / PMs / Architects
                  </p>
                  <div className='day'>To be on top of the game</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='sec7'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-xs-12 sec7text'>
              <p>The next biggest global</p>
              <p>revolution is GPT powered AI</p>
            </div>
            <div className='col-md-6 col-xs-12'>
              <img src='./images/sec7image.png' alt='image' />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='sec8'>
          <div className='sec8-1'>
            <h2>What will you get?</h2>
            <p>
              <img src='./images/Tick-Square.png' alt='checkbox' /> Solid
              understanding of generative AI from basics to advanced.
            </p>
            <p>
              <img src='./images/Tick-Square.png' alt='checkbox' /> You would
              have{" "}
              <span style={{ backgroundColor: "#e97a7a", padding: "3px" }}>
                developed these applications
              </span>
              yourself using AI.
            </p>
          </div>
          <div>
            <div className='accordion' id='accordionExample'>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingOne'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseOne'
                    aria-expanded='true'
                    aria-controls='collapseOne'
                  >
                    Chat with PDF
                  </button>
                </h2>
                <div
                  id='collapseOne'
                  className='accordion-collapse collapse show'
                  aria-labelledby='headingOne'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <p>
                      Upload any PDF document (even 100s of pages) and ask any
                      questions or to summarize. You will build an application
                      that can interact with PDF files, extracting and utilizing
                      information seamlessly. Learn to build a tool that can
                      revolutionize how we interact with documents, bringing a
                      new dimension to data extraction and analysis.
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingTwo'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseTwo'
                    aria-expanded='false'
                    aria-controls='collapseTwo'
                  >
                    YouTube video summarizer
                  </button>
                </h2>
                <div
                  id='collapseTwo'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingTwo'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    Upload YouTube videos (even hours longer) and ask to
                    summarize the content in few seconds. Ask any questions from
                    the videos about the content. Learn to build a tool that can
                    transform how we watch and learn from videos, bringing a new
                    dimension to information extraction and analysis.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingThree'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseThree'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    Story telling App
                  </button>
                </h2>
                <div
                  id='collapseThree'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingThree'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    Unleash your creativity by developing a story-telling app,
                    where AI helps to weave compelling narratives based on your
                    simple prompts. You will build an app which will be a
                    perfect blend of technology and creativity, offering
                    insights into how AI can be used as a tool to foster
                    creativity and storytelling.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingFour'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFour'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    Email generation App
                  </button>
                </h2>
                <div
                  id='collapseFour'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFour'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    Utilize AI to generate email drafts automatically, saving
                    time and enhancing productivity. Learn how to create an app
                    for crafting emails that resonate with the recipients and
                    convey the intended message effectively.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='headingFive'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#collapseFive'
                    aria-expanded='false'
                    aria-controls='collapseThree'
                  >
                    ChatGPT replica
                  </button>
                </h2>
                <div
                  id='collapseFive'
                  className='accordion-collapse collapse'
                  aria-labelledby='headingFive'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    Finally, get hands-on experience building a replica of the
                    renowned ChatGPT, understanding its underlying mechanisms.
                    This module allows you to delve deeper into the world of AI
                    chatbots, enhancing your skills in creating chatbots that
                    can hold nuanced and detailed conversations.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='sec9'>
          <div className='row'>
            <div className='col-md-6 col-xs-12 sec9text'>
              <h2>
                Learn industry wise AI <br /> Applications
              </h2>
              <img src='./images/border.png' alt='border' />
            </div>
            <div className='col-md-6 col-xs-12 sec9image'>
              <img src='./images/strengthcv_image (1).png' alt='sec9' />
            </div>
          </div>
          <div className='sec9-2ndrow'>
            <div className='text'>
              <h2>25+ AI Tools to</h2>
              <h2>Enhance Productivity</h2>
            </div>
            <div className='row'>
              <h3 style={{ color: "#1F4943" }}>Curriculum</h3>
              <p>
                Embark on a rewarding learning experience stretched across five
                action packed weeks
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='blackbackground'>
        <div className='sec10 container'>
          <div className='accordion' id='accordionExample'>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='secheadingOne'>
                <div
                  className='accordion-button'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#secCollapseOne'
                  aria-expanded='true'
                  aria-controls='secCollapseOne'
                >
                  <h2>Week 1</h2>
                  <p>October 28th | 10:30 AM - 02:30 PM</p>
                </div>
              </h2>
              <div
                id='secCollapseOne'
                className='accordion-collapse collapse show'
                aria-labelledby='secheadingOne'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  <p style={{ fontWeight: 700 }}>
                    Immersion in Python & Generative AI Foundations
                  </p>
                  <p>
                    <img
                      src='./images/Tick-Square.png'
                      alt='checkbox'
                      width='14px'
                    />{" "}
                    Mastering the fundamentals of Python programming.
                  </p>
                  <p>
                    <img
                      src='./images/Tick-Square.png'
                      alt='checkbox'
                      width='14px'
                    />{" "}
                    Introduction to Generative AI understanding its core
                    principles, applications, and future directions.
                  </p>
                  <p>
                    <img
                      src='./images/Tick-Square.png'
                      alt='checkbox'
                      width='14px'
                    />{" "}
                    Learning the art of prompt engineering to interact
                    proficiently with AI models.
                  </p>
                  <p>
                    <img
                      src='./images/Tick-Square.png'
                      alt='checkbox'
                      width='14px'
                    />{" "}
                    Engaging in hands-on activities to explore the potential and
                    limitations of Generative AI.
                  </p>
                </div>
              </div>
            </div>
            <div className='accordion-item'>
              <h2 className='accordion-header' id='secheadingTwo'>
                <button
                  className='accordion-button collapsed'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#secCollapseTwo'
                  aria-expanded='false'
                  aria-controls='secCollapseTwo'
                >
                  <h2>Week 2</h2>
                  <p>Nov 4th | 10:30 AM - 02:30 PM</p>
                </button>
              </h2>
              <div
                id='secCollapseTwo'
                className='accordion-collapse collapse'
                aria-labelledby='secheadingTwo'
                data-bs-parent='#accordionExample'
              >
                <div className='accordion-body'>
                  <p style={{ fontWeight: 700 }}>
                    Crafting Your First AI Application
                  </p>
                  <p>
                    <img
                      src='./images/Tick-Square.png'
                      alt='checkbox'
                      width='14px'
                    />{" "}
                    Getting acquainted with Langchain: a platform that
                    facilitates the creation of natural language applications
                    using Generative AI models.{" "}
                  </p>
                  <p>
                    <img
                      src='./images/Tick-Square.png'
                      alt='checkbox'
                      width='14px'
                    />{" "}
                    Hands-on training in building applications for tasks like
                    text generation and content creation.
                  </p>
                  <p>
                    <img
                      src='./images/Tick-Square.png'
                      alt='checkbox'
                      width='14px'
                    />{" "}
                    Introduction to Streamlit: learning to craft interactive
                    user interfaces to enhance project presentations.
                  </p>
                  <p>
                    <img
                      src='./images/Tick-Square.png'
                      alt='checkbox'
                      width='14px'
                    />{" "}
                    Workshop on building and deploying your first simple AI
                    application.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='secheadingThree'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#secCollapseThree'
                aria-expanded='false'
                aria-controls='secCollapseThree'
              >
                <h2>Week 3</h2>
                <p>Nov 18th | 10:30 AM - 02:30 PM</p>
              </button>
            </h2>
            <div
              id='secCollapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='secheadingThree'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p style={{ fontWeight: 700 }}>
                  Advanced AI Chatbots & Interactive PDF Solutions
                </p>
                <p>
                  <img
                    src='./images/Tick-Square.png'
                    alt='checkbox'
                    width='14px'
                  />{" "}
                  Developing sophisticated AI chatbots that can manage complex
                  scenarios and provide engaging user experiences.{" "}
                </p>
                <p>
                  <img
                    src='./images/Tick-Square.png'
                    alt='checkbox'
                    width='14px'
                  />{" "}
                  Deep diving into the ChatGPT model, learning to generate
                  natural language responses for chatbots.
                </p>
                <p>
                  <img
                    src='./images/Tick-Square.png'
                    alt='checkbox'
                    width='14px'
                  />{" "}
                  Creating a &apos;Chat with PDF&apos; application: a tool that
                  enables the extraction of information from PDF documents using
                  vector databases.{" "}
                </p>
                <p>
                  <img
                    src='./images/Tick-Square.png'
                    alt='checkbox'
                    width='14px'
                  />{" "}
                  Hands-on session on integrating AI functionalities into
                  chatbots to enhance their capabilities.
                </p>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='secheadingFour'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#secCollapseFour'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                <h2>Week 4</h2>
                <p>Nov 25th | 10:30 AM - 02:30 PM</p>
              </button>
            </h2>
            <div
              id='secCollapseFour'
              className='accordion-collapse collapse'
              aria-labelledby='secheadingFour'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p style={{ fontWeight: 700 }}>Mastery in Image Generation</p>
                <p>
                  <img
                    src='./images/Tick-Square.png'
                    alt='checkbox'
                    width='14px'
                  />{" "}
                  Exploring the foundations of image generation with Generative
                  AI models.{" "}
                </p>
                <p>
                  <img
                    src='./images/Tick-Square.png'
                    alt='checkbox'
                    width='14px'
                  />{" "}
                  Learning to use AI tools like Midjourney and Stable Diffusion
                  for generating and editing images from text, sketches, or
                  other images.{" "}
                </p>
                <p>
                  <img
                    src='./images/Tick-Square.png'
                    alt='checkbox'
                    width='14px'
                  />
                  Developing applications that address real-world issues or
                  cater to creative pursuits in the fields of digital art and
                  graphic design.{" "}
                </p>
                <p>
                  <img
                    src='./images/Tick-Square.png'
                    alt='checkbox'
                    width='14px'
                  />{" "}
                  Hands-on workshop: creating an image generation application
                  from scratch.
                </p>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <h2 className='accordion-header' id='secheadingFive'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#secCollapseFive'
                aria-expanded='false'
                aria-controls='seccollapseFive'
              >
                <h2>Week 5</h2>
                <p>Dec 2nd | 10:30 AM - 02:30 PM</p>
              </button>
            </h2>
            <div
              id='secCollapseFive'
              className='accordion-collapse collapse'
              aria-labelledby='secheadingFive'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p style={{ fontWeight: 700 }}>
                  Diverse AI Applications & Carving Your AI Path
                </p>
                <p>
                  <img
                    src='./images/Tick-Square.png'
                    alt='checkbox'
                    width='14px'
                  />{" "}
                  Delving into miscellaneous applications of AI: focusing on
                  data analysis, automation, and beyond.{" "}
                </p>
                <p>
                  <img
                    src='./images/Tick-Square.png'
                    alt='checkbox'
                    width='14px'
                  />{" "}
                  Learning to enhance chatbot functionality and interactivity
                  using code interpreters and other plugins.{" "}
                </p>
                <p>
                  <img
                    src='./images/Tick-Square.png'
                    alt='checkbox'
                    width='14px'
                  />
                  Understanding the ethical and security dimensions of
                  Generative AI, covering topics like authenticity, privacy, and
                  bias.{" "}
                </p>
                <p>
                  <img
                    src='./images/Tick-Square.png'
                    alt='checkbox'
                    width='14px'
                  />{" "}
                  Developing a personal AI roadmap: setting goals and plotting a
                  course for a successful career in the AI industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='whitebackground'>
        <div className='sec11 container'>
          <div className='row'>
            <div className='col-md-6 col-xs-12'>
              <h2>Who is your Mentor?</h2>
              <p>
                Satvik is an IIT Delhi graduate with over 4 years of experience
                in various Data Science & AI roles with multi national banks.
                His keen interest is in the field of AI education, where he
                explores the potential applications of AI. Satvik is also the
                founder of ‘Build Fast with AI’ a community helping individuals
                build AI applications. Satvik is currently consulting many
                startups across various domains in building their AI
                capabilities.
              </p>
            </div>
            <div className='col-md-6 col-xs-12'>
              <div className='mentorimage'>
                <p>
                  <img
                    src='./images/mentor_image.jpeg'
                    alt='mentorimage'
                    className='mentor_image'
                  />
                </p>
                <p>
                  <img src='./images/mentor_name.png' alt='mentor_name' />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sec12'>
        <div className='container'>
          <div>
            <h2>Frequently Asked Questions</h2>
            <div className='accordion' id='accordionExample'>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='trdheadingOne'>
                  <button
                    className='accordion-button'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#trdcollapseOne'
                    aria-expanded='true'
                    aria-controls='trdcollapseOne'
                  >
                    Who is this course designed for?
                  </button>
                </h2>
                <div
                  id='trdcollapseOne'
                  className='accordion-collapse collapse show'
                  aria-labelledby='trdheadingOne'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <p>
                      This course is suitable for individuals with a keen
                      interest in AI, including students, professionals, and
                      enthusiasts looking to build applications using Generative
                      AI.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='trdheadingTwo'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#trdcollapseTwo'
                    aria-expanded='false'
                    aria-controls='trdcollapseTwo'
                  >
                    Will there be any projects or practical sessions included in
                    the course?
                  </button>
                </h2>
                <div
                  id='trdcollapseTwo'
                  className='accordion-collapse collapse'
                  aria-labelledby='trdheadingTwo'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    <strong>
                      Absolutely! The course emphasizes hands-on learning, and
                      you will be building several applications as a part of the
                      curriculum, including an Email Generation App, ChatGPT
                      Replica, a Story Telling App, a Chat with PDF application,
                      and more.
                    </strong>
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='trdheadingThree'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#trdcollapseThree'
                    aria-expanded='false'
                    aria-controls='trdcollapseThree'
                  >
                    Is there any technical knowledge per-requisite to attend
                    this program?
                  </button>
                </h2>
                <div
                  id='trdcollapseThree'
                  className='accordion-collapse collapse'
                  aria-labelledby='trdheadingThree'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    There is no technical knowledge pre-requisite is needed to
                    attend the program. A basic understanding of Python
                    programming would be beneficial but is not mandatory. If you
                    have enrolled for this program, try to get some broad
                    understanding of basics of Python through Youtube videos.
                    Even if not, you are covered there as we teach with Python
                    basics, as much as needed for learning Generative AI
                    effectively.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='trdheadingFour'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#trdcollapseFour'
                    aria-expanded='false'
                    aria-controls='trdcollapseFour'
                  >
                    What will I achieve by the end of this course?
                  </button>
                </h2>
                <div
                  id='trdcollapseFour'
                  className='accordion-collapse collapse'
                  aria-labelledby='trdheadingFour'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    By the end of the course, you will have a solid
                    understanding of Generative AI, along with experience in
                    building real-world applications. You will also develop a
                    personal AI roadmap to guide your further learning and
                    career aspirations in the AI field.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='trdheadingSix'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#trdcollapseSix'
                    aria-expanded='false'
                    aria-controls='trdcollapseSix'
                  >
                    Is there any certification provided at the end of the
                    course?
                  </button>
                </h2>
                <div
                  id='trdcollapseSix'
                  className='accordion-collapse collapse'
                  aria-labelledby='trdheadingSix'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    Yes, upon successful completion of the course, you will
                    receive a certificate acknowledging your proficiency and the
                    skills acquired during the course.
                  </div>
                </div>
              </div>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='trdheadingFive'>
                  <button
                    className='accordion-button collapsed'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#trdcollapseFive'
                    aria-expanded='false'
                    aria-controls='trdcollapseFive'
                  >
                    What if I miss a class?
                  </button>
                </h2>
                <div
                  id='trdcollapseFive'
                  className='accordion-collapse collapse'
                  aria-labelledby='trdheadingFive'
                  data-bs-parent='#accordionExample'
                >
                  <div className='accordion-body'>
                    While we encourage all participants to attend each session
                    to make the most out of this learning experience, we
                    understand that conflicts can arise. We will provide back-up
                    sessions of the classes so that you can catch up on what you
                    missed.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='sec13'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 col-cs-12'>
              <ContactForm />
            </div>
            <div className='col-md-6 col-cs-12'>
              <p className='getintouch'>
                <img src='./images/phone_icon.png' alt='phone_icon' />
                <span>Get in touch with us</span>
                <a
                  href='tel:+919035175757'
                  style={{
                    color: "white",
                    fontWeight: "700",
                    fontSize: "22px",
                    textDecoration: "none",
                  }}
                >
                  <p className='pnumber'>+91 90351 75757</p>
                </a>
              </p>

              <h3>
                <img src='./images/map_orange.png' alt='phone_icon' /> Location
              </h3>
              <p className='address'>
                Indiranagar, bangalore <br /> (20 meters away from indiranagar
                metro station)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
