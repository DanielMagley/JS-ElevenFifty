import React from "react";

const PieTable = () => (
  <div>
    <h3>Pie List</h3>
    <table border="1" className="pies">
      <thead>
        <tr>
          <th>Name of Pie</th>
          <th>Base of Pie</th>
          <th>Crust</th>
          <th>Time to Bake</th>
          <th>Servings</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Apple</td>
          <td>Fruit</td>
          <td>Sourdough</td>
          <td>50 min</td>
          <td>8</td>
          <td>5 stars</td>
        </tr>
        <tr>
          <td>Peach</td>
          <td>Fruit</td>
          <td>Sourdough</td>
          <td>50 min</td>
          <td>8</td>
          <td>5 stars</td>
        </tr>
        <tr>
          <td>Chocolate Cream</td>
          <td>Chocolate</td>
          <td>Oreo</td>
          <td>50 min</td>
          <td>8</td>
          <td>5 stars</td>
        </tr>
      </tbody>
    </table>
  </div>
);
export default PieTable;
