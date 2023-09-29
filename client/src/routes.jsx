import { lazy, Suspense } from "react";
import { Navigate } from "react-router-dom";
import useSettings from "hooks/useSettings";
import LoadingScreen from "components/LoadingScreen";
import LayoutV1 from "layouts/layout-v1/DashboardLayout";
import LayoutV2 from "layouts/layout-v2/LayoutV2";
import LayoutV3 from "layouts/layout-v3/DashboardLayout";

const Loadable = Component => props => {
  return <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>;
}; // dashboards


const CRM = Loadable(lazy(() => import("./pages/dashboards/crm")));
const Sales = Loadable(lazy(() => import("./pages/dashboards/sales")));
const SalesV2 = Loadable(lazy(() => import("./pages/dashboards/sales-v2")));
const SaaS = Loadable(lazy(() => import("./pages/dashboards/saas")));
const ProjectManagement = Loadable(lazy(() => import("./pages/dashboards/project-management")));
const ProjectManagementV2 = Loadable(lazy(() => import("./pages/dashboards/project-management-v2")));
const JobManagement = Loadable(lazy(() => import("./pages/dashboards/job-management")));
const LearningManagement = Loadable(lazy(() => import("./pages/dashboards/learning-management"))); // account

const Account = Loadable(lazy(() => import("./pages/accounts/account")));
const AccountV2 = Loadable(lazy(() => import("./pages/accounts/account-v2"))); // user and contact

const AddUser = Loadable(lazy(() => import("./pages/user-list/add-new-user")));
const UserList = Loadable(lazy(() => import("./pages/user-list/user-list-view")));
const UserListV2 = Loadable(lazy(() => import("./pages/user-list/user-list-view-v2")));
const UserGrid = Loadable(lazy(() => import("./pages/user-list/user-grid-view")));
const UserGridV2 = Loadable(lazy(() => import("./pages/user-list/user-grid-view-v2")));
const ContactList = Loadable(lazy(() => import("./pages/contact-list/contact-list-view")));
const ContactGrid = Loadable(lazy(() => import("./pages/contact-list/contact-grid-view"))); // profile

const Profile = Loadable(lazy(() => import("./pages/profiles/profile")));
const ProfileV2 = Loadable(lazy(() => import("./pages/profiles/profile-v2"))); // profile

const DataTableV2 = Loadable(lazy(() => import("./pages/data-table/data-table-v2"))); // invoice

const InvoiceList = Loadable(lazy(() => import("./pages/invoice/list")));
const InvoiceList2 = Loadable(lazy(() => import("./pages/invoice/invoice-list-v2")));
const CreateInvoice = Loadable(lazy(() => import("./pages/invoice/create")));
const CreateInvoice2 = Loadable(lazy(() => import("./pages/invoice/add-invoice-v2")));
const InvoiceDetails = Loadable(lazy(() => import("./pages/invoice/details")));
const InvoiceDetails2 = Loadable(lazy(() => import("./pages/invoice/invoice-details-v2"))); // eCommerce

const Shop = Loadable(lazy(() => import("./pages/ecommerce/shop")));
const ShopV2 = Loadable(lazy(() => import("./pages/ecommerce/shop-v2")));
const Cart = Loadable(lazy(() => import("./pages/ecommerce/Cart")));
const Payment = Loadable(lazy(() => import("./pages/ecommerce/payment")));
const Checkout = Loadable(lazy(() => import("./pages/ecommerce/checkout")));
const CheckoutV2 = Loadable(lazy(() => import("./pages/ecommerce/checkout-v2")));
const ProductDetails = Loadable(lazy(() => import("./pages/ecommerce/product-details")));
const BillingAddress = Loadable(lazy(() => import("./pages/ecommerce/billing-address")));
const PaymentComplete = Loadable(lazy(() => import("./pages/ecommerce/payment-complete")));
const PaymentCompleteV2 = Loadable(lazy(() => import("./pages/ecommerce/payment-complete-v2"))); // pricing

