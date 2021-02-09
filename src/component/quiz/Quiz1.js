import React from 'react';
import Image from './image/quiz time.jpg';


var Q1 = ''
var Q2 = ''
var Q3 = ''
var Q4 = ''
var Q5 = ''
class Quiz1 extends React.Component {

    onSubmitClick = () => {

        alert('Good Luck')
        Q1 = '';
        Q2 = '';
        Q3 = '';
        Q4 = '';
        Q5 = ''

    }

    onCheckBox = () => {
      let check = ''
        if (check > 1) {
            alert("You can't select more than one choice")
        }
    }

    onCheckAns1() {
        alert('React is UI-Library');
    }

    onCheckAns2() {
        alert('React Developed by Facebook');
    }

    onCheckAns3() {
        alert('JSX is JavaScript XML');
    }

    onCheckAns4() {
        alert('React-js use for Web Development');
    }

    onCheckAns5() {
        alert('DOM is Documnet Object Model');
    }

    render() {
        return (
            <div>
                {/* <!-- Wrapper for slides --> */}
                <div class="carousel-inner">
                    <div class="item active">
                        <img src={Image} style={{ "height": "400px" }} alt="Quiz Time" />
                    </div>

                    <div class="container text-center">
                        <h3>Let's Play</h3><br />
                        <h2>What is React?</h2>
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q1" /><strong> React is UI-Library</strong><br />
                                </div>
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q1" /><strong > React is FrameWork</strong><br />
                                </div>
                            </div><div class="col-sm-6">
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q1" /><strong > Both of These</strong><br />
                                </div>
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q1" /><strong > None of These</strong><br />
                                </div>
                            </div>
                            <a className="color-hover help" onClick={this.onCheckAns1} >Check Your Answer.</a>
                        </div>

                        <h2>React Developed by?</h2>
                        <div class="row">
                            <div class="col-sm-6"  >
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q2" /><strong> Google</strong><br />
                                </div>
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q2" /><strong > MicroSoft</strong><br />
                                </div>
                            </div><div class="col-sm-6">
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q2" /><strong > Facebook</strong><br />
                                </div>
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q2" /><strong > None of These</strong><br />
                                </div>
                            </div>
                            <a className="color-hover help" onClick={this.onCheckAns2}>Check Your Answer.</a>
                        </div>

                        <h2>What is JSX?</h2>
                        <div class="row">
                            <div class="col-sm-6"  >
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q3" /><strong> JavaScript XML</strong><br />
                                </div>
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q3" /><strong > JavaScript</strong><br />
                                </div>
                            </div><div class="col-sm-6">
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q3" /><strong > JavaScript Html</strong><br />
                                </div>
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q3" /><strong > All of These</strong><br />
                                </div>
                            </div>
                            <a className="color-hover help" onClick={this.onCheckAns3}>Check Your Answer.</a>
                        </div>

                        <h2>React-js use for? </h2>
                        <div class="row">
                            <div class="col-sm-6"  >
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q4" /><strong> Web Development</strong><br />
                                </div>
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q4" /><strong > Mobile Development</strong><br />
                                </div>
                            </div><div class="col-sm-6">
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q4" /><strong > Window Development</strong><br />
                                </div>
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q4" /><strong > All of These</strong><br />
                                </div>
                            </div>
                            <a className="color-hover help" onClick={this.onCheckAns4}>Check Your Answer.</a>
                        </div>

                        <h2>What is DOM?  </h2>
                        <div class="row">
                            <div class="col-sm-6"  >
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q5" /><strong> Document Object Model</strong><br />
                                </div>
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q5" /><strong > Document Orented Model</strong><br />
                                </div>
                            </div><div class="col-sm-6">
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q5" /><strong > Document Objective Model</strong><br />
                                </div>
                                <div class="well quiz-hover" >
                                    <input type="checkbox" name="quiz" value="Q5" /><strong > None of These</strong><br />
                                </div>
                            </div>
                            <a className="color-hover help" onClick={this.onCheckAns5}>Check Your Answer.</a>
                        </div>
                    </div><br />

                    <footer class="container-fluid text-center">
                        {/* <p>Footer Text</p> */}
                        <input type="Submit" className="icon-bar" onClick={this.onSubmitClick} value="Re-Start" style={{ "backgroundColor": "black", "width": "155px", "height": "45px" }} />
                    </footer>
                </div>
            </div>
        );
    }
}
export default Quiz1