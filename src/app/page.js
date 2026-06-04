import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center',
      padding: '20px',
      backgroundColor: '#121212'
    }}>
      <h1 style={{ color: '#D4A843', fontSize: '2.5rem', marginBottom: '10px' }}>⚖️ مكتب الموسوي للخدمات البرمجية</h1>
      <p style={{ color: '#ccc', fontSize: '1.2rem', maxWidth: '600px', marginBottom: '30px' }}>
        نقدم حلولاً برمجية ذكية، واجهات Next.js فائقة السرعة، وأنظمة سحابية متكاملة.
      </p>
      
      <div style={{ display: 'flex', gap: '15px' }}>
        <Link href="/services" style={{
          backgroundColor: '#8B0000',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          خدماتنا 🛠️
        </Link>
        <Link href="/order" style={{
          backgroundColor: '#D4A843',
          color: '#121212',
          padding: '10px 20px',
          borderRadius: '8px',
          textDecoration: 'none',
          fontWeight: 'bold'
        }}>
          اطلب الآن 🚀
        </Link>
      </div>
    </div>
  );
}