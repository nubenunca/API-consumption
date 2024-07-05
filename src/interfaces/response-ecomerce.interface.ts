export interface IResponseEcomerce {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    image:       string;
    rating:      Rating;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}

export interface Rating {
    rate:  number;
    count: number;
}

// Converts JSON strings to/from your types
export class Convert {
    public static toIResponseEcomerce(json: string): IResponseEcomerce[] {
        return JSON.parse(json);
    }

    public static iResponseEcomerceToJson(value: IResponseEcomerce[]): string {
        return JSON.stringify(value);
    }
}
