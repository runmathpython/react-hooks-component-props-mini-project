import React from "react";

function Article({title, link, date = "January 1, 1970", preview, minutes}){
  let emoji, length;

  if(minutes < 30){
    emoji = "☕️";
    length = Math.ceil(minutes/5);
  }else{
    emoji = "🍱";
    length = Math.ceil(minutes/10);
  }
  
  let emojies = [];
  for (let i = 0; i < length; i++){
    emojies.push(emoji)
  }

  const eArray = emojies.map((e) => {
      return <small>{e}</small>
  })
  return(
    <article>
      <h3><a href={link}>{title}</a></h3>
      <small>{date} </small>
      {eArray}
      . <small>{minutes}</small> min read
      <p>{preview}</p>
      
    </article>
  )
}

export default Article;