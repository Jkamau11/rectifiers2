export default function Summary(){


    const summary = {
        issued : 223,
        commissioned: 11,
        integrated : 11,
        completed : 0,
    }

    const pending = summary.commissioned - summary.integrated;
    const endToEnd = ((summary.integrated/summary.issued)*100).toFixed(1);

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
                            <td>{summary.issued}</td>
                            <td>{summary.commissioned}</td>
                            <td>{summary.integrated}</td>
                            <td>{pending}</td>
                            <td>{endToEnd}%</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}