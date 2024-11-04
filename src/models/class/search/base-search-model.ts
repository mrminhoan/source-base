export class BaseSearchModel {
    limit: number = 10;
    skip: number = 10;
    select: string = "";
    sortBy: string = "";
    orderBy: string = "asc";
}
