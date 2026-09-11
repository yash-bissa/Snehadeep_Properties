import React, { useEffect, useState } from 'react';
import { MapPin, Leaf, TreePine, TrendingUp } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { siteConfig } from '../config/siteConfig';
import { useNavigate } from 'react-router-dom';

// Hero component is shared between Home and About Us pages.
// The Home page gets an automatic image slider.
// The About Us page keeps its single static hero image.
export default function Hero({ about = false }) {

  // Used to navigate the user to our React Contact page.
  const navigate = useNavigate();

  // Stores which Home hero image is currently visible.
  const [activeSlide, setActiveSlide] = useState(0);

  // Get the Home hero images from our central configuration file.
  const heroSlides = siteConfig.images.homeHeroSlides;

  // Automatically move to the next image every 5 seconds.
  useEffect(() => {

    // Don't create a slider for the About page.
    if (about) return;

    const sliderTimer = setInterval(() => {
      setActiveSlide((currentSlide) => {
        return (currentSlide + 1) % heroSlides.length;
      });
    }, 5000);

    // Clear the timer when the component is removed.
    return () => clearInterval(sliderTimer);

  }, [about, heroSlides.length]);


  // Allows the user to manually click a slider dot.
  const changeSlide = (slideNumber) => {
    setActiveSlide(slideNumber);
  };


  return (
    <section className="page-shell pt-0 sm:pt-2">

      <div className="relative min-h-[530px] overflow-hidden rounded-[28px] bg-[#10271c] sm:min-h-[570px] lg:min-h-[590px]">

        {/* =====================================================
            HERO BACKGROUND IMAGES
            =====================================================

            Home:
            Multiple images are rendered and one is shown at a time.

            About:
            Only the About hero image is displayed.
        */}

        {!about && heroSlides.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              activeSlide === index
                ? 'opacity-100'
                : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}


        {/* About Us uses one static background image. */}
        {about && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${siteConfig.images.aboutHero})`,
            }}
          />
        )}


        {/* =====================================================
            DARK OVERLAY
            =====================================================

            This keeps the text readable even when the photograph
            is bright.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(5,24,15,.90) 0%, rgba(5,24,15,.62) 36%, rgba(5,24,15,.12) 70%)',
          }}
        />

        {/* Bottom gradient for additional readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07170f]/35 via-transparent to-transparent" />


        {/* =====================================================
            HERO CONTENT
            ===================================================== */}
        <div className="relative flex min-h-[530px] max-w-3xl flex-col justify-center px-7 py-16 text-white sm:min-h-[570px] sm:px-12 lg:min-h-[590px] lg:px-14">

          <SectionLabel>
            {about
              ? 'ABOUT US'
              : 'LAND FOR A BETTER TOMORROW'}
          </SectionLabel>


          {/* Main hero heading */}
          <h1 className="display-heading mt-4 max-w-2xl text-5xl sm:text-6xl lg:text-7xl">

            {about ? (
              <>
                Land
                <br />
                with a{' '}
                <em className="text-[#b8c4a4]">
                  Purpose
                </em>
              </>
            ) : (
              <>
                Premium Lands
                <br />
                Near Nagpur
                <br />
                <em className="text-[#b8c4a4]">
                  for a Greener Future
                </em>
              </>
            )}

          </h1>


          {/* Small decorative line */}
          <div className="mt-5 h-px w-11 bg-white/80" />


          {/* Hero description */}
          <p className="mt-5 max-w-lg text-base leading-6 text-white/90 sm:text-lg">

            {about
              ? 'Premium land near Nagpur, for a greener tomorrow.'
              : 'Discover scenic water frontage lands, green surroundings and land selected for long-term value.'}

          </p>


          {/* Contact button */}
          <button
            type="button"
            onClick={() => navigate('/contact')}
            className="mt-7 w-fit rounded-full border border-white bg-white px-6 py-3 text-sm font-medium text-[#173326] transition hover:bg-transparent hover:text-white"
          >
            Contact Us

            <span className="ml-4 text-xl leading-none">
              →
            </span>
          </button>


          {/* Hero features */}
          <div className="mt-10 flex flex-wrap items-center gap-5 text-xs text-white/90 sm:gap-8">

            <span className="flex items-center gap-2">
              <Leaf size={17} />
              lake view lands
            </span>

            <span className="flex items-center gap-2">
              <TreePine size={17} />
              Green surroundings
            </span>

            {!about && (
              <span className="flex items-center gap-2">
                <TrendingUp size={17} />
                Long-term value
              </span>
            )}

          </div>

        </div>


        {/* =====================================================
            LOCATION BADGE
            ===================================================== */}
        <div className="absolute bottom-5 right-5 flex items-center gap-3 rounded-full border border-white/20 bg-[#10271c]/55 px-4 py-3 text-xs text-white backdrop-blur-md sm:bottom-7 sm:right-7">

          <MapPin size={17} />

          Near Nagpur, Maharashtra

        </div>


        {/* =====================================================
            SLIDER DOTS
            =====================================================

            These dots appear only on the Home page.
            Clicking a dot manually changes the image.
        */}
        {!about && (
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 sm:bottom-7">

            {heroSlides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => changeSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full border border-white transition-all duration-300 ${
                  activeSlide === index
                    ? 'w-7 bg-white'
                    : 'w-2.5 bg-transparent'
                }`}
              />
            ))}

          </div>
        )}

      </div>

    </section>
  );
}