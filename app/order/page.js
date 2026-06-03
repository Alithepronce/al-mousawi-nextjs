'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Order() {
  const [formData, setFormData] = useState({
    name: '',
    telegram: '',
    budget: '500',
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.telegram) {
      alert('يرجى ملء الحقول المطلوبة (الاسم ومعرّف تيليجرام)');
      return;
    }
    
    // Save to local storage for demo/backup
    const existingOrders = JSON.parse(localStorage.getItem('mousawi_orders') || '[]');
    existingOrders.push({
      ...formData,
      date: new Date().toISOString(),
    });
    localStorage.setItem('mousawi_orders', JSON.stringify(existingOrders));

    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="container">
        {!submitted ? (
          <div className="form-container">
            <h2 style={{ textAlign: 'center', color: '#D4A843', marginBottom: '20px' }}>اطلب موقعك الجديد</h2>
            <p style={{ textAlign: 'center', color: '#c5c6c7', marginBottom: '30px' }}>
              املاً الاستمارة أدناه وسنتواصل معك بأقرب وقت لمناقشة التفاصيل والبدء بالتنفيذ.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">الاسم الثلاثي أو اسم الشركة *</label>
                <input
                  type="text"
                  id="name"
                  placeholder="مثال: علي الموسوي"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telegram">معرّف تيليجرام (Telegram Username) *</label>
                <input
                  type="text"
                  id="telegram"
                  placeholder="مثال: @Alithepronce"
                  value={formData.telegram}
                  onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="budget">الميزانية التقديرية (بالدولار الأمريكي)</label>
                <select
                  id="budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  <option value="300-500">300$ - 500$ (موقع تعريفي بسيط)</option>
                  <option value="500-1000">500$ - 1000$ (موقع متكامل مع نظام إدارة)</option>
                  <option value="1000+">أكثر من 1000$ (حلول برمجية مخصصة)</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="details">تفاصيل المشروع المطلوبة</label>
                <textarea
                  id="details"
                  rows="5"
                  placeholder="اشرح لنا طبيعة عملك وما الذي تحتاجه في موقعك الجديد..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                إرسال الطلب الآن 🚀
              </button>
            </form>
          </div>
        ) : (
          <div className="form-container" style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '60px', color: '#D4A843', marginBottom: '20px' }}>✅</div>
            <h2 style={{ color: '#ffffff', marginBottom: '15px' }}>تم إرسال طلبك بنجاح!</h2>
            <p style={{ color: '#c5c6c7', marginBottom: '30px' }}>
              شكرًا لثقتك بمكتب الموسوي للخدمات البرمجية. لقد سجلنا طلبك برقم مميز، وسيقوم فريقنا بالتواصل معك عبر حساب تيليجرام <strong>{formData.telegram}</strong> لمناقشة التفاصيل قريباً جداً.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', telegram: '', budget: '500', details: '' });
              }}
              className="submit-btn"
              style={{ background: 'transparent', borderColor: '#8B0000', color: '#ffffff' }}
            >
              إرسال طلب آخر
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
