import { Link } from "react-router-dom";

function Page2() {
  return (
    <div>
      <section id="breadcrumbs" class="breadcrumbs">
        <div class="container">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            <li>Blog Single</li>
          </ol>
          <h2>Blog Single</h2>
        </div>
        <section id="blog" class="blog">
          <div class="container" data-aos="fade-up">
            <div class="row justify-content-center">
              <div class="col-lg-8 entries">
                <article class="entry entry-single">
                  <div class="entry-img">
                    {/* <img
                      src="assets\img\blogs\blog-1img.jpg"
                      alt="Image"
                      class="img-fluid"
                    /> */}
                    {/* <img src="assets\img\blogs\blog-1img.jpg" /> */}
                  </div>

                  <h2 class="entry-title">
                    <a href="#">
                      5 Basic Requirements to Become a Thekedar in India
                    </a>
                  </h2>

                  <div class="entry-meta">
                    <ul>
                      <li class="d-flex align-items-center">
                        <i class="bi bi-person"></i> <a href="#">ThekaBook</a>
                      </li>
                      <li class="d-flex align-items-center">
                        <i class="bi bi-clock"></i>{" "}
                        <a href="#">
                          <time datetime="2020-01-01">May 06, 2022</time>
                        </a>
                      </li>
                      {/* <li class="d-flex align-items-center">
                        <i class="bi bi-chat-dots"></i>{" "}
                        <a href="blog-single.html">12 Comments</a>
                      </li> */}
                    </ul>
                  </div>

                  <div class="entry-content">
                    <p>
                      Visit any construction site in any part of our country,
                      you will spot that one super active person. This one has a
                      bird’s eye view of everything going on at that site. Guess
                      who this superhuman is? It's a contractor or most commonly
                      known as a thekedar in India.
                    </p>
                    <p>
                      In a construction business, everything starts from
                      execution. There is a lot of paperwork already involved so
                      when the first laying of the foundation actually takes
                      place, is when one can officially think of starting a
                      construction project. Then comes the tough task of
                      managing the team of labourers, electricians, plumbers,
                      suppliers, logistics and anything and everything related
                      to that construction project. There can be subcontractors
                      too.
                    </p>

                    <blockquote>
                      <p>
                        A main contractor is responsible for all and more than
                        the above. Well, not just these skills are required but
                        proper licensing is important too. Let’s understand the
                        5 basic requirements to become a thekedar or main
                        contractor in India.
                      </p>
                    </blockquote>
                    {/* <p>
                      Some things you cannot ignore and should ask your
                      contractor are:
                    </p> */}
                    <h3>1. Formal Education: </h3>
                    <p>
                      Although there is a peculiar image about contractors that
                      they're not formally educated, this isn't the case. One
                      requires a simple degree or diploma in civil engineering.
                      One needs to study subjects related to construction,
                      materials and alike. This is the first step to becoming a
                      thekedar. Although this isnt always required, a formally
                      trained person has an extra edge to deal with business in
                      an organised way. Good Accountancy and knowledge of tools
                      like MS Excel is also a key skill required while managing
                      a site.
                    </p>
                    <h3>2. Registration & licensing: </h3>
                    <p>
                      Depending upon the level of expertise, one needs to
                      register one’s company in the public works department. As
                      per the class or category, the application and paperwork
                      is carried on accordingly. One must check state specific
                      laws and guidelines. Thereafter one gets the licence to
                      bid or file tenders for construction projects.
                    </p>
                    <h3>3. Financial investment: </h3>
                    <p>
                      There are certain monetary norms too for becoming a
                      construction contractor or a thekedar in India. Certain
                      amount needs to be deposited with the regulatory authority
                      and in the bank as a fixed deposit. Besides this, heavy
                      equipment and machinery is required to carry out work. The
                      efficient management of these machines, their maintenance,
                      repair, renting would require inflow of money. Added to
                      that is the residential expenses of the watchmen and
                      labourers involved.
                    </p>
                    <h3>4. Skills and expertise: </h3>
                    <p>
                      Often full marks on the report card do not reflect in the
                      general smartness of the individual. Being a contractor
                      would require one to always be aware of all the minute
                      details. On a construction site, there can be chances of
                      complete chaos of logistics, labourers, masons, materials,
                      etc. A contractor needs to be vigilant enough to manage
                      materials and men effectively. This skill will increase
                      over time and experience.
                    </p>
                    <h3>5. Contacts & communication skills:</h3>
                    <p>
                      A contractor can scale his or her annual income basis the
                      kinds of contacts he or she acquires. A great
                      communication can handle the worst of situations and help
                      get better business deals. If one is really interested in
                      becoming a thekedar, he or she needs to be a great
                      communicator, manage a plethora of contacts. This will not
                      just scale his profits but get a better team to work with.
                    </p>
                    <p>
                      These were a few basic requirements to become a thekedar
                      in India. One must be updated with laws and licensing
                      which will further help in starting the journey towards
                      construction management. Nowadays there are multiple apps
                      too to help you manage your work. Have you tried Thekabook
                      App yet?{" "}
                    </p>
                    {/* <h3>6. Does he plan for mishaps or unexpected things?</h3>
                    <p>
                      It is not uncommon that there might be some unexpected
                      issues encountered at the construction site. In India,
                      most labor is not insured and they don’t get a lot of
                      safety measures to work with either. If by chance any
                      accident happens then who will bear the responsibility and
                      hospital costs. Apart from this, if there might be changes
                      made, like something floor, or wall or door needs to
                      replaced or re-made due to quality issue, then who would
                      be responsible for it?
                    </p>
                    <h3>7. Who is going to do ‘clean-up’?</h3>
                    <p>
                      It is good to ask and stress before you give the job to
                      someone if they would be responsible for cleaning up the
                      site after work every day. Cleaning up keeps material safe
                      and prevents accidents.
                    </p>
                    <h3>8. Ask about the payment schedule</h3>
                    <p>
                      Always ask if they have a fixed plan for payment schedule
                      – like how much at what stage needs to be paid. And what
                      would happen if you decide to part ways mid-project.
                      Asking such questions will prepare you and your contractor
                      to take the job at hand seriously, and you will also
                      realise different aspects of construction that you might
                      have not known before. Good research on your part and your
                      involvement in the project are as important. The right
                      choice will help you sail through this experience and keep
                      your expenses within budget.
                    </p> */}
                    {/* <img
                      src="assets\img\blogs\blog-1img.jpg"
                      class="img-fluid"
                      alt="Image"
                    /> */}

                    {/* <h3>
                      Ut repellat blanditiis est dolore sunt dolorum quae.
                    </h3>
                    <p>
                      Rerum ea est assumenda pariatur quasi et quam. Facilis nam
                      porro amet nostrum. In assumenda quia quae a id
                      praesentium. Quos deleniti libero sed occaecati aut porro
                      autem. Consectetur sed excepturi sint non placeat quia
                      repellat incidunt labore. Autem facilis hic dolorum
                      dolores vel. Consectetur quasi id et optio praesentium aut
                      asperiores eaque aut. Explicabo omnis quibusdam esse. Ex
                      libero illum iusto totam et ut aut blanditiis. Veritatis
                      numquam ut illum ut a quam vitae.
                    </p>
                    <p>
                      Alias quia non aliquid. Eos et ea velit. Voluptatem maxime
                      enim omnis ipsa voluptas incidunt. Nulla sit eaque
                      mollitia nisi asperiores est veniam.
                    </p> */}
                  </div>

                  <div class="entry-footer">
                    {/* <i class="bi bi-folder"></i> */}
                    {/* <ul class="cats">
                      <li>
                        <a href="#">Business</a>
                      </li>
                    </ul> */}

                    <i class="bi bi-tags"></i>
                    <ul class="tags">
                      <li>
                        <a href="#">Contractor</a>
                      </li>
                      <li>
                        <a href="#">Profit</a>
                      </li>
                      <li>
                        <a href="#">India</a>
                      </li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
export default Page2;
