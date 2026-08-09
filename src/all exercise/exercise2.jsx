
const Header = () =>{
    return (
        <h1> Ai post</h1>
    )
}

const Post = ()=>{
    return(
        <div>
            <h2> AI dugsiiye Post</h2>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur enim necessitatibus veritatis doloribus doloremque eveniet velit repellat quas sed odit, magnam suscipit nulla. Numquam laudantium, hic repellendus nisi beatae exercitationem nostrum nihil, culpa cupiditate, delectus maxime unde illum illo molestiae voluptatem maiores cum! Aspernatur laudantium quisquam placeat accusamus veritatis!</p>
        </div>
    )
}

const Footer = ()=>{
    return(
        <p> &copy;2026 AI dugsiiye. All rights reserved.</p>
    )
}

const Blog = ()=>{
    return (
        <>
            <Header/>
            <Post/>
            <Footer/>
        </>
    )
}
export default Blog;