"use client";

import React, { useState } from 'react';

export default function Order() {
  const [formData, setFormData] = useState({ name: '', telegram: '', budget: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Save to LocalStorage for safety
    const orders = JSON.parse(localStorage.getItem('mousawi_orders') || '[]');
    orders.push({ ...formData, date: new Date().toLocaleString() });
    localStorage.setItem('mousawi_orders', JSON.stringify(orders));

    setSubmitted(true);
    setFormData({ name: '', telegram: '', budget: '', details: '' });
  };

  return (
    <div style={{ maxWidth: '600px', margin: '3rem auto', padding: '0 1rem' }}>
      <h2 style={{
        fontSize: '2.2rem',
        color: '#D4A843',
        textAlign: 'center',
        marginBottom: '1rem',
        fontWeight: 'bold'
      }}>
        اطلب موقعك الإلكتروني 🚀
      </h2>
      <p style={{ textAlign: 'center', color: '#ccc', marginBottom: '2.5rem' }}>
        املأ الاستمارة وسنقوم بالاتصال بك فوراً للاتفاق ومباشرة العمل.
      </p>

      {submitted ? (
        <div style={{
          background: 'rgba(212, 168, 67, 0.1)',
          border: '1px solid #D4A843',
          padding: '2rem',
          borderRadius: '12px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#D4A843', marginBottom: '1rem', fontSize: '1.5rem' }}>🎉 تم إرسال طلبك بنجاح!</h3>
          <p style={{ color: '#ffffff' }}>شكرًا لثقتك بـ مكتب الموسوي. قمنا بحفظ طلبك محلياً وجاري مراجعته الآن.</p>
          <button 
            onClick={() => setSubmitted(false)}
            style={{
              marginTop: '1.5rem',
              backgroundColor: '#8B0000',
              color: '#fff',
              border: 'none',
              padding: '0.6rem 1.5rem',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            إرسال طلب آخر
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{
          background: 'rgba(20, 20, 20, 0.8)',
          border: '1px solid rgba(212, 168, 67, 0.15)',
          padding: '2.5rem',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          boxShadow: '0 15px 35px rgba(0,0,0,0.4)'
        }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D4A843', fontWeight: 'bold' }}>الاسم الكامل:</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="مثال: علي الموسوي"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: '#111',
                color: '#fff',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D4A843', fontWeight: 'bold' }}>معرف تيليجرام (Telegram Username):</label>
            <input 
              type="text" 
              required
              value={formData.telegram}
              onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
              placeholder="مثال: @Alithepronce"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: '#111',
                color: '#fff',
                fontSize: '1rem',
                direction: 'ltr',
                textAlign: 'right'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D4A843', fontWeight: 'bold' }}>الميزانية التقريبية (بالدولار):</label>
            <input 
              type="text" 
              required
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              placeholder="مثال: 500$"
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: '#111',
                color: '#fff',
                fontSize: '1rem'
              }}
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#D4A843', fontWeight: 'bold' }}>تفاصيل ومواصفات الموقع المطلوب:</label>
            <textarea 
              required
              rows="4"
              value={formData.details}
              onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              placeholder="اكتب هنا ما تريده في موقعك الإلكتروني بالتفصيل..."
              style={{
                width: '100%',
                padding: '0.8rem',
                borderRadius: '8px',
                border: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: '#111',
                color: '#fff',
                fontSize: '1rem',
                fontFamily: 'inherit',
                resize: 'vertical'
              }}
            ></textarea>
          </div>

          <button 
            type="submit"
            style={{
              backgroundColor: '#8B0000',
              color: '#ffffff',
              border: 'none',
              padding: '1rem',
              borderRadius: '8px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(139, 0, 0, 0.4)',
              transition: 'background-color 0.2s'
            }}
          >
            إرسال الطلب الآن 🚀
          </button>
        </form>
      )}
    </div>
  );
}