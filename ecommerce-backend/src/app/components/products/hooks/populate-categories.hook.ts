import { populate, PopulateSchema } from "feathers-hooks-common";

const schema: Partial<PopulateSchema> = {
    include: [{
        service: "/api/categories",
        nameAs: "categories",
        parentField: "categoriesIds",
        childField: "_id",
        asArray: true
    }]
}

export const populateCategories = populate({ schema });
