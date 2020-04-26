import React, { Component } from 'react'

class Test2 extends Component {

    constructor(props) {

        super(props)

        this.state = {
            userName: '',
            comments: '',
            topic: 'react'
        }
    }

    handleUserNameChange = event => {
        this.setState({
            userName: event.target.value
        })
    }

    handleCommentsChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        console.dir(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        // cosnt {userName,comments,topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div>
                        <label>User Name</label>
                        <input type='text' value={this.state.userName} onChange={this.handleUserNameChange} />

                    </div>
                    <div>
                        <label>Comments</label>
                        <textarea value={this.state.comments} onChange={this.handleCommentsChange} />

                    </div>
                    <div>
                        <label>Topic</label>
                        <select value={this.state.topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="Angular">Angular</option>
                            <option value="Vue">Vue</option>
                        </select>
                    </div>
                    <button type="submit"> Subnit </button>
                </div>
            </form>
        )
    }
}

export default Test2
