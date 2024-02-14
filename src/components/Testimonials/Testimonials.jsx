import "./testimonials.css";
import { TestimonialsData } from "./TestimonialsData";
// import Swiper core and required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <section className="testimonials section">
            <h2 className="testimonials-title">Testimonials</h2>

            <Swiper className="testimonials-container" pagination={{ dynamicBullets: true, clickable: true }}
                modules={[Pagination]}
                grabCursor={true}
                slidesPerView={2}
                spaceBetween={24}
                // loop={true}
                breakpoints={{
                    350: {
                        slidesPerView: 1
                    },
                    576: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 48
                    }
                }}
            >
                {TestimonialsData.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="testimonial-card" key={id}>
                            <img src={image} alt="Image of author" className="testimonial-image" />

                            <h3 className="testimonial-name">{title}</h3>
                            <p className="testimonial-description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials;