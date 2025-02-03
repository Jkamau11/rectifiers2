
export default function WeekDisplay(){

  return(

    <>
    <div className="summary">
                <table className="summary-table" border={1}>
                    <caption className="table-caption">Weeks of the year</caption>
                    <thead>
                        <tr>
                            <th>Weeks</th>
                            <th>Number of commissioned sites</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Week 1</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Week 2</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>Week 3</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td>Week 4</td>
                            <td>9</td>
                        </tr>
                        <tr>
                            <td>Week 5</td>
                            <td>16</td>
                        </tr>
                        <tr>
                            <td>Week 6</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>


  )

};

  // const [weeks, setWeeks] = useState([]);

  // useEffect(() => {
  //   const getWeeksOfYear = (year) => {
  //     const weeksArr = [];
  //     let date = new Date(year, 0, 1); // Starting date is January 1st of the year
  //     let weekNumber = 1;

  //     // Adjust to the first week of the year (if Jan 1st is not Sunday)
  //     while (date.getDay() !== 0) {
  //       date.setDate(date.getDate() + 1); // Move to the first Sunday
  //     }

  //     // Now loop through the weeks until the end of the year
  //     while (date.getFullYear() === year) {
  //       weeksArr.push(`Week ${weekNumber}`);
  //       date.setDate(date.getDate() + 7); // Move to next week
  //       weekNumber++;
  //     }

  //     return weeksArr;
  //   };

  //   // Get weeks for the year 2025
  //   setWeeks(getWeeksOfYear(2025));
  // }, []);

  // return (
  //   <div>
  //     <h1>Weeks of the Year 2025</h1>
  //     <ul>
  //       {weeks.slice(0, 6).map((week) => (
  //         <li key={week}>{week}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
// };


