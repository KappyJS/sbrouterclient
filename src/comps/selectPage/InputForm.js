import React, { Component } from "react";
import { Progress } from "reactstrap";
import MultiplyButtons from "../components/MultiplyButtons";
import RadioButtons from "../components/RadioButtons";
import { connect } from "react-redux";
import * as actionCreators from "../../reducers/actions";
import { bindActionCreators } from "redux";

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.handlerFormClick = this.handlerFormClick.bind(this);
    this.formRef = React.createRef();
    this.state = { colid:[],choosen: { params: {}, requirements: [] } };
  }

  handlerFormClick(name, id, bool) {
    var tmp = this.state;
    console.log(name,id,bool)
    
    switch (name) {
      case "requirements":
        if (tmp.choosen.requirements.indexOf(id) == -1) {
              if (tmp.colid.indexOf(id) ==-1){
                tmp.colid.push(id);
              }
          if (!bool) {
            tmp.choosen.requirements.push(id);
            
          }
        } else {
          if (bool) {
            tmp.choosen.requirements.splice(tmp.choosen.requirements.indexOf(id), 1);
            
          }
        }
        break;

      case "params":
        if (!tmp.choosen.params[bool]) {
          tmp.choosen.params[bool] = id;
        } else {
          tmp.choosen.params[bool] = id;
        }
        
          if (tmp.colid.indexOf(bool) ==-1){
            tmp.colid.push(bool);
          
    }
  }

    this.setState({ choosen: tmp.choosen });
    this.props.dispatch(actionCreators.notChooseReqs(tmp.choosen.requirements));
    fetch("http://localhost:3001/govs", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tmp.choosen)
    })
      .then(data => data.json())
      .then(data => this.props.dispatch(actionCreators.fetchGovsRefresh(data)));
     console.log(this.state.choosen.requirements.length)//this.props.data.client_requirements.length)


  }

  render() {
  
    const requirements = this.props.data.client_requirements;
    const params = this.props.data.client_params;
    const paramsItems = [];
    const progress = Math.round((this.state.colid.length/(this.props.data.client_requirements.length+Object.size(this.props.data.client_params)))*100)
    for (var key in params) {
      paramsItems.push(
        <MultiplyButtons
          handlerFormClick={this.handlerFormClick}
          title={key}
          requirements={params[key]}
        />
      );
    }
    const items = requirements.map(item => (
      <RadioButtons
        handlerFormClick={this.handlerFormClick}
        key={item.cli_id}
        id={item.cli_id}
        name={item.cli_name}
        desc={item.desc}
      />
    ));
    return (
      <form ref={this.formRef} className={"text-center p-4"}>
        <ProgressForm value={progress} />

        <div>
          {paramsItems}
          {items}
        </div>
      </form>
    );
  }
}

const ProgressForm = props => {
  const value = props.value;
  return (
    <div>
      <h3>Ответьте на вопросы</h3>
      <div className="text-center ">
        <span className={"success-span"}>Заполнено на {value}%</span>
      </div>
      <Progress color="success" value={value} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    data: state.data,
    progress: state.progress
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators({ actionCreators }, dispatch);
};


 Object.size = function(obj) {
  var size = 0, key;
  for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
export default connect(mapStateToProps)(InputForm);
