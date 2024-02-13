interface TabContentsProps {
  contents?: React.ReactNode[];
}

export default function TabContents({ contents = [] }: TabContentsProps) {
  return (
    <div>
      {contents.map((item) => (
        <article>{item}</article>
      ))}
    </div>
  );
}
