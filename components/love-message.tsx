export function LoveMessage() {
  const message =
    "Otro año que nos recuerda el tiempo que pasamos\n\nOtro año que nos recuerda que aunque tengamos malos momentos, aqui estamos\n\nOtro año que nos recuerda por todo lo que pasamos\n\nOtro año que aun sigues siendo enana, mi enana\n\nOtro año donde te veo triunfar y mejorar\n\nOtro año que reafirma mi amor por vos\n\nOtro año..y espero que sea solo otro más del montón\n\nPor que\n\nTe Amo Sol"

  return (
    <section className="py-20 px-4 pb-32">
      <div className="max-w-3xl mx-auto">
        <div className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-serif text-center mb-8 text-foreground">Para Ti</h2>
          <p className="text-lg md:text-xl leading-relaxed whitespace-pre-wrap text-foreground text-pretty">
            {message}
          </p>
        </div>
      </div>
    </section>
  )
}
