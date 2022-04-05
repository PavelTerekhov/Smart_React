
import slide_1 from '../../recources/slide_1.jpg';
import slide_2 from '../../recources/slide_2.jpg';
import slide_3 from '../../recources/slide_3.jpg';

import '../base/container.scss';
import './carousel.scss';

const Carousel = () => {

    return (
        <section className="carousel">
        <div className="container">
            <div className="carousel__inner">
                <div>
                    <img src={slide_1} alt="slide"/>
                </div>
                {/* <div>
                    <img src={slide_2} alt="slide"/>
                </div>
                <div>
                    <img src={slide_3} alt="slide"/>
                </div> */}
            </div>
        </div>
    </section>
    )
}

export default Carousel;