import { React } from 'react';
import { MatchDetailCard } from '../components/MatchDetailCard';
import { MatchSmallCard } from '../components/MatchSmallCard';
import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
export const TeamPage = () => {
	const [ team, setTeam ] = useState({ matches: [] });
	let { teamName } = useParams();
	useEffect(
		() => {
			const fetchMatches = async () => {
				const response = await fetch(`http://localhost:8080/team/${teamName}`);
				const data = await response.json();
				setTeam(data);
			};
			fetchMatches();
		},
		[ teamName ]
	);

	if (!team || !team.teamName) {
		return <h1>Team Not Found!</h1>;
	}
	return (
		<div className="TeamPage">
			<h1> {team.teamName} </h1>
			<MatchDetailCard teamName={team.teamName} match={team.matches[0]} />
			{team.matches.slice(1).map((match) => <MatchSmallCard teamName={team.teamName} match={match} />)}

		</div>
	);
};
