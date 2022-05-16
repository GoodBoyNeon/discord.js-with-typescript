// Imports
import { Client } from "discord.js";
import Intents from "./configs/Intents";
import ValidateEnv from "./functions/ValidateEnv";
import ReadyEvent from "./events/client/ready";

// Function so we can use top level await:
(async () => {
	if (!ValidateEnv()) return;
	// Defining Client
	const client = new Client({ intents: Intents });

	// Events
	client.once("ready", () => ReadyEvent(client));

	await client.login(process.env.TOKEN);
})();
