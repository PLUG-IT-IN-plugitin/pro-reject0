import Image from 'next/image'

const stats = [
  { label: 'Sync latency', value: '12 ms' },
  { label: 'Streams in lock', value: 'Train + Car' },
  { label: 'Tracking accuracy', value: '99.8%' },
]

export function RealtimeHero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden bg-[#05070d] text-white"
    >
      <Image
        src="/images/realtime-crosshairs.png"
        alt="Aerial night view of a bullet train crossing over a highway, with a holographic crosshair locking onto the train and a car as they pass in sync, surrounded by live telemetry readouts."
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-[#05070d] via-[#05070d]/60 to-transparent"
      />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 pb-16 pt-40 md:pb-20">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-cyan-300">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-300 opacity-75 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-cyan-300" />
          </span>
          Live · Sync lock acquired
        </div>

        <div className="flex max-w-3xl flex-col gap-4">
          <h1
            id="hero-title"
            className="text-balance text-4xl font-semibold tracking-tight md:text-6xl"
          >
            Every moving part, <span className="text-amber-400">in lock.</span>
          </h1>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-white/75">
            Trains, cars, and infrastructure share a single real-time picture, so a
            train and a car can cross at the same point within milliseconds of each other.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1 bg-[#05070d]/80 p-5 backdrop-blur">
              <dt className="font-mono text-xs uppercase tracking-widest text-white/50">
                {stat.label}
              </dt>
              <dd className="font-mono text-2xl text-cyan-300">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
