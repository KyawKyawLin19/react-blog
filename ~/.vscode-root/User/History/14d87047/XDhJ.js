import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('Kyaw Kyaw Lin');
    const [age, setAge] = useState(29);
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
      ]);

    const handleClick = () => {
        setName('Htet Thiri Zaw');
        setAge(27);
        setBlogs([
            { title: 'My new website2', body: 'lorem ipsum...', author: 'mario', id: 1 },
            { title: 'Welcome party2!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
            { title: 'Web dev top tips2', body: 'lorem ipsum...', author: 'mario', id: 3 }
        ]);
    }

    return (
        <div className="home">
            <h2>Home Page</h2>
            <p>{ name } is { age } years old.</p>
            {
                blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id}>
                        <h2>{ blog.title }</h2>
                        <p>{ blog.body }</p>
                        <p>Written by { blog.author }</p>
                    </div>
                ))
            }
            <button onClick={handleClick}>Click</button>

        </div>
    );
}

export default Home;