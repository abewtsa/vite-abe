const BlogPage = ({ title, content, colour, preview, onClose }) => {
  return (
    <div className="blog-page-overlay">
      <div className="blog-page-content">
        <div
          className="blog-page-content-left"
          style={{ backgroundColor: colour }}
        >
          <h1>{title}</h1>
          <p>{preview}</p>
        </div>

        <div className="blog-page-content-right">
          <button onClick={onClose} className="close-button">
            &times;
          </button>
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
