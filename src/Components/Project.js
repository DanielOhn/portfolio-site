import { useEffect, useState } from "react"
import "./Project.css";

const Project = props => {
    const [name, setName] = useState();
    const [url, setUrl] = useState();
    const [desc, setDesc] = useState();
    const [github, setGithub] = useState();

    useEffect(() => {
        setName(props.name);
        setUrl(props.url);
        setDesc(props.desc);
        setGithub(props.github);
    }, [props])

    return (
        <div className="Project">
            {url !== "/" ? <a href={url} target="_blank" rel="noopener noreferrer"><h3>{name}</h3></a>
                : <h3>{name}</h3>
            }
            <p>{desc}</p>
        </div>
    )
}

export default Project;