import { resourcesData } from './resources-data';
import template from '../templates/iot-resources.mustache';
import templateForOneType from '../templates/iot-one-type-resources.mustache';

const formatDate = function () {
  let theDate = new Date(this.date).toDateString();
  theDate = theDate.slice(0, 3) + ',' + theDate.slice(3);
  return theDate;
};

const displayDataOnPage = () => {
  document.getElementById('all-resources').innerHTML = template({
    sections: resourcesData,
    formatDate: formatDate,
  });
};

const displayDataOnPageForOneType = (data) => {
  document.getElementById('one-type-resources').innerHTML = templateForOneType({
    items: data,
    formatDate: formatDate,
  });
};

if (document.getElementById('all-resources')) {
  // Set loading spinner
  displayDataOnPage();

  const fetchPreviewData = () => {
    resourcesData.forEach((section) => {
      fetch(
        `https://newsroom.eclipse.org/api/resources?pagesize=3&parameters[publish_to]=eclipse_iot&parameters[resource_type][]=${section.resource_type}`
      )
        .then((res) => res.json())
        .then((data) => {
          section.data = data.resources;
          section.isFetching = false;
          displayDataOnPage();
        })
        .catch((err) => console.log(err));
    });
  };
  fetchPreviewData();
}

const oneTypeResElement = document.getElementById('one-type-resources');
if (oneTypeResElement) {
  const fetchWithPagination = async () => {
    let i = 1;
    let data = [];

    const getData = async () => {
      let response = await fetch(
        `https://newsroom.eclipse.org/api/resources?pagesize=60&parameters[publish_to]=eclipse_iot&parameters[resource_type][]=${oneTypeResElement.getAttribute(
          'data-res-type'
        )}`
      );
      if (response.ok) {
        let newData = await response.json();
        data = [...data, ...newData.resources];

        if (response.headers.get('link')?.includes('rel="next"')) {
          i++;
          await getData();
        }
      }
    };

    await getData();

    displayDataOnPageForOneType(data);
  };

  fetchWithPagination();
}
