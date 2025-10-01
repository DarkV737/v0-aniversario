export function AnniversaryHero() {
  const loveLink = "https://play.blooket.com/play?hwId=68db5c5ee642b90ea18379c9" // Cambia este link por el tuyo

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
      <div className="text-center space-y-6 max-w-4xl">
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground text-balance animate-fade-in-up">
          Feliz Aniversario
        </h1>
        <p className="text-3xl md:text-5xl lg:text-6xl font-serif animate-fade-in-up animation-delay-200 text-destructive-foreground">
          Mi{" "}
          <a
            href={loveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity cursor-pointer underline decoration-2 underline-offset-4"
          >
            Amor
          </a>
        </p>
      </div>
    </section>
  )
}
