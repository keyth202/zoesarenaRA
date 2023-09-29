import { format } from "date-fns";
const dateOfBirth = format(new Date(2021, 11, 2), "MMM dd, yyyy");
const fakeData = [{
  id: 163,
  name: "Lily Collins",
  position: "Designer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/001-man.svg",
  dateOfBirth,
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: 163,
  name: "Lily Callins",
  position: "Editor",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/002-girl.svg",
  dateOfBirth,
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: 163,
  name: "Lily Collins",
  position: "Designer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/003-boy.svg",
  dateOfBirth,
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: 163,
  name: "Lily Collins",
  position: "Developer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/004-woman.svg",
  dateOfBirth: format(new Date(2021, 10, 5), "MMM dd, yyyy"),
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}, {
  id: 163,
  name: "Lily Collins",
  position: "Developer",
  team: 15,
  experience: "3 years",
  phone: "+00578115245",
  avatar: "/static/avatar/005-man-1.svg",
  dateOfBirth: format(new Date(2021, 10, 5), "MMM dd, yyyy"),
  email: "Uilib@gmail.com",
  address: "Corner View, Sylhet",
  status: "Full Time"
}];
export default fakeData;