import React,{useState} from 'react'
import { data } from './data'
import NewsItem from './NewsItem'
import styled from 'styled-components'

const News = () => {
    const [dataItem,setData] = useState(data.articles)
    const [query, setQuery] = useState('')
    // console.log(dataItem);
  return (
    <InputStyled>
        <h1 style={{textAlign:'center'}}>News</h1>
        < input className="input-con" type="text" placeholder="Search..."
        value={query}
        onChange={(e)=>setQuery(e.target.value)}
        />
        
{dataItem.filter((item)=>{
  return item.title.toLowerCase().includes(query)
}).slice(0,200).map((item)=>{
    const {title,description,source,author,publishedAt,url}=item
    console.log(item);
   return (
    <div>
    <NewsItem key={Math.random(1,200)}
    title={title}
    description={description}
    name={''}
    author={author?author:source.name}
    publishedAt={publishedAt}
    url={url}
    />
    <br/>
    </div>
   )
  
   
})}
    </InputStyled>
  )


}

const InputStyled=styled.div`

input[type=text] {
        
  padding: 12px 20px;
  
  box-sizing: border-box;
}
input[type=text]:focus {
  background-color: lightgray;
  color:black;
}
.input-con{
  width:38rem;
  margin-left:12rem;
  margin-bottom:2rem;
}
`

;
export default News
