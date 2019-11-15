import React from "react";
import BotCard from "../components/BotCard";

import { connect } from "react-redux";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotCollection extends React.Component {
  //your code here

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(bots => this.props.addBots(bots));
  }

  render() {
    return (
      <div className="ui four column grid">
        <div className="row">
          {this.props.bots.map(bot => (
            <BotCard
              key={bot.id}
              bot={bot}
              clickFunction={this.props.selectBot}
            />
          ))}
          Collection of all bots
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bots: state.bots
  };
};

// store.dispatch
const mapDispatchToProps = dispatch => {
  return {
    addBots: bots => dispatch({ type: "ADD_BOTS", payload: { bots } }),
    selectBot: bot =>
      dispatch({ type: "SELECT_BOT", payload: { botId: bot.id } })
  };
};

const createConnectedComponent = connect(mapStateToProps, mapDispatchToProps);

export default createConnectedComponent(BotCollection);
