import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Header />
      <main className="container">
        <section className="hero">
          <h1>مرحبًا بكم في <span>مكتب الموسوي</span> للحلول البرمجية</h1>
          <p>
            نحن نبني أنظمة سحابية متكاملة، مواقع ويب فائقة السرعة، وبوتات مخصصة تخدم أعمالكم بدقة متناهية وبشفافية مطلقة.
          </p>
          <Link href="/order" className="cta-btn">
            ابدأ مشروعك الآن
          </Link>
        </section>

        <section style={{ marginTop: '40px' }}>
          <h2 style={{ textAlign: 'center', color: '#D4A843', fontSize: '32px' }}>لماذا تختار مكتب الموسوي؟</h2>
          <div className="grid">
            <div className="card">
              <div className="card-icon">⚡</div>
              <h3>سرعة وأداء فائق</h3>
              <p>نعتمد على أحدث التقنيات السحابية مثل Next.js لتوفير أسرع وقت استجابة لموقعك.</p>
            </div>
            <div className="card">
              <div className="card-icon">🔒</div>
              <h3>أمان موثوق</h3>
              <p>حماية بياناتك وأنظمتك بالكامل عبر تطبيق أعلى معايير الحماية والتشفير.</p>
            </div>
            <div className="card">
              <div className="card-icon">🤝</div>
              <h3>التزام بالصدق والشفافية</h3>
              <p>كل كود مكتوب، وكل خدمة مفعلة نضمن عملها الفعلي ومتابعتها مع العميل خطوة بخطوة.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
