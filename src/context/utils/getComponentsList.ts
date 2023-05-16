import { isMandatoryComponent } from "./isMandatoryComponent";
import utilizationDetails from "../../data/utilization-details.utils.json";

export const getComponentsList = (data: any): any => {
  const components: any = [];
  for (const component in data) {
    components.push({
      name: component,
      versions: [data[component]],
      isSelected: isMandatoryComponent(component),
      utilizationDetails: utilizationDetails[component],
    });
  }
  return { addons: components };
};
