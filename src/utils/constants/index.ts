export interface IAlgorithmContentDropdownItem {
  id: number;
  label: string;
  name: string;
}
interface IAlgorithmContent {
  dropdownItems: IAlgorithmContentDropdownItem[] | [];
  id: number;
  label: string;
  name: string;
}

export const algorithmContents: IAlgorithmContent[] = [
  {
    dropdownItems: [
      {
        id: 1,
        label: "Euclidean's Algorithm",
        name: "euclid_algorithm",
      },
    ],
    id: 1,
    label: "Greatest Common Divisor",
    name: "gcd",
  },
];
