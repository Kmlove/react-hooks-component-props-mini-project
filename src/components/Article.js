function Article({ 
    title, 
    date = "January 1, 1970", 
    preview, 
    minutes 
}) {
  
    function readTime() {
        let display = minutes < 30 ? "☕️" : "🍱";
        let time = minutes;

        if (minutes < 30) {
        while (time > 5) {
            display += "☕️";
            time -= 5;
        }
        return display;

        } else {
        while (time > 10) {
            display += "🍱";
            time -= 10;
        }
        return display;
        }
    }

  return (
    <article>
      <h3>{title}</h3>
      <small>{date} - {readTime()}{minutes} min read</small>
      <p>{preview}</p>
    </article>
  );
}

export default Article;
