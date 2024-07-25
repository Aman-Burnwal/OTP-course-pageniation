const TableBody = ({Title, Start_date, End_date, Price, Validity,Status}) => {
  return (
      <tr className="grid grid-cols-8   text-sm text-center">
          <td className="  col-span-3 border-l">{Title}</td>
          <td className="border-l">{Start_date}</td>
          <td className="border-l">{End_date}</td>
          <td className="border-l">{Price}</td>
          <td className="border-l">{Validity} </td>
          <td className="border-l border-r">{Status}</td>
      </tr>
  )
}
export default TableBody