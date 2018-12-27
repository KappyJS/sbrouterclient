import {Card,CardBody,CardText,CardHeader,CardFooter,Button} from 'reactstrap'
import React from 'react'

const MainBlock = (props) =>{
    const {gov_name,gov_owner,govs_sum,gov_credit_time,gov_percent,gov_date_end,gov_desc} = props.data
    const unselected = props.unselected.map(item =>
        <li>{item.cli_desc}</li>)
        const deals = props.deals.map(item =>
            <li>{item.deal_name}</li>)
           
return(
<div>
        <h3>{gov_name}</h3>
        <hr/>
        <div>
            <span><b>Ведомство</b></span>
            <p>{gov_owner}</p>
        </div>
        <div>
            <span><b>Сумма</b></span>
            <p>{govs_sum}</p>
        </div>
        <div>
            <span><b>Срок льготного кредитования</b></span>
            <p>{gov_credit_time}</p>
        </div>
        <div>
            <span><b>Ставка</b></span>
            <p>{gov_percent}</p>
        </div>
        <div>
            <span><b>Срок окончания</b></span>
            <p>{gov_date_end}</p>
        </div>
        <div >
            <h4>Описание</h4>
            <div>
            <span><b>Цели</b></span>
            <p>{gov_desc}</p>
      
         
        </div>
        </div>
        <div name="req" className={"error-require"}>
            <h4>Необходимые требования</h4>
            <ul>
{unselected}
</ul>
        </div>

        <div>
            <h4>Необходимые требования для сделки</h4>
            <ul>
{deals}
</ul>
        </div>

      
       

        </div>
)
}

export default MainBlock