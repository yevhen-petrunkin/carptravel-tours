import ServiceT from "@/types/ServiceT";
import ServiceMenuT from "@/types/ServiceMenuT";

function getServicesMenu(array: ServiceT[]): ServiceMenuT {
  return array.reduce((aggr: ServiceMenuT, item: ServiceT, index: number) => {
    aggr.push({ menuItem: item.menuItem, index });
    return aggr;
  }, []);
}

export default getServicesMenu;
