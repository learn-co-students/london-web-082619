import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "../components/BotSpecs";

import { connect } from "react-redux";

const API = "https://bot-battler-api.herokuapp.com/api/v1/bots";

class BotsPage extends React.Component {
  //start here with your code for step one

  render() {
    return (
      <div>
        <YourBotArmy />
        {this.props.selectedBot ? (
          <BotSpecs bot={this.props.selectedBot} />
        ) : (
          <BotCollection />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedBot: state.bots.find(b => b.id === state.selectedBotId)
  };
};

export default connect(mapStateToProps)(BotsPage);
