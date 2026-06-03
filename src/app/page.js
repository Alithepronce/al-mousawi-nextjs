import React from 'react';

export default function Home() {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '4rem auto',
      textAlign: 'center',
      padding: '0 1rem'
    }}>
      <h1 style={{
        fontSize: '3rem',
        color: '#D4A843',
        marginBottom: '1rem',
        fontWeight: '800'
      }}>
        مكتب الموسوي للخدمات البرمجية ⚖️
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#ccc',
        lineHeight: '1.8',
        marginBottom: '2rem'
      }}>
        نحن لا نصمم مجرد مواقع، بل نبني هويات رقمية متكاملة وأنظمة ذكية تخدم أعمالك وتزيد من إنتاجيتك. كود نظيف، حماية فائقة، وسرعة لا تقارن.
      </p>
      
      <div style={{
        display: 'flex',
        gap: '1rem',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        <a href="/order" style={{
          backgroundColor: '#8B0000',
          color: '#ffffff',
          padding: '0.8rem 2rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
          boxShadow: '0 4px 15px rgba(139, 0, 0, 0.4)',
          border: '1px solid #8B0000'
        }}>
          اطلب موقعك الآن 🚀
        </a>
        <a href="/services" style={{
          backgroundColor: 'transparent',
          color: '#ffffff',
          padding: '0.8rem 2rem',
          borderRadius: '8px',
          fontWeight: 'bold',
          textDecoration: 'none',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          تصفح خدماتنا
        </a>
      </div>
    </div>
  );
}