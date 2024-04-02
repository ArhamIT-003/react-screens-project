const Table = ({ data }) => {
  const TableHeader = () => (
    <thead className="w-full bg-gray-300  rounded-lg">
      <tr className="w-full text-gray-900 text-xs text-left">
        <th className="py-4 px-2">Proveedar</th>
        <th className="py-4 px-2">Precio Unitario</th>
        <th className="py-4 px-2 line-clamp-1">Cantidad</th>
        <th className="py-4 px-2">Maneda</th>
        <th className="py-4 px-2">Flete</th>
        <th className="py-4 px-2">Costo total</th>
        <th className="py-4 px-2">Precio Oferta</th>
        <th className="py-4 px-2">Maneda Oferta</th>
        <th className="py-4 px-2">Maneda</th>
        <th className="py-4 px-2">Oferta</th>
        <th className="py-4 px-2">Actions</th>
      </tr>
    </thead>
  );

  const TableRow = ({ rowData }) => (
    <tr className="text-xs">
      <td className="py-4 px-2">{rowData.proveedar}</td>
      <td className="py-4 px-2">{rowData.cantidad}</td>
      <td className="py-4 px-2">{rowData.precio}</td>
      <td className="py-4 px-2">{rowData.maneda}</td>
      <td className="py-4 px-2">{rowData.flete}</td>
      <td className="py-4 px-2">{rowData.costo}</td>
      <td className="py-4 px-2">{rowData.precioOferta}</td>
      <td className="py-4 px-2">{rowData.manedaOferta}</td>
      <td className="py-4 px-2">{rowData.Maneda}</td>
      <td className="py-4 px-2">
        <input type="checkbox" />
      </td>
      <td>
        <div className="flex gap-2">
          <button className="text-semibold text-sm bg-blue-500 text-white rounded-md px-2 py-1">
            Editor
          </button>
          <button className="text-semibold text-sm border-2 border-red-400 text-red-400 rounded-md px-2 py-1">
            Borror
          </button>
        </div>
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

export default Table;
