import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/questionList.jsx';
import Scorebox from './quiz/scorebox.jsx';
import Result from './quiz/results.jsx';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			questions: [
				{
					id: 1,
					text: 'What is your name?',
					choices: [
						{
							id: 'a',
							text: 'Michael'
						},
						{
							id: 'b',
							text: 'Munna'
						},
						{
							id: 'c',
							text: 'tiger'
						}
					],
					correct: 'b'
				},
				{
					id: 2,
					text: 'What is your fathers name?',
					choices: [
						{
							id: 'a',
							text: 'Jackie'
						},
						{
							id: 'b',
							text: 'Shorff'
						},
						{
							id: 'c',
							text: 'Biru'
						}
					],
					correct: 'b'
				},
				{
					id: 3,
					text: 'What is your GF name?',
					choices: [
						{
							id: 'a',
							text: 'Kriti'
						},
						{
							id: 'b',
							text: 'Sanon'
						},
						{
							id: 'c',
							text: 'Dhsha'
						}
					],
					correct: 'b'
				},
				{
					id: 4,
					text: 'What is your Friends name?',
					choices: [
						{
							id: 'a',
							text: 'Rithik'
						},
						{
							id: 'b',
							text: 'SRK'
						},
						{
							id: 'c',
							text: 'Salman'
						}
					],
					correct: 'a'
				}

			],
			score: 0,
			current: 1
		}
	}
	setCurrent(current){
		this.setState({ current});
	}
	setScore(score){
		this.setState({ score});
	}
	render(){
		if (this.state.current>this.state.questions.length) {
			var scorebox='';
			var results= <Result { ...this.state } />;
		}
		else{
			var scorebox= <Scorebox { ...this.state } />;
			var results ='';
		}
		return(
			<div>
				{scorebox}
				<QuestionList { ...this.state} setCurrent={ this.setCurrent.bind(this)} setScore={ this.setScore.bind(this)}/>
				{results }
			</div>
		)
	}
}

export default App;