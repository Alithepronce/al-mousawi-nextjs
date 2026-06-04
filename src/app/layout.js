export const metadata = {
  title: 'مكتب الموسوي للخدمات البرمجية',
  description: 'حلول برمجية متكاملة',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700&display=swap" rel="stylesheet" />
        <style>{`
          body {
            font-family: 'Cairo', sans-serif;
            background-color: #121212;
            color: #ffffff;
            margin: 0;
            padding: 0;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}