import React from 'react';

const Blog = () => {
    return (
        <div className='max-w-screen-xl mx-auto min-h-[100vh]'>
      <div className="collapse">
  <input type="checkbox" /> 
  <div className="collapse-title text-xl font-medium">
    Click me to show/hide content
  </div>
  <div className="collapse-content"> 
    <p>hello</p>
  </div>
</div>
        </div>
    );
};

export default Blog;