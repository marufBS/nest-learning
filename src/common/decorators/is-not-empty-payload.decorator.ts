import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';

export function IsNotEmptyPayload(validationOptions?: ValidationOptions) {
    return function (object: Function) {
        registerDecorator({
            name: 'isNotEmptyPayload',
            target: object,
            propertyName: '',
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    return args.object && Object.keys(args.object).length > 0;
                },
                defaultMessage() {
                    return 'The update payload body cannot be empty. Provide at least one field'
                }
            }
        })
    }
}