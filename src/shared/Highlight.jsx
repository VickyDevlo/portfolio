export const highlight = (code, lang) => {
  const escape = (s) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  if (lang === "xml") {
    const pattern =
      /(<!--[\s\S]*?-->)|(<\/?[\w:.-]+)|([\w:-]+(?==))|("(?:[^"\\]|\\.)*")|(\/?>)/g;
    let last = 0,
      out = "",
      m;
    while ((m = pattern.exec(code)) !== null) {
      out += escape(code.slice(last, m.index));
      const [full, comment, tagOpen, attr, str, tagClose] = m;
      if (comment) out += `<span class="tok-comment">${escape(full)}</span>`;
      else if (tagOpen) out += `<span class="tok-tag">${escape(full)}</span>`;
      else if (attr) out += `<span class="tok-attr">${escape(full)}</span>`;
      else if (str) out += `<span class="tok-string">${escape(full)}</span>`;
      else if (tagClose) out += `<span class="tok-tag">${escape(full)}</span>`;
      last = pattern.lastIndex;
    }
    out += escape(code.slice(last));
    return out;
  }

  const pattern =
    /(\/\/.*$)|("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)|(\b(?:import|export|default|function|const|let|var|return|from|useState)\b)|(\b(?:true|false|null|undefined)\b)|([{}()])/gm;
  let last = 0,
    out = "",
    m;
  while ((m = pattern.exec(code)) !== null) {
    out += escape(code.slice(last, m.index));
    const [full, comment, str, kw, lit, brace] = m;
    if (comment) out += `<span class="tok-comment">${escape(full)}</span>`;
    else if (str) out += `<span class="tok-string">${escape(full)}</span>`;
    else if (kw) out += `<span class="tok-keyword">${escape(full)}</span>`;
    else if (lit) out += `<span class="tok-literal">${escape(full)}</span>`;
    else if (brace) out += `<span class="tok-brace">${escape(full)}</span>`;
    last = pattern.lastIndex;
  }
  out += escape(code.slice(last));
  return out;
};
