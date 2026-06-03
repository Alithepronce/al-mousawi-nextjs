import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  return (
    <div style={styles.container}>
      <Head>
        <title>مكتب الموسوي للخدمات البرمجية | الرئيسية</title>
        <meta name="description" content="مكتب الموسوي لتصميم وتطوير المواقع والأنظمة الذكية" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>⚖️ مكتب الموسوي</div>
        <nav style={styles.nav}>
          <Link href="/" style={{...styles.navLink, ...styles.activeLink}}>الرئيسية</Link>
          <Link href="/services" style={styles.navLink}>خدماتنا</Link>
          <Link href="/order" style={styles.navLinkButton}>اطلب موقعك</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main style={styles.hero}>
        <h1 style={styles.heroTitle}>نصنع هويتك الرقمية <span style={styles.highlight}>بأعلى جودة</span></h1>
        <p style={styles.heroSubtitle}>
          مرحباً بك في مكتب الموسوي للخدمات البرمجية. نتميز بتطوير مواقع فائقة السرعة، أنظمة سحابية متكاملة وبوتات ذكية تلبي طموحات عملك.
        </p>
        <div style={styles.buttonGroup}>
          <Link href="/order" style={styles.primaryButton}>ابدأ مشروعك الآن</Link>
          <Link href="/services" style={styles.secondaryButton}>استكشف خدماتنا</Link>
        </div>
      </main>

      {/* Features Section */}
      <section style={styles.features}>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🚀</div>
          <h3 style={styles.featureTitle}>سرعة فائقة</h3>
          <p style={styles.featureText}>مواقع مبنية بأحدث التقنيات لضمان أفضل تجربة مستخدم وأسرع استجابة.</p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🔒</div>
          <h3 style={styles.featureTitle}>أمان مطلق</h3>
          <p style={styles.featureText}>حماية كاملة لبياناتك وأنظمتك مع تطبيق أعلى معايير الحماية البرمجية.</p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIcon}>🎨</div>
          <h3 style={styles.featureTitle}>تصميم فاخر</h3>
          <p style={styles.featureText}>تصاميم متناسقة بألوان الهوية الرسمية لجذب انتباه زوارك ومستثمريك.</p>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>جميع الحقوق محفوظة © {new Date().getFullYear()} مكتب الموسوي للخدمات البرمجية</p>
      </footer>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Cairo', sans-serif",
    backgroundColor: '#0F0F12',
    color: '#FFFFFF',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    direction: 'rtl',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 5%',
    borderBottom: '1px solid rgba(212, 168, 67, 0.2)',
    backgroundColor: '#16161D',
  },
  logo: {
    fontSize: '24px',
    fontWeight: '900',
    color: '#D4A843',
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  navLink: {
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '700',
    transition: 'color 0.3s',
  },
  activeLink: {
    color: '#D4A843',
  },
  navLinkButton: {
    backgroundColor: '#8B0000',
    color: '#FFFFFF',
    padding: '8px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '700',
    border: '1px solid #D4A843',
    transition: 'all 0.3s',
  },
  hero: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '80px 20px',
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: '900',
    marginBottom: '20px',
    lineHeight: '1.4',
  },
  highlight: {
    color: '#D4A843',
    borderBottom: '3px solid #8B0000',
  },
  heroSubtitle: {
    fontSize: '18px',
    color: '#CCCCCC',
    lineHeight: '1.8',
    marginBottom: '40px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '15px',
  },
  primaryButton: {
    backgroundColor: '#8B0000',
    color: '#FFFFFF',
    padding: '12px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '700',
    border: '1px solid #D4A843',
    boxShadow: '0 4px 15px rgba(139, 0, 0, 0.4)',
    transition: 'all 0.3s',
  },
  secondaryButton: {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    padding: '12px 28px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '700',
    border: '1px solid rgba(255, 255, 255, 0.3)',
    transition: 'all 0.3s',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
    padding: '60px 5%',
    backgroundColor: '#16161D',
  },
  featureCard: {
    backgroundColor: '#1E1E26',
    border: '1px solid rgba(212, 168, 67, 0.1)',
    borderRadius: '12px',
    padding: '30px',
    textAlign: 'center',
    transition: 'transform 0.3s',
  },
  featureIcon: {
    fontSize: '40px',
    marginBottom: '15px',
  },
  featureTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#D4A843',
    marginBottom: '10px',
  },
  featureText: {
    fontSize: '14px',
    color: '#CCCCCC',
    lineHeight: '1.6',
  },
  footer: {
    padding: '20px',
    textAlign: 'center',
    borderTop: '1px solid rgba(212, 168, 67, 0.1)',
    backgroundColor: '#0F0F12',
    fontSize: '14px',
    color: '#888888',
  }
};
