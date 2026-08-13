import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function CodeBlock({ code, language, filename, showLineNumbers = true }: CodeBlockProps) {
  const [highlighted, setHighlighted] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const { codeToTokens, createHighlighter } = await import('shiki');
        const langs = ['c', 'cpp', 'bash', 'javascript', 'typescript', 'json'];
        const langKey = language === 'c' ? 'c' : language === 'cpp' ? 'cpp' : 'bash';
        const hl = await createHighlighter({
          themes: ['github-dark', 'github-light'],
          langs: langs,
        });
        const result = await codeToTokens(code, {
          lang: langKey as any,
          theme: 'github-dark',
        });
        if (!cancelled) {
          setHighlighted(renderTokens(result.tokens));
        }
        hl.dispose();
      } catch {
        if (!cancelled) {
          setHighlighted(`<code>${escapeHtml(code)}</code>`);
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [code, language]);

  function renderTokens(tokens: any[][]): string {
    let html = '';
    tokens.forEach((line, i) => {
      const lineContent = line
        .map((token) => `<span style="color:${token.color || '#e1e4e8'}">${escapeHtml(token.content)}</span>`)
        .join('');
      const lineNumber = showLineNumbers
        ? `<span class="code-line-number">${i + 1}</span>`
        : '';
      html += `<span class="code-line">${lineNumber}<span class="code-line-content">${lineContent || ' '}</span></span>`;
    });
    return `<code>${html}</code>`;
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const langLabel = language === 'c' ? 'C' : language === 'cpp' ? 'C++' : language === 'bash' ? 'Terminal' : language.toUpperCase();

  return (
    <div className="code-block my-4 rounded-xl overflow-hidden border border-[var(--color-border)] bg-[#0d1117]">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          {filename && (
            <span className="ml-3 text-sm font-mono text-[var(--color-text-secondary)]">{filename}</span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono px-2 py-0.5 rounded bg-[var(--color-surface-active)] text-[var(--color-accent)] font-medium">
            {langLabel}
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
            aria-label="Copy code"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
      <pre
        ref={codeRef}
        className="overflow-x-auto p-4 text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      />
    </div>
  );
}
