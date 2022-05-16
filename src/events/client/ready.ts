import { Client } from "discord.js";

const ReadyEvent = (client: Client) => {
	console.log(`Connected to ${client.user?.tag}`);
	client.user?.setPresence({
		status: "online",
		activities: [
			{
				name: "with my code",
				type: "PLAYING",
			},
		],
	});
};

export default ReadyEvent;
