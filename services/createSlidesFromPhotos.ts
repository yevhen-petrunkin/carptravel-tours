import { GalleryPhotoT } from "@/types";

function createSlidesFromPhotos(photos: GalleryPhotoT[]): GalleryPhotoT[] {
  if (photos.length >= 20) {
    return photos;
  }

  let slides: GalleryPhotoT[] = [];

  while (slides.length < 20) {
    slides = [...slides, ...photos];
  }

  return slides;
}

export default createSlidesFromPhotos;
