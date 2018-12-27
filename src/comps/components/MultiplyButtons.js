import React, { Component } from "react";
import {
    Button,
    FormGroup,
    Label,
    ButtonGroup
  } from "reactstrap";
export default class MultiplyButtons extends Component {
    constructor(props) {
      super(props);
      this.state = { rSelected: 0 };
      this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
      this.requirements = props.requirements;
    }
    onRadioBtnClick(rSelected,e) {
      this.setState({ rSelected });
      this.props.handlerFormClick(e.target.name,e.target.id,e.target.value);

    }
    render() {
      const items = this.requirements.map((item, index) => {
        return (
          <Button
            id={item.ans_id}
            name={"params"}
            value = {this.props.title}
            outline
            color="warning"
            onClick={(e) => this.onRadioBtnClick(index + 1,e)}
            active={this.state.rSelected === index + 1}
          >
            {item.ans_name}
          </Button>
        );
      });
      return (
        <FormGroup>
          <Label>{this.props.title}</Label>
          <br />
          <ButtonGroup>{items}</ButtonGroup>
        </FormGroup>
      );
    }
  }
  