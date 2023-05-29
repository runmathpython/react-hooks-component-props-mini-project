import React from "react";
import Article from "./Article";

function ArticleList({posts}){
    const postArray = posts.map((p) => {
        return <Article key={p.id} title={p.title} link={p.link}
                date={p.date} preview={p.preview}
                minutes={p.minutes} />
    })
    return(
      <main>
        {postArray}
      </main>
    )
}

export default ArticleList;