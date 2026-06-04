'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Order() {
  const [name, setName] = useState('');
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ padding: '40px 20px', maxWidth: '500px', margin: '0 auto', textAlign: 'center' }}>
      <h1 style={{ color: '#D4A843', marginBottom: '20px' }}>🚀 طلب مشروع جديد</h1>
      {!submitted ? (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', textAlign: 'right' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>الاسم الكريم:</label>
            <input 
              type="text" 
              required 
              value={name} 
              onChange={e => setName(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#1E1E1E', color: 'white' }}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>الخدمة المطلوبة:</label>
            <select 
              value={service} 
              onChange={e => setService(e.target.value)}
              required
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #333', backgroundColor: '#1E1E1E', color: 'white' }}
            >
              <option value="">اختر الخدمة...</option>
              <option value="website">موقع إلكتروني / متجر</option>
              <option value="bot">بوت تيليجرام ذكي</option>
              <option value="system">نظام أتمتة وإدارة</option>
            </select>
          </div>
          <button type="submit" style={{
            backgroundColor: '#8B0000',
            color: 'white',
            border: 'none',
            padding: '12px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: '10px'
          }}>إرسال الطلب ⚖️</button>
        </form>
      ) : (
        <div style={{ backgroundColor: '#1E1E1E', padding: '30px', borderRadius: '8px', border: '2px solid #D4A843' }}>
          <h3 style={{ color: '#D4A843' }}>تم استلام طلبك بنجاح، يا {name}! 🎉</h3>
          <p style={{ color: '#ccc' }}>سنتواصل معك في أقرب وقت لمناقشة تفاصيل مشروعك ({service}).</p>
        </div>
      )}
      <div style={{ marginTop: '30px' }}>
        <Link href="/" style={{ color: '#D4A843', textDecoration: 'none' }}>العودة للرئيسية 🏠</Link>
      </div>
    </div>
  );
}