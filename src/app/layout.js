import './globals.css'

export const metadata = {
  title: 'مكتب الموسوي للخدمات البرمجية',
  description: 'نصمم ونطور المواقع والأنظمة الذكية بأعلى كفاءة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col justify-between bg-black text-white">
        <header className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2 space-x-reverse">
              <span className="text-2xl font-bold text-red-600">⚖️ مكتب <span className="text-[#D4A843]">الموسوي</span></span>
            </div>
            <nav className="flex space-x-6 space-x-reverse text-sm font-medium">
              <a href="/" className="hover:text-[#D4A843] transition">الرئيسية</a>
              <a href="/services" className="hover:text-[#D4A843] transition">الخدمات</a>
              <a href="/order" className="hover:text-[#D4A843] transition">اطلب موقعك</a>
            </nav>
          </div>
        </header>

        <main className="flex-grow">{children}</main>

        <footer className="border-t border-zinc-900 bg-zinc-950 py-8 text-center text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} مكتب الموسوي للخدمات البرمجية. جميع الحقوق محفوظة.</p>
          <p className="mt-2 text-zinc-600">نلتزم بالصدق المطلق والأمانة البرمجية ⚖️</p>
        </footer>
      </body>
    </html>
  )
}