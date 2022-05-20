import Head from 'next/head'
import ArticleList from '../component/ArticleList'
export default function Home({articles}) {
  return (
    <div>
      <Head>
        <title>Webwork News</title>
        <meta name='keywords' content='web development, programming' />
      </Head>    
        <ArticleList articles={articles} />
    </div>
  )
}
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
  const articles = await res.json()
  return{
      props: {
          articles
      }
  }
}
