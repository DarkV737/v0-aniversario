export function MusicPlaylist() {
  const playlistId = "PLVRGQVfeuUmP1nLcu_K3cPIGapMQQMF6G"

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 text-foreground">Te las dedico   </h2>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl"
              src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
              title="YouTube Music Playlist"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
