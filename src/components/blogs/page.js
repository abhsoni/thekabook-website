import { Link } from "react-router-dom";

function Page() {
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
                      8 questions you need to ask a before hiring a home
                      contractor
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
                      Whenever you are hiring a contractor, you are hiring an
                      expert person, who can manage the best in your given
                      budget to build your home, a place where you will come to
                      unwind every day, where you would want to grow old, raise
                      your children and take care of your parents.
                    </p>

                    <blockquote>
                      <p>
                        Having the right person for this job is very important,
                        after all, he is responsible for creating something that
                        is long-lasting, and cannot be altered every day.
                      </p>
                    </blockquote>
                    <p>
                      Some things you cannot ignore and should ask your
                      contractor are:
                    </p>
                    <h3>1. Detailed Estimate</h3>
                    <p>
                      What most contractors do is give an overall budget,
                      including their fees or charges. But it is wise to ask
                      them, for a detailed list of all heads of expenditure.
                      This helps in two ways ??? first, you know what costs what,
                      and you can increase the budget in one aspect if you want
                      to with full knowledge, secondly, if you don???t want to go
                      ahead with some part of the plan and want to change it to
                      something else, you know exactly what you are saving and
                      can incorporate that budget in the new plan, or save it
                      altogether. The Detailed estimate also makes it easier to
                      compare ??? stores, suppliers, or even contractors.
                    </p>
                    <h3>2. Time-Frame</h3>
                    <p>
                      This is perhaps the most important part of the question
                      list that you should ask your contractor. The time frame
                      is important, it is good to compare it with others, and
                      you will have an idea if they are making false promises or
                      are realistic enough. Contractors are also legally bound
                      to deliver in the mentioned time frame or else are
                      subjected to penalties as per the clause.
                    </p>
                    <h3>3. Ask about their suppliers</h3>
                    <p>
                      It is important to ask about suppliers, as they are
                      providing the raw material that will make the structure
                      that you will call your home. You need to dig up what
                      quality of materials his suppliers give and ask if you
                      have the option of suggesting another one if you are
                      really not pleased with the suppliers he recommends. It is
                      also advisable to do a lot of research yourself about
                      materials that would be used, and you can always ask your
                      contractor if they are open sourcing materials from
                      vendors or suppliers suggested by you. Are they giving
                      sufficient .
                    </p>
                    <h3>4. Ask where does he hire his workforce from</h3>
                    <p>
                      Many seasoned contractors have their own team of
                      labourers, foremen, carpenters, plumbers, electricians,
                      etc. It is good if they have their own team, then you can
                      trust their experience and expertise. If they just hire
                      randomly from here and there, then it might be a problem,
                      as the contractor himself might have no clue of their
                      expertise and skills.
                    </p>
                    <h3>5. Ask about their experience</h3>
                    <p>
                      There is no harm in asking for previous reference work, as
                      it would reflect the work they would do for you. You
                      should make it a point to visit contractors??? previous
                      projects and see how they are functioning after they are
                      completed. It is advised to meet some of his former
                      clients too, and ask them if he stuck to his time frame
                      and budget, etc.
                    </p>
                    <h3>6. Does he plan for mishaps or unexpected things?</h3>
                    <p>
                      It is not uncommon that there might be some unexpected
                      issues encountered at the construction site. In India,
                      most labor is not insured and they don???t get a lot of
                      safety measures to work with either. If by chance any
                      accident happens then who will bear the responsibility and
                      hospital costs. Apart from this, if there might be changes
                      made, like something floor, or wall or door needs to
                      replaced or re-made due to quality issue, then who would
                      be responsible for it?
                    </p>
                    <h3>7. Who is going to do ???clean-up????</h3>
                    <p>
                      It is good to ask and stress before you give the job to
                      someone if they would be responsible for cleaning up the
                      site after work every day. Cleaning up keeps material safe
                      and prevents accidents.
                    </p>
                    <h3>8. Ask about the payment schedule</h3>
                    <p>
                      Always ask if they have a fixed plan for payment schedule
                      ??? like how much at what stage needs to be paid. And what
                      would happen if you decide to part ways mid-project.
                      Asking such questions will prepare you and your contractor
                      to take the job at hand seriously, and you will also
                      realise different aspects of construction that you might
                      have not known before. Good research on your part and your
                      involvement in the project are as important. The right
                      choice will help you sail through this experience and keep
                      your expenses within budget.
                    </p>
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
                        <a href="#">Contruction</a>
                      </li>
                      <li>
                        <a href="#">Tips</a>
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
export default Page;
