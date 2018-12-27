import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Table, Row, Col } from 'reactstrap';

export default class componentName extends Component {
    constructor(props){
        super(props);
        this.state = {isFetching : true}
    }
    componentDidMount(){
        fetch('http://localhost:3001/admin')
        .then(response => response.json())
        .then(data => {
             this.setState({data:data,isFetching:false})
            }
             )
    }
    
  render() {
      if(this.state.isFetching){
          return <h1>Loading...</h1>
       }
       else{
const data = this.state.data.map(data=>{
    return( <tr>
            <td><p>{data.gov_id}</p></td>
            <td><p>{data.gov_name}</p></td>
            <td><p>{data.gov_desc}</p></td>
            <td><p>{data.gov_date_start}</p></td>
            <td><p>{data.gov_date_end}</p></td>
            <td><p>{data.gov_credit_time}</p></td>
            <td><p>{data.gov_pool_form}</p></td>
            <td><p>{data.gov_owner}</p></td>
            <td><p>{data.govs_sum}</p></td>
            <td><p>{data.gov_percent}</p></td>

    </tr>
    )
});
    return (
         
        <Table hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Имя</th>
            <th>Описание</th>
            <th>Дата начала</th>
            <th>Дата окончания</th>
            <th>Срок кредита</th>
            <th>Формы выдачи</th>
            <th>Администратор программы</th>
            <th>Сумма</th>
            <th>Ставка</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data}
        
        </tbody>
        
        </Table>
    )
       
  }}
}

