import React, { Component } from 'react';
import Header from "./Header";
import './index.css';

var timerObject;

class Private extends Component {
  state={
    timer:0,
    searchCount:0,
    lockPlanetSearch:false
  }
  componentDidMount()
  {
    let {_startTimer}=this;
    timerObject = setInterval(()=>{ _startTimer() }, 1000);
  }

  _startTimer =()=>
  {
    var self=this;
    let {timer}=this.state;
    self.setState({
      timer:timer+1
    })
    if (timer==60) {
      self.setState({timer:0,searchCount:0,lockPlanetSearch:false});
    }
  }

  _stoperTimer =()=>{
    var self=this;
    self.setState({timer:0,searchCount:0});
  }

  _onSearchItemClick=()=>
  {
    var self=this;
    let {timer,searchCount}=this.state;
    if (timer<=60 && searchCount>=15 && localStorage.username!="Luke Skywalker") {
        self.setState({lockPlanetSearch:true});
        window.Materialize.toast('Sorry you can search or view only 15 planets per minute', 4000);
    } else {
      self.setState({searchCount:searchCount+1});
    }
  }

  _logout=()=>{
    this._stoperTimer();
		clearInterval(timerObject);
    this.props.history.push("/login");
  }

  componentWillUnmount() {
    this._stoperTimer();
		clearInterval(timerObject);
	}


  render() {
    const { Component, ...rest } = this.props;
    const {_logout,_onSearchItemClick}=this;
    const {lockPlanetSearch,timer,searchCount}=this.state;
    return (
      <div>
        <Header logout={_logout}/>
        <div className="card grey white-text row">
          <div className="col s6"><h4>Timer : {timer}</h4></div>
          <div className="col s6"><h4>Search Count : {searchCount}</h4></div>
        </div>
        <Component lockPlanetSearch={lockPlanetSearch} onClickSearchResult={_onSearchItemClick}  {...rest} />
      </div>
    );
  }
}

export default Private;
