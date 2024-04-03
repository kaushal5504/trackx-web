import React from 'react'
import styled from 'styled-components'
import finadv from '../img/finadv.jpg'
import grwm from '../img/grwm.jpg'
import { down } from '../utils/Icons'
import Card from 'react-bootstrap/Card';
const Advisory = () => {
  return (
    <>
      <h1 style={{textAlign:'center'}}>Financial services</h1>
    
    
    <Container>
        <div className="text">
           <h1>We help you grow your money</h1>
            <h3>Call with executive&#40;+916825088996&#41;<br/>{down}<br/> Choose a plan that suits you <br/>{down}<br/> Virtual meet-up<br/>{down}<br/></h3>
            <h3>That's it,you're done!</h3>
        </div>
        <div className="image">
<img src={grwm}/>
        </div>
        
    </Container>
    <Cards>
    <Card style={{ width: '18rem', backgroundColor:'rgba(22,29,43,155)',border:'1px', borderRadius:'10px',padding:'2px',color:'#e0d6fb' }}>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCYym7O5CjDuOoV6Co6gYyRRt-IyNDXZaJAw&usqp=CAU" style={{width:'286px', height:'140px',border:'1px', borderRadius:'10px',marginTop:'0'}}/>
      <Card.Body>
        <Card.Title style={{textAlign:'center', fontSize:'1.5rem', fontWeight:'500'}}>One Time Plan</Card.Title>
        <Card.Text>
          An hour long virtual meet with a finance expert to get insights and information about the hows and whys.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:'rgba(22,29,43,155)',border:'1px', borderRadius:'10px',padding:'2px',color:'#e0d6fb' }}>
      <Card.Img variant="top" src="https://static.fmgsuite.com/media/images/e174fa48-3b09-44a7-afb1-8aadc9f2167e.jpg?v=1" style={{width:'286px', height:'140px',border:'1px', borderRadius:'10px',marginTop:'0'}}/>
      <Card.Body>
        <Card.Title style={{textAlign:'center', fontSize:'1.5rem', fontWeight:'500'}}>Yearly Plan</Card.Title>
        <Card.Text>
          Get access to 12 sessions with our finance expert + monthly performance report mail at the end of each month.
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', backgroundColor:'rgba(22,29,43,155)',border:'1px', borderRadius:'10px',padding:'2px',color:'#e0d6fb' }}>
      <Card.Img variant="top" src="https://static.fmgsuite.com/media/images/1f6242d2-3c31-44a5-860f-4b5e0ffcef27.jpg?v=1" style={{width:'286px', height:'140px',border:'1px', borderRadius:'10px',marginTop:'0'}}/>
      <Card.Body>
        <Card.Title style={{textAlign:'center', fontSize:'1.5rem', fontWeight:'500'}}>Quarterly Plan</Card.Title>
        <Card.Text>
          Get access to 5 sessions with our finance expert + one premium course of your choice from the resources section.
        </Card.Text>
      </Card.Body>
    </Card>
    </Cards>
    </>
  )
}
const Container = styled.div`
display:flex;
flex-direction:row;
border:1px solid white;
border-radius:20px;
background-color:white;
padding:2rem;
justify-content: space-between;
.image{
  img{
    width:280px;
    height:240px;
    object-fit: cover;
    
  }
 
}
h1{
  text-align:center;
  font-weight:450;
  color:#161d2b;
 }
`

const Cards = styled.div`
margin-top:0.5rem;
display:flex;
flex-direction:row;
justify-content: space-around;
`
export default Advisory