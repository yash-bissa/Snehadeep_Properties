import React, { useRef, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import SectionLabel from './SectionLabel';
import { siteConfig } from '../config/siteConfig';

export default function ProjectsSection() {

  const galleryRef = useRef(null);

  function slideGallery(direction) {
    if (!galleryRef.current) return;

    galleryRef.current.scrollBy({
      left: direction * 500,
      behavior: 'smooth',
    });
  }

  const [showAll, setShowAll] = useState(false);

  const galleryImages = siteConfig.images.homeGallery;
  // const galleryImages = [
  //   siteConfig.images.projectRiver,
  //   siteConfig.images.projectAcres,
  //   siteConfig.images.projectNarmada,
  //   siteConfig.images.projectHorizon,

  //   // ADD YOUR 4 NEW IMAGES HERE
  //   siteConfig.images.project5,
  //   siteConfig.images.project6,
  //   siteConfig.images.project7,
  //   siteConfig.images.project8,
  // ];

  return (
    <>
      <section className="page-shell py-12 sm:py-16">
        {/* Heading */}
        <div className="flex items-end justify-between gap-6 px-2 sm:px-6">
          <div>
            <SectionLabel>WE OFFER </SectionLabel>

            <h2 className="display-heading mt-4 text-4xl sm:text-5xl">
              Ideal for Luxury Estate
              <br /> 
              & Investment
            </h2>
          </div>
{/* Ideal for luxury estate & investment */}
          {/* View All */}
          <button
            type="button"
            onClick={() => setShowAll(true)}
            className="hidden items-center gap-4 border-b border-[#173326] pb-1 text-sm transition hover:opacity-60 sm:inline-flex"
          >
            View All
            <ArrowRight size={17} />
          </button>
        </div>

        {/* Mobile View All */}
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="mt-5 ml-2 inline-flex items-center gap-3 border-b border-[#173326] pb-1 text-sm sm:hidden"
        >
          View All Projects
          <ArrowRight size={16} />
        </button>

        {/* Gallery */}
        <div className="mt-8 overflow-hidden">
          <div
            className="
              flex gap-3 overflow-x-auto
              pb-3
              snap-x snap-mandatory
              scrollbar-hide
              sm:grid sm:grid-cols-2
              lg:flex
              lg:overflow-x-auto
            "
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="
                  group
                  relative
                  flex-none
                  overflow-hidden
                  rounded-[20px]
                  snap-start
                  w-[82vw]
                  sm:w-auto
                  lg:w-[calc((100%-50px)/6)]
                "
              >
                <img
                  src={image}
                  alt={`Snehadeep Properties landscape ${index + 1}`}
                  className="
                    h-[280px]
                    w-full
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-105
                    sm:h-[320px]
                    lg:h-[310px]
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expanded Gallery */}
      {showAll && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-[#10271c]/95 px-4 py-8 sm:px-8">
          
          {/* Close */}
          <button
            type="button"
            onClick={() => setShowAll(false)}
            className="
              fixed
              right-5
              top-5
              z-[110]
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              bg-white
              text-[#173326]
              shadow-lg
              transition
              hover:scale-105
            "
            aria-label="Close gallery"
          >
            <X size={22} />
          </button>

          <div className="mx-auto max-w-[1500px] pt-8">
            <div className="mb-8">
              <SectionLabel>OUR PROJECTS</SectionLabel>

              <h2 className="display-heading mt-3 text-4xl text-white sm:text-5xl">
                Landscapes That Inspire
              </h2>
            </div>

            {/* All Images */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[20px]"
                >
                  <img
                    src={image}
                    alt={`Snehadeep Properties landscape ${index + 1}`}
                    className="
                      aspect-[4/3]
                      h-full
                      w-full
                      object-cover
                      transition
                      duration-500
                      hover:scale-105
                    "
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}