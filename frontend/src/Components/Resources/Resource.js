import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { reslink } from '../../utils/Icons';
import { resdata } from './data';
const Resource = () => {
const [data, setData] = useState(resdata)
return(
  <><h1 style={{textAlign:"center"}}>e-Learnings</h1>
  <br/>
<Container>
  
  {data.map((item)=>{
     return (
      <Card style={{ width: '20rem',backgroundColor:'#f7f8f9',color:'#191919',border:'4px solid #d3d6dd',borderRadius:'0.5rem',padding:'1rem' }}>
        <Card.Img variant="top" src={item.image_url} style={{width:"280px",height:"186px",marginLeft:"0"}} />
        <Card.Body>
          <Card.Title className="title">{item.title}</Card.Title>
          <Card.Text>
            <p className="author">{item.auhtor}</p>
            <p className="content">{item.category} Content <span className='free'>{item.type} </span></p>
            
            
          </Card.Text>
          <a href={item.link} target="_blank" className='link'>Source &nbsp; {reslink}</a>
        </Card.Body>
      </Card>
    );
  })}
</Container>
</>
)
 
}
const Container=styled.div`
display:grid;
gap:20px;
grid-template-columns: auto auto auto;
.title{
  font-weight:600;
  font-size:1.2rem;
}
.content{
  display:flex;
  justify-content: space-between;
  text-transform:capitalize;
  font-weight:600;
  font-size:1rem;
}
.free{
  color:#2596be;
}
.link{
 text-decoration:none;
 font-weight:600;
}
a:link{
  color:#222260;
}
a:visited{
  color:#222260;
}
a:hover{
  color:#b88f62;
}
`
export default Resource