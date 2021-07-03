export interface ValidateField {
    field: string;
    value: string;
    rules: ((value: any) => string | boolean)[]
}

export interface ErrorValidation {
    field: string;
    value: string;
    message: string;
}

export function validateFields(
    items: Array<ValidateField>
): ErrorValidation | undefined {
    for (let item of items) {
        const result: number = item.rules.findIndex(
            rule => typeof rule(item.value) === "string"
        );

        if (result >= 0) {
            const message = item.rules[result](item.value) as string;
            return { field: item.field, value: item.value, message };
        }
    }
}
