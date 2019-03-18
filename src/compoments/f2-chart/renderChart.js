import toString from '../../utils/toString';

export default function renderChart(props, chartData) {
  const height = `${props.height || 400}px`;
  const width = props.width ? `${props.width}px` : 'auto';
  const params = props.params || {genre: 'genre', sold: 'sold'};
  return `
    document.getElementById('chart').style.height = "${height}";
    document.getElementById('chart').style.width = "${width}";
    var myChart = new F2.Chart({
      id: 'chart',
      pixelRatio: window.devicePixelRatio // 指定分辨率
    });
    myChart.source(${toString(chartData)});
    myChart.interval().position('${params.genre || 'genre'}*${params.sold || 'sold'}').color('${params.genre || 'genre'}');
    myChart.render();
    window.document.addEventListener('message', function(e) {
      var option = JSON.parse(e.data);
      myChart.source(option);
      myChart.render();
    });

    function changeData (data) {
      myChart.source(data);
      myChart.render();
    }
  `
}