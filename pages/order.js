import React, { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Order() {
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    budget: '300-500',
    details: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to localStorage as backup
    const currentOrders = JSON.parse(localStorage.getItem('mousawi_orders') || '[]');
    currentOrders.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem('mousawi_orders', JSON.stringify(currentOrders));
    
    setSubmitted(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={styles.container}>
      <Head>
        <title>اطلب موقعك | مكتب الموسوي للخدمات البرمجية</title>
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;700;900&display=swap" rel="stylesheet" />
      </Head>

      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>⚖️ مكتب الموسوي</div>
        <nav style={styles.nav}>
          <Link href="/" style={styles.navLink}>الرئيسية</Link>
          <Link href="/services" style={styles.navLink}>خدماتنا</Link>
          <Link href="/order" style={{...styles.navLink, ...styles.activeLink}}>اطلب موقعك</Link>
        </nav>
      </header>

      {/* Main Order Form */}
      <main style={styles.main}>
        <div style={styles.formContainer}>
          {!submitted ? (
            <>
              <h1 style={styles.title}>طلب خدمة تصميم موقع</h1>
              <p style={styles.subtitle}>املأ الاستمارة التالية وسيقوم مهندسونا بالتواصل معك مباشرة عبر تيليجرام لمناقشة التفاصيل وبدء العمل.</p>
              
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>الاسم الكامل</label>
                  <input 
                    type="text" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="مثال: علي الموسوي" 
                    style={styles.input} 
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>معرّف تيليجرام (Telegram Username)</label>
                  <input 
                    type="text" 
                    name="telegram" 
                    required 
                    value={formData.telegram} 
                    onChange={handleChange} 
                    placeholder="مثال: @Alithepronce" 
                    style={styles.input} 
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>الميزانية التقريبية (بالدولار)</label>
                  <select 
                    name="budget" 
                    value={formData.budget} 
                    onChange={handleChange} 
                    style={styles.select}
                  >
                    <option value="150-300">150$ - 300$ (موقع بسيط صفحة واحدة)</option>
                    <option value="300-500">300$ - 500$ (موقع متعدد الصفحات مع لوحة تحكم)</option>
                    <option value="500-1000">500$ - 1000$ (متجر إلكتروني متكامل)</option>
                    <option value="1000+">أكثر من 1000$ (أنظمة مخصصة وبوتات متطورة)</option>
                  </select>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>تفاصيل المشروع والمتطلبات</label>
                  <textarea 
                    name="details" 
                    rows="4" 
                    required 
                    value={formData.details} 
                    onChange={handleChange} 
                    placeholder="اكتب هنا ما تريده في موقعك بالتفصيل..." 
                    style={styles.textarea}
                  />
                </div>

                <button type="submit" style={styles.submitButton}>إرسال الطلب الفوري 🚀</button>
              </form>
            </>
          ) : (
            <div style={styles.successMessage}>
              <div style={styles.successIcon}>✅</div>
              <h2 style={styles.successTitle}>تم استلام طلبك بنجاح!</h2>
              <p style={styles.successText}>
                شكراً لثقتك بـ <strong>مكتب الموسوي للخدمات البرمجية</strong> يا {formData.name}.<br />
                تم حفظ تفاصيل مشروعك وسيقوم فريقنا بالتواصل معك عبر تيليجرام على المعرّف الخاص بك <strong>{formData.telegram}</strong> خلال الساعات القليلة القادمة.
              </p>
              <Link href="/" style={styles.backButton}>العودة للرئيسية</Link>
            </div>
          )}
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
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    backgroundColor: '#16161D',
    border: '1px solid rgba(212, 168, 67, 0.15)',
    borderRadius: '16px',
    padding: '40px',
    maxWidth: '600px',
    width: '100%',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
  },
  title: {
    fontSize: '28px',
    fontWeight: '900',
    color: '#D4A843',
    textAlign: 'center',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#CCCCCC',
    textAlign: 'center',
    lineHeight: '1.6',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '700',
    color: '#FFFFFF',
  },
  input: {
    backgroundColor: '#1E1E26',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '12px 15px',
    color: '#FFFFFF',
    fontSize: '14px',
    outline: 'none',
    fontFamily: "'Cairo', sans-serif",
  },
  select: {
    backgroundColor: '#1E1E26',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '12px 15px',
    color: '#FFFFFF',
    fontSize: '14px',
    outline: 'none',
    fontFamily: "'Cairo', sans-serif",
  },
  textarea: {
    backgroundColor: '#1E1E26',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '12px 15px',
    color: '#FFFFFF',
    fontSize: '14px',
    outline: 'none',
    fontFamily: "'Cairo', sans-serif",
    resize: 'vertical',
  },
  submitButton: {
    backgroundColor: '#8B0000',
    color: '#FFFFFF',
    border: '1px solid #D4A843',
    padding: '14px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    boxShadow: '0 4px 15px rgba(139, 0, 0, 0.4)',
    fontFamily: "'Cairo', sans-serif",
    transition: 'all 0.3s',
  },
  successMessage: {
    textAlign: 'center',
    padding: '20px 0',
  },
  successIcon: {
    fontSize: '60px',
    marginBottom: '20px',
  },
  successTitle: {
    fontSize: '24px',
    fontWeight: '900',
    color: '#D4A843',
    marginBottom: '15px',
  },
  successText: {
    fontSize: '16px',
    color: '#CCCCCC',
    lineHeight: '1.8',
    marginBottom: '30px',
  },
  backButton: {
    display: 'inline-block',
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    padding: '10px 25px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: '700',
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
