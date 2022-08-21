import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids'
import { Header } from '../components'

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy'

function Orders() {
  return (
    <div
      className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl"
    >
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowSorting
        allowPaging
      >
        <ColumnsDirective>
          {ordersGrid.map((item, idx) => (
            <ColumnDirective key={item + idx} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            Filter,
            Page,
            ExcelExport,
            Edit,
            ContextMenu,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  )
}

export default Orders
