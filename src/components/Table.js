import { Fragment } from "react";
function Table({ data, config ,keyFn ,keyFnVeh,vehicleData,vehicleConfig  }) {
    const renderedHeaders = vehicleConfig.map((item) => {
       
        if (item.header){
                return <Fragment key={item.label}>{item.header()}</Fragment>;
        }
        return(
        <th className="p-3" key={item.label}>
            {item.label.charAt(0).toUpperCase() + item.label.slice(1)}
        </th>)
});

    const renderedRows = vehicleData.map((rawData) => {
        const renderedCells = vehicleConfig.map((vehicleConfig) => (
            <td className="p-3" key={vehicleConfig.label}>
                {vehicleConfig.render(rawData)}
            </td>
        ));
       
        return (
            
            <tr className="border-b" key={keyFnVeh(rawData)}>
                {renderedCells}
            </tr>
        );
    });

    return (
        <div>
            <div className="table-auto border-spacing-2">
                <table>
                    <thead>
                        <tr className="border-b-2">{renderedHeaders}</tr>
                    </thead>
                    <tbody>{renderedRows}</tbody>
                </table>
            </div>
        </div>
        
    );
}

export default Table;
