import {useQuery} from "@tanstack/react-query";
import {fetchProjects} from "../../fetchs/fetchProjects.ts";
import ProjectComponent from "../projects/projects.component.tsx";

const DashBoard = () => {
    const data = useQuery(["dashboard"], fetchProjects)

    if (data.isLoading) {
        return (
            <div className="main">
                <div>Loading...</div>
            </div>
        )
    }

    if (data.isError) {
        return (
            <div className="main">
                <div>Error...</div>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-1 p-1">
            <div className="border-primary-color border-b"></div>

            {data.data?.map((project) => (
                <ProjectComponent project={project}></ProjectComponent>
            ))}
        </div>
    )
}

export default DashBoard
