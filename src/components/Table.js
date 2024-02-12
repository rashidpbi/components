function Table ({data,config}){
    const renderedHeaders = config.map((item) => (
        <th className="p-3" key={item.label}>
            {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
        </th>
    ));
    const renderedRows = data.map((fruit) => {
        const renderedCells = config.map((config)=>{
            return <td className="p-3" >{config.render(fruit)}</td>
        })
        return (
            <tr className="border-b" key={fruit.fruit}>
                {renderedCells}
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

