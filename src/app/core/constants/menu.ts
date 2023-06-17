import { MenuItem } from '../models/menu.model';

export class Menu {
  public static pages: MenuItem[] = [
    {
      group: 'Dashboards',
      separator: false,
      items: [
        {
          icon: 'assets/icons/outline/chart-pie.svg',
          label: 'Social Media Stats',
          route: '/dashboard/nfts'
        },        {
          icon: 'assets/icons/outline/download.svg',
          label: 'Business Overview',
          route: '/dashboard/bo',
        },
        {
          icon: 'assets/icons/outline/gift.svg',
          label: 'Customer Profiles',
          route: '/dashboard/cp',
        },
        {
          icon: 'assets/icons/outline/users.svg',
          label: 'Customer Opinions',
          route: '/dashboard/co',
        },
      ],
    },
    // {
    //   group: 'Config',
    //   separator: false,
    //   items: [
    //     {
    //       icon: 'assets/icons/outline/cog.svg',
    //       label: 'Settings',
    //       route: '/settings',
    //     },
    //     {
    //       icon: 'assets/icons/outline/bell.svg',
    //       label: 'Notifications',
    //       route: '/gift',
    //     },
    //     {
    //       icon: 'assets/icons/outline/folder.svg',
    //       label: 'Folders',
    //       route: '/folders',
    //       children: [
    //         { label: 'Current Files', route: '/folders/current-files' },
    //         { label: 'Downloads', route: '/folders/download' },
    //         { label: 'Trash', route: '/folders/trash' },
    //       ],
    //     },
    //   ],
    // },
  ];
}
