import React, { lazy, Suspense, useMemo } from "react";
import { PrismAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const highlight = (code, language) => {
  return useMemo(
    () => (
      <SyntaxHighlighter
        language={language}
        style={materialDark}
        showLineNumbers={true}
        showInlineLineNumbers={true}
      >
        {code}
      </SyntaxHighlighter>
    ),
    [code, language]
  );
};

const SyntaxHighlighterLazy = lazy(() =>
  import("react-syntax-highlighter/dist/esm/prism-async")
);

const CodeHighlighter = ({ code }) => (
  <Suspense fallback={<div>Loading...</div>}>
    {highlight(code, "yaml")}
  </Suspense>
);

export default CodeHighlighter;
