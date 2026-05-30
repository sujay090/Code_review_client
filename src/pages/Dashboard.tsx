import { useEffect, useState } from "react";

const metrics = [
  {
    label: "Open reviews",
    value: "18",
    trend: "+4 today",
    tone: "text-cyan-300",
  },
  {
    label: "Merged this week",
    value: "42",
    trend: "91% clean",
    tone: "text-emerald-300",
  },
  {
    label: "Blocked PRs",
    value: "5",
    trend: "2 urgent",
    tone: "text-amber-300",
  },
  {
    label: "CI failures",
    value: "7",
    trend: "-3 since noon",
    tone: "text-rose-300",
  },
];

const reviewQueue = [
  {
    repo: "api-gateway",
    title: "Harden GitHub OAuth callback validation",
    author: "samir-dev",
    status: "Needs review",
    tone: "bg-cyan-400/[0.12] text-cyan-200 ring-cyan-300/20",
  },
  {
    repo: "code-review-client",
    title: "Add authenticated dashboard shell",
    author: "maxff",
    status: "Ready",
    tone: "bg-emerald-400/[0.12] text-emerald-200 ring-emerald-300/20",
  },
  {
    repo: "worker-jobs",
    title: "Retry failed diff analysis tasks",
    author: "nora",
    status: "CI failing",
    tone: "bg-rose-400/[0.12] text-rose-200 ring-rose-300/20",
  },
];

const activity = [
  "OAuth app settings updated",
  "3 review comments resolved",
  "New repository connected",
  "CI signal refreshed",
];

type User = {
  id: string;
  githubId: string;
  username: string;
  email: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
};

const Dashboard = () => {
  const [userData, setUserData] = useState<Partial<User>>({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("http://localhost:4020/api/auth/me", {
          method: "GET",
          credentials: "include",
        });
        const data = await response.json();
        if (response.ok) {
          setUserData(data);
        } else {
          setUserData({});
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0f1d] text-slate-100">
      <div className="flex min-h-screen">
        <aside className="hidden w-64 border-r border-white/10 bg-slate-950/70 px-5 py-6 lg:block">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-300 text-slate-950">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m16 18 6-6-6-6" />
                <path d="m8 6-6 6 6 6" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold">Review Console</p>
              <p className="text-xs text-slate-500">GitHub workspace</p>
            </div>
          </div>

          <nav className="space-y-1 text-sm">
            {[
              "Dashboard",
              "Pull requests",
              "Repositories",
              "Checks",
              "Settings",
            ].map((item) => (
              <button
                className={`flex h-10 w-full items-center rounded-lg px-3 text-left transition ${
                  item === "Dashboard"
                    ? "bg-white text-slate-950"
                    : "text-slate-400 hover:bg-white/[0.08] hover:text-white"
                }`}
                key={item}
                type="button"
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        <section className="flex-1">
          <header className="border-b border-white/10 bg-slate-950/55 px-5 py-4 backdrop-blur md:px-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm text-cyan-300">
                  Connected as GitHub user
                </p>
                <h1 className="mt-1 text-2xl font-semibold tracking-normal">
                  Dashboard
                </h1>
              </div>

              <div className="flex items-center gap-3">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.06] text-slate-200 transition hover:bg-white/[0.12]"
                  title="Refresh"
                  type="button"
                >
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                    <path d="M3 21v-5h5" />
                    <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                    <path d="M16 8h5V3" />
                  </svg>
                </button>
                <button
                  className="rounded-lg bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                  type="button"
                >
                  New review
                </button>
              </div>
            </div>
          </header>

          <div className="px-5 py-6 md:px-8">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {metrics.map((metric) => (
                <article
                  className="rounded-lg border border-white/10 bg-white/[0.055] p-5 shadow-xl shadow-black/20"
                  key={metric.label}
                >
                  <p className="text-sm text-slate-400">{metric.label}</p>
                  <div className="mt-4 flex items-end justify-between gap-4">
                    <strong className="text-3xl font-semibold">
                      {metric.value}
                    </strong>
                    <span className={`text-sm ${metric.tone}`}>
                      {metric.trend}
                    </span>
                  </div>
                </article>
              ))}
            </section>

            <section className="mt-6 grid gap-6 xl:grid-cols-[1fr_360px]">
              <div className="rounded-lg border border-white/10 bg-white/[0.055]">
                <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                  <div>
                    <h2 className="text-lg font-semibold">Review queue</h2>
                    <p className="text-sm text-slate-500">
                      Pull requests waiting for attention
                    </p>
                  </div>
                  <button
                    className="text-sm font-medium text-cyan-300 hover:text-cyan-200"
                    type="button"
                  >
                    View all
                  </button>
                </div>

                <div className="divide-y divide-white/10">
                  {reviewQueue.map((item) => (
                    <article
                      className="grid gap-4 px-5 py-4 transition hover:bg-white/[0.04] md:grid-cols-[1fr_auto]"
                      key={item.title}
                    >
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                          {item.repo}
                        </p>
                        <h3 className="mt-2 font-medium text-slate-100">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm text-slate-500">
                          opened by {item.author}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 md:justify-end">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ring-1 ${item.tone}`}
                        >
                          {item.status}
                        </span>
                        <button
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-slate-300 transition hover:bg-white/10 hover:text-white"
                          title="Open pull request"
                          type="button"
                        >
                          <svg
                            aria-hidden="true"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7 17 17 7" />
                            <path d="M7 7h10v10" />
                          </svg>
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <section className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
                  <h2 className="text-lg font-semibold">Repository health</h2>
                  <div className="mt-5 space-y-4">
                    {[
                      ["Review coverage", "86%", "bg-emerald-300"],
                      ["CI stability", "74%", "bg-cyan-300"],
                      ["Security checks", "92%", "bg-amber-300"],
                    ].map(([label, value, color]) => (
                      <div key={label}>
                        <div className="mb-2 flex justify-between text-sm">
                          <span className="text-slate-400">{label}</span>
                          <span>{value}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                          <div
                            className={`h-full rounded-full ${color}`}
                            style={{ width: value }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="rounded-lg border border-white/10 bg-white/[0.055] p-5">
                  <h2 className="text-lg font-semibold">Recent activity</h2>
                  <div className="mt-5 space-y-4">
                    {activity.map((item) => (
                      <div className="flex gap-3" key={item}>
                        <span className="mt-1 h-2 w-2 rounded-full bg-cyan-300" />
                        <p className="text-sm text-slate-300">{item}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </section>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