const Pricing = Loadable(lazy(() => import("./pages/pricing"))); // pricing

const TodoList = Loadable(lazy(() => import("./pages/todo-list"))); // pricing

const Calendar = Loadable(lazy(() => import("./pages/calendar"))); // authentication

const Login = Loadable(lazy(() => import("./pages/authentication/login")));
const LoginV2 = Loadable(lazy(() => import("./pages/authentication/login-v2")));
const Register = Loadable(lazy(() => import("./pages/authentication/register")));
const RegisterV2 = Loadable(lazy(() => import("./pages/authentication/register-v2")));
const NewPassword = Loadable(lazy(() => import("./pages/authentication/new-password")));
const ForgetPassword = Loadable(lazy(() => import("./pages/authentication/forget-password")));
const ForgetPasswordV2 = Loadable(lazy(() => import("./pages/authentication/forget-password-v2")));
const TwoStepVerify = Loadable(lazy(() => import("./pages/authentication/two-step-verification"))); // admin ecommerce

const ProductList = Loadable(lazy(() => import("./pages/admin-ecommerce/product-list")));
const ProductGrid = Loadable(lazy(() => import("./pages/admin-ecommerce/product-grid")));
const CreateProduct = Loadable(lazy(() => import("./pages/admin-ecommerce/create-product")));
const CustomerManagement = Loadable(lazy(() => import("./pages/admin-ecommerce/customer-management")));
const OrderManagement = Loadable(lazy(() => import("./pages/admin-ecommerce/order-management")));
const ProductManagement = Loadable(lazy(() => import("./pages/admin-ecommerce/product-management"))); // chat

const ChatV1 = Loadable(lazy(() => import("./pages/chats/chat-v1")));
const ChatV2 = Loadable(lazy(() => import("./pages/chats/chat-v2"))); // user projects

const ProjectDetails = Loadable(lazy(() => import("./pages/projects/project-details")));
const ProjectV1 = Loadable(lazy(() => import("./pages/projects/project-v1")));
const ProjectV2 = Loadable(lazy(() => import("./pages/projects/project-v2")));
const TeamMember = Loadable(lazy(() => import("./pages/projects/team-member")));
const ProjectV3 = Loadable(lazy(() => import("./pages/projects/project-v3"))); // Landing page

const AboutPage = Loadable(lazy(() => import("./pages/about")));
const ContactPage = Loadable(lazy(() => import("./pages/contact")));
const PricingPage = Loadable(lazy(() => import("./pages/pricing-v2")));
const PrivacyPage = Loadable(lazy(() => import("./pages/privacy"))); // 404/Error page

const Error = Loadable(lazy(() => import("./pages/404")));

const ActiveLayout = () => {
  const {
    settings
  } = useSettings(); // console.log(settings);

  switch (settings.activeLayout) {
    case "layout1":
      return <LayoutV1 />;

    case "layout2":
      return <LayoutV2 />;

    case "layout3":
      return <LayoutV3 />;

    default:
      return <LayoutV1 />;
  }
};

const routes = () => {
  return [...authRoutes, {
    path: "dashboard",
    element: <ActiveLayout />,
    children: dashboardRoutes
  }, {
    path: "*",
    element: <Error />
  }];
};

