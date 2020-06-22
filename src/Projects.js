import React, {Component} from 'react';
import "./Projects.css"
import ProjectTile from "./ProjectTile";

class Projects extends Component {

    constructor(props) {
        super(props);
        this.username = props.userName;
        this.state = {
            projects: [],
        };
    }

    componentDidMount() {
        console.log("got here");
        let url = "https://api.github.com/users/" + this.username + "/repos";
        fetch(url)
            .then(response => response.json())
            .then(responseJson => {
                let projectsArr = [];
                for(let i = 0; i < responseJson.length;i++){
                    if(!responseJson[i].fork){
                        let curObj = {};
                        curObj.name = responseJson[i].name;
                        curObj.url = responseJson[i].html_url;
                        curObj.description =
                            typeof responseJson[i].description === undefined ? "": responseJson[i].description;
                        projectsArr.push(curObj);
                    }
                }
                this.setState({projects: projectsArr});
            });
    }

    render() {
        return (
            <div className="container">
                <div className="inner-container">
                {this.state.projects.map((value, key) => {
                    return <ProjectTile key={key}  info={value}/>
                })}
                </div>
            </div>
        );
    }
}

export default Projects;