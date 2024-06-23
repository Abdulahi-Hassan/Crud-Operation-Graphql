import { gql } from "@apollo/client";


export const CreateUser = gql`
  mutation MyMutation(
    $UserName: String
    $Email: String
    $Password: String
    $Profile: String
  ) {
    insert_User(
      objects: {
        UserName: $UserName
        Email: $Email
        Password: $Password
        Profile: $Profile
      }
    ) {
      returning {
        ID
        UserName
        Email
        Password
        Profile
        Date
      }
    }
  }
`;

export const UpdateUser = gql`
  mutation MyMutation(
    $ID: Int
    $UserName: String
    $Email: String
    $Password: String
    $Profile: String
  ) {
    update_User(
      where: { ID: { _eq: $ID } }
      _set: {
        UserName: $UserName
        Email: $Email
        Password: $Password
        Profile: $Profile
      }
    ) {
      returning {
        ID
        UserName
        Email
        Password
        Profile
        Date
      }
    }
  }
`;

export const Deleteuser = gql`
  mutation MyMutation($ID: Int) {
    delete_User(where: { ID: { _eq: $ID } }) {
      returning {
        ID
        UserName
        Email
        Password
        Profile
        Date
      }
    }
  }
`;


export const Createpost = gql`
  mutation MyMutation(
    $title: String
    $body: String
    $thumbnail: String
  ) {
    insert_Posts(
      objects: {
        title: $title
        body: $body
        thumbnail: $thumbnail
      }
    ) {
      returning {
        id
        title
        body
        thumbnail
        date
      }
    }
  }
`;


export const Updatepost = gql`
  mutation MyMutation(
    $id: Int
    $title: String
    $body: String
    $thumbnail: String
  ) {
    update_Posts(
      where: { id: { _eq: $id } }
      _set: {
        title: $title
        body: $body
        thumbnail: $thumbnail
      }
    ) {
      returning {
        id
        title
        body
        thumbnail
        date
      }
    }
  }
`;

export const Deletepost = gql`
  mutation MyMutation($id: Int) {
    delete_Posts(where: { id: { _eq: $id } }) {
      returning {
        id
        title
        body
        thumbnail
        date
      }
    }
  }
`;
