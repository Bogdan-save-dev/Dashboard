import {
  ChartComponent,
  SeriesCollectionDirective,
  SeriesDirective,
  Inject,
  Legend,
  Category,
  StackingColumnSeries,
  Tooltip,
} from '@syncfusion/ej2-react-charts'

import {
  stackedCustomSeries,
  stackedPrimaryXAxis,
  stackedPrimaryYAxis,
} from '../../data/dummy'

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      legendSettings={{ background: 'white' }}
      chartArea={{
        border: { width: 0 },
      }}
      tooltip={{ enable: true }}
    >
      <Inject services={[Legend, Category, StackingColumnSeries, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, idx) => (
          <SeriesDirective key={idx} {...item} />
        ))}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
