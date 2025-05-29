/* eslint-disable no-unused-vars */
import "./App.css";
import { useState, useEffect } from "react";
import "prismjs/themes/prism-tomorrow.css";
import Editor from "react-simple-code-editor";
import prism from "prismjs";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";

function App() {
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`);

  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true); // Start loading
    try {
      const response = await axios.post(
        "http://localhost:3000/ai/get-response",
        {
          code,
        }
      );
      setReview(response.data);
    } catch (error) {
      setReview({ result: "Something went wrong. Please try again." });
    } finally {
      setLoading(false); // Stop loading
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                border: "1px solid #ddd",
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div onClick={reviewCode} className="review">
            Review
          </div>
        </div>
        <div className="right">
          {loading ? (
            <p className="loader"></p> // You can replace this with a spinner if you want
          ) : (
            <Markdown rehypePlugins={[rehypeHighlight]}>
              {review.result || ""}
            </Markdown>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
