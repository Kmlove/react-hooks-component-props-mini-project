import Article from "./Article"

function ArticleList({posts}){

    console.log(posts)
    const articleArray = posts.map((blogObj) => {
        return <Article key={blogObj.id} minutes={blogObj.minutes} title={blogObj.title} date={blogObj.date} preview={blogObj.preview}/>
    })
    
    return (
        <main>
            {articleArray}
        </main>
    )
}

export default ArticleList