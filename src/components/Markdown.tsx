import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import CodeBlock from "./CodeBlock";

const customParseContent = {
  table: ({ children }: any) => (
    <div className="my-8 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200">{children}</table>
    </div>
  ),
  thead: ({ children }: any) => (
    <thead className="bg-gray-50">{children}</thead>
  ),
  tbody: ({ children }: any) => (
    <tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>
  ),
  tr: ({ children, isHeader }: any) => (
    <tr className={`${!isHeader && "hover:bg-gray-50"}`}>{children}</tr>
  ),
  th: ({ children }: any) => (
    <th
      scope="col"
      className="py-3.5 px-6 text-left text-sm font-semibold text-gray-900 border-r last:border-r-0"
    >
      {children}
    </th>
  ),
  td: ({ children }: any) => (
    <td className="whitespace-nowrap py-4 px-6 text-sm text-gray-500 border-r last:border-r-0">
      {children === "✅" ? (
        <span className="text-green-500 text-lg">✅</span>
      ) : children === "❌" ? (
        <span className="text-red-500 text-lg">❌</span>
      ) : (
        children
      )}
    </td>
  ),
  h1: ({ children }: any) => (
    <h1 className="text-3xl font-bold mt-8 mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
      {children}
    </h1>
  ),
  h2: ({ children }: any) => (
    <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800 flex items-center gap-2">
      {children}
    </h2>
  ),
  h3: ({ children }: any) => (
    <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">
      {children}
    </h3>
  ),
  blockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-indigo-500 pl-4 py-3 my-6 bg-indigo-50 rounded-r-lg">
      {children}
    </blockquote>
  ),
  doubleBlockquote: ({ children }: any) => (
    <blockquote className="border-l-4 border-indigo-500 pl-4 py-3 my-6 bg-indigo-50 rounded-r-lg">
      <blockquote className="border-l-4 border-indigo-500 pl-4 py-3 my-6 bg-indigo-50 rounded-r-lg">
        {children}
      </blockquote>
    </blockquote>
  ),
  ul: ({ children }: any) => (
    <ul className="space-y-2 my-4 ml-6">{children}</ul>
  ),
  li: ({ children }: any) => (
    <li className="flex items-start gap-2">
      <span
        className={
          children[1]?.type?.name === "p" ? "my-4 " : "" + "text-indigo-500"
        }
      >
        •
      </span>
      <span className="flex-1">{children}</span>
    </li>
  ),
  p: ({ children }: any) => (
    <p className="my-4 text-gray-700 leading-relaxed">{children}</p>
  ),
  code({ inline, className, children }: any) {
    const match = /language-(\w+)/.exec(className ?? "");

    if (inline) {
      return (
        <code className="px-1.5 py-0.5 bg-gray-100 text-indigo-600 rounded-md font-mono text-sm border border-gray-200">
          {children}
        </code>
      );
    }

    return match ? (
      <div className="my-8">
        <CodeBlock code={children} language={"javascript"} />
      </div>
    ) : (
      <code className="px-1.5 py-0.5 bg-gray-100 text-indigo-600 rounded-md font-mono text-sm border border-gray-200">
        {children}
      </code>
    );
  },
  hr: () => <hr className="my-8 border-t-2 border-gray-100" />,
  strong: ({ children }: any) => (
    <strong className="font-semibold text-indigo-600">{children}</strong>
  ),
  em: ({ children }: any) => (
    <em className="text-gray-600 italic">{children}</em>
  ),
};

export default function Markdown({ content }: { content: string }) {
  return (
    <ReactMarkdown
      className="text-gray-700 leading-relaxed"
      remarkPlugins={[remarkGfm]}
      components={customParseContent}
    >
      {content}
    </ReactMarkdown>
  );
}
