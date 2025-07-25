import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; // Optional: For GitHub Flavored Markdown (tables, task lists, etc.)

function ChatResponseDisplay({ chatResponse }) {
  return (
    <div className="chat-message">
      {/* The 'children' prop of ReactMarkdown will be the string
        containing the markdown from your ChatGPT response.
      */}
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {chatResponse.text}
      </ReactMarkdown>
    </div>
  );
}

export default ChatResponseDisplay;