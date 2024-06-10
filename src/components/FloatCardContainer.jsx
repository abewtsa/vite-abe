import { useState } from "react";
import FloatCard from "./FloatCard";
import BlogPage from "./BlogPage";
import { blogs } from "./BlogData";

const FloatCardContainer = () => {
  const [zIndexes, setZIndexes] = useState(Array(blogs.length).fill(1));
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [hoveredBlog, setHoveredBlog] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredBlog(index);
  };

  const handleMouseLeave = () => {
    setHoveredBlog(null);
  };

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
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              key={index}
            >
              <FloatCard
                name={blog.name}
                icon={blog.icon}
                iconReverse={blog.iconReverse}
                title={
                  <a
                    style={{
                      color: hoveredBlog === index ? blog.textColour : "",
                    }} // Change title color based on hover
                    href="#"
                    onClick={() => handleOpenBlog(blog)}
                  >
                    {blog.title}
                  </a>
                }
                year={blog.year}
                preview={blog.preview}
                cta={blog.cta}
                ctalink={blog.ctalink}
                footer={blog.footer}
                colour={blog.colour}
                handleHover={() => handleHover(index)}
                zIndex={zIndexes[index]}
                textColour={blog.textColour}
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
          year={selectedBlog.year}
          content={selectedBlog.content}
          colour={selectedBlog.colour}
          textColour={selectedBlog.textColour}
          preview={selectedBlog.preview}
          cta={selectedBlog.cta}
          ctalink={selectedBlog.ctalink}
          onClose={handleCloseBlog}
        />
      )}
    </>
  );
};

export default FloatCardContainer;
