import React from 'react';
import {
  Building2,
  Hotel,
  Leaf,
  LineChart,
  Users,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import SectionLabel from '../components/SectionLabel';
import { siteConfig } from '../config/siteConfig';

export default function WeOffer() {
  const navigate = useNavigate();

  /*
   * ============================================================
   * IMAGE MAP
   * ============================================================
   *
   * All images continue to come from siteConfig.
   * If you want to replace a photograph later, change it there.
   */

  const galleryImages = [
    {
      image: siteConfig.images.weOffer2,
      label: 'WATER FRONT',
      title: 'Higher ground. Greater potential.',
    },
    {
      image: siteConfig.images.weOffer3,
      label: 'RIVERFRONT',
      title: 'Flowing with opportunity.',
    },
    {
      image: siteConfig.images.weOffer4,
      label: 'HILL SIDE',
      title: "Nature's wealth.",
    },
    {
      image: siteConfig.images.weOffer5,
      label: 'LAND PARCELS',
      title: 'Built for the future.',
    },
    {
      image: siteConfig.images.aboutOffer3,
      label: 'SCENIC SURROUNDINGS',
      title: 'In harmony with life.',
    },
  ];

  const stakeholders = [
    {
      icon: LineChart,
      title: 'Investors',
      subtitle: 'Long-term value',
    },
    {
      icon: Users,
      title: 'Corporate',
      subtitle: 'Strategic growth',
    },
    {
      icon: Building2,
      title: 'Institutions',
      subtitle: 'Future-ready assets',
    },
    {
      icon: Hotel,
      title: 'Hospitality',
      subtitle: 'Unique experiences',
    },
    {
      icon: Leaf,
      title: 'Wellness & Lifestyle',
      subtitle: 'Balanced living',
    },
  ];

  return (
    <>
      {/* ==========================================================
          01 — HERO
          ========================================================== */}

      <section className="page-shell pt-0">
        <div className="relative min-h-[560px] overflow-hidden rounded-[22px] bg-[#f4f1e8] sm:min-h-[650px]">

          {/* Large background landscape */}

          <img
            src={siteConfig.images.weOfferBanner1}
            alt="Natural waterfront landscape"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Soft cream overlay.
              This is intentionally much lighter than the old hero. */}

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, #f4f1e8 0%, rgba(244,241,232,.98) 28%, rgba(244,241,232,.78) 43%, rgba(244,241,232,.18) 67%, rgba(244,241,232,0) 100%)',
            }}
          />

          <div className="relative mx-auto flex min-h-[560px] max-w-[1450px] items-center px-7 py-20 sm:min-h-[650px] sm:px-10 lg:px-14">

            <div className="max-w-[610px]">

              <SectionLabel>
                PREMIUM LAND OPPORTUNITIES
              </SectionLabel>

              <h1 className="display-heading mt-5 text-5xl leading-[0.94] sm:text-6xl lg:text-[72px]">
                Exceptional Locations.
                <br />
                Strategic Possibilities.
                <br />
                Enduring Potential.
              </h1>

              <div className="mt-7 h-px w-12 bg-[#173326]" />

              <p className="mt-6 max-w-[480px] text-base leading-7 text-[#435149] sm:text-lg">
                Places that are thoughtfully chosen. For visionaries who see
                beyond today — and invest in a better tomorrow.
              </p>

            </div>
          </div>
        </div>
      </section>


      {/* ==========================================================
          02 — WHERE NATURE BECOMES PART OF THE VISION
          ========================================================== */}

      <section className="page-shell py-14 sm:py-20 lg:py-24">

        <div className="grid items-center lg:grid-cols-[1.05fr_0.95fr]">

          {/* Image */}

          <div className="relative z-10 overflow-hidden rounded-[22px] lg:mr-[-55px]">

            <img
              src={siteConfig.images.weOffer1}
              alt="Waterfront land surrounded by nature"
              className="block h-[360px] w-full object-cover sm:h-[480px] lg:h-[520px]"
            />

          </div>

          {/* Text panel */}

          <div className="bg-[#f4f1e8] py-8 lg:py-14 lg:pl-[105px]">

            <SectionLabel>
              MORE THAN LAND
            </SectionLabel>

            <h2 className="display-heading mt-5 text-4xl leading-[1.02] sm:text-5xl lg:text-[52px]">

              Where Nature
              <br />
              Becomes Part
              <br />
              of the Vision.

            </h2>

            <div className="mt-6 h-px w-10 bg-[#173326]" />

            <p className="mt-6 max-w-[500px] text-base leading-7 text-[#56635b] sm:text-lg">
              We bring together the finest natural locations with long-term
              value, creating opportunities that inspire sustainable growth and
              lasting impact.
              There are locations whose greatest asset is the environment itself.
              <br />
              A tranquil waterfront land.<br />
              A panoramic hillside land.<br />
              The quiet edge of a lake view land.<br />
              An expansive natural landscape.

            </p>

          </div>

        </div>

      </section>


      {/* ==========================================================
          03 — WHO THESE OPPORTUNITIES ARE FOR
          ========================================================== */}

      <section className="page-shell pb-14 sm:pb-20 lg:pb-24">

        <div className="border-t border-[#173326]/10 pt-10 sm:pt-12">

          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr] lg:gap-20">

            {/* Main heading */}

            <div>

              <SectionLabel>
                BUILT FOR A BRIGHTER TOMORROW
              </SectionLabel>

              <h2 className="display-heading mt-5 max-w-[650px] text-4xl leading-[1.02] sm:text-5xl lg:text-[55px]">

                For investors,
                <br />
                corporate and institutions,
                <br />
                hospitality, wellness
                <br />
                and lifestyle.

              </h2>

            </div>


            {/* Supporting copy */}

            <div className="flex items-center">

              <p className="max-w-[500px] text-base leading-7 text-[#59655d] sm:text-lg">

                Our land offerings are designed to meet the evolving needs of a
                wide spectrum of stakeholders — from individual investors to
                corporations, institutions, hospitality brands, wellness
                retreats and lifestyle developers.

              </p>

            </div>

          </div>


          {/* ========================================================
              STAKEHOLDER ICON ROW
              ======================================================== */}

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">

            {stakeholders.map((item, index) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className={`
                    px-4 text-center
                    lg:px-6
                    ${
                      index !== stakeholders.length - 1
                        ? 'lg:border-r lg:border-[#173326]/15'
                        : ''
                    }
                  `}
                >

                  <Icon
                    size={34}
                    strokeWidth={1.35}
                    className="mx-auto text-[#173326]"
                  />

                  <h3 className="mt-4 text-sm font-semibold text-[#173326]">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#6a746d]">
                    {item.subtitle}
                  </p>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* ==========================================================
          04 — PROPERTY / LANDSCAPE GALLERY
          ========================================================== */}

      <section className="page-shell pb-14 sm:pb-20 lg:pb-24">

        {/* First row — two large images */}

        <div className="grid gap-3 md:grid-cols-2">

          {galleryImages.slice(0, 2).map((item) => (

            <div
              key={item.title}
              className="group relative h-[270px] overflow-hidden rounded-[20px] sm:h-[350px] lg:h-[390px]"
            >

              <img
                src={item.image}
                alt={item.title}
                className="block h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 text-white sm:left-7">

                <p className="text-[10px] tracking-[0.22em]">
                  {item.label}
                </p>

                <p className="mt-1 text-lg sm:text-xl">
                  {item.title}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* Second row — three images */}

        <div className="mt-3 grid gap-3 sm:grid-cols-3">

          {galleryImages.slice(2).map((item) => (

            <div
              key={item.title}
              className="group relative h-[230px] overflow-hidden rounded-[20px] sm:h-[290px] lg:h-[310px]"
            >

              <img
                src={item.image}
                alt={item.title}
                className="block h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 text-white sm:left-6">

                <p className="text-[9px] tracking-[0.2em]">
                  {item.label}
                </p>

                <p className="mt-1 text-base sm:text-lg">
                  {item.title}
                </p>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* ==========================================================
          05 — FOUNDATION FOR TOMORROW
          ========================================================== */}

      <section className="page-shell pb-8 sm:pb-12">

        <div className="relative overflow-hidden rounded-[22px] bg-[#173326]">

          {/* Background */}

          <img
            src={siteConfig.images.ctaBackground}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-25"
          />

          <div className="absolute inset-0 bg-[#0a2418]/75" />


          {/* Content */}

          <div className="relative grid items-center gap-10 px-7 py-10 text-white sm:px-10 sm:py-14 lg:grid-cols-[1fr_0.9fr] lg:px-16 lg:py-16">

            <div>

              <SectionLabel>
                THE RIGHT LAND. THE RIGHT VISION.
              </SectionLabel>

              <h2 className="display-heading mt-5 text-4xl leading-[1] sm:text-5xl lg:text-[55px]">

                A Foundation
                <br />
                for <em className="text-[#b8c4a4]">Tomorrow.</em>

              </h2>

              <div className="mt-6 h-px w-10 bg-white/70" />

            </div>


            <div className="border-l border-white/20 pl-6 lg:pl-10">

              <p className="text-base leading-7 text-white/80 sm:text-lg">

                Every location is carefully evaluated for its location,
                accessibility, scale, surroundings, character and future
                potential — ensuring that your investment grows with time,
                not just in value, but in purpose.

              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}