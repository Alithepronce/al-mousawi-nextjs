import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Services() {
  return (
    <>
      <Header />
      <main className="container">
        <h1 style={{ textAlign: 'center', marginTop: '40px', color: '#ffffff' }}>
          خدماتنا <span style={{ color: '#D4A843' }}>البرمجية</span>
        </h1>
        <p style={{ textAlign: 'center', color: '#c5c6c7', marginBottom: '40px' }}>
          نقدم حلولاً مخصصة تخدم متطلبات عملك وتدعم نمو مؤسستك.
        </p>

        <div className="grid">
          <div className="card">
            <div className="card-icon">💻</div>
            <h3>تطوير مواقع الويب</h3>
            <p>تصميم وتطوير مواقع تعريفية ومتاجر إلكترونية حديثة بأداء فائق وتوافق مع محركات البحث.</p>
          </div>
          <div className="card">
            <div className="card-icon">🤖</div>
            <h3>تطوير بوتات تيليجرام وأتمتة</h3>
            <p>تصميم بوتات ذكية لإدارة القنوات، تلقي الطلبات، وخدمة العملاء على مدار الساعة.</p>
          </div>
          <div className="card">
            <div className="card-icon">🗄️</div>
            <h3>قواعد بيانات وحلول سحابية</h3>
            <p>إعداد قواعد بيانات آمنة وسريعة مثل Supabase وربطها بالواجهات مع حماية متكاملة للبيانات.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <Link href="/order" className="cta-btn">
            طلب خدمة مخصصة
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
