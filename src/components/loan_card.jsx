import React, { Component } from "react"
import App from "../index"

const LoanCard = () => {

	componentDidMount() {
			axios.get("https://api.kivaws.org/v1/lending_actions/recent.json")
				.then(res => {
					const posts = res.data.lending_actions.map(obj => ({lender: obj.lender, loan: obj.loan}))
					this.setState({ posts })
				})
		}

	return (
		<div className="row">
			<div className="col-sm-6 col-md-4">
				<div className="thumbnail">
					<div className="caption">
						<h3>{posts.loan.name}</h3>
						<p>...</p>
						<p><a href="#" className="btn btn-primary" role="button">Button</a> <a href="#" className="btn btn-default" role="button">Button</a></p>
					</div>
				</div>
			</div>
		</div>
	)

	}


export default LoanCard
