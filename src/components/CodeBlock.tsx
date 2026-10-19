import { useEffect, useRef, useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { createHighlighter, type Highlighter } from 'shiki';

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
  showLineNumbers?: boolean;
}

type HighlightToken = {
  content: string;
  color?: string;
};

let highlighterPromise: Promise<Highlighter> | null = null;

const SUPPORTED_LANGUAGES = [
  'c',
  'cpp',
  'bash',
  'javascript',
  'typescript',
  'json',
  'html',
  'css',
  'python',
  'java',
  'sql',
  'text',
] as const;

const LANGUAGE_ALIASES: Record<string, string> = {
  c: 'c',
  'c++': 'cpp',
  cpp: 'cpp',
  bash: 'bash',
  shell: 'bash',
  sh: 'bash',
  terminal: 'bash',
  javascript: 'javascript',
  js: 'javascript',
  typescript: 'typescript',
  ts: 'typescript',
  json: 'json',
  html: 'html',
  css: 'css',
  python: 'python',
  py: 'python',
  java: 'java',
  sql: 'sql',
  text: 'text',
  plaintext: 'text',
  plain: 'text',
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getHighlighter(): Promise<Highlighter> {
  if (!highlighterPromise) {
    highlighterPromise = createHighlighter({
      themes: ['github-dark', 'github-light'],
      langs: [...SUPPORTED_LANGUAGES],
    }).catch((error: unknown) => {
      highlighterPromise = null;
      throw error;
    });
  }

  return highlighterPromise;
}

export function CodeBlock({ code, language, filename, showLineNumbers = true }: CodeBlockProps) {
  const [highlighted, setHighlighted] = useState<string>('');
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function highlightCode() {
      try {
        const highlighter = await getHighlighter();
        const normalizedLanguage = language.trim().toLowerCase();
        const langKey = LANGUAGE_ALIASES[normalizedLanguage] ?? 'text';
        const result = await highlighter.codeToTokens(code, {
          lang: langKey,
          theme: 'github-dark',
        });

        if (!cancelled) {
          setHighlighted(renderTokens(result.tokens));
        }
      } catch {
        if (!cancelled) {
          setHighlighted(`<code>${escapeHtml(code)}</code>`);
        }
      }
    }

    void highlightCode();

    return () => {
      cancelled = true;
    };
  }, [code, language, showLineNumbers]);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  function renderTokens(tokens: HighlightToken[][]): string {
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

  async function handleCopy() {
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }

    setCopied(false);
    setCopyFailed(false);

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      setCopyFailed(true);
    }

    copyTimeoutRef.current = setTimeout(() => {
      setCopied(false);
      setCopyFailed(false);
      copyTimeoutRef.current = null;
    }, 2000);
  }

  const normalizedLanguage = language.trim().toLowerCase();
  const langKey = LANGUAGE_ALIASES[normalizedLanguage] ?? normalizedLanguage;
  const langLabel =
    langKey === 'c' ? 'C' :
    langKey === 'cpp' ? 'C++' :
    langKey === 'bash' ? 'Terminal' :
    langKey === 'text' ? 'Plain Text' :
    langKey.toUpperCase();

  return (
    <div className="code-block my-4 rounded-xl overflow-hidden border border-[var(--color-border)] bg-[#0d1117]">
      <div className="flex items-center justify-between px-4 py-2.5 bg-[var(--color-surface)] border-b border-[var(--color-border)]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5" aria-hidden="true">
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
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors"
            aria-label={copyFailed ? 'Copy failed' : copied ? 'Code copied' : 'Copy code'}
            title={copyFailed ? 'Clipboard access failed' : undefined}
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copyFailed ? 'Copy failed' : copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
      <pre
        className="overflow-x-auto p-4 text-sm leading-relaxed"
        dangerouslySetInnerHTML={{ __html: highlighted || `<code>${escapeHtml(code)}</code>` }}
      />
    </div>
  );
}
