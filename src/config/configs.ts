interface ConfigType {
  root_url: string;
}

export const config: ConfigType = {
  root_url: process.env.SERVER_URL || "https://localhost:7134",
};
