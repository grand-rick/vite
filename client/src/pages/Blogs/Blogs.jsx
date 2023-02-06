import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './Blogs.css'

const Blogs = () => {
  return (
    <>
        <Navbar title="PEGASUS" op1="Compose" op2="About Us" op3="Contact Us" />

        <div className="blog">

            <h1>Blog Name</h1>
            <br />

            <main>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus facere est adipisci consequatur molestias, ex unde, doloribus quod ea placeat nesciunt, dicta mollitia veniam. Labore ullam vitae cumque dolores natus dignissimos in voluptate expedita ab sequi non nemo magnam quaerat, unde ratione hic architecto pariatur nisi reprehenderit eum excepturi ex odio distinctio eligendi! Maiores dignissimos laboriosam ab quis atque impedit, eligendi veniam laudantium incidunt consectetur obcaecati, earum distinctio odio architecto rem aliquid! Ab, ipsum iure? Consequuntur itaque repellendus, impedit explicabo a, maxime cumque dolores fugit nobis modi similique, nihil voluptatibus atque placeat illum neque. Ab laboriosam voluptas pariatur blanditiis obcaecati.</p>
            </main>

            <div className="author">
                <h4>- Author</h4>
            </div>
        </div>
    </>
    )
}

export default Blogs;