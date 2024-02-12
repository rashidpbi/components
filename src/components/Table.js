function Table ({data,config}){
    const renderedHeaders = config.map((item) => (
        <th className="p-3" key={item.label}>
            {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
        </th>
    ));
    const renderedRows = data.map((fruit) => {
        return (
            <tr className="border-b" key={fruit.fruit}>
                <td className="p-3">{config[0].render(fruit)}</td>
                <td className="p-3">
                {config[1].render(fruit)}
                </td>
                <td className="p-3">{config[2].render(fruit)}</td>
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

