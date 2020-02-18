import React from 'react';

default export function RowComponent(props) {
  const { data } = props;
  return (
    <tr>
      <td>#</td>
      <td>Name</td>
      <td>Price</td>
      <td>Rating</td>
      <td>Speed</td>
      <td>Description</td>
      <td>Contact No</td>
      <td>Email</td>
      <td>Image</td>
      <td>URL</td>
    </tr>
  );
}