const authRoutes = [{
  path: "/",
  element: <Navigate to="/dashboard" />
}, {
  path: "login",
  element: <Login />
}, {
  path: "login-v2",
  element: <LoginV2 />
}, {
  path: "register",
  element: <Register />
}, {
  path: "register-v2",
  element: <RegisterV2 />
}, {
  path: "new-password",
  element: <NewPassword />
}, {
  path: "forget-password",
  element: <ForgetPassword />
}, {
  path: "forget-password-v2",
  element: <ForgetPasswordV2 />
}, {
  path: "two-step-verification",
  element: <TwoStepVerify />
}];
const dashboardRoutes = [{
  path: "",
  element: <LearningManagement />
}, {
  path: "job-management",
  element: <JobManagement />
}, {
  path: "sales",
  element: <Sales />
}, {
  path: "sales-v2",
  element: <SalesV2 />
}, {
  path: "crm",
  element: <CRM />
}, {
  path: "saas",
  element: <SaaS />
}, {
  path: "sub-child-v1",
  element: <SalesV2 />
}, {
  path: "sub-child-v2",
  element: <ProjectManagement />
}, {
  path: "sub-child-v3",
  element: <ProjectManagementV2 />
}, {
  path: "project-management",
  element: <ProjectManagement />
}, {
  path: "project-management-v2",
  element: <ProjectManagementV2 />
}, {
  path: "account",
  element: <Account />
}, {
  path: "account-v2",
  element: <AccountV2 />
}, {
  path: "profile",
  element: <Profile />
}, {
  path: "profile-v2",
  element: <ProfileV2 />
}, {
  path: "data-table-v2",
  element: <DataTableV2 />
}, {
  path: "add-user",
  element: <AddUser />
}, {
  path: "user-list",
  element: <UserList />
}, {
  path: "user-list-v2",
  element: <UserListV2 />
}, {
  path: "user-grid",
  element: <UserGrid />
}, {
  path: "user-grid-v2",
  element: <UserGridV2 />
}, {
  path: "contact-list",
  element: <ContactList />
}, {
  path: "contact-grid",
  element: <ContactGrid />
}, {
  path: "invoice-list",
  element: <InvoiceList />
}, {
  path: "invoice-list-v2",
  element: <InvoiceList2 />
}, {
  path: "create-invoice",
  element: <CreateInvoice />
}, {
  path: "create-invoice-v2",
  element: <CreateInvoice2 />
}, {
  path: "invoice-details",
  element: <InvoiceDetails />
}, {
  path: "invoice-details-v2",
  element: <InvoiceDetails2 />
}, {
  path: "project-v1",
  element: <ProjectV1 />
}, {
  path: "project-v2",
  element: <ProjectV2 />
}, {
  path: "project-v3",
  element: <ProjectV3 />
}, {
  path: "team-member",
  element: <TeamMember />
}, {
  path: "project-details",
  element: <ProjectDetails />
}, {
  path: "shop",
  element: <Shop />
}, {
  path: "shop-v2",
  element: <ShopV2 />
}, {
  path: "cart",
  element: <Cart />
}, {
  path: "payment",
  element: <Payment />
}, {
  path: "checkout",
  element: <Checkout />
}, {
  path: "checkout-v2",
  element: <CheckoutV2 />
}, {
  path: "product-details",
  element: <ProductDetails />
}, {
  path: "billing-address",
  element: <BillingAddress />
}, {
  path: "payment-complete",
  element: <PaymentComplete />
}, {
  path: "payment-complete-v2",
  element: <PaymentCompleteV2 />
}, {
  path: "product-list",
  element: <ProductList />
}, {
  path: "product-grid",
  element: <ProductGrid />
}, {
  path: "create-product",
  element: <CreateProduct />
}, {
  path: "customer-management",
  element: <CustomerManagement />
}, {
  path: "order-management",
  element: <OrderManagement />
}, {
  path: "product-management",
  element: <ProductManagement />
}, {
  path: "chat-v1",
  element: <ChatV1 />
}, {
  path: "chat-v2",
  element: <ChatV2 />
}, {
  path: "pricing",
  element: <Pricing />
}, {
  path: "todo-list",
  element: <TodoList />
}, {
  path: "calender",
  element: <Calendar />
}, {
  path: "about",
  element: <AboutPage />
}, {
  path: "contact",
  element: <ContactPage />
}, {
  path: "pricing",
  element: <PricingPage />
}, {
  path: "privacy",
  element: <PrivacyPage />
}];
export default routes;