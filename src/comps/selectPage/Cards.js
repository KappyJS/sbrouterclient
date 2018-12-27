import {Card,CardBody,CardText,CardHeader,CardFooter,Button} from 'reactstrap'
import React from 'react'
import CircularProgressbar from 'react-circular-progressbar';
import ReactSVG from 'react-svg'
import {BrowserRouter as  Route,Link,Switch } from 'react-router-dom'
import CardPage from '../cardPage/CardPage'

const Cards = (props) => {
   const {gov_name,gov_percent,gov_credit_time,gov_max_sum,gov_desc,choose_weight,gov_id}=props.govs
   
  

    return (
      
        <Card className={"shadow-sm m-4"}>
          <CardHeader >
          <div className={"d-flex flex-row"}>
              <div className={"d-flex flex-column w-100 justify-content-center"}>
              
              <div><h5>{gov_name}</h5></div>
          <div></div></div>
          
           <div className={"flex-shrink-1"}><CircularProgressbar  styles={{
    path: { stroke: "green" ,transition : "stroke-dashoffset 0.5s ease 0s"},
    text: { fill: "green", fontSize: '1em','text-anchor': 'middle' },
    trail: {stroke:"#d2d2d2"},
  }}  percentage={(choose_weight/props.max_weight)*100}  initialAnimation={true} className={"progress-svg"} text={Math.round((choose_weight/props.max_weight)*100)+"%"}  /></div>
           
           </div>
    
         
         </CardHeader>
          <CardBody className={"p-5"}>
      

            <div className={"row "}>

            <div className={"col row"}>
            <div className={"row"}>
            <div className={"col-4 align-self-center"}>
            <ReactSVG src={"../images/svg/coins.svg"}/>
            </div>
            <div className={"col"}>
            <span className={"span-card-bold"}> {gov_max_sum} </span><br/>
            <span className={"span-card-light"}>Суммы кредита</span>
            </div>
            </div>
          
            </div>

            <div className={"col row"}>
            <div className={"row"}>
            <div className={"col-4 align-self-center"}>
            <ReactSVG src={"../images/svg/calendar.svg"}/>
            </div>
            <div className={"col"}>
            <span className={"span-card-bold"}> {gov_credit_time} </span><br></br>
            <span className={"span-card-light"}>Льготного кредитования</span>
            </div>
            </div>
          
            </div>

            <div className={"col row"}>
            <div className={"row"}>
            <div className={"col-4 align-self-center"}>
            <ReactSVG src={"../images/svg/proc.svg"}/>
            </div>
            <div className={"col align-self-center"}>
            <span className={"span-card-bold"}> {gov_percent} </span><br></br>
            <span className={"span-card-light"}>Процентов<br></br> годовых</span>
            </div>
            </div>
          
            </div>

            </div>
            

            
          </CardBody>
          <CardFooter>
          <Button onClick={props.openModal}  color="warning">Оформить заявку</Button>
         
          <Link to={"/result/"+gov_id} ><Button className={""} outline color="warning">Подробнее о программе</Button> </Link>
              </CardFooter>
              <Switch>
              <Route exact path="/result/:id" />}/>
              <Route component={()=><h1>Error</h1>}/>
              </Switch>
        </Card>
     
    );
  };

  export default Cards