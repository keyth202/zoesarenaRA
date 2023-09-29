import { format } from "date-fns";
export const invoiceFakeData = [{
  date: format(new Date(2021, 11, 2), "MMM dd, yyyy"),
  id: "615193a4c7e1363df77b9929",
  name: "Natalie Dormer",
  position: "UI Designer",
  amount: 450,
  avatar: "/static/avatar/001-man.svg",
  status: "Unpaid"
}, {
  date: format(new Date(2021, 10, 2), "MMM dd, yyyy"),
  id: "615193bab7b256189c6fe997",
  name: "Kyle Williams",
  position: "Developer",
  amount: 280,
  avatar: "/static/avatar/005-man-1.svg",
  status: "Unpaid"
}, {
  date: format(new Date(2021, 10, 2), "MMM dd, yyyy"),
  id: "615193d64696d4665abb8ea5",
  name: "Alan Mask",
  position: "Marketer",
  amount: 120,
  avatar: "/static/avatar/014-man-3.svg",
  status: "Unpaid"
}];