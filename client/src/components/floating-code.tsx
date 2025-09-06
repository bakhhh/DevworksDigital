import { useEffect, useState } from "react";

interface CodeSnippet {
  id: string;
  text: string;
  x: number;
  y: number;
  animationDelay: number;
  animationDuration: number;
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

  useEffect(() => {
    const generateSnippets = () => {
      const newSnippets = codeSnippets.slice(0, 8).map((text, index) => ({
        id: `snippet-${index}`,
        text,
        x: Math.random() * 90, // 0-90% to stay within viewport
        y: Math.random() * 90, // 0-90% to stay within viewport
        animationDelay: Math.random() * 6, // 0-6 seconds
        animationDuration: 6 + Math.random() * 4, // 6-10 seconds
      }));
      setSnippets(newSnippets);
    };

    generateSnippets();
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {snippets.map((snippet) => (
        <div
          key={snippet.id}
          className="absolute font-mono text-sm text-primary/30 select-none"
          style={{
            left: `${snippet.x}%`,
            top: `${snippet.y}%`,
            animationDelay: `${snippet.animationDelay}s`,
            animationDuration: `${snippet.animationDuration}s`,
          }}
        >
          <div 
            className="animate-float"
            dangerouslySetInnerHTML={{ __html: snippet.text }}
          />
        </div>
      ))}
    </div>
  );
}
