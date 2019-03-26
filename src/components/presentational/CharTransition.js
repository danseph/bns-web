import React, { Component } from 'react'
import './char.scss';
import {FormattedMessage} from "react-intl";

class CharTransition extends Component {
    constructor(props) {
        super(props);
        this.charTitle = [
            {text: "T"},
            {text: "h"},
            {text: "e"},
            {text: " "},
            {text: "F"},
            {text: "u"},
            {text: "t"},
            {text: "u"},
            {text: "r"},
            {text: "e"},
            {text: " "},
            {text: "L"},
            {text: "e"},
            {text: "a"},
            {text: "d"},
            {text: "e"},
            {text: "r"},
            {text: " "},
            {text: "o"},
            {text: "f"},
            {text: <br/>},
            {text: "A"},
            {text: "I"},
            {text: " "},
            {text: "P"},
            {text: "r"},
            {text: "e"},
            {text: "d"},
            {text: "i"},
            {text: "c"},
            {text: "t"},
            {text: "i"},
            {text: "o"},
            {text: "n"},
            {text: " "},
            {text: "P"},
            {text: "l"},
            {text: "a"},
            {text: "t"},
            {text: "f"},
            {text: "o"},
            {text: "r"},
            {text: "m"},
        ];
        this.charZhTitle = [
            {text: "A"},
            {text: "I"},
            {text: "预"},
            {text: "测"},
            {text: "平"},
            {text: "台"},
            {text: "，"},
            {text: "引"},
            {text: "领"},
            {text: "未"},
            {text: "来"},
            {text: "！"},
        ];
        this.charText = [
            {text: "A"},
            {text: "I"},
            {text: "와"},
            {text: " "},
            {text: "블"},
            {text: "록"},
            {text: "체"},
            {text: "인"},
            {text: "의"},
            {text: " "},
            {text: "콜"},
            {text: "라"},
            {text: "보"},
            {text: "레"},
            {text: "이"},
            {text: "션"},
            {text: <br />},
            {text: "리"},
            {text: "워"},
            {text: "드"},
            {text: " "},
            {text: "플"},
            {text: "랫"},
            {text: "폼"},
            {text: "과"},
            {text: " "},
            {text: "암"},
            {text: "호"},
            {text: "화"},
            {text: "폐"},
            {text: " "},
            {text: "가"},
            {text: "격"},
            {text: "변"},
            {text: "동"},
            {text: " "},
            {text: "알"},
            {text: "림"},
            {text: " "},
            {text: "서"},
            {text: "비"},
            {text: "스"},
            {text: "를"},
            {text: " "},
            {text: "통"},
            {text: "해"},
            {text: " "},
            {text: "거"},
            {text: "래"},
            {text: "소"},
            {text: " "},
            {text: "T"},
            {text: "r"},
            {text: "a"},
            {text: "f"},
            {text: "f"},
            {text: "i"},
            {text: "c"},
            {text: "과"},
            {text: " "},
            {text: "거"},
            {text: "래"},
            {text: " "},
            {text: "유"},
            {text: "동"},
            {text: "성"},
            {text: " "},
            {text: "확"},
            {text: "보"},
            {text: "를"},
            {text: " "},
            {text: "통"},
            {text: "합"},
            {text: "적"},
            {text: "으"},
            {text: "로"},
            {text: " "},
            {text: "제"},
            {text: "공"},
            {text: "하"},
            {text: "는"},
            {text: " "},
            {text: "암"},
            {text: "호"},
            {text: "화"},
            {text: "폐"},
            {text: " "},
            {text: "E"},
            {text: "c"},
            {text: "o"},
            {text: "s"},
            {text: "y"},
            {text: "s"},
            {text: "t"},
            {text: "e"},
            {text: "m"},
        ]
    }
    render() {
        return (
            <>
                <div className={`main-txt-title ${this.props.activeMainTitle ? "active" : ""}`}>
                    <strong>
                        {
                            this.props.defaultLang === "zh" ?
                                this.charZhTitle.map((item, i) => {
                                    return (
                                        <span key={i} className="char">{item.text}</span>
                                    )
                                })
                                :
                                this.charTitle.map((item, i) => {
                                    return (
                                        <span key={i} className="char">{item.text}</span>
                                    )
                                })
                        }
                    </strong>
                </div>
                <div className={`main-txt-desc ${this.props.activeMainTitle ? "active" : ""}`}>
                    <p>
                        {
                            this.charText.map((item, i) => {
                                return (
                                    <span key={i} className="char">{item.text}</span>
                                )
                            })
                        }
                    </p>
                </div>

            </>
        )
    }
};

export default CharTransition;