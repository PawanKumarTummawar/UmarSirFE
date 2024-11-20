import React from 'react'
// import './StudentTable.css'

const StudentTable = () => {

  return (
    <div id='wrapper'>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th>rno</th>
                <th>name</th>
                <th>per</th>
                </tr>
            </thead>
            <tbody >
                <tr>
                    <td>1</td>
                    <td>Pawan</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Ritika</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Umar sir</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Ronaldo</td>
                    <td>98</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>Messi</td>
                    <td>97</td>
                </tr>
            </tbody>
        </table>
        {/* <div>{c}</div> */}
    </div>
  )
}

export default StudentTable