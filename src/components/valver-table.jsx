const ValverTable = ({ data }) => {
  const TableHeader = () => (
    <thead className="w-full bg-gray-300  rounded-lg">
      <tr className="w-full text-gray-900 text-xs text-left">
        <th className="py-4 px-2">Fecha</th>
        <th className="py-4 px-2">Proveedar</th>
        <th className="py-4 px-2">Cliente</th>
        <th className="py-4 px-2">Valer</th>
        <th className="py-4 px-2 line-clamp-1">Cantidad</th>
        <th className="py-4 px-2">Madeda</th>
        <th className="py-4 px-2">Flete</th>
        <th className="py-4 px-2">Costo total</th>
        <th className="py-4 px-2">Precio Oferta</th>
        <th className="py-4 px-2">Maneda</th>
        <th className="py-4 px-2">Margen</th>
        <th className="py-4 px-2">KAM</th>
        <th className="py-4 px-2">Ofertado</th>
        <th className="py-4 px-2">Adjudicada</th>
      </tr>
    </thead>
  );

  const TableRow = ({ rowData }) => (
    <tr className="text-xs">
      <td className="py-4 px-2">{rowData.date}</td>
      <td className="py-4 px-2">{rowData.proveedar}</td>
      <td className="py-4 px-2">{rowData.cliente}</td>
      <td className="py-4 px-2">{rowData.valer}</td>
      <td className="py-4 px-2">{rowData.cantidad}</td>
      <td className="py-4 px-2">{rowData.modeda}</td>
      <td className="py-4 px-2">{rowData.flete}</td>
      <td className="py-4 px-2">{rowData.costo}</td>
      <td className="py-4 px-2">{rowData.precioOferta}</td>
      <td className="py-4 px-2">{rowData.manedaOferta}</td>
      <td className="py-4 px-2">{rowData.margen}</td>
      <td className="py-4 px-2">{rowData.kam}</td>
      <td className="py-4 px-2">
        <input type="checkbox" checked={rowData.Ofertado} />
      </td>
      <td className="py-4 px-2">
        <input type="checkbox" checked={rowData.adjudicado} />
      </td>
    </tr>
  );

  return (
    <div className="bg-white shadow-md rounded-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <TableHeader />
          <tbody>
            {data.map((item, index) => (
              <TableRow key={index} rowData={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ValverTable;
