import React,{Component,Fragment} from 'react'
import InputForm from './InputForm'
import Cards from './Cards'
import {Row,Col} from 'reactstrap'
import {connect} from 'react-redux'
import * as actionCreators from '../../reducers/actions';
import { bindActionCreators } from 'redux';
import ModalPage from '../Modal'

class SelectPage extends Component{

    constructor(props){
        super(props)
       this.state = {isFetching : true}
    }

    componentDidMount(){
        fetch('https://sbrouterserver.herokuapp.com/')
        .then(response => response.json())
        .then(data => {
            this.props.dispatch(actionCreators.loadSPData(data))
             })
        .then(()=>{this.setState({isFetching:false})}
        );
    

    }
    openModal(){
        
    }
    render(){
        
        const {govs} = this.props
       
        
       if (govs){
 const weight = this.props.data.max_weight
        console.log(weight);
        var govsCards = this.state.isFetching? <h1>Данные не пришли</h1>:govs.map(item=>{
        for (var elems in weight){
            console.log(weight[elems],weight)
            if(weight[elems].gov_id==item.gov_id){
                return  <Cards  govs={item} max_weight={weight[elems].max_weight}></Cards>   
            }
        }  
       })}  
        return(
<Fragment>
            <Row>
                <Col md={4} className={"border-right ov-a"}>
          {this.state.isFetching? <span>Данные не пришли</span>: <InputForm/>} 
           </Col>
           <Col md={8} className={"card-row p-4 ov-a "}>
           {
               govsCards?(govsCards):(
              <div className={"align-self-center w-100 text-center start-paragraph-div"}>
                  <span className={"start-paragraph"}>Начните заполнять форму</span>
                  </div> 
               )
        }
           </Col>
           </Row>
           </Fragment>
        )
    }
}



const mapStateToProps = (store) =>{
    return{
      data:store.data,
      govs:store.govs
    }
  }
  const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({actionCreators},dispatch);
};


  export default  connect(mapStateToProps)(SelectPage)