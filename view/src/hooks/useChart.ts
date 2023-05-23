// Documentation ( https://www.chartjs.org/docs/latest/ )

// Dependencies
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';

// Types
import type { ChartData, ChartOptions, ChartDataset } from 'chart.js';

const useChart = () => {

  // This Function Used To avoid CategoryScale Error ( IMPORTANT )
  Chart.register(CategoryScale);


  /** createDataObject
   * This Function Used To Create Chart Data Object
   * @param { ChartData data }
   * @return { ChartData }
   */
  const createDataObject = (data: ChartData): ChartData => data;

  /** createChartOptions
   * This Function Used To Create Chart Options.
   * @param { ChartOptions options }
   * @return { ChartOptions }
   */
  const createOptionsObject = (options: ChartOptions): ChartOptions => options;

  /** createDatasetObject
   * This Function Used To Create a Dataset Object
   * @param { ChartDataset dataset }
   * @return { ChartDataset }
   */
  const createDatasetObject = (dataset: ChartDataset): ChartDataset => dataset;

  return {
    createDataObject,
    createOptionsObject,
    createDatasetObject
  }
}

export default useChart;
