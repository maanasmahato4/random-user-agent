import agents from '../../user-agents.json';
import { TAgent } from '../@types/functions.types.ts';

export function getRandomAgent(): TAgent | undefined {
	const randomIndex = Math.floor(Math.random() * agents.length);
	const agent: TAgent | undefined = agents[randomIndex];
	return agent;
}

export function getAllAgents(): TAgent[] {
	return agents;
}
