'use client';
import { useState } from 'react';

export default function Order() {
  const [formData, setFormData] = useState({ name: '', telegram: '', budget: '', details: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.telegram) {
      setStatus('⚠️ يرجى ملء الاسم ومعرف تيليجرام على الأقل!');
      return;
    }
    // Simulation / Local Storage fallback
    const savedOrders = JSON.parse(localStorage.getItem('mousawi_orders') || '[]');
    savedOrders.push({ ...formData, date: new Date().toISOString() });
    localStorage.setItem('mousawi_orders', JSON.stringify(savedOrders));

    setStatus('✅ تم استلام طلبك بنجاح وسرعة فائقة! سيتواصل معك فريق مكتب الموسوي قريباً جداً 🚀');
    setFormData({ name: '', telegram: '', budget: '', details: '' });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#1f2833', border: '1px solid #D4A843', borderRadius: '12px', padding: '2rem' }}>
      <h2 style={{ color: '#D4A843', fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>اطلب موقعك الآن</h2>
      <p style={{ color: '#cbd5e0', fontSize: '0.95rem', marginBottom: '2rem', textAlign: 'center' }}>
        املأ الاستمارة وسنقوم بدراسة متطلباتك والتواصل معك فوراً عبر تيليجرام.
      </p>

      {status && (
        <div style={{ padding: '1rem', borderRadius: '8px', marginBottom: '1.5rem', backgroundColor: status.startsWith('✅') ? '#1c4d28' : '#6b2d2d', color: '#fff', fontSize: '0.95rem' }}>
          {status}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label style={{ display: 'block', color: '#D4A843', marginBottom: '0.5rem', fontWeight: 'bold' }}>الاسم الكامل *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="مثال: علي الموسوي"
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #4a5568', backgroundColor: '#0b0c10', color: '#fff' }}
            required
          />
        </div>
        <div>
          <label style={{ display: 'block', color: '#D4A843', marginBottom: '0.5rem', fontWeight: 'bold' }}>معرف تيليجرام (@username) *</label>
          <input
            type="text"
            value={formData.telegram}
            onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
            placeholder="مثال: @Alithepronce"
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #4a5568', backgroundColor: '#0b0c10', color: '#fff' }}
            required
          />
        </div>
        <div>
          <label style={{ display: 'block', color: '#D4A843', marginBottom: '0.5rem', fontWeight: 'bold' }}>الميزانية التقريبية ($)</label>
          <input
            type="text"
            value={formData.budget}
            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            placeholder="مثال: 300$"
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #4a5568', backgroundColor: '#0b0c10', color: '#fff' }}
          />
        </div>
        <div>
          <label style={{ display: 'block', color: '#D4A843', marginBottom: '0.5rem', fontWeight: 'bold' }}>تفاصيل الموقع والمميزات المطلوبة</label>
          <textarea
            value={formData.details}
            onChange={(e) => setFormData({ ...formData, details: e.target.value })}
            placeholder="اشرح متطلباتك بالتفصيل هنا..."
            rows={4}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #4a5568', backgroundColor: '#0b0c10', color: '#fff', resize: 'vertical' }}
          />
        </div>
        <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem', fontSize: '1.1rem' }}>
          إرسال الطلب الآن 🚀
        </button>
      </form>
    </div>
  );
}
