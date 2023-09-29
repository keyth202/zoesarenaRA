import duotone from 'icons/duotone';
export const navigations = [{
  type: 'label',
  label: 'Dashboard'
}, {
  name: 'LMS',
  path: '/dashboard',
  icon: duotone.PersonChalkboard
}, {
  name: 'Sales 1',
  path: '/dashboard/sales',
  icon: duotone.BadgeDollar
}, {
  name: 'Sales 2',
  path: '/dashboard/sales-v2',
  icon: duotone.MessagesDollar
}, {
  name: 'Hiring',
  path: '/dashboard/job-management',
  icon: duotone.PersonCircleCheck
}, {
  name: 'Project 1',
  path: '/dashboard/project-management',
  icon: duotone.RectangleCirclePlus
}, {
  name: 'Project 2',
  path: '/dashboard/project-management-v2',
  icon: duotone.DiagramProject
}, {
  name: 'CRM',
  path: '/dashboard/crm',
  icon: duotone.CommentsQuestionCheck,
  badge: {
    value: '30'
  }
}, {
  name: 'SaaS',
  path: '/dashboard/saas',
  icon: duotone.LayerGroup
}, {
  type: 'label',
  label: 'Management'
}, {
  name: 'Profiles',
  icon: duotone.UserProfile,
  children: [{
    name: 'Profile 1',
    path: '/dashboard/profile'
  }, {
    name: 'Profile 2',
    path: '/dashboard/profile-v2'
  }]
}, {
  name: 'Accounts',
  icon: duotone.Accounts,
  children: [{
    name: 'Account 1',
    path: '/dashboard/account'
  }, {
    name: 'Account 2',
    path: '/dashboard/account-v2'
  }]
}, {
  name: 'User & Contact',
  icon: duotone.UserList,
  children: [{
    name: 'Add User',
    path: '/dashboard/add-user'
  }, {
    name: 'User List 1',
    path: '/dashboard/user-list'
  }, {
    name: 'User List 2',
    path: '/dashboard/user-list-v2'
  }, {
    name: 'User Grid 1',
    path: '/dashboard/user-grid'
  }, {
    name: 'User Grid 2',
    path: '/dashboard/user-grid-v2'
  }, {
    name: 'Contact List',
    path: '/dashboard/contact-list'
  }, {
    name: 'Contact Grid',
    path: '/dashboard/contact-grid'
  }]
}, {
  name: 'Invoice',
  icon: duotone.Invoice,
  children: [{
    name: 'Invoice List 1',
    path: '/dashboard/invoice-list'
  }, {
    name: 'Invoice List 2',
    path: '/dashboard/invoice-list-v2'
  }, {
    name: 'Invoice Details 1',
    path: '/dashboard/invoice-details'
  }, {
    name: 'Invoice Details 2',
    path: '/dashboard/invoice-details-v2'
  }, {
    name: 'Create Invoice 1',
    path: '/dashboard/create-invoice'
  }, {
    name: 'Create Invoice 2',
    path: '/dashboard/create-invoice-v2'
  }]
}, {
  name: 'Ecommerce',
  icon: duotone.Ecommerce,
  children: [{
    name: 'Cart',
    path: '/dashboard/cart'
  }, {
    name: 'Payment',
    path: '/dashboard/payment'
  }, {
    name: 'Billing Address',
    path: '/dashboard/billing-address'
  }, {
    name: 'Product Details',
    path: '/dashboard/product-details'
  }, {
    name: 'Shop 1',
    path: '/dashboard/shop'
  }, {
    name: 'Shop 2',
    path: '/dashboard/shop-v2'
  }, {
    name: 'Checkout 1',
    path: '/dashboard/checkout'
  }, {
    name: 'Checkout 2',
    path: '/dashboard/checkout-v2'
  }, {
    name: 'Payment Complete 1',
    path: '/dashboard/payment-complete'
  }, {
    name: 'Payment Complete 2',
    path: '/dashboard/payment-complete-v2'
  }]
}, {
  name: 'Admin Ecommerce',
  icon: duotone.AdminEcommerce,
  children: [{
    name: 'Product List',
    path: '/dashboard/product-list'
  }, {
    name: 'Product Grid',
    path: '/dashboard/product-grid'
  }, {
    name: 'Create Product',
    path: '/dashboard/create-product'
  }, {
    name: 'Order Management',
    path: '/dashboard/order-management'
  }, {
    name: 'Product Management',
    path: '/dashboard/product-management'
  }, {
    name: 'Customer Management',
    path: '/dashboard/customer-management'
  }]
}, {
  name: 'Projects',
  icon: duotone.ProjectChart,
  children: [{
    name: 'Project List 1',
    path: '/dashboard/project-v1'
  }, {
    name: 'Project List 2',
    path: '/dashboard/project-v2'
  }, {
    name: 'Project List 3',
    path: '/dashboard/project-v3'
  }, {
    name: 'Team Member',
    path: '/dashboard/team-member'
  }, {
    name: 'Project Details',
    path: '/dashboard/project-details'
  }]
}, {
  name: 'Data Table',
  icon: duotone.DataTable,
  path: '/dashboard/data-table-v2' // children: [{ name: 'Data Table', path: '/dashboard/data-table-v2' }],

}, {
  type: 'label',
  label: 'Apps'
}, {
  name: 'Todo List',
  icon: duotone.TodoList,
  path: '/dashboard/todo-list'
}, {
  name: 'Calendar',
  icon: duotone.Calender,
  path: '/dashboard/calender'
}, {
  name: 'Chats',
  icon: duotone.Chat,
  children: [{
    name: 'Chat 1',
    path: '/dashboard/chat-v1'
  }, {
    name: 'Chat 2',
    path: '/dashboard/chat-v2'
  }]
}, {
  name: 'Sessions',
  icon: duotone.Session,
  children: [{
    iconText: 'RT',
    name: 'Sign In',
    children: [{
      name: 'Sign In 1',
      path: '/login'
    }, {
      name: 'Sign In 2',
      path: '/login-v2'
    }]
  }, {
    iconText: 'RT',
    name: 'Register',
    children: [{
      name: 'Register 1',
      path: '/register'
    }, {
      name: 'Register 2',
      path: '/register-v2'
    }]
  }, {
    iconText: 'RT',
    name: 'Forget Password',
    children: [{
      name: 'Forget Password 1',
      path: '/forget-password'
    }, {
      name: 'Forget Password 2',
      path: '/forget-password-v2'
    }]
  }, {
    name: 'Two Step Verification',
    path: '/two-step-verification'
  }]
}, {
  name: 'Pages',
  icon: duotone.Pages,
  children: [{
    name: 'Pricing',
    path: '/dashboard/pricing'
  }, {
    name: 'About',
    path: '/dashboard/about'
  }, {
    name: 'Contact',
    path: '/dashboard/contact'
  }, {
    name: 'Privacy',
    path: '/dashboard/privacy'
  }]
}, {
  name: 'Documentation',
  icon: duotone.FileCircleQuestion,
  type: 'extLink',
  path: 'https://uko-react-doc.vercel.app/'
}];