import { Component } from "react";
class Header extends Component {
    render(){
        return (
            <h1 style={{color:'red'}}>iam {this.props.data}</h1>
        );
    }       
}
export default Header;
