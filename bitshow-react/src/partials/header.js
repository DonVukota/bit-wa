import React,{component} from 'react';

class Header extends React.Component{
     constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const inputValue = event.target.value;
        
        
        this.setState({ value: event.target.value })
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state !== prevState) {
            this.props.onSearchValueChange(this.state.value);
        }
    }
   render=(event)=>{
       return(
   
        <div><nav id="main-nav" className="navbar justify-content-between">
        <div className="container">
            <a className="navbar-brand">Bit Shows</a>
            <form className="form-inline">
                <input  type="text"
                                value={this.state.value}
                                onChange={this.handleChange}
                                placeholder='search movie'
                                className='validate' />
                <ul className="search-results"></ul>
            </form>
        </div>
    </nav>
    </div>

     
      )
    }
}
export default Header;