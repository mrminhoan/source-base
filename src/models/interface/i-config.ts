export interface IRest {
  apiUrl: string;
}

export interface IConfig {
  rest: IRest;
  system: {
    applicationName: string;
    applicationUrl: string;
  };
}
