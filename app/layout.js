import './globals.css'

export const metadata = {
  title: 'مكتب الموسوي للخدمات البرمجية',
  description: 'حلول برمجية متكاملة، مواقع وتطبيقات احترافية بأحدث التقنيات.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-[#111111] text-white font-['Cairo'] min-h-screen flex flex-col justify-between">
        {/* Navigation Bar */}
        <header className="border-b border-zinc-800 bg-[#161616] sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-[#D4A843] tracking-wider">⚖️ مكتب الموسوي</span>
              <span className="bg-[#8B0000] text-xs px-2 py-1 rounded text-white font-bold">NEXT.JS</span>
            </div>
            <nav className="flex gap-6 text-sm font-semibold">
              <a href="/" className="hover:text-[#D4A843] transition">الرئيسية</a>
              <a href="/services" className="hover:text-[#D4A843] transition">خدماتنا</a>
              <a href="/order" className="hover:text-[#D4A843] transition">طلب نظام</a>
            </nav>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-zinc-800 bg-[#0d0d0d] py-6 text-center text-sm text-zinc-500">
          <p>© {new Date().getFullYear()} مكتب الموسوي للخدمات البرمجية. جميع الحقوق محفوظة.</p>
        </footer>
      </body>
    </html>
  )
}