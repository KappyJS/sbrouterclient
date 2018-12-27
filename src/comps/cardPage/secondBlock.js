import {Card,CardBody,CardText,CardHeader,CardFooter,Badge,Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import React,{Component,Fragment} from 'react'
import CircularProgressbar from 'react-circular-progressbar';

import ModalPage from '../Modal'

class secondBlock extends Component {
    constructor(props){
        super(props)
this.state = {modal:false}
this.toggle = this.toggle.bind(this);
    }

    
        toggle() {
            this.setState({
              modal: !this.state.modal
            });
          }
    

    render(){
    const {weight,progress} = this.props
  
    
return(
    <Fragment>
<div className={"d-flex flex-column align-items-center box-percent p-4"}>
    <div><span className={"text-success"}>Подходит вам на</span></div>
    <div className={"m-4"}>
    <CircularProgressbar  styles={{
    path: { stroke: "green" ,transition : "stroke-dashoffset 0.5s ease 0s"},
    text: { fill: "green", fontSize: '1em','text-anchor': 'middle' },
    trail: {stroke:"#d2d2d2"},
  }}  percentage={progress}  initialAnimation={true} className={"progress-svg"} text={progress+"%"}  />
           
           </div>
           <div>
               <Button onClick={this.toggle} outline color="success">Подать заявку</Button>
           </div>
</div>
<Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          
          <ModalBody>
              <div className={"d-flex flex-column"}>
            <div className={"text-center"}> <h3>Станьте клиентом корпсферы</h3> </div>
            <div className={"text-center"}>  <p>И кредит по выгодным условиям ваш</p> </div>

            <div className="row row badge-row d-flex"> 
            <div className={"col-3"}>
            <Badge color="light" pill>1</Badge>
            </div>  
            <div className={"col align-self-center"}><span>Зарегестрируйтесь</span> </div>
            </div>

            <div className="row row badge-row d-flex"> 
            <div className={"col-3"}>
            <Badge color="light" pill>2</Badge>
            </div>  
            <div className={"col align-self-center"}><span>Расместите свой актив</span> </div>
            </div>

            <div className="row badge-row d-flex"> 
            <div className={"col-3"}>
            <Badge color="light" className={"last"} pill>3</Badge>
            </div>  
            <div className={"col align-self-center"}><span>Оформите заявку на кредит в рамках госпрограммы поддержки</span> </div>
            </div>
            </div>  
          </ModalBody>
          <ModalFooter>
            <Button color="success" outline onClick={this.toggle}>Зарегестрироваться</Button>{' '}

          </ModalFooter>
        </Modal>
</Fragment>
)
}}

export default secondBlock