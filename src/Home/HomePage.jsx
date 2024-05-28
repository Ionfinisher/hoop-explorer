import TeamDivision from "../components/teamDivision"
import { useQuery } from "@tanstack/react-query";
import { retrieveTeams } from "../api/balldontlie.api"


export default function HomePage() {
    const {
        isPending,
        isError,
        data,
        error,
    } = useQuery({ queryKey: ['teamsDataKey'], queryFn: retrieveTeams });

    if (isPending) return <div>Fetching teams...</div>;
    if (isError) return <div>An error occurred: {error.message}</div>;
    { console.log(data) }



    return (
        <div className="min-h-screen overflow-auto bg-white p-6 border-0 rounded-md">
            <span className="text-lg">ALL TEAMS</span>
            <hr className="bg-gray-300 border-1 border-gray-300 " />
            <div className="flex flex-wrap w-full">
                <TeamDivision divisionName={'Atlantic'} data={data} />
                <TeamDivision divisionName={'Atlantic'} data={data} />
                <TeamDivision divisionName={'Atlantic'} data={data} />
            </div>
        </div>
    )
};
