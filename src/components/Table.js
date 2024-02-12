function Table({ data, config ,keyFn  }) {
    const renderedHeaders = config.map((item) => (
        <th className="p-3" key={item.label}>
            {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
        </th>
    ));

    const renderedRows = data.map((rawData) => {
        const renderedCells = config.map((config) => (
            <td className="p-3" key={config.label}>
                {config.render(rawData)}
            </td>
        ));
       
        return (
            
            <tr className="border-b" key={keyFn(rawData)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <div className="table-auto border-spacing-2">
            <table>
                <thead>
                    <tr className="border-b-2">{renderedHeaders}</tr>
                </thead>
                <tbody>{renderedRows}</tbody>
            </table>
        </div>
    );
}

export default Table;
