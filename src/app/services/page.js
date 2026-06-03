import React from 'react';

export default function Services() {
  const servicesList = [
    {
      title: '💻 تصميم المواقع الاحترافية',
      description: 'واجهات مستخدم (UI/UX) سريعة ومتجاوبة مع الهواتف والشاشات الكبيرة باستخدام أحدث تقنيات الويب المستقرة.'
    },
    {
      title: '⚡ الأنظمة السحابية وقواعد البيانات',
      description: 'بناء قواعد بيانات سحابية متكاملة وسريعة تعتمد على Supabase مع ربطها بشكل مباشر وآمن.'
    },
    {
      title: '🤖 بوتات تيليجرام المؤتمتة',
      description: 'تطوير بوتات تيليجرام ذكية تسهل استقبال طلبات العملاء وتزودك بتنبيهات فورية ومباشرة.'
    }
  ];

  return (
    <div style={{ maxWidth: '900px', margin: '3rem auto', padding: '0 1rem' }}>
      <h2 style={{
        fontSize: '2.5rem',
        color: '#D4A843',
        textAlign: 'center',
        marginBottom: '3rem',
        fontWeight: 'bold'
      }}>
        خدماتنا البرمجية المتميزة ✨
      </h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '2rem'
      }}>
        {servicesList.map((service, index) => (
          <div key={index} style={{
            background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1) 0%, rgba(10, 10, 10, 0.8) 100%)',
            border: '1px solid rgba(212, 168, 67, 0.2)',
            padding: '2rem',
            borderRadius: '12px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.3s ease'
          }}>
            <h3 style={{ color: '#D4A843', fontSize: '1.4rem', marginBottom: '1rem' }}>{service.title}</h3>
            <p style={{ color: '#ccc', lineHeight: '1.7', fontSize: '1rem' }}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}