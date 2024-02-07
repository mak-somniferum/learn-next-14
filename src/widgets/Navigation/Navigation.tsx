'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './navigation.module.css';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className={styles.nav}>
      <ul role="list">
        <li>
          <Link href="/">Movie</Link>
          {pathname.includes('/movie') && ' 🔥'}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {pathname === '/about-us' && ' 🔥'}
        </li>
      </ul>
    </nav>
  );
}
