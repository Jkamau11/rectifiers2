export default function Summary(){

    return(
        <>
            <div className="summary">
                <table className="summary-table" border={1}>
                    <caption className="table-caption">Summary</caption>
                    <thead>
                        <tr>
                            <th>Issued</th>
                            <th>Commissioned</th>
                            <th>Integrated</th>
                            <th>Completed</th>
                            <th>Pending</th>
                            <th>End-End Completion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>117</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>117</td>
                            <td>0%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}