import React from "react";



export default function TeamDivision({ divisionName, data }) {


    return (
        <div className="w-[33.33%] my-5">
            <div className="text-lg">{divisionName}</div>
            <div className="flex flex-wrap h-[40px]">
                {
                    data.data.filter(team => team.division === divisionName)
                        .map((team) => (
                            <div className="w-full my-1" key={team.id}>
                                <div className="flex text-xl">{team.full_name} AKA {team.abbreviation}</div>
                                <div className="flex text-lg">Profile</div>
                            </div>
                        ))}
            </div>
        </div>
    );

};
