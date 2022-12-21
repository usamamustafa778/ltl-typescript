import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  materialDark,
  materialLight,
} from "react-syntax-highlighter/dist/esm/styles/prism";
import { CopyIcon, PasteIcon, SunIcon, MoonIcon } from "../assets/icons";

const Code = ({ children, language, isDark, setIsDark }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCopied(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="code">
      <div className="code__icons">
        <button onClick={() => setIsDark(!isDark)}>
          {isDark ? <MoonIcon /> : <SunIcon />}
        </button>
        <CopyToClipboard text={children} onCopy={() => setCopied(true)}>
          <button className="icon copy-icon">
            {copied ? <PasteIcon /> : <CopyIcon />}
          </button>
        </CopyToClipboard>
      </div>

      <SyntaxHighlighter
        language={language}
        style={isDark ? materialDark : materialLight}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );
};

export default Code;
