import Link from 'next/link'

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pb-32 lg:flex lg:px-8 lg:pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0">
          <div className="mt-10 sm:mt-12">
            <span className="rounded-full bg-red-900/30 px-3 py-1 text-xs font-semibold leading-6 text-[#D4A843] ring-1 ring-inset ring-red-900/50">
              جديد: نظام Next.js فائق السرعة
            </span>
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            نطور أفكارك إلى <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-[#D4A843]">مواقع وأنظمة</span> متكاملة
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-400">
            مرحبًا بك في مكتب الموسوي. نحن هنا لنصنع لك حضورًا رقميًا فخمًا ومستقرًا. نلتزم بأعلى معايير جودة الكود والصدق البرمجي.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              href="/order"
              className="rounded-lg bg-red-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 transition"
            >
              ابدأ طلبك الآن 🚀
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-[#D4A843] hover:text-yellow-500 transition">
              عرض الخدمات <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <div className="rounded-xl bg-zinc-900/50 p-6 ring-1 ring-white/10 glass-card w-full md:w-[450px]">
              <h3 className="text-sm font-semibold text-zinc-400 mb-4 border-b border-zinc-800 pb-2">📂 Al-Musawi Bureau Terminal</h3>
              <div className="font-mono text-xs text-green-400 space-y-1">
                <p>&gt; npm run dev</p>
                <p className="text-zinc-500">ready - started server on 0.0.0.0:3000, url: http://localhost:3000</p>
                <p className="text-[#D4A843]">&gt; Status: Connection to Supabase is OFFLINE (Local backup active)</p>
                <p className="text-white">&gt; System health: 100% stable (Next.js SSR active)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}