// import React, { useEffect, useState } from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject} from '@syncfusion/ej2-react-grids';
// import { DetailCard } from '../components';

// import { contextMenuItems, ordersGrid } from '../data/dummy';
// import { benchmarkTableGrid } from '../data/tableConfig';
// import { Header } from '../components';

// const Orders = () => {
//   const editing = { allowDeleting: false, allowEditing: false };

//   const [selectedRow, setSelectedRow] = useState(null); // State to track the selected row

//   const [data, setData] = useState([]); // State to hold fetched data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('http://localhost:3009/benchmarks'); // Adjust endpoint as necessary
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const result = await response.json();
//         console.log(result);
//         setData(result); // Set fetched data into state
//       } catch (error) {
//         console.error("Failed to fetch data: ", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleRowSelected = (args) => {
//     console.log("Row selected")
//     console.log(args.data);
//     setSelectedRow(args.data); // Assuming args.data contains the row data
//   };

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="Page" title="Benchmark Data Table" />
//       <GridComponent
//         id="gridcomp"
//         dataSource={data}
//         allowPaging
//         allowSorting
//         allowExcelExport
//         allowPdfExport
//         contextMenuItems={contextMenuItems}
//         editSettings={editing}
//         rowSelecting={handleRowSelected}
//       >
//         <ColumnsDirective>
//           eslint-disable-next-line react/jsx-props-no-spreading
//           {benchmarkTableGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
//         </ColumnsDirective>
//         <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport]} />
//       </GridComponent>
//       {selectedRow && <DetailCard rowData={selectedRow} onClose={() => setSelectedRow(null)} />}
//     </div>
//   );
// };
// export default Orders;