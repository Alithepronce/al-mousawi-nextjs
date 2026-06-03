'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="nav-container">
        <Link href="/" className="logo">
          مكتب الموسوي <span>للبث والبرمجيات</span>
        </Link>
        <nav className="nav-links">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            الرئيسية
          </Link>
          <Link href="/services" className={pathname === '/services' ? 'active' : ''}>
            الخدمات
          </Link>
          <Link href="/order" className={pathname === '/order' ? 'active' : ''}>
            اطلب موقعك
          </Link>
        </nav>
      </div>
    </header>
  );
}
