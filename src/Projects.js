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
            .then(json => {
                let projectsArr = [];
                for(let i = 0; i < json.length;i++){
                    if(!json[i].fork){
                        let curObj = {};
                        curObj.name = json[i].name;
                        curObj.url = json[i].html_url;
                        curObj.description = json.description === undefined ? "": json.description;
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
                {this.state.projects.map((value) => {
                    return <ProjectTile info={value}/>
                })}
                </div>
            </div>
        );
    }
}

export default Projects;