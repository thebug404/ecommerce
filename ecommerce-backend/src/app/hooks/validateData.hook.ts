import { HookContext } from "@feathersjs/feathers";
import { BadRequest } from "@feathersjs/errors";

import { ErrorValidation, ValidateField, validateFields } from "../helpers/validateFields";

export function validateData(items: Array<Omit<ValidateField, "value">>) {
    return (context: HookContext) => {
        const fields: Array<ValidateField> = [];

        items.forEach(item => {
            const value = context.data[item.field];
            fields.push({ ...item, value });
        });

        const error: ErrorValidation  | undefined = validateFields(fields);
        if (error) throw new BadRequest(error.message, error);
    };
}
