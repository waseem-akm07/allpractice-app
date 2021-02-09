import React from 'react';


class School extends React.Component {
    render() {
        return (
            <div>

                <h3>School Name :
                    {this.props.sclName}
                </h3>
                <Class
                    clsName='Intermidiate'

                />
                <Student
                    studName='Waseem'
                    sub1Name='IT' sub1Marks='80'
                    sub2Name='English' sub2Marks='75'
                    sub3Name='Maths' sub3Marks='70'
                />
                <Student
                    studName='Akram'
                    sub1Name='IT' sub1Marks='90'
                    sub2Name='English' sub2Marks='80'
                    sub3Name='Maths' sub3Marks='85'
                />

                <Class
                    clsName='High School'
                />
                <Student
                    studName='Anshul'
                    sub1Name='IT' sub1Marks='95'
                    sub2Name='English' sub2Marks='80'
                    sub3Name='Maths' sub3Marks='60'
                />
                <Student
                    studName='Rahul'
                    sub1Name='IT' sub1Marks='85'
                    sub2Name='English' sub2Marks='75'
                    sub3Name='Maths' sub3Marks='65'
                />

            </div>
        );
    }
}


class Class extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <strong>
                        Class Name :
                        <u><i>{this.props.clsName}</i></u>
                    </strong><br />

                </p>

            </div>
        );
    }
}


class Student extends React.Component {
    render() {
        return (
            <div>
                <p>
                    Student Name :
                    <i><u>{this.props.studName}</u></i>
                    <br />
                    <ol>
                        <li> {this.props.sub1Name} :{this.props.sub1Marks}<br /></li>
                        <li> {this.props.sub2Name} :{this.props.sub2Marks}<br /></li>
                        <li> {this.props.sub3Name} :{this.props.sub3Marks}<br /></li>
                    </ol>
                </p>
            </div>
        );
    }
}

class Detail extends React.Component {
    render() {
        return (
            <div >

                <School
                    sclName='Modern Public School'
                />

            </div>
        );
    }
}
export default Detail