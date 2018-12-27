import React,{Component,Fragment} from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink, Table, Row, Col } from 'reactstrap';
import {connect} from 'react-redux'
import TableGovs from './TableGovs'

import classnames from 'classnames';



class AdminPage extends Component{
    constructor(props){
        super(props)
        this.toggle = this.toggle.bind(this);
        this.state = {
          activeTab: '2'
        };
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
          this.setState({
            activeTab: tab
          });
        }
      }
    render(){
    
        return(
            <Fragment>
         
         <div className={"p-4"}>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
            >
              Требования
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              Госпрограммы
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Row>
              <Col sm="12">
                <h4>Tab 1 Contents</h4>
              </Col>
            </Row>
          </TabPane>

          <TabPane tabId="2">
            <Row>
           <TableGovs></TableGovs>
            </Row>
          </TabPane>
        </TabContent>
      </div>

         
            </Fragment>
            
        )

  
}
}

const mapStateToProps = (store) =>{
    console.log(store)
    return{
      govs:store.govs
    }
  }



  export default  connect(mapStateToProps)(AdminPage)