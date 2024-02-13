'use client';

import TabContents from './TabContents';
import styles from './tabs.module.css';

interface TabsProps {
  tabs: string[];
  contents: React.ReactNode[];
  activeTab?: number;
  onChange?: (key: number) => void;
}

export default function Tabs({ tabs = [], contents = [], activeTab = 0, onChange }: TabsProps) {
  const handleTabChange = (key) => {
    onChange?.(key);
  };

  return (
    <>
      <div className={styles.tabs}>
        <ul role="list">
          {tabs.map((item, index) => (
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
      <TabContents contents={contents} />
    </>
  );
}
