/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateCategoryInputCreateFormInputValues = {
    username?: string;
    category?: string;
    owner?: string;
};
export declare type CreateCategoryInputCreateFormValidationValues = {
    username?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateCategoryInputCreateFormOverridesProps = {
    CreateCategoryInputCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateCategoryInputCreateFormProps = React.PropsWithChildren<{
    overrides?: CreateCategoryInputCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CreateCategoryInputCreateFormInputValues) => CreateCategoryInputCreateFormInputValues;
    onSuccess?: (fields: CreateCategoryInputCreateFormInputValues) => void;
    onError?: (fields: CreateCategoryInputCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateCategoryInputCreateFormInputValues) => CreateCategoryInputCreateFormInputValues;
    onValidate?: CreateCategoryInputCreateFormValidationValues;
} & React.CSSProperties>;
export default function CreateCategoryInputCreateForm(props: CreateCategoryInputCreateFormProps): React.ReactElement;
