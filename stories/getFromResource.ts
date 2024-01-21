import resource from 'raw-loader!!../MultiSwitch/strings/MultiSwitch.1033.resx';

const xmlResource = new DOMParser().parseFromString(resource, 'text/xml');
const elements = xmlResource.getElementsByTagNameNS('', 'data');
export const getFromResource = (key: string) => {
  for (let i = 0; i < elements.length; i++) {
    if (elements[i].getAttribute('name') === key) {
      return elements[i].getElementsByTagName('value')[0].innerHTML?.trim();
    }
  }
};
