/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./src/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserAddress = /* GraphQL */ `query GetUserAddress($id: ID!) {
  getUserAddress(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserAddressQueryVariables,
  APITypes.GetUserAddressQuery
>;
export const listUserAddresses = /* GraphQL */ `query ListUserAddresses(
  $filter: ModelUserAddressFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserAddresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      phone
      address
      email
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserAddressesQueryVariables,
  APITypes.ListUserAddressesQuery
>;
