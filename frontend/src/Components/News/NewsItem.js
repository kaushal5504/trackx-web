import React from 'react'
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import { link } from '../../utils/Icons';
const NewsItem = ({title,description,name,author,publishedAt,url}) => {
  return (
    <Card style={{ width: '40rem',margin:'auto',backgroundColor:'#f7f8f9',color:'#191919',border:'2px solid grey',borderRadius:'0.2rem',padding:'1rem' }} >
    <Card.Body>
      <Card.Title style={{fontSize:'1.5rem', fontWeight:'bold',color:'#181716'}}>{title}</Card.Title>
      <Card.Text style={{fontSize:'1rem'}}>
        {description}
        <p><b>Article by:</b>{author}</p><p><b>publishedAt:</b> {publishedAt}</p>
      </Card.Text>
      <p style={{display:'flex', flexDirection:'row-reverse'}}>Read the entire article here<LinkStyled href={url} target="_blank" className="link" style={{ textDecoration: 'none',color:'#372d81'}}>{link}</LinkStyled></p>
    </Card.Body>
  </Card>
  )
}
const LinkStyled = styled.a`
a:visited:{
  color:#372d81;
}
`

export default NewsItem