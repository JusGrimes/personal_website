import React, {Component} from 'react';
import "./ProjectTile.css";

class ProjectTile extends Component {

    constructor(props) {
        super(props);
        this.name = props.info.name;
        this.description = props.info.description;
        this.url = props.info.url;
    }

    render() {
        return (
            <a className="project-tile" href={this.url}>
                <div className="header">
                    {this.name}
                </div>
                <div className="description">
                    {this.description}
                </div>
            </a>
        );
    }
}

export default ProjectTile;