import { useNavigate } from "react-router-dom"

const Projects = () => {



    return(
        <div className="wrapper">
            <div className="projects">
                <h3 onClick={() => window.open('http://logos_trivia.surge.sh', '_blank')}>
                    Trivia
                </h3>
                <p>
                    A game consisting of matching logos to the correct name.
                </p>
                <img src='https://i.imgur.com/26SNxdO.png' alt='' onClick={() => window.open('http://logos_trivia.surge.sh', '_blank')}/>
                <br />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/1200px-HTML5_logo_resized.svg.png' alt='' className='language-image' />
                <img src='https://i0.wp.com/ananda-yoga.us/wp-content/uploads/2016/03/js-logo-1.png' alt='' className='language-image' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' alt='' className='language-image' />
                
            </div>


            <div className="projects">
                <h3 onClick={() => window.open('https://kaleidoscopic-kitten-348b96.netlify.app', '_blank')}>
                    Pokedex
                </h3>
                <p>
                    A list of Pokemon where users can add or delete Pokemon into the database.
                </p>
                <img src='https://i.imgur.com/cgqZc1T.png' alt='' onClick={() => window.open('https://kaleidoscopic-kitten-348b96.netlify.app', '_blank')}/>
                <br />
                <img src='https://images.ctfassets.net/jqtlvicdu16w/2cnqSfN5yJhi83cGpTvVq2/65a725a7a590acfecac186f6b78e8293/reactjs-development-company.png' alt='' className='language-image'/>
                <img src='https://g.foolcdn.com/art/companylogos/square/mdb.png' alt='' className='language-image'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' alt='' className='language-image'/>
                <img src='https://miro.medium.com/max/800/1*9AbbVli10NreTXCpiVYEOQ.png' alt='' className='language-image'/>
                <img src='https://i0.wp.com/ananda-yoga.us/wp-content/uploads/2016/03/js-logo-1.png' alt='' className='language-image' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' alt='' className='language-image' />
            </div>

            <div className="projects">
                <h3 onClick={() => window.open('', '_blank')}>
                    Rollercoaster
                </h3>
                <p>
                    A list of rollercoasters in the US, with rollercoasters listed by height, speed and location. Users can add rollercoasters to the database.
                </p>
                <img src='' alt='' />
                <img src='https://images.ctfassets.net/jqtlvicdu16w/2cnqSfN5yJhi83cGpTvVq2/65a725a7a590acfecac186f6b78e8293/reactjs-development-company.png' alt='' className='language-image' />
                <img src='https://i0.wp.com/ananda-yoga.us/wp-content/uploads/2016/03/js-logo-1.png' alt='' className='language-image' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' alt='' className='language-image' />
            </div>
            <div className="projects">
                <h3 onClick={() => window.open('https://storied-banoffee-f178ce.netlify.app', '_blank')}>
                    MyLieu
                </h3>
                <p>
                    A blog where users can create an account and post their own personal blogs. Users can also view and comment on other users' blogs.
                </p>
                <img src='https://i.imgur.com/zz2XuYl.png' alt='' onClick={() => window.open('https://storied-banoffee-f178ce.netlify.app', '_blank')}/>
                <img src='https://raw.githubusercontent.com/docker-library/docs/01c12653951b2fe592c1f93a13b4e289ada0e3a1/postgres/logo.png' alt='' className='language-image' />
                <img src='https://google.github.io/sqlcommenter/images/sequelize-logo.png' alt='' className='language-image' />
                <img src='https://cdn.worldvectorlogo.com/logos/jwt-3.svg' alt='' className='language-image' />
                <img src='https://images.ctfassets.net/jqtlvicdu16w/2cnqSfN5yJhi83cGpTvVq2/65a725a7a590acfecac186f6b78e8293/reactjs-development-company.png' alt='' className='language-image' />
                <img src='https://i0.wp.com/ananda-yoga.us/wp-content/uploads/2016/03/js-logo-1.png' alt='' className='language-image' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' alt='' className='language-image' />
                
            </div>
            <div className="projects">
                <h3 onClick={() => window.open('https://dynamic-lolly-cbcb11.netlify.app', '_blank')}>
                    MaiBeauty
                </h3>
                <p>
                    A makeup e-commerce site where users can customize shades of makeup.
                </p>
                <img src='https://i.imgur.com/uwkgStY.png' alt='' onClick={() => window.open('https://dynamic-lolly-cbcb11.netlify.app', '_blank')}/>
                <br />
                <img src='https://images.ctfassets.net/jqtlvicdu16w/2cnqSfN5yJhi83cGpTvVq2/65a725a7a590acfecac186f6b78e8293/reactjs-development-company.png' alt='' className='language-image'/>
                <img src='https://g.foolcdn.com/art/companylogos/square/mdb.png' alt='' className='language-image'/>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png' alt='' className='language-image'/>
                <img src='https://miro.medium.com/max/800/1*9AbbVli10NreTXCpiVYEOQ.png' alt='' className='language-image'/>
                <img src='https://i0.wp.com/ananda-yoga.us/wp-content/uploads/2016/03/js-logo-1.png' alt='' className='language-image' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' alt='' className='language-image' />
            </div>
        </div>
    )
}

export default Projects