import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About";
import ArticlList from "./ArticleList"

// console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name}/>
      <About image={blogData.image} about={blogData.about}/>
      <ArticlList posts={blogData.posts}/>
    </div>
  );
}

export default App;
