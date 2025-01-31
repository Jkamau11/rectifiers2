/* eslint-disable react/prop-types */
export default function Summary({summaryData}){

    // console.log(summaryData.totalIssued);

    const pending = summaryData.totalCommissioned - summaryData.totalIntegrated;
    // console.log(pending);
    const endToEnd = ((summaryData.totalIntegrated/summaryData.totalIssued)*100).toFixed(1);
    // console.log(endToEnd);

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
                            <th>Pending Integration</th>
                            <th>End-End Completion</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{summaryData.totalIssued}</td>
                            <td>{summaryData.totalCommissioned}</td>
                            <td>{summaryData.totalIntegrated}</td>
                            <td>{pending}</td>
                            <td>{endToEnd}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}