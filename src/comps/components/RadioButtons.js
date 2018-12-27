import React, { Component } from "react";
import {
    Button,
    FormGroup,
    Label,
    ButtonGroup,
    UncontrolledTooltip
  } from "reactstrap";

export default class RadioButtons extends Component {
    constructor(props) {
      super(props);
      this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
      this.state = { rSelected: 0 };
    }
  //Ставим стэйт и отправляем родителю данные кнопки: Id, type As name, selected As Bool(0,1)
    onRadioBtnClick(rSelected, e) {
      this.setState({ rSelected });
      this.props.handlerFormClick(e.target.name,e.target.value, rSelected-1);
    }
  
    render() {
      const badge = (
        <UncontrolledTooltip target={this.props.id}>
          {" "}
          {this.props.desc}{" "}
        </UncontrolledTooltip>
      );
      return (
        <FormGroup>
          <Label>{this.props.name}</Label>
          <br />
          <ButtonGroup desc={this.props.desc} value={this.state.rSelected}>
            <Button
              value={this.props.id}
              name={"requirements"}
              outline
              color="warning"
              onClick={e => this.onRadioBtnClick(1, e)}
              active={this.state.rSelected === 1}
            >
              Да
            </Button>
            <Button
              value={this.props.id}
              name={"requirements"}
              outline
              color="warning"
              onClick={e => this.onRadioBtnClick(2, e)}
              active={this.state.rSelected === 2}
            >
              Нет
            </Button>
          </ButtonGroup>
        </FormGroup>
      );
    }
  }