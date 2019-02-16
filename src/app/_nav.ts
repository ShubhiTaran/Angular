export interface NavData {
  name?: string,
  url?: string,
  icon?: string,
  badge?: any,
  title?: boolean,
  children?: any,
  variant?: string,
  attributes?: object,
  divider?: boolean,
  class?: string,
}

export const navItems: NavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },


 

  {
    name: 'Profile',
    url: '/profile',
    icon: 'icon-pie-chart'
  },

  {
    name: 'Policies',
    url: '/policies',
    icon: 'icon-pie-chart'
  },

  {
    name: 'Policy_List',
    url: '/policy_list',
    icon: 'icon-pie-chart'
  },

  {
    name: 'Claim_List',
    url: '/claim_list',
    icon: 'icon-pie-chart'
  },
  
 
  
  
  
 
 
];
