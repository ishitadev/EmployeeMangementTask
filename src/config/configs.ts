interface ConfigType {
  root_url: string;
}

export const config: ConfigType = {
  root_url: process.env.REACT_APP_ROOT_URL || "https://localhost:7134",
};
