import React from 'react';
import './rqm1.css';

class Main extends React.Component{
    constructor(props){
		super(props);
		this.state = {
			quotation: '"Be yourself, everyone else is already taken."',
			author: '- Oscar Wilde',
            randomIndex: Math.floor(Math.random() * 10)
		};
			this.changeQuotation = this.changeQuotation.bind(this);
    }
    changeQuotation = function() {
		const quotList = [
        '"Be yourself, everyone else is already taken."',
        '"Always remember that you are absolutely unique. Just like everyone else."',
        '"The adventure of life is to learn. The purpose of life is to grow. The nature of life is to change. The challenge of life is to overcome. The essence of life is to care."',
        '"Every saint has a past, and every sinner has a future"', 
        '"It is better to get "caught" in the roda than on the streets."',
        '"The world as we have created it is a process of our thinking. It cannot be changed without changing our thinking."',
        '"You are not prepared!"',
        '"Do not go where the path may lead, go instead where there is no path and leave a trail."',
        '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        '"The beginning of wisdom is the statement I do not know. The person who cannot make that statement is one who will never learn anything."'
        ];
	    const authorList = [
        '- Oscar Wilde',
        '- Margaret Mead',
        '- William Arthur Ward',
        '- Oscar Wilde',
        '- O rei da capoeira Regional',
        '- Albert Einstein',
        '- Illidan Stormrage',
        '- Ralph Waldo Emerson',
        '- Nelson Mandela',
        '- Keith R.A. DeCandido'
        ];

        let ind = Math.floor(Math.random() * quotList.length);
        if (this.state.randomIndex===ind){
            this.setState({
                randomIndex: Math.floor(Math.random() * quotList.length),
                quotation: quotList[this.state.randomIndex],
                author: authorList[this.state.randomIndex],
            });
        }
        else{
            this.setState({
                randomIndex: ind,
                quotation: quotList[this.state.randomIndex],
                author: authorList[this.state.randomIndex],
            });
        }
	};
	render(){
		return(
            <div className="box">
                <h2 className="quotHead center-text">Quotation:</h2>
                <h2 className="quot center-text">{this.state.quotation}</h2>
                <p className="auth">{this.state.author}</p>
                <div className="buttons" id="tweet-quote">
                    <button className="button left-side">
					    <a className="button-tweet" id="tweet-button" title="Tweet it!" target="_blank" rel="noopener noreferrer" href="https://twitter.com//intent/tweet">Tweet it!
					    </a>
                    </button>
			    </div>
                <button className="button right-side" onClick={this.changeQuotation}>Change quote</button>
            </div>
       )
	}
}

export default Main;