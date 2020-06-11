// Interface
interface MenuItemInterface {
  label: string;
  link?: string;
  external?: boolean;
}

export class MenuItem implements MenuItemInterface {
  label: string;
  link?: string;
  external?: boolean;
  subMenu?: MenuItemInterface;
}
