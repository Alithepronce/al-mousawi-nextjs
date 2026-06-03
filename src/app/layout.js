import './globals.css';

export const metadata = {
  title: 'مكتب الموسوي للخدمات البرمجية',
  description: 'نصمم ونطور المواقع الإلكترونية والأنظمة السحابية بأعلى جودة',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body style={{
        fontFamily: "'Cairo', sans-serif",
        backgroundColor: '#0a0a0a',
        color: '#ffffff',
        margin: 0,
        padding: 0,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <header style={{
          borderBottom: '1px solid rgba(212, 168, 67, 0.2)',
          padding: '1rem 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'rgba(139, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#D4A843' }}>⚖️ مكتب الموسوي</div>
          <nav style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="/" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '600' }}>الرئيسية</a>
            <a href="/services" style={{ color: '#ffffff', textDecoration: 'none', fontWeight: '600' }}>خدماتنا</a>
            <a href="/order" style={{ color: '#D4A843', textDecoration: 'none', fontWeight: 'bold', border: '1px solid #D4A843', padding: '0.3rem 0.8rem', borderRadius: '8px' }}>اطلب موقعك</a>
          </nav>
        </header>
        <main style={{ flex: 1, padding: '2rem' }}>
          {children}
        </main>
        <footer style={{
          textAlign: 'center',
          padding: '1.5rem',
          borderTop: '1px solid rgba(212, 168, 67, 0.1)',
          color: '#888',
          fontSize: '0.9rem'
        }}>
          &copy; {new Date().getFullYear()} مكتب الموسوي للخدمات البرمجية. جميع الحقوق محفوظة.
        </footer>
      </body>
    </html>
  );
}