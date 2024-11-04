// import {  BaseSearchModel } from '@models';
import {BaseModel} from "../base-model";
import {BaseSearchModel} from "../search";
export class ProductModel extends BaseModel {
    title: string;
    description: string;
    category: string;
    price: number;
    static toResponse(data) {
        const model = new ProductModel();
        model.id = data?.id;
        model.title = `${data?.title} - test`;
        model.description = data?.description;
        model.category = data?.category;
        model.price = data?.price;
        return model;
    }
}

export class ProductSearchModel extends BaseSearchModel {}
