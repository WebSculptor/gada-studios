import { LazyLoadImage } from "react-lazy-load-image-component";

export const LazyLoadImageComponent = ({ src, alt }) => (
  <LazyLoadImage src={src} alt={alt} effect="blur" />
);
