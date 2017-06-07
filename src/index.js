import React, { Component } from "react"
import ReactDOM from "react-dom"
import axios from "axios"
// import LoanCard from "./components/loan_card"
import LoanGrid from "./components/loan_grid"


class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			posts: [],
			loanPerson: []
		}
	}


	render() {
		return (
			<div>
				<h1 className="jumbotron"> KIVA FEED </h1>
				<button className="btn btn-danger">Donate Now</button>


					{this.state.posts.map((post, index) =>
						<LoanGrid />

					)}

			</div>
		)
	}
}


ReactDOM.render(<App />, document.querySelector("#root"))

							// <div className="list-group-item" key={`${post.lender.lender_id}-post-${index}`}>{post.loan.name} in {post.loan.location.country} needs {post.loan.use} {post.lender.name} in {post.lender.whereabouts} helped make it happen.
