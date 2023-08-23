import { galleryData } from "@/constants";

import { Container, SectionHeading, GallerySlider } from "@/components";

const Gallery = () => {
  return (
    <section id="gallery" className="bg-gallery cover-norepeat">
      <Container>
        <div className="md:text-center">
          <SectionHeading
            content={galleryData.heading.content}
            highlight={galleryData.heading.highlight}
          />
        </div>
        <GallerySlider photos={galleryData.photos}></GallerySlider>
      </Container>
    </section>
  );
};

export default Gallery;
