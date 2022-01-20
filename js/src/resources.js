import { resourcesData, resourcesDataForDisplay } from './resources-data';
import template from '../templates/iot-surveys.mustache';

const displayDataOnPage = () => {
  const dataFordisplay = resourcesDataForDisplay.map((item, index) => {
    item.data = resourcesData[index].data.slice(0, 3);
    return item;
  });
  document.getElementById('all-resources').innerHTML = template({
    sections: dataFordisplay,
  });
};

if (document.getElementById('all-resources')) {
  const fetchWithPagination = async () => {
    let i = 1;
    let data = [];

    const getData = async () => {
      let response = await fetch(`https://newsroom.eclipse.org/api/resources?pagesize=60&page=${i}`);
      if (response.ok) {
        let newData = await response.json();
        data = [...data, ...newData.resources.filter((item) => item.publish_to.includes('eclipse_iot'))];

        if (response.headers.get('link')?.includes('rel="next"')) {
          i++;
          await getData();
        }
      }
    };

    await getData();

    data.forEach((item) => {
      switch (item.resource_type) {
        case 'survey_report':
          resourcesData.find((item) => item.resource_type === 'survey_report').data.push(item);
          break;
        case 'case_study':
          resourcesData.find((item) => item.resource_type === 'case_study').data.push(item);
          break;
        case 'white_paper':
          resourcesData.find((item) => item.resource_type === 'white_paper').data.push(item);
          break;
        case 'market_report':
          resourcesData.find((item) => item.resource_type === 'market_report').data.push(item);
          break;
        default:
          break;
      }
    });
    // TODO: delete the console when the PR is ready for code review
    console.log(resourcesData);

    displayDataOnPage();
  };
  fetchWithPagination();
}
