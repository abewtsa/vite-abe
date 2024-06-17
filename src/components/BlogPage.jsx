const BlogPage = ({
  title,
  content,
  colour,
  preview,
  onClose,
  cta,
  ctalink,
}) => {
  return (
    <div className="blog-page-overlay">
      <div className="blog-page-content">
        <div
          className="blog-page-content-left"
          style={{ backgroundColor: colour }}
        >
          <div>
            <h1>{title}</h1>
            <h3>{preview}</h3>
          </div>
          <div style={{ marginTop: "20px" }}>
            {cta && (
              <a
                href={ctalink}
                target="_blank"
                rel="noreferrer"
                className="custom-link"
              >
                {cta}
                {/* <button className="btn">{cta}</button> */}
              </a>
            )}
          </div>
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
