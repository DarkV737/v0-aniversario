import { AnniversaryHero } from "@/components/anniversary-hero"
import { ImageGallery } from "@/components/image-gallery"
import { MusicPlaylist } from "@/components/music-playlist"
import { LoveMessage } from "@/components/love-message"
import { InfiniteCarousel } from "@/components/infinite-carousel"
import { FloatingHearts } from "@/components/floating-hearts"

export default function AnniversaryPage() {
  return (
    <div className="min-h-screen animated-gradient">
      <FloatingHearts />
      <main className="relative z-10">
        <AnniversaryHero />
        <ImageGallery />
        <MusicPlaylist />
        <InfiniteCarousel />
        <LoveMessage />
      </main>
    </div>
  )
}
