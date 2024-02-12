function Table ({data,config}){
    const renderedHeaders = config.map((item) => (
        <th className="p-3" key={item.label}>
            {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
        </th>
    ));
    const renderedRows = data.map((fruit) => {
        return (
            <tr className="border-b" key={fruit.fruit}>
                <td className="p-3">{fruit.fruit}</td>
                <td className="p-3">
                    <div className={`p-3 m-2 ${fruit.color}`}></div>
                </td>
                <td className="p-3">{fruit.score}</td>
            </tr>
        );
    });
    return <div className="table-auto border-spacing-2">
        <table>
        <thead>
            <tr className="border-b-2">
            {renderedHeaders}
            </tr>
        </thead>
        <tbody>
           {renderedRows}
        </tbody>
    </table></div>
    
}

export default Table;

