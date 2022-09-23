import { useEffect, useState } from "react"
import "./Project.css";

const Project = props => {
    const [name, setName] = useState();
    const [url, setUrl] = useState();
    const [desc, setDesc] = useState();

    useEffect(() => {
        setName(props.name);
        setUrl(props.url);
        setDesc(props.desc);
    }, [])

    return (
        <div className="Project">
            <a href={url}><h3>{name}</h3></a>
            <p>{desc}</p>
        </div>
    )
}

export default Project;