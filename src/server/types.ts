export interface IUser {
    name: string;
    dashboards: IDashboards;
}

export interface IDashboards { [id: number]: IDashboard; }

export interface IDashboard {
    stars: number;
    comment: string;
}

export interface IApplicationState {
    users: IUser;
}
