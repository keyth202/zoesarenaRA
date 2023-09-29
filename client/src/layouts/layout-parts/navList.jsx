import Icons from "icons/sidebar";
const index = [{
  title: "Dashboards",
  Icon: Icons.DashboardIcon,
  children: [{
    name: "Learning Management",
    path: "/dashboard"
  }, {
    name: "Job Management",
    path: "/dashboard/job-management"
  }, {
    name: "CRM",
    path: "/dashboard/crm"
  }, {
    name: "Sales",
    path: "/dashboard/sales"
  }, {
    name: "Sub Child",
    path: "/dashboard/sub-child",
    subChildren: [{
      name: "Sub Child V1",
      path: "/dashboard/sub-child-v1"
    }, {
      name: "Sub Child V2",
      path: "/dashboard/sub-child-v2"
    }, {
      name: "Sub Child V3",
      path: "/dashboard/sub-child-v3"
    }]
  }, {
    name: "Sales V2",
    path: "/dashboard/sales-v2"
  }, {
    name: "SaaS",
    path: "/dashboard/saas"
  }, {
    name: "Project Management",
    path: "/dashboard/project-management"
  }, {
    name: "Project Management V2",
    path: "/dashboard/project-management-v2"
  }]
}, {
  title: "User & Contact",
  Icon: Icons.UserProfileIcon,
  children: [{
    name: "Add User",
    path: "/dashboard/add-user"
  }, {
    name: "User List",
    path: "/dashboard/user-list"
  }, {
    name: "User List V2",
    path: "/dashboard/user-list-v2"
  }, {
    name: "User Grid",
    path: "/dashboard/user-grid"
  }, {
    name: "User Grid V2",
    path: "/dashboard/user-grid-v2"
  }, {
    name: "Contact List",
    path: "/dashboard/contact-list"
  }, {
    name: "Contact Grid",
    path: "/dashboard/contact-grid"
  }]
}, {
  title: "Invoice",
  Icon: Icons.InvoiceIcon,
  children: [{
    name: "Invoice List",
    path: "/dashboard/invoice-list"
  }, {
    name: "Invoice List V2",
    path: "/dashboard/invoice-list-v2"
  }, {
    name: "Invoice Details",
    path: "/dashboard/invoice-details"
  }, {
    name: "Invoice Details V2",
    path: "/dashboard/invoice-details-v2"
  }, {
    name: "Create Invoice",
    path: "/dashboard/create-invoice"
  }, {
    name: "Create Invoice V2",
    path: "/dashboard/create-invoice-v2"
  }]
}, {
  title: "Ecommerce",
  Icon: Icons.EcommerceIcon,
  children: [{
    name: "Shop",
    path: "/dashboard/shop"
  }, {
    name: "Shop V2",
    path: "/dashboard/shop-v2"
  }, {
    name: "cart",
    path: "/dashboard/cart"
  }, {
    name: "Product Details",
    path: "/dashboard/product-details"
  }, {
    name: "Checkout",
    path: "/dashboard/checkout"
  }, {
    name: "Checkout V2",
    path: "/dashboard/checkout-v2"
  }, {
    name: "Billing Address",
    path: "/dashboard/billing-address"
  }, {
    name: "Payment",
    path: "/dashboard/payment"
  }, {
    name: "Payment Complete",
    path: "/dashboard/payment-complete"
  }, {
    name: "Payment Complete V2",
    path: "/dashboard/payment-complete-v2"
  }]
}, {
  title: "Admin Ecommerce",
  Icon: Icons.AdminEcommerceIcon,
  children: [{
    name: "Product List",
    path: "/dashboard/product-list"
  }, {
    name: "Product Grid",
    path: "/dashboard/product-grid"
  }, {
    name: "Create Product",
    path: "/dashboard/create-product"
  }, {
    name: "Order Management",
    path: "/dashboard/order-management"
  }, {
    name: "Product Management",
    path: "/dashboard/product-management"
  }, {
    name: "Customer Management",
    path: "/dashboard/customer-management"
  }]
}, {
  title: "Profiles",
  Icon: Icons.UserProfileIcon,
  children: [{
    name: "Profile",
    path: "/dashboard/profile"
  }, {
    name: "Profile V2",
    path: "/dashboard/profile-v2"
  }]
}, {
  title: "Projects",
  Icon: Icons.ProjectIcon,
  children: [{
    name: "Project List V1",
    path: "/dashboard/project-v1"
  }, {
    name: "Project List V2",
    path: "/dashboard/project-v2"
  }, {
    name: "Project List V3",
    path: "/dashboard/project-v3"
  }, {
    name: "Team Member",
    path: "/dashboard/team-member"
  }, {
    name: "Project Details",
    path: "/dashboard/project-details"
  }]
}, {
  title: "Accounts",
  Icon: Icons.AccountSettingsIcon,
  children: [{
    name: "Account",
    path: "/dashboard/account"
  }, {
    name: "Account V2",
    path: "/dashboard/account-v2"
  }]
}, {
  title: "DataTable",
  Icon: Icons.DataTableIcon,
  path: "/dashboard/data-table-v2"
}, {
  title: "Pricing",
  Icon: Icons.UserManagementIcon,
  path: "/dashboard/pricing"
}, {
  title: "Todo List",
  Icon: Icons.KanbanIcon,
  path: "/dashboard/todo-list"
}, {
  title: "Calendar",
  Icon: Icons.CalendarIcon,
  path: "/dashboard/calender"
}, {
  title: "Chats",
  Icon: Icons.ChatIcon,
  children: [{
    name: "Chat V1",
    path: "/dashboard/chat-v1"
  }, {
    name: "Chat V2",
    path: "/dashboard/chat-v2"
  }]
}, {
  title: "Sessions",
  Icon: Icons.SessionsIcon,
  children: [{
    name: "Sign In",
    path: "/login"
  }, {
    name: "Sign In V2",
    path: "/login-v2"
  }, {
    name: "Register",
    path: "/register"
  }, {
    name: "Register V2",
    path: "/register-v2"
  }, {
    name: "Forget Password",
    path: "/forget-password"
  }, {
    name: "Forget Password V2",
    path: "/forget-password-v2"
  }, {
    name: "Two Step Verification",
    path: "/two-step-verification"
  }]
}, {
  title: "Pages",
  Icon: Icons.PagesIcon,
  children: [{
    name: "About",
    path: "/dashboard/about"
  }, {
    name: "Contact",
    path: "/dashboard/contact"
  }, {
    name: "Pricing",
    path: "/dashboard/pricing"
  }, {
    name: "Privacy",
    path: "/dashboard/privacy"
  }]
}];
export default index;