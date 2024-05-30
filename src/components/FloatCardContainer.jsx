import { useState } from "react";
import FloatCard from "./FloatCard";
import BlogPage from "./BlogPage";
import { blogs } from "./BlogData";

const FloatCardContainer = () => {
  const [zIndexes, setZIndexes] = useState(Array(blogs.length).fill(1));
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleHover = (index) => {
    setZIndexes((prevZIndexes) => {
      const newZIndexes = [...prevZIndexes];
      newZIndexes[index] = Math.max(...prevZIndexes) + 1;
      return newZIndexes;
    });
  };

  const handleOpenBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const handleCloseBlog = () => {
    setSelectedBlog(null);
  };

  return (
    <>
      <div id="floatCardHero" className="float-hero">
        <div id="floatCardContainer" className="float-card-container">
          {blogs.map((blog, index) => (
            <div key={index}>
              <FloatCard
                name={blog.name} // Added
                icon={blog.icon} // Added
                title={
                  <a href="#" onClick={() => handleOpenBlog(blog)}>
                    {blog.title}
                  </a>
                }
                preview={blog.preview}
                footer={blog.footer}
                colour={blog.colour}
                handleHover={() => handleHover(index)}
                zIndex={zIndexes[index]}
              />
            </div>
          ))}
        </div>

        {/* <div id="svgContainer" className="float-card-cup">
          <img
            id="floatCardCup"
            src="https://raw.githubusercontent.com/abewtsa/vite-abe/d958030cbd995c4ab5136c8afef78ae6270073d6/public/coffee_cup.svg"
            className="float-hero-coffee-svg"
            alt=""
          />
          <img
            id="candy"
            src="https://raw.githubusercontent.com/abewtsa/vite-abe/89d45dd1d519654657a7c5b31d8fc896ac4145f3/public/candy.svg"
            className="other-svg"
            alt=""
          />
          <img
            id="pencil"
            src="https://raw.githubusercontent.com/abewtsa/vite-abe/89d45dd1d519654657a7c5b31d8fc896ac4145f3/public/pencil.svg"
            className="other-svg"
            alt=""
          />
          <img
            id="note"
            src="https://raw.githubusercontent.com/abewtsa/vite-abe/89d45dd1d519654657a7c5b31d8fc896ac4145f3/public/note.svg"
            className="other-svg"
            alt=""
          />
        </div> */}
      </div>

      {/* Render BlogPage component as overlay if a blog is selected */}
      {selectedBlog && (
        <BlogPage
          title={selectedBlog.title}
          content={selectedBlog.content}
          colour={selectedBlog.colour}
          preview={selectedBlog.preview}
          onClose={handleCloseBlog}
        />
      )}
    </>
  );
};

export default FloatCardContainer;
