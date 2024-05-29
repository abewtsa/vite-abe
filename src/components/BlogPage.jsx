const BlogPage = ({ title, content, onClose }) => {
  return (
    <div className="blog-page-overlay">
      <div className="blog-page-content">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <h1>{title}</h1>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default BlogPage;
