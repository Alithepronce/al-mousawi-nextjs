export const metadata = {
  title: 'مكتب الموسوي للخدمات البرمجية',
  description: 'منصتك الاحترافية لطلب تصميم المواقع وتطوير الأنظمة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap" rel="stylesheet" />
        <style>{`
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: 'Cairo', sans-serif;
          }
          body {
            background-color: #0b0c10;
            color: #ffffff;
            line-height: 1.6;
          }
          header {
            background-color: #1f2833;
            border-bottom: 2px solid #8B0000;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #D4A843;
            text-decoration: none;
          }
          nav a {
            color: #ffffff;
            text-decoration: none;
            margin-right: 1.5rem;
            font-weight: 600;
            transition: color 0.3s;
          }
          nav a:hover {
            color: #D4A843;
          }
          .container {
            max-width: 1200px;
            margin: 2rem auto;
            padding: 0 1rem;
          }
          .btn {
            background-color: #8B0000;
            color: white;
            padding: 0.75rem 1.5rem;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
            transition: background-color 0.3s;
          }
          .btn:hover {
            background-color: #a00000;
          }
          footer {
            text-align: center;
            padding: 2rem;
            background-color: #1f2833;
            border-top: 1px solid #2d3748;
            margin-top: 4rem;
            color: #a0aec0;
          }
        `}</style>
      </head>
      <body>
        <header>
          <a href="/" className="logo">⚖️ مكتب الموسوي</a>
          <nav>
            <a href="/">الرئيسية</a>
            <a href="/services">خدماتنا</a>
            <a href="/order">اطلب موقعك</a>
          </nav>
        </header>
        <div className="container">
          {children}
        </div>
        <footer>
          <p>© 2026 مكتب الموسوي للخدمات البرمجية. جميع الحقوق محفوظة.</p>
        </footer>
      </body>
    </html>
  )
}
