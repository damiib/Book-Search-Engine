import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation adduser($username: String!, $email: String!, $password: String) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const SAVE_BOOK = gql`
mutation savebook($bookData: BookInput!,){
  savebook(bookData: $bookData){
    _id
    username
    email
    savedBooks {
      bookId
      authors
      image
      description
      title
      link
    }
  }
}
`;

export const REMOVE_BOOK = gql`
mutation removebook($bookId: ID!,){
  removebook(bookID: $bookId,){
    _id
    username
    email
    savedBooks {
      bookId
      authors
      image
      description
      title
      link
    }
  }
}
`;
