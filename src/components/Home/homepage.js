import videoHomepage from '../../assets/video-homepage.mp4'

const Homepage = () => {
    return (
        <div className="homepage-container">
            <video autoPlay muted loop>
                <source src={videoHomepage}
                    type="video/mp4" />
            </video>
            <div className='homepage-content'>
                <div className='title-1'>Looks striking. Feels effortless.</div>
                <div className='title-2'>Impress your form takers.
                    Catch their eye with striking visuals, and make form-filling
                    feel effortless by replacing walls of questions with just one at a time.</div>
                <div className='title-3'><button>Get's started</button></div>
            </div>
        </div>
    )
};

export default Homepage;