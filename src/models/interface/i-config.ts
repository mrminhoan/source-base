export interface IRest {
    apiUrl: string;
    apiUrl_v2: string;
    apiUrl_v3: string;
}

export interface IConfig {
    rest: IRest;
    system: {
        applicationName: string;
        applicationUrl: string;
    };
}
