import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Sort,
  Toolbar,
  Selection,
  Filter,
  Page,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids'

import { customersData, customersGrid } from '../data/dummy'

import { Header } from '../components'

function Customers() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowSorting
        allowPaging
        toolbar={['Delete']}
        editSettings={{ allowEditing: true, allowDeleting: true }}
        width="auto"
      >
        <ColumnsDirective>
          {customersGrid.map((item, idx) => (
            <ColumnDirective key={item + idx} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Selection, Filter, Edit, Sort]} />
      </GridComponent>
    </div>
  )
}

export default Customers
