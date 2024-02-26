import React from 'react'

const Blog = ({blog}) => {
  return (
    <div>

        { blog.map((blog)=>(
            <>
                <h1>{blog.address.city}</h1>
                <h1>{blog.address.zipcode}</h1>
                <h1>{blog.address.suite}</h1>
                

            </>
        ))}

    </div>
  )
}

export default Blog