


function Blog({children, signedIn}){
    return(
        <>
            <h1>My Blog Post</h1>
            <p>This is another test</p>
            <p>Does break line exist?</p>
            <p>Testing my props reading: {signedIn? signedIn.toString():"Nothing"}</p>
            {children}

        </>
    )
}

export default Blog;