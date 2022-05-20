import articleStyle from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'
const ArticleList = ({articles}) => {
    console.log(articles)
  return (
    <div className={articleStyle.grid} >
         {articles.map(article => (
             <ArticleItem article={article}/>
        ))}
    </div>
  )
}

export default ArticleList