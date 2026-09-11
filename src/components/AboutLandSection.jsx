import React from 'react';
import SectionLabel from './SectionLabel';
import { siteConfig } from '../config/siteConfig';

export default function AboutLandSection() {
  const sections = [
    {
      image: siteConfig.images.aboutOffer1,
      title: 'Shaping Possibilities. Creating Enduring Value.',
      content: (
        <>
          <p>
            For decades, Snehadeep Properties has been driven by a singular
            ambition — <strong>to recognise the extraordinary potential of land
            and transform opportunity into enduring value.</strong>
          </p>

          <p>
            With a deep understanding of Central India and an experience shaped
            by years of working with land, development and distinguished
            partners, we bring together <strong>insight, relationships and
            vision</strong> to discover opportunities that stand apart.
          </p>
        </>
      ),
    },

    {
  image: siteConfig.images.aboutOffer2,

  title: 'Our endeavour extends beyond conventional real estate.',

  content: (
    <>
      <p>
        We seek <strong>land with character.</strong>
        <br />
        <strong>Land with distinction.</strong>
        <br />
        <strong>Land with a story yet to be written.</strong>
      </p>

      <p>
        From magnificent <strong>waterfront and lakeside parcels</strong> to
        serene <strong>hillside landscapes, expansive natural settings and
        strategically positioned land holdings</strong>, our focus is on
        locations where the inherent beauty, scale and setting create
        possibilities far beyond the ordinary.
      </p>
    </>
  ),
},

    {
      image: siteConfig.images.projectNarmada,
      title: 'THE ART OF RECOGNISING POSSIBILITY',
      subtitle: 'Because the true value of land is not always visible at first sight.',
      content: (
        <>
          <p>
            A remarkable piece of land is more than its boundaries, dimensions
            or coordinates.
          </p>

          <p>
            Its true significance lies in <strong>where it stands, what
            surrounds it, what it can become and the vision it can inspire.</strong>
          </p>
        </>
      ),
    },

    {
  image: siteConfig.images.projectHorizon,

  title: 'Our experience allows us to look beyond the present.',

  content: (
    <>
      <p>
        To recognise the potential of a lakeside retreat, a hillside
        destination, a nature-led development, a corporate sanctuary, a
        wellness centre, an exclusive resort or a strategically acquired
        investment asset.
      </p>

      <p>
        <strong>We don't merely identify land.</strong>
        <br />
        <strong>We identify possibility.</strong>
      </p>
    </>
  ),
},

    {
      image: siteConfig.images.aboutus5,
      title: 'BUILT ON TRUST. DRIVEN BY COMMITMENT.',
      subtitle: 'Relationships are our most enduring asset.',
      content: (
        <>
          <p>
            Our excellence is forged through the spirit of our team, the
            strength of our partnerships and the trust placed in us by our
            clients and collaborators.
          </p>

          <p>
            Over the years, these relationships have shaped Snehadeep
            Properties into a name associated with <strong>quality,
            transparency, integrity and commitment.</strong>
          </p>

          <p>
            It is a relationship entrusted to us.
          </p>
        </>
      ),
    },
  ];

  return (
    <section className="page-shell py-14 sm:py-20 lg:py-24">

      {/* =====================================================
          SECTION HEADING
      ===================================================== */}

      <div className="px-2 sm:px-6">
        <SectionLabel>THE LAND WE OFFER</SectionLabel>

        <h2 className="display-heading mt-4 text-4xl sm:text-5xl lg:text-6xl">
          Scenic. Serene.{' '}
          <em className="text-[#65775e]">Strategic.</em>
        </h2>
      </div>


      {/* =====================================================
          5 ALTERNATING STORY SECTIONS
      ===================================================== */}

      <div className="mt-12 space-y-16 sm:mt-16 sm:space-y-24 lg:mt-20 lg:space-y-32">

        {sections.map((section, index) => {
          const imageLeft = index % 2 === 0;

          return (
            <div
              key={index}
              className={`
                grid
                items-center
                gap-8
                lg:grid-cols-2
                lg:gap-16
              `}
            >

              {/* =================================================
                  IMAGE
              ================================================= */}

              <div
                className={`
                  overflow-hidden
                  rounded-[28px]
                  ${imageLeft ? 'lg:order-1' : 'lg:order-2'}
                `}
              >
                <img
                  src={section.image}
                  alt={`Snehadeep Properties story ${index + 1}`}
                  draggable="false"
                  className="
                    h-[320px]
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    hover:scale-105
                    sm:h-[420px]
                    lg:h-[520px]
                  "
                />
              </div>


              {/* =================================================
                  TEXT
              ================================================= */}

              <div
                className={`
                  px-2
                  sm:px-6
                  ${imageLeft ? 'lg:order-2' : 'lg:order-1'}
                `}
              >

                {section.title && (
                  <h3
                    className="
                      display-heading
                      max-w-xl
                      text-3xl
                      leading-tight
                      sm:text-4xl
                      lg:text-5xl
                    "
                  >
                    {section.title}
                  </h3>
                )}

                {section.subtitle && (
                  <p
                    className="
                      mt-5
                      max-w-xl
                      text-lg
                      font-medium
                      leading-7
                      text-[#65775e]
                      sm:text-xl
                    "
                  >
                    {section.subtitle}
                  </p>
                )}

                <div className="mt-6 h-px w-12 bg-[#173326]" />

                <div
                  className="
                    mt-7
                    max-w-xl
                    space-y-6
                    text-base
                    leading-8
                    text-[#455349]
                    sm:text-lg
                    sm:leading-8
                  "
                >
                  {section.content}
                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}