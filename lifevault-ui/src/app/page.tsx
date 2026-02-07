import Image from "next/image";

const features = [
  {
    title: "End-to-end encryption",
    desc: "Your data is encrypted on your device and stays private.",
  },
  {
    title: "Zero-knowledge architecture",
    desc: "We cannot access your vault, even if we wanted to.",
  },
  {
    title: "Complete control",
    desc: "Decide who can access what, and when.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#f4f6fb]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(59,130,246,0.10),transparent_40%),radial-gradient(circle_at_90%_15%,rgba(14,165,233,0.10),transparent_45%),radial-gradient(circle_at_30%_90%,rgba(148,163,184,0.16),transparent_45%)]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 sm:px-10 lg:px-14">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-sky-400 text-xs font-bold text-white">
              L
            </div>
            <span className="text-sm font-semibold text-slate-900">LifeVault</span>
          </div>
          <div className="text-xs text-slate-500">
            Bank-level encryption • Zero-knowledge
          </div>
        </header>

        <main className="mt-10 rounded-3xl bg-white/80 p-6 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] backdrop-blur sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <section className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                Trusted by 50,000+ families
              </div>

              <h1 className="text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
                Your complete legacy, organized and protected
              </h1>
              <p className="max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                Document and secure your assets, passwords, and wishes in one
                encrypted vault. Only you control the keys.
              </p>

              <div className="space-y-4">
                {features.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="text-xs text-slate-500 sm:text-sm">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-slate-900">
                  Start Securing Your Legacy
                </h2>
                <p className="text-xs text-slate-500">
                  Create your free account in 2 minutes
                </p>
              </div>

              <form className="mt-5 space-y-3" suppressHydrationWarning>
                <div>
                  <label className="text-xs font-medium text-slate-600">
                    Full name
                  </label>
                  <input
                    suppressHydrationWarning
                    type="text"
                    placeholder="Alex Johnson"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600">
                    Email
                  </label>
                  <input
                    suppressHydrationWarning
                    type="email"
                    placeholder="alex@email.com"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-slate-600">
                    Password
                  </label>
                  <input
                    suppressHydrationWarning
                    type="password"
                    placeholder="Create a password"
                    className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                  />
                </div>

                <button
                  type="button"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Get Started Free
                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-4 w-4"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M4 10h12M12 4l4 6-4 6" />
                  </svg>
                </button>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <div className="h-px flex-1 bg-slate-200" />
                  OR
                  <div className="h-px flex-1 bg-slate-200" />
                </div>

                <button
                  type="button"
                  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                  I already have an account
                </button>
              </form>

              <p className="mt-4 text-[11px] leading-4 text-slate-400">
                By continuing, you agree to the Terms and Privacy Policy.
              </p>
            </section>
          </div>
        </main>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs text-slate-500 shadow sm:flex">
        <Image src="/vercel.svg" alt="logo" width={14} height={14} />
        Your data is encrypted and only accessible by you
      </div>
    </div>
  );
}