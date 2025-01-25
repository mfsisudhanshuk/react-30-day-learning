import React,{} from "react"
import { useState, useRef, useEffect } from "react"

interface ImageProps {
  src: string
  alt: string
}

const LazyImage: React.FC<ImageProps> = ({ src, alt }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsLoaded(true)
          if (imgRef.current) {
            observer.unobserve(imgRef.current)
          }
        }
      },
      
      { threshold: 0.1 },
    )

    console.log('observer', observer);
    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  return (
    <div className="h-96 bg-gray-200 flex items-center justify-center">
      {isLoaded ? (
        <img ref={imgRef} src={src || "/placeholder.svg"} alt={alt} className="max-w-full max-h-full object-contain" />
      ) : (
        <div ref={imgRef} className="text-2xl">
          Loading...
        </div>
      )}
    </div>
  )
}

export default function LazyLoadingGallery() {
  const images = [
    { src: "https://placehold.co/600x400", alt: "Image 1" },
    { src: "https://placehold.co/600x400", alt: "Image 2" },
    { src: "https://placehold.co/600x400", alt: "Image 3" },
    { src: "https://placehold.co/600x400", alt: "Image 4" },
    { src: "https://placehold.co/600x400", alt: "Image 5" },
  ]

  return (
    <div className="space-y-4 p-4">
      <h1 className="text-3xl font-bold mb-4">Lazy Loading Image Gallery</h1>
      {images.map((image, index) => (
        <LazyImage key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  )
}

