const API_BASE_URL = (
  import.meta.env.VITE_API_URL ?? "http://localhost:5000"
).replace(/\/$/, "");

const Login = () => {
  const handleGithubLogin = () => {
    window.location.href = `${API_BASE_URL}/api/auth/github`;
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#0b1020] text-white">
      <section className="relative flex min-h-screen items-center justify-center px-5 py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(20,184,166,0.22),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.22),transparent_28%),linear-gradient(135deg,#0b1020_0%,#111827_48%,#06151f_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40" />

        <div className="relative grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.08] px-3 py-1.5 text-sm text-cyan-100 shadow-2xl shadow-cyan-950/20 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
              Code review workspace
            </div>

            <div className="max-w-2xl space-y-5">
              <h1 className="text-4xl font-semibold tracking-normal text-balance sm:text-5xl lg:text-6xl">
                Review pull requests with a sharper developer console.
              </h1>
              <p className="max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Connect GitHub to inspect diffs, comments, and repository
                context from one focused review surface.
              </p>
            </div>

            <div className="grid max-w-2xl gap-3 sm:grid-cols-3">
              {["Diff aware", "GitHub native", "Fast triage"].map((item) => (
                <div
                  className="rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 text-sm text-slate-200 backdrop-blur"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto w-full max-w-md rounded-lg border border-white/10 bg-slate-950/78 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
                  Sign in
                </p>
                <h2 className="mt-2 text-2xl font-semibold">
                  Welcome back Aliens 👽
                </h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/10 bg-white/[0.08]">
                <svg
                  aria-hidden="true"
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.96c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.8c0 .27.18.59.69.49A10.17 10.17 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
                </svg>
              </div>
            </div>

            <button
              className="group flex h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-white px-5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:bg-cyan-100 focus:outline-none focus:ring-4 focus:ring-cyan-400/30"
              onClick={handleGithubLogin}
              type="button"
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.58 2 12.24c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49v-1.9c-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.96c.85 0 1.7.12 2.5.34 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.8c0 .27.18.59.69.49A10.17 10.17 0 0 0 22 12.24C22 6.58 17.52 2 12 2Z" />
              </svg>
              Continue with GitHub
            </button>

            <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

            <div className="space-y-3 rounded-lg border border-white/10 bg-white/[0.04] p-4 font-mono text-xs text-slate-300">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">provider</span>
                <span className="text-emerald-300">github.oauth</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">scope</span>
                <span>read:user user:email</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">status</span>
                <span className="text-cyan-300">ready</span>
              </div>
            </div>

            <p className="mt-6 text-center text-sm leading-6 text-slate-400">
              Secure access for repositories, pull requests, and review
              comments.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
