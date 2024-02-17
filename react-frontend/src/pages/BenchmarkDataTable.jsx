/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Inject } from '@syncfusion/ej2-react-grids';
import { DetailCard, Header } from '../components';

import { benchmarkTableGrid, contextMenuItems } from '../data/tableConfig';

const BenchmarkDataTable = () => {
  const editing = { allowDeleting: false, allowEditing: false };

  const [selectedRow, setSelectedRow] = useState(null); // State to track the selected row

  const [data, setData] = useState([]); // State to hold fetched data

  const backendHost = process.env.REACT_APP_BACKEND_HOST;
  const backendPort = process.env.REACT_APP_BACKEND_PORT;
  console.log('backendHost', backendHost);
  console.log('backendPort', backendPort);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${backendHost}:${backendPort}/benchmarks`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        console.log(result);
        setData(result); // Set fetched data into state
      } catch (error) {
        console.error('Failed to fetch data: ', error);
      }
    };

    fetchData();
  }, []);

  const handleRowSelected = (args) => {
    console.log('Row selected');
    console.log(args.data);
    setSelectedRow(args.data); // Assuming args.data contains the row data
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Benchmark Data Table" />
      <GridComponent
        id="gridcomp"
        dataSource={data}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        rowSelecting={handleRowSelected}
      >
        <ColumnsDirective>
          eslint-disable-next-line react/jsx-props-no-spreading
          {benchmarkTableGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport]} />
      </GridComponent>
      {selectedRow && <DetailCard rowData={selectedRow} onClose={() => setSelectedRow(null)} />}
    </div>
  );
};
export default BenchmarkDataTable;
