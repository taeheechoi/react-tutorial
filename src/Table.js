import React, {Component} from 'react'

const TableHeader = () => {
   return (
       <thead>
           <tr>
               <th>Name</th>
               <th>Job</th>
               <th>Remove</th>
           </tr>
       </thead>
   )
}

const TableBody = props => {

    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

class Table extends Component {
    render() {
        const {characterData, removeCharacter} = this.props // ES6 property shorthand to create a variable that contains this.props.characterData.

        return (
            <table>
                <TableHeader/>
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
    }
}

// class Table extends Component {
//     render() {
//         return (
//             <table>
//                 <thead>
//                     <th>Name</th>
//                     <th>Job</th>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>Tae Hee</td>
//                         <td>Programmer</td>
//                     </tr>
//                     <tr>
//                         <td>Sunha</td>
//                         <td>Pianist</td>
//                     </tr>
//                     <tr>
//                         <td>Gio</td>
//                         <td>Baby</td>
//                     </tr>

//                 </tbody>
//             </table>
//         )
//     }

// }

export default Table