import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend ,CategoryScale, LinearScale, BarElement, Title} from 'chart.js';
import { Pie , Bar} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,
  LinearScale,
  BarElement,
  Title,);

  function PieComponent (props){
    const data = {
        labels: ['USD', 'CAD'],
        datasets: [
          {
            label: 'Pie chart of Invoice Currency',
            data: props.arr,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderWidth: 1,
          },
        ],
      };
      return(props.visible)?(
        <div className='popup'>
            <Pie  data={data} />
            </div>
      ):"";
  }
  export default PieComponent;