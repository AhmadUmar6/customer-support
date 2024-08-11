import ReactMarkdown from 'react-markdown';
import { Typography } from '@mui/material';
import remarkGfm from 'remark-gfm';

export default function MarkdownRenderer({ children }) {
  return (
    <ReactMarkdown
      components={{
        p: ({ node, ...props }) => <Typography variant="body1" gutterBottom {...props} />,
        h1: ({ node, ...props }) => <Typography variant="h5" gutterBottom {...props} />,
        h2: ({ node, ...props }) => <Typography variant="h6" gutterBottom {...props} />,
        h3: ({ node, ...props }) => <Typography variant="subtitle1" gutterBottom {...props} />,
        h4: ({ node, ...props }) => <Typography variant="subtitle2" gutterBottom {...props} />,
        li: ({ node, ...props }) => <Typography component="li" variant="body1" {...props} />,
        strong: ({ node, ...props }) => <Typography variant="body1" component="span" fontWeight="bold" {...props} />,
      }}
      remarkPlugins={[remarkGfm]}
    >
      {children}
    </ReactMarkdown>
  );
}