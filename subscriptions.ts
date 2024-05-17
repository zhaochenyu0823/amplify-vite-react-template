/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./src/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateUserAddress = /* GraphQL */ `subscription OnCreateUserAddress(
  $filter: ModelSubscriptionUserAddressFilterInput
) {
  onCreateUserAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateUserAddressSubscriptionVariables,
  APITypes.OnCreateUserAddressSubscription
>;
export const onUpdateUserAddress = /* GraphQL */ `subscription OnUpdateUserAddress(
  $filter: ModelSubscriptionUserAddressFilterInput
) {
  onUpdateUserAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateUserAddressSubscriptionVariables,
  APITypes.OnUpdateUserAddressSubscription
>;
export const onDeleteUserAddress = /* GraphQL */ `subscription OnDeleteUserAddress(
  $filter: ModelSubscriptionUserAddressFilterInput
) {
  onDeleteUserAddress(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteUserAddressSubscriptionVariables,
  APITypes.OnDeleteUserAddressSubscription
>;
