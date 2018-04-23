import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            song: ''
        }
    }
    addTrack = (event) => {
        event.preventDefault();
        this.props.onAddTrack(this.state.song);
        console.log(this.state.song);
        this.setState({
            song: ''
        })
    }

    componentDidMount() {
        console.log(this.props);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    render() {
        return(
            <div>
                <form onSubmit={this.addTrack}>
                    <input id="song" onChange={this.handleChange} value={this.state.song} type="text" />
                    <button type="submit">Add track</button>
                </form>
                <ul>
                    {this.props.testStore.map((track, index) => {
                        return (
                            <li key={index}>
                                {track}
                            </li>
                        )
                    })}
                </ul>
            </div>
        );  
    } 
}

export default connect(
        state => ({
            testStore: state
        }),
        dispatch => ({
            onAddTrack: (trackName) => {
                dispatch({type: 'ADD_TRACK', payload: trackName});
            }
        })
    )(App);