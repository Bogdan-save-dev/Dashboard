import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Toolbar,
  Search,
  Inject,
} from '@syncfusion/ej2-react-grids'
import { Header } from '../components'

import { employeesData, employeesGrid } from '../data/dummy'

function Employees() {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowSorting
        allowPaging
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item, idx) => (
            <ColumnDirective key={item + idx} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  )
}

export default Employees
