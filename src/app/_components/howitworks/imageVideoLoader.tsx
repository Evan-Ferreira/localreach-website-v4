import Image from 'next/image';

interface MediaLoaderProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
}

const ImageVideoLoader = ({ src, alt, width, height, className }: MediaLoaderProps) => {
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');

  if (isVideo) {
    return (
      <video
        src={src}
        width={width}
        height={height}
        className={className}
        autoPlay
        muted
        loop
        playsInline
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};

export default ImageVideoLoader;
