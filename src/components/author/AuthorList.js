import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorList = ({authors, deleteAuthor}) => {
  return (
    <table className="table">
      <thead>
      <tr>
        <th></th>
        <th></th>
        <th>First Name</th>
        <th>Second Name</th>
      </tr>
      </thead>
      <tbody>
      {authors.map(author => (
        <tr key={author.id}>
          <td><Link to={'/author/' + author.id}>Edit</Link></td>
          <td><a onClick={deleteAuthor.bind(this, author)}>Delete</a></td>
          <td>{author.firstName}</td>
          <td>{author.lastName}</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired,
  deleteAuthor: PropTypes.func.isRequired
};

export default AuthorList;
