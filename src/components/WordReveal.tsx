interface Props {
  children: string;
  className?: string;
  startDelay?: number;
  stagger?: number;
}

export default function WordReveal({ children, className = '', startDelay = 0.15, stagger = 0.08 }: Props) {
  const words = children.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span
          key={i}
          className="hero-word"
          style={{ animationDelay: `${startDelay + i * stagger}s` }}
        >
          {word}{i < words.length - 1 ? ' ' : ''}
        </span>
      ))}
    </span>
  );
}
