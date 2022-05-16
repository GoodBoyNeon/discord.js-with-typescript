const ValidateEnv = () => {
	if (!process.env.TOKEN) {
		console.warn("Bot Token Missing!");
		return false;
	}
	return true;
};

export default ValidateEnv;
