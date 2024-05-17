/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./src/API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserAddress = /* GraphQL */ `mutation CreateUserAddress(
  $input: CreateUserAddressInput!
  $condition: ModelUserAddressConditionInput
) {
  createUserAddress(input: $input, condition: $condition) {
    id
    name
    phone
    address
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserAddressMutationVariables,
  APITypes.CreateUserAddressMutation
>;
export const updateUserAddress = /* GraphQL */ `mutation UpdateUserAddress(
  $input: UpdateUserAddressInput!
  $condition: ModelUserAddressConditionInput
) {
  updateUserAddress(input: $input, condition: $condition) {
    id
    name
    phone
    address
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserAddressMutationVariables,
  APITypes.UpdateUserAddressMutation
>;
export const deleteUserAddress = /* GraphQL */ `mutation DeleteUserAddress(
  $input: DeleteUserAddressInput!
  $condition: ModelUserAddressConditionInput
) {
  deleteUserAddress(input: $input, condition: $condition) {
    id
    name
    phone
    address
    email
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserAddressMutationVariables,
  APITypes.DeleteUserAddressMutation
>;
