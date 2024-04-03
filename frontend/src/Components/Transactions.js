import React,{useState} from 'react'
import {useGlobalContext} from '../context/globalContext'
import styled from 'styled-components'
import { dateFormat } from '../utils/dateFormat'


const Transactions = () => {
  const [query, setQuery] = useState('')
    const {transactionHistory,deleteIncome,deleteExpense} = useGlobalContext()

    const [...history] = transactionHistory()
    const[freq,setFreq]=useState('7')
    
    return (
        <HistoryStyled>
            <h2 style={{textAlign:'center'}}>All Transactions</h2>
            <input type="text" placeholder="Search by category,value,type or details..."
            value={query}
            onChange={(e)=>setQuery(e.target.value)}
            />
            <h5>Select Frequency</h5>
<select value={freq} onChange={(e)=>setFreq(e.target.value)}>
    <option value="7">Last 1 Week</option>
    <option value="30">Last 1 Month</option>
    <option value="365">Last 1 Year</option>
</select>

            {history.filter((item)=>{
                  const d1 = new Date(item.date);   
                  var d2 = new Date();   
                      
                  var diff = d2.getTime() - d1.getTime();   
                      
                  var daydiff = diff / (1000 * 60 * 60 * 24);   
                  
                if(Number(query))
                return daydiff<=Number(freq)&&item.amount>=Number(query)

 return daydiff<=Number(freq)&&(item.title.toLowerCase().includes(query) || item.amount.toString().includes(query)||item.type.toLowerCase().includes(query) ||item.category.toLowerCase().includes(query) || item.description.toLowerCase().includes(query)
           ) }).map((item) =>{
                const {_id, title, amount, type,date,description,category} = item
              
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {dateFormat(date)}
                        </p>
                        
                        <p  style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {category}
                        </p>
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0: amount}`
                            }
                        </p>
                    </div>
                )
            })}
        </HistoryStyled>
    )
}

const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width:40rem;
    margin:auto;
    .delete{
        background-color:white;
        border-radius:4px;
        font-size:1.5rem;
        transition-duration: 0.4s;
    }
    .delete:hover{
        background-color:#911630;
        color:white;
    }
    .history-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        
    }
    input[type=text] {
        
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
      }
      input[type=text]:focus {
        background-color: lightgray;
        color:black;
      }
`;
  


export default Transactions