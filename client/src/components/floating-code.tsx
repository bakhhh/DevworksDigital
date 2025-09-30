import { useEffect, useState } from "react";

interface CodeSnippet {
  id: string;
  text: string;
  x: number;
  y: number;
  animationDelay: number;
}

const codeSnippets = [
  "&lt;div className=\"hero\"&gt;",
  "function createMagic() {",
  "const result = transform(ideas);",
  ".container { display: flex; }",
  "return &lt;App /&gt;;",
  "npm install success",
  "export default DevWorks;",
  "git commit -m \"magic\"",
  "const [state, setState] = useState();",
  "useEffect(() => {",
  "background: linear-gradient();",
  "fetch('/api/data')",
  "Promise.resolve()",
  "&lt;Component /&gt;",
  "async function deploy() {",
  "if (awesome) { return true; }",
];

export default function FloatingCode() {
  const [snippets, setSnippets] = useState<CodeSnippet[]>([]);

  const generateSnippets = () => {
    const newSnippets = codeSnippets.slice(0, 10).map((text, index) => ({
      id: `snippet-${index}`,
      text,
      x: Math.random() * 100,
      y: Math.random() * 100,
      animationDelay: Math.random() * 6,
    }));
    setSnippets(newSnippets);
  };

  useEffect(() => {
    generateSnippets();
    
    const interval = setInterval(() => {
      generateSnippets();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="absolute font-mono text-xs md:text-sm select-none animate-rgb animate-fade-in-out transition-all ease-in-out"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
            animationDelay: `${snippet.animationDelay}s`,
            transform: 'translate(-50%, -50%)',
            transitionDuration: '3000ms',
          }}
          dangerouslySetInnerHTML={{ __html: snippet.text }}
        />
      ))}
    </div>
  );
}
