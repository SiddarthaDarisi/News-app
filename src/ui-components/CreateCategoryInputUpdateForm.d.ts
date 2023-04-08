/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CreateCategoryInput } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CreateCategoryInputUpdateFormInputValues = {
    username?: string;
    category?: string;
    owner?: string;
};
export declare type CreateCategoryInputUpdateFormValidationValues = {
    username?: ValidationFunction<string>;
    category?: ValidationFunction<string>;
    owner?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CreateCategoryInputUpdateFormOverridesProps = {
    CreateCategoryInputUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    username?: PrimitiveOverrideProps<TextFieldProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    owner?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CreateCategoryInputUpdateFormProps = React.PropsWithChildren<{
    overrides?: CreateCategoryInputUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    createCategoryInput?: CreateCategoryInput;
    onSubmit?: (fields: CreateCategoryInputUpdateFormInputValues) => CreateCategoryInputUpdateFormInputValues;
    onSuccess?: (fields: CreateCategoryInputUpdateFormInputValues) => void;
    onError?: (fields: CreateCategoryInputUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CreateCategoryInputUpdateFormInputValues) => CreateCategoryInputUpdateFormInputValues;
    onValidate?: CreateCategoryInputUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CreateCategoryInputUpdateForm(props: CreateCategoryInputUpdateFormProps): React.ReactElement;
