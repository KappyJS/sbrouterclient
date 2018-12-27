import React,{Component,Fragment} from 'react'
import {connect} from 'react-redux'
import * as actionCreators from '../../reducers/actions';
import { bindActionCreators } from 'redux';
import {Row,Col} from 'reactstrap'
import MainBlock from './mainBlock'
import SecondBlock from './secondBlock'




 class CardPage extends Component{

    constructor(props){
        super(props)
        this.state = {isLoading:true}
        
    }
    componentDidMount(){
        console.log(this.props.selected)
        fetch("https://sbrouterserver.herokuapp.com/govs"+this.props.match.params.id, {
            method: "POST",
            headers: {
              Accept: "application/json, text/plain, */*",
              "Content-Type": "application/json"
            },
            body: JSON.stringify(this.props.selected)
          })
            .then(data => data.json())
            .then(data => this.setState({data:data,isLoading:false}));
       
    }
   
    render(){

        const id = this.props.match.params.id
        const data = this.props.govs.filter(item => {
            if (id == item.gov_id){
                return item
            }
        })[0]
        const weight = this.props.data.max_weight
        var max_weight = 0
        var choosen = 0
        for (var elems in weight){
            if(weight[elems].gov_id==id){
                max_weight = weight[elems].max_weight
            }
        }
          const govs = this.props.govs
        for (var elems in govs){
            if(govs[elems].gov_id==id){
                choosen = govs[elems].choose_weight
            }
        }
        const progress = Math.round((choosen/max_weight)*100);


        return(
        <Fragment><Row className={"p-5"}>
            {console.log(this.state)}
            <Col md={9}>
        {
            this.state.isLoading? <h1>Load Now</h1>:<MainBlock deals={this.state.data.deals} unselected={this.state.data.requirements} data ={data}/>}
        </Col>
        <Col >
        <SecondBlock progress={progress}  />
        </Col>
        </Row>
        </Fragment>
        
        
            )
    }
}

const mapStateToProps = (store) =>{
    return{
      data:store.data,
      govs:store.govs,
      selected : store.selected
    }
  }

  export default  connect(mapStateToProps)(CardPage)

  /*
  <MainBlock gov = {gov}/>
        </Col>
        <Col md={4}>
        <SecondBlock weight = {gov.choose_weight}/>
  */