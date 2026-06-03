import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Services() {
  return (
    <div style={styles.container}>
      <Head>
        <title>خدماتنا | مكتب الموسوي للخدمات البرمجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>⚖️ مكتب الموسوي</div>
        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink}>الرئيسية</Link>
          <Link href="/services" style={{...styles.navLink, ...styles.activeLink}}>خدماتنا</Link>
          <Link href="/order" style={styles.navLinkButton}>اطلب موقعك</Link>
        </nav>
      </header>

      {/* Services Main */}
      <main style={styles.main}>
        <h1 style={styles.title}>خدماتنا البرمجية المتميزة</h1>
        <p style={styles.subtitle}>نقدم حلولاً متكاملة بأحدث التقنيات السحابية لدعم نمو أعمالك وأتمتتها بالكامل.</p>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={styles.icon}>💻</div>
            <h3 style={styles.cardTitle}>تطوير المواقع الفاخرة</h3>
            <p style={styles.cardText}>تصميم وتطوير مواقع متجاوبة (Responsive) متعددة الصفحات ومتوافقة مع محركات البحث باستخدام Next.js و Astro.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>🤖</div>
            <h3 style={styles.cardTitle}>أتمتة بوتات تيليجرام الذكية</h3>
            <p style={styles.cardText}>بناء وتطوير بوتات تفاعلية ذكية لأتمتة خدمة العملاء، إدارة الحجوزات، وإرسال التقارير الفورية بلمح البصر.</p>
          </div>

          <div style={styles.card}>
            <div style={styles.icon}>☁️</div>
            <h3 style={styles.cardTitle}>الأنظمة السحابية والربط</h3>
            <p style={styles.cardText}>ربط مشاريعك بقواعد بيانات سحابية متطورة وسريعة جداً مثل Supabase مع تشفير وحماية متكاملة.</p>
          </div>
        </div>

        <div style={styles.cta}>
          <h2 style={styles.ctaTitle}>هل أنت مستعد لرقمنة أعمالك؟</h2>
          <Link href="/order" style={styles.ctaButton}>اطلب خدمتك الآن</Link>
        </div>
      </main>

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
  },
  main: {
    flex: 1,
    padding: '60px 5%',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    fontWeight: '900',
    color: '#FFFFFF',
    marginBottom: '15px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#CCCCCC',
    marginBottom: '50px',
    maxWidth: '600px',
    margin: '0 auto 50px auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    marginBottom: '60px',
  },
  card: {
    backgroundColor: '#16161D',
    border: '1px solid rgba(212, 168, 67, 0.1)',
    borderRadius: '12px',
    padding: '40px 20px',
    textAlign: 'center',
    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
  },
  icon: {
    fontSize: '50px',
    marginBottom: '20px',
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#D4A843',
    marginBottom: '15px',
  },
  cardText: {
    fontSize: '14px',
    color: '#CCCCCC',
    lineHeight: '1.8',
  },
  cta: {
    backgroundColor: '#16161D',
    padding: '40px',
    borderRadius: '16px',
    border: '1px solid #8B0000',
    marginTop: '40px',
  },
  ctaTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '20px',
  },
  ctaButton: {
    display: 'inline-block',
    backgroundColor: '#8B0000',
    color: '#FFFFFF',
    padding: '12px 35px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '700',
    border: '1px solid #D4A843',
    boxShadow: '0 4px 15px rgba(139, 0, 0, 0.4)',
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
