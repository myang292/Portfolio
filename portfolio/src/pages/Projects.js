import { useNavigate } from "react-router-dom"

const Projects = () => {



    return(
        <div className="wrapper">
            <div className="projects">
                <h3 onClick={() => window.open('http://logos_trivia.surge.sh', '_blank')}>
                    Trivia
                </h3>
                <p>
                    This was my very first project. 
                </p>
                <img src='https://i.imgur.com/26SNxdO.png' alt='' className='project-image' />
                <br />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/HTML5_logo_resized.svg/1200px-HTML5_logo_resized.svg.png' alt='' className='language-image' />
                <img src='https://i0.wp.com/ananda-yoga.us/wp-content/uploads/2016/03/js-logo-1.png' alt='' className='language-image' />
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' alt='' className='language-image' />
            </div>


            <div className="projects">
                <h3>
                    Pokedex
                </h3>
                <p>
                    Pokedex description
                </p>
                <img src='' alt='' />
                <br />
                <img src='https://images.ctfassets.net/jqtlvicdu16w/2cnqSfN5yJhi83cGpTvVq2/65a725a7a590acfecac186f6b78e8293/reactjs-development-company.png' alt='' className='language-image'/>
            </div>

            <div className="projects">
                <h3>
                    Rollercoaster
                </h3>
                <p>
                    Rollercoaster description
                </p>
                <img src='' alt='' />
                <img src='https://images.ctfassets.net/jqtlvicdu16w/2cnqSfN5yJhi83cGpTvVq2/65a725a7a590acfecac186f6b78e8293/reactjs-development-company.png' alt='' className='language-image' />
            </div>
            <div className="projects">
                <h3>
                    MyLieu
                </h3>
                <p>
                    MyLieu description
                </p>
                <img src='' alt='' />
                <img src='https://cdn.worldvectorlogo.com/logos/jwt-3.svg' alt='' className='language-image' />
                    <img src='https://images.ctfassets.net/jqtlvicdu16w/2cnqSfN5yJhi83cGpTvVq2/65a725a7a590acfecac186f6b78e8293/reactjs-development-company.png' alt='' className='language-image' />
            </div>
            <div className="projects">
                <h3>
                    MaiBeauty
                </h3>
                <p>
                    MyLieu description
                </p>
                <img src='' alt='' />
                <img src='https://cdn.worldvectorlogo.com/logos/jwt-3.svg' alt='' className='language-image' />
                    <img src='https://images.ctfassets.net/jqtlvicdu16w/2cnqSfN5yJhi83cGpTvVq2/65a725a7a590acfecac186f6b78e8293/reactjs-development-company.png' alt='' className='language-image' />
            </div>
        </div>
    )
}

export default Projects