'use client';

import { useState } from 'react';
import styles from './tabs.module.css';

export default function Tabs({ items = [], activeTab = 0, onChange }) {
  const handleTabChange = (key) => {
    onChange?.(key);
  };

  return (
    <div className={styles.tabs}>
      <ul role="list">
        {items.map((item, index) => (
          <li
            key={index}
            className={index === activeTab && 'active'}
            onClick={() => handleTabChange(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
