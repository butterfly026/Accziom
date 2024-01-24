// created by Makarov --2021/11/01
export const THEMES = {
  LIGHT: 'LIGHT',
  DARK: 'DARK',
  NATURE: 'NATURE',
  TOPBAR: 'TOPBAR',
  CUSTOM: 'CUSTOM'
};

export const PAGE_SIZE = 20;
export const PRODUCT_PAGE_SIZE = 12;
export const ITEM_PAGE_SIZE = 20;
export const INVITATION_PAGE_START = 2;
export const STRIPE_PUBLISHABLE_KEY = 'pk_test_51L7w51D5b37GdQHI8J35rJRRrW909ledxjcCDkWeOqOAY4R4elZ20wWovOBbJctGWxzQkbkOhn950RBMTzMEgEHo005jr4zcWm';
export const WALLET_HISTORY_PAGE_SIZE = 15;
export const MESSAGE_MAX_LENGTH = 250;

export const tenary = (condition: any, then: any, otherwise: any): any => {
  if (condition) {
    return then;
  }

  return otherwise;
};

export const getStreetInfoFromAddr = (addr: string): { streetName: string | undefined, streetNumber: string | undefined } => {
  const streetInfo = addr.split(',').at(0);
  const streetNumber = streetInfo?.split(' ')?.at(0)?.trim();
  const streetName = streetInfo?.replace(`${streetNumber} `, '').trim();
  return { streetName, streetNumber };
};

export const isValidEmail = (custom_str: string): boolean => {
  // eslint-disable-next-line
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(custom_str.toLowerCase());
};

export const TAB_LABEL_ACCZIOM_USERS: string = 'Accziom Users';
export const TAB_LABEL_MY_CONTACTS: string = 'Contacts';
export const TAB_LABEL_PARTNERS: string = 'Partners';
export const TAB_LABEL_ORG_CLIENTS: string = 'Clients';
export const TAB_LABEL_ORG_SUPPLIERS: string = 'Suppliers';
export const TAB_LABEL_ORG_MEMBERS: string = 'Members';
export const TAB_VALUE_ACCZIOM_USERS: string = 'Accziom user';
export const TAB_VALUE_MY_CONTACTS: string = 'contact';
export const TAB_VALUE_PARTNERS: string = 'partner';
export const TAB_VALUE_ORG_CLIENTS: string = 'client';
export const TAB_VALUE_ORG_SUPPLIERS: string = 'supplier';
export const TAB_VALUE_ORG_MEMBERS: string = 'member';

export const INVITE_ITEM_HEIGHT: number = 80;

export const TAB_LABEL_MICROSERVICES: string = 'Services';
export const TAB_LABEL_GOODS: string = 'Goods';
export const TAB_LABEL_ASSETS: string = 'Assets';
export const TAB_VALUE_MICROSERVICES: string = 'services';
export const TAB_VALUE_GOODS: string = 'goods';
export const TAB_VALUE_ASSETS: string = 'assets';

export const DELETE_MESSAGES_TITLE: string = 'Delete Messages';
export const DELETE_MESSAGES_CONTENT: string = 'Are you sure want to permanently delete these messages?';
export const DELETE_ROLE_TITLE: string = 'Delete Role';
export const DELETE_ROLE_CONTENT: string = 'Are you sure want to permanently delete this role and some members assigned to it?';
export const DELETE_TEAM_TITLE: string = 'Delete Team';
export const DELETE_TEAM_CONTENT: string = 'Are you sure want to permanently delete this team?';
export const DELETE_MEMBER_TITLE: string = 'Delete Member';
export const DELETE_MEMBER_CONTENT: string = 'Are you sure want to permanently release this member?';
export const DELETE_CONTACT_TITLE: string = 'Delete Contact';
export const DELETE_CONTACT_CONTENT: string = 'Would you mind remove this contact for sure?';
export const DELETE_THREAD_TITLE: string = 'Archive Thread';
export const DELETE_THREAD_CONTENT: string = 'Are you sure want to permanently archive this thread?';
export const LEAVE_THREAD_TITLE: string = 'Leave Thread';
export const LEAVE_THREAD_CONTENT: string = 'Are you sure want to permanently leave this thread?';
export const LEAVE_WINDOW_TITLE: string = 'Leave Window';
export const LEAVE_WINDOW_CONTENT: string = 'Are you sure continue to leave this window? All of your work in this window will be crashed.';
export const CONFIRM_SCHEDULE_TITLE: string = 'Confirm Schedules';
export const CONFIRM_SCHEDULE_CONTENT: string = 'Are you sure want to accept these schedules?';
export const DELETE_SCHEDULE_TITLE: string = 'Delete Schedules';
export const DELETE_SCHEDULE_CONTENT: string = 'Are you sure want to permanently delete all schedules related to this one?';

export const getInviteEmailSubject = (userName: string): string => {
  const invitorName = userName.length > 0 ? userName : 'Anonymous Accziom-user';
  return `${invitorName} invited you to join Accziom`;
};

export const getProposalSubject = (userName: string): string => (
  `${userName} sent you a proposal`
);

export const getInviteEmailBody = (receiver: string, sender: string): string => {
  const invitorName = sender.length > 0 ? sender : 'Anonymous Accziom-user';
  const receiverName = receiver.length > 0 ? ` ${receiver},` : ',';
  const sentence1 = `Hi${receiverName}\n\n`;
  const sentence2 = `${invitorName} invites you to join us on Accziom - a business collaboration platform. Please click the link below.\n`;
  return `${sentence1}${sentence2}`;
};

export const getConnectEmailSubject = (userName: string): string => {
  const invitorName = userName.length > 0 ? userName : 'Anonymous Accziom-user';
  return `${invitorName} invited partner`;
};

export const getConnectEmailBody = (receiver: string, sender: string): string => {
  const invitorName = sender.length > 0 ? sender : 'Anonymous Accziom-user';
  const receiverName = receiver.length > 0 ? ` ${receiver},` : ',';
  const sentence1 = `Hi${receiverName}\n\n`;
  const sentence2 = 'We sincerely hope to become a trading partner with you in Accziom.\n';
  const sentence3 = 'Thanks for your help.\n\n';
  const sentence4 = `From ${invitorName}.`;
  return `${sentence1}${sentence2}${sentence3}${sentence4}`;
};

export const convertTextToHtml = (srcText: string): string => {
  let previousWasASpace: boolean = false;
  let destText: string = '';
  for (let i = 0; i < srcText.length; i++) {
    const oneLetter = srcText.charAt(i);
    if (oneLetter === ' ') {
      if (previousWasASpace) {
        destText = `${destText}&nbsp;`;
        previousWasASpace = false;
      } else {
        previousWasASpace = true;
      }
    } else {
      previousWasASpace = false;
    }
    switch (oneLetter) {
      case '<':
        destText = `${destText}&lt;`;
        break;
      case '>':
        destText = `${destText}&gt;`;
        break;
      case '&':
        destText = `${destText}&amp;`;
        break;
      case '"':
        destText = `${destText}&quot;`;
        break;
      case '\n':
        destText = `${destText}<br />`;
        break;
      default:
        destText = `${destText}${oneLetter}`;
        break;
    }
  }
  return `<p>${destText}</p>`;
};

export const isNullForHtmlText = (text: string): boolean => (!text || text === convertTextToHtml('') || text === '<p><br></p>');

export const convertHtmlToText = (srcHtml: string): string => {
  const tmp = document.createElement('DIV');
  tmp.innerHTML = srcHtml;
  return tmp.textContent || tmp.innerText || '';
};

export const linkifyText = (inputText: string): string => {
  let replacedText;

  // URLs starting with http://, https://, or ftp://
  // eslint-disable-next-line
  const replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
  replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');

  // URLs starting with "www." (without // before it, or it'd re-link the ones done above).
  // eslint-disable-next-line
  const replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
  replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a>');

  // Change email addresses to mailto:: links.
  // eslint-disable-next-line
  const replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
  replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

  return replacedText;
};

export const contactFields = [
  {
    index: '0',
    label: 'Display Name',
    value: 'displayName',
    needed: true
  },
  {
    index: '1',
    label: 'First Name',
    value: 'firstName',
    needed: false
  },
  {
    index: '2',
    label: 'Middle Name',
    value: 'middleName',
    needed: false
  },
  {
    index: '3',
    label: 'Last Name',
    value: 'lastName',
    needed: false
  },
  {
    index: '4',
    label: 'Legal Name',
    value: 'legalName',
    needed: false
  },
  {
    index: '5',
    label: 'Trading Name',
    value: 'tradingName',
    needed: false
  },
  {
    index: '6',
    label: 'Casual Name',
    value: 'casualName',
    needed: false
  },
  {
    index: '7',
    label: 'Title',
    value: 'title',
    needed: false
  },
  {
    index: '8',
    label: 'Note',
    value: 'note',
    needed: false
  },
  {
    index: '9',
    label: 'Phone',
    value: 'primaryPhone',
    needed: true
  },
  {
    index: '10',
    label: 'Mobile',
    value: 'mobilePhone',
    needed: false
  },
  {
    index: '11',
    label: 'Fax',
    value: 'faxPhone',
    needed: false
  },
  {
    index: '12',
    label: 'Email',
    value: 'primaryEmail',
    needed: true
  },
  {
    index: '13',
    label: 'Tax Number',
    value: 'taxNumber',
    needed: false
  },
  {
    index: '14',
    label: 'Street',
    value: 'street',
    needed: false
  },
  {
    index: '15',
    label: 'Suburb',
    value: 'suburb',
    needed: false
  },
  {
    index: '16',
    label: 'State',
    value: 'state',
    needed: false
  },
  {
    index: '17',
    label: 'Postcode',
    value: 'postcode',
    needed: false
  },
  {
    index: '18',
    label: 'Website',
    value: 'website',
    needed: false
  },
  {
    index: '19',
    label: 'Entity Type',
    value: 'entityType',
    needed: false
  },
  {
    index: '20',
    label: 'ABN',
    value: 'abn',
    needed: false
  },
  {
    index: '21',
    label: 'ACN',
    value: 'acn',
    needed: false
  },
  {
    index: '22',
    label: 'Individual',
    value: 'isIndividual',
    needed: false
  },
];

export const emptyAddress = {
  reason: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  region: '',
  postalCode: '',
  country: ''
};

export const initializedContact = {
  isIndividual: true,
  displayName: '',
  firstName: '',
  middleName: '',
  lastName: '',
  legalName: '',
  tradingName: '',
  casualName: '',
  title: '',
  note: '',
  physicalAddress: { ...emptyAddress, addressType: 'PHYSICAL' },
  postalAddress: { ...emptyAddress, addressType: 'POBOX' },
  additionalAddresses: [],
  addresses: [],
  primaryPhone: '',
  mobilePhone: '',
  faxPhone: '',
  ddiPhone: '',
  additionalPhones: [],
  phoneNumbers: [],
  primaryEmail: '',
  alternativeEmail: '',
  additionalEmails: [],
  emails: [],
  taxNumber: '',
  website: '',
  entityType: 'Trust',
  abn: '',
  acn: ''
};

export const contactSubKeys = [
  'primaryEmail',
  'alternativeEmail',
  'additionalEmails',
  'primaryPhone',
  'mobilePhone',
  'faxPhone',
  'ddiPhone',
  'additionalPhones',
  'physicalAddress',
  'postalAddress',
  'billingAddress',
  'streetAddress',
  'additionalAddresses'
];

export interface DblButtonMessageProps {
  onYesClick?: () => void;
  onNoClick?: () => void;
  messageTitle: string;
  messageContent: string;
  onClose?: (data: boolean) => void;
  noButtonTitle?: string;
  yesButtonTitle?: string;
}

export interface SingButtonMessageProps {
  buttonTitle?: string;
  onOkClick?: any;
  messageContent: string[];
  onClose?: (data: boolean) => void;
}

export const CRYPTO_ETHER = 'Ether';
export const CRYPTO_TETHER = 'Tether';
export const CRYPTO_MRC = 'Merchant';
export const FIAT_AUD = 'AUD';
export const FIAT_USD = 'USD';
export const RATE_PERCENT = 'Percent';

export const tokenData = [
  {
    name: CRYPTO_MRC,
    title: 'Merchant Coin',
    unit: 'MERC',
    icon: '/static/MERc.png',
    color: '#226822'
  },
  {
    name: CRYPTO_ETHER,
    title: 'Ethereum',
    unit: 'ETH',
    icon: '/static/ethereum.png',
    color: '#627EEA'
  },
  {
    name: CRYPTO_TETHER,
    title: 'Tether USD',
    unit: 'USDT',
    icon: '/static/tether-usdt.svg',
    color: '#53AE94'
  }
];

export const cryptoCurrencies = [CRYPTO_ETHER, CRYPTO_TETHER, CRYPTO_MRC];
export const fiatCurrencies = [FIAT_AUD, FIAT_USD];
export const allCurrencyUnits = ['ETH', 'USDT', 'MERC', 'AUD', 'USD'];

export const fiatData = [
  {
    name: FIAT_AUD,
    title: 'Australian Dollar',
    unit: FIAT_AUD,
    icon: '/static/Australia.png'
  },
  {
    name: FIAT_USD,
    title: 'US Dollar',
    unit: FIAT_USD,
    icon: '/static/United-States.png'
  }
];

export const currencyTypeToUnit = (type: string) => (
  cryptoCurrencies.includes(type)
    ? tokenData.find((v) => v.name === type)?.unit
    : type
);

export const currencyUnitToType = (unit: string) => (
  fiatCurrencies.includes(unit)
    ? unit
    : tokenData.find((v) => v.unit === unit)?.name
);

export const defaultRoleInfo = [
  {
    key: 'department',
    value: [
      {
        key: 'account',
        value: [
          {
            key: 'profile',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          },
          {
            key: 'contact',
            clientDefault: true,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          },
          {
            key: 'wallet',
            clientDefault: true,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          }
        ]
      },
      {
        key: 'structure',
        value: [
          {
            key: 'client',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          },
          {
            key: 'firm',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          },
          {
            key: 'member',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          },
          {
            key: 'role',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          },
          {
            key: 'team',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          }
        ]
      }
    ]
  },
  {
    key: 'assignment',
    value: [
      {
        key: 'ticket',
        value: [
          {
            key: 'ticket',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          }
        ]
      },
      {
        key: 'microservice',
        value: [
          {
            key: 'microservice',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          }
        ]
      },
      {
        key: 'asset',
        value: [
          {
            key: 'asset',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          }
        ]
      },
      {
        key: 'file',
        value: [
          {
            key: 'file',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          }
        ]
      },
      {
        key: 'network',
        value: [
          {
            key: 'invitation',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          },
          {
            key: 'referral',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: false,
            memberAdmin: true
          }
        ]
      }
    ]
  },
  {
    key: 'production',
    title: 'Production',
    value: [
      {
        key: 'asset',
        value: [
          {
            key: 'asset',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: true,
            memberAdmin: true
          }
        ]
      },
      {
        key: 'microservice',
        value: [
          {
            key: 'microservice',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: true,
            memberAdmin: true
          }
        ]
      },
      {
        key: 'file',
        value: [
          {
            key: 'file',
            clientDefault: true,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: true,
            memberAdmin: true
          }
        ]
      }
    ]
  },
  {
    key: 'transaction',
    value: [
      {
        key: 'messaging',
        value: [
          {
            key: 'messaging',
            clientDefault: true,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: true,
            memberAdmin: true
          }
        ]
      },
      {
        key: 'marketplace',
        value: [
          {
            key: 'organization',
            clientDefault: true,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: true,
            memberAdmin: true
          },
          {
            key: 'microservice',
            clientDefault: true,
            clientOrgDefault: true,
            memberEnabled: false,
            memberDefault: true,
            memberAdmin: true
          },
          {
            key: 'asset',
            clientDefault: true,
            clientOrgDefault: true,
            memberEnabled: false,
            memberDefault: true,
            memberAdmin: true
          }
        ]
      },
      {
        key: 'ticket',
        value: [
          {
            key: 'demander',
            clientDefault: true,
            clientOrgDefault: true,
            memberEnabled: false,
            memberDefault: true,
            memberAdmin: true
          },
          {
            key: 'supplier',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: true,
            memberAdmin: true
          }
        ]
      },
      {
        key: 'network',
        value: [
          {
            key: 'invitation',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: true,
            memberAdmin: true
          },
          {
            key: 'referral',
            clientDefault: false,
            clientOrgDefault: true,
            memberEnabled: true,
            memberDefault: true,
            memberAdmin: true
          }
        ]
      }
    ]
  }
];

export const getRoleInfo = (type: string): any => {
  let firstItem = {};
  defaultRoleInfo.forEach((roleInfo) => {
    let secondItem = {};
    roleInfo.value.forEach((item) => {
      let thirdItem = {};
      item.value.forEach((checkItem: any) => {
        thirdItem = { ...thirdItem, [checkItem.key]: checkItem[type] };
      });
      secondItem = { ...secondItem, [item.key]: thirdItem };
    });
    firstItem = { ...firstItem, [roleInfo.key]: secondItem };
  });
  firstItem = { ...firstItem, rid: '', oid: '', name: '', level: 1 };
  return firstItem;
};

export const roleInfoData = [
  {
    key: 'department',
    title: 'Department',
    value: [
      {
        key: 'account',
        title: 'Profile',
        value: [
          {
            key: 'profile',
            title: 'Edit Profile',
            href: [
              '/configuration/information',
              '/configuration/upgrade'
            ],
            desc: 'Members can edit the profile and detailed information of organization.'
          },
          {
            key: 'contact',
            title: 'Manage Contacts',
            href: [
              '/management/network/contact'
            ],
            desc: 'Members have full control contacts of organization.'
          },
          {
            key: 'wallet',
            title: 'Create and Restore Wallet',
            href: [
              '/wallet',
              '/configuration/externalplatforms'
            ],
            desc: 'Members can control wallet of organization. They can create wallet, send and view the history of transactions.'
          }
        ]
      },
      {
        key: 'structure',
        title: 'Structure',
        value: [
          {
            key: 'client',
            title: 'Invite Client',
            href: [
              '/management/structure/client'
            ],
            desc: 'This check allows users to be able to invite new clients or remove current clients of organization.'
          },
          {
            key: 'firm',
            title: 'Add Supplier',
            href: [
              '/management/structure/supplier'
            ],
            desc: 'This check allows users to be able to add new supplier or remove current supplier of organization.'
          },
          {
            key: 'member',
            title: 'Recruit Member',
            href: [
              '/management/structure/member'
            ],
            desc: 'This check allows users to be able to add new members or remove current members of organization.'
          },
          {
            key: 'role',
            title: 'Define Member Role',
            href: [
              '/management/structure/role'
            ],
            desc: 'If a user\'s role checked this, the user can add or remove roles of organization.'
          },
          {
            key: 'team',
            title: 'Form Team',
            href: [
              '/management/structure/team'
            ],
            desc: 'This check allows users to have full control of team, they can create a new team, remove a exist team or change the members of a team.'
          }
        ]
      }
    ]
  },
  {
    key: 'assignment',
    title: 'Assignment',
    value: [
      {
        key: 'ticket',
        title: 'Ticket',
        value: [
          {
            key: 'ticket',
            title: 'Assign Ticket Tasks',
            href: [
              '/management/assign/deal'
            ],
            desc: 'Members will be able to assign ticket tasks to teams in organization.'
          }
        ]
      },
      {
        key: 'microservice',
        title: 'Service',
        value: [
          {
            key: 'microservice',
            title: 'Assign Service Management Tasks',
            href: [
              '/management/assign/service'
            ],
            desc: 'Members will be able to assign the owner team of services in organization.'
          }
        ]
      },
      {
        key: 'asset',
        title: 'Asset',
        value: [
          {
            key: 'asset',
            title: 'Assign Asset Management Tasks',
            href: [
              '/management/assign/asset'
            ],
            desc: 'Members will be able to change the owner team of assets in organization.'
          }
        ]
      },
      {
        key: 'file',
        title: 'File',
        value: [
          {
            key: 'file',
            title: 'Assign Filethread Signature Tasks',
            href: [
              '/management/assign/file'
            ],
            desc: 'Members will be able to assign filethreads to teams in organization. Teams assigned filethreads can sign up them.'
          }
        ]
      },
      {
        key: 'network',
        title: 'Network',
        value: [
          {
            key: 'invitation',
            title: 'Assign Invitation Tasks',
            href: [
              '/management/assign/partner'
            ],
            desc: 'If enabled, members are able to set the team that can accept or reject inviting requests as trade partner.'
          },
          {
            key: 'referral',
            title: 'Assign Referral Request Tasks',
            href: [
              '/management/assign/referral'
            ],
            desc: 'If enabled, members can recommend items in their organization\'s marketplace view or trade partners for the referral requests.'
          }
        ]
      }
    ]
  },
  {
    key: 'production',
    title: 'Production',
    value: [
      {
        key: 'asset',
        title: 'Asset',
        value: [
          {
            key: 'asset',
            title: 'Manage Assets',
            href: [
              '/management/asset'
            ],
            desc: 'Members with this item checked will have full control of assets of organization. They can create a new asset, edit or delete existing assets.'
          }
        ]
      },
      {
        key: 'microservice',
        title: 'Service',
        value: [
          {
            key: 'microservice',
            title: 'Manage Services',
            href: [
              '/management/microservice',
              '/proposal'
            ],
            desc: 'Members will have full control of services. They can create a new service, edit or publish services.'
          }
        ]
      },
      {
        key: 'file',
        title: 'File',
        value: [
          {
            key: 'file',
            title: 'Manage and Share Filethreads',
            href: [
              '/management/file'
            ],
            desc: 'Members will have full control of filethreads. They can create a new filethread or share filethreads to others.'
          }
        ]
      }
    ]
  },
  {
    key: 'transaction',
    title: 'Transactions',
    value: [
      {
        key: 'messaging',
        title: 'Messaging',
        value: [
          {
            key: 'messaging',
            title: 'Create Conversations and Invite Participants',
            href: [
              '/communication/external',
              '/communication/internal',
              'https://community.accziom.com'
            ],
            desc: 'Members will be able to create a new conversation or invite new participants to conversations.'
          }
        ]
      },
      {
        key: 'marketplace',
        title: 'Service',
        value: [
          {
            key: 'organization',
            title: 'Join as a client',
            href: [
              '/marketplace/organization'
            ],
            desc: 'Joining as a client of a certain organziation can be enabled.'
          },
          {
            key: 'microservice',
            title: 'Request Services',
            href: [
              '/marketplace/microservice'
            ],
            desc: 'Members can send requests of services in the name of organization.'
          },
          {
            key: 'asset',
            title: 'Buy Assets',
            href: [
              '/marketplace/asset'
            ],
            desc: 'Members can send requests for assets in the name of organization.'
          }
        ]
      },
      {
        key: 'ticket',
        title: 'Ticket',
        value: [
          {
            key: 'demander',
            title: 'Treat Ticket Tasks as a Demander',
            href: [
              '/deal/purchase',
              '/deal/autodebit',
              '/procurement/invoice/payment'
            ],
            desc: 'Members can manage tickets created by this organization or offered to this organization.'
          },
          {
            key: 'supplier',
            title: 'Treat Ticket Tasks as a Supplier',
            href: [
              '/deal/sale',
              '/deal/referral'
            ],
            desc: 'Members can manage tickets offered by organization.'
          }
        ]
      },
      {
        key: 'network',
        title: 'Network',
        value: [
          {
            key: 'invitation',
            title: 'Find and Invite Trading Partners',
            href: [
              '/management/network/findpartner',
              '/management/network/partner'
            ],
            desc: 'If enabled, members can invite their organization\'s trade partners.'
          },
          {
            key: 'referral',
            title: 'Handle Referral Requests to Find Buyers or Sellers',
            href: [
              '/management/network/referral'
            ],
            desc: 'If enabled, members can send requests to their trade partners to find sellers or buyers to broaden marketplace view and expand business.'
          }
        ]
      }
    ]
  }
];

export const OFFERREQUESTED = -2;
export const REOFFERDRAFT = -1;
export const REOFFERED = 0;
export const OFFERDRAFT = 1;
export const OFFERED = 2;
export const OFFERREQUESTDRAFT = 3;
export const DRAFT = 4;
export const REQUESTED = 5;
export const PROGRESSING = 6;
export const REJECTED = 7;
export const ARCHIVED = 8;
export const NEGOTIATION = 9;
export const CUSTOMER_REMOVED = 10;
export const SUPPLIER_REMOVED = 11;

export const TICKET_MODE_NORMAL = 1;
export const TICKET_MODE_PROPOSAL = 2;

// export const requestStatusInfo = [
//   {
//     value: `${OFFERDRAFT}`,
//     label: 'Offering Draft',
//     color: 'primary'
//   },
//   {
//     value: `${OFFERED}`,
//     label: 'Offered',
//     color: 'secondary'
//   },
//   {
//     value: `${REOFFERED}`,
//     label: 'Draft',
//     color: 'primary'
//   },
//   {
//     value: `${DRAFT}`,
//     label: 'Draft',
//     color: 'primary'
//   },
//   {
//     value: `${REQUESTED}`,
//     label: 'Requested',
//     color: 'warning'
//   },
//   {
//     value: `${PROGRESSING}`,
//     label: 'Progressing',
//     color: 'success'
//   },
//   {
//     value: `${REJECTED}`,
//     label: 'Rejected',
//     color: 'error'
//   },
//   {
//     value: `${ARCHIVED}`,
//     label: 'Archived',
//     color: 'primary'
//   }
// ];
export const requestStatus = [
  {
    status: DRAFT,
    label: 'Draft',
    color: '#EEEEEE'
  },
  {
    status: OFFERED,
    label: 'Offered',
    color: '#FFE8A3'
  },
  {
    status: REQUESTED,
    label: 'Requested',
    color: '#8BC34A'
  },
  {
    status: NEGOTIATION,
    label: 'Negotiation',
    color: '#DAE2B6'
  },
  {
    status: PROGRESSING,
    label: 'In Progress',
    color: '#C4E4BC'
  },
  {
    status: REJECTED,
    label: 'Rejected',
    color: '#9fa8da'
  },
  {
    status: ARCHIVED,
    label: 'Completed',
    color: '#FFB9A3'
  }
];

export const NONE_TYPE_ITEM = 0;
export const MICROSERVICE = 1;
export const GOOD = 2;
export const MICROSERVICE_BUNDLE = 3;
export const ASSET = 4;
export const GOOD_BUNDLE = 5;
export const ASSET_BUNDLE = 6;
export const CHAT = 7;
export const CONTRACT = 8;
export const FILETHREAD = 9;
export const TICKET = 10;
export const INVOICE = 11;
export const RFQ = 12;
export const PURCHASEORDER = 13;
export const FRIEND = 14;
export const REFERRAL = 15;
export const SCHEDULE = 16;
export const PURCHASEDITEM = 17;
export const BS_FAVORITE = 18;
export const BS_SEARCH_HISTORY = 19;
export const INFORMATION = 20;
export const ORGJOIN = 21;
export const ORGANIZATION = 22;

export const POPOVER_TYPE_CONTACT = 1;
export const POPOVER_TYPE_CLIENT = 2;
export const POPOVER_TYPE_ORG = 4;

export const itemTypeInfo = [
  {
    value: `${NONE_TYPE_ITEM}`,
    label: 'None',
    color: 'error',
    rColor: '#9c27b0'
  },
  {
    value: `${MICROSERVICE}`,
    label: 'Service',
    color: 'warning',
    rColor: '#3f51b5'
  },
  {
    value: `${GOOD}`,
    label: 'Good',
    color: 'primary',
    rColor: '#ff5722'
  },
  {
    value: `${MICROSERVICE_BUNDLE}`,
    label: 'Service Bundle',
    color: 'warning',
    rColor: '#009688'
  },
  {
    value: `${ASSET}`,
    label: 'Asset',
    color: 'secondary',
    rColor: '#ef6c00'
  },
  {
    value: `${GOOD_BUNDLE}`,
    label: 'Good Bundle',
    color: 'primary',
    rColor: '#00e676'
  },
  {
    value: `${ASSET_BUNDLE}`,
    label: 'Asset Bundle',
    color: 'secondary',
    rColor: '#9e9d24'
  }
];

export const null2empty = (value: any) => {
  if (value === null || value === undefined) return '';
  return value;
};

export const hasFilledChild = (collected: any): boolean => (
  Object.keys(collected).some((key) => {
    if (Array.isArray(collected[key].body)) return collected[key].some((repeat: any) => hasFilledChild(repeat.body));
    return collected[key].value !== 'No' && collected[key].value !== false;
  })
);

export const calcTotalPrice = (collected: any, b: number): number => {
  let ret: number = b;
  Object.keys(collected).forEach((key) => {
    if (Array.isArray(collected[key].value)) {
      collected[key].value.forEach((repeat: any) => {
        ret += calcTotalPrice(repeat.body, 0);
      });
    }
    if ((Array.isArray(collected[key].value) && hasFilledChild(collected[key].value)) || (!Array.isArray(collected[key].value) && collected[key].value !== 'No' && collected[key].value !== false)) {
      if (collected[key].cost) ret += parseFloat(`${collected[key].cost}`);
      if (collected[key].child) ret += calcTotalPrice(collected[key].child, 0);
      if (collected[key].untitled) ret += calcTotalPrice(collected[key].untitled, 0);
    }
  });
  return ret;
};

export const REQUEST_ONE_OFF = 0;
export const REQUEST_CUSTOM = 1;
export const REQUEST_FINANCIAL = 2;

export const ACCZIOM_NONE = 0;
export const ACCZIOM_USER = 1;
export const ACCZIOM_ORG = 2;
export const ACCZIOM_TEAM = 3;
export const ACCZIOM_MEMBER = 4;
export const ACCZIOM_CLIENT = 5;
export const ACCZIOM_CLIENT_ORG = 6;
export const ACCZIOM_SUPPLIER = 7;
export const ACCZIOM_CATEGORY = 8;
export const ACCZIOM_ALL = 9;
export const ORG_TYPES = [ACCZIOM_ORG, ACCZIOM_CLIENT_ORG, ACCZIOM_SUPPLIER];
export const INDIVIDUAL_TYPES = [ACCZIOM_USER, ACCZIOM_MEMBER, ACCZIOM_CLIENT];

export const getUserIdByType = (body: any): string => {
  if (body) {
    if (INDIVIDUAL_TYPES.includes(body.type)) return body.uid;
    if (ORG_TYPES.includes(body.type)) return body.oid;
  }
  return '';
};

export const getUserTypeByType = (body: any): number => {
  if (body) {
    if (ORG_TYPES.includes(body.type)) return ACCZIOM_ORG;
    return body.type;
  }
  return ACCZIOM_NONE;
};

export const getUserInfoByType = (body: any): any => ({ id: getUserIdByType(body), type: getUserTypeByType(body) });

export const USUAL_CHAT_THREAD = 0;
export const INNERORG_CHAT_THREAD = 2;
export const FRIEND_CHAT_THREAD = 5;
export const REFERRAL_CHAT_THREAD = 6;
export const COMMUNITY_CHAT_THREAD = 7;

export const getPrefix = (type: number): string => {
  let strPrefix: string = '';
  switch (type) {
    case MICROSERVICE:
      strPrefix = 'Request ';
      break;
    case MICROSERVICE_BUNDLE:
    case ASSET_BUNDLE:
      strPrefix = 'Bundle ';
      break;
    case ASSET:
      strPrefix = 'Asset ';
      break;
    case GOOD:
      strPrefix = 'Good ';
      break;
    default:
      break;
  }
  return strPrefix;
};

export const GOOD_PAGE_SIZE = 12;

export const TEMPLATE_DRAFT = 0;
export const TEMPLATE_PUBLISHED = 1;

export const NO_MEMBER_MODE = 0;
export const CHAT_MEMBER_MODE = 1;
export const ALL_MEMBER_MODE = 2;

export const NO_USER_MODE = 0;
export const ONLY_USER_MODE = 1;
export const ONLY_ORG_MODE = 2;
export const BOTH_USER_ORG_MODE = 3;

export const NO_TITLE_FIRSTMSG = 0;
export const ONLY_TITLE = 1;
export const ONLY_FIRSTMSG = 2;
export const BOTH_TITLE_FIRSTMSG = 3;

export const PRICE_PER_UNIT = 0;
export const TOTAL_PRICE = 1;
export const priceOptionModel = [
  {
    value: `${PRICE_PER_UNIT}`,
    label: 'Price Per Unit'
  },
  {
    value: `${TOTAL_PRICE}`,
    label: 'Total Price'
  }
];

export const DEFAULT_NOTIFICATION_TIME = -1;

export const NOTIFICATION_TIME_LIST = [
  {
    value: '-1',
    label: 'Never'
  },
  {
    value: '15',
    label: '15 minutes',
  },
  {
    value: '30',
    label: 'Half hour',
  },
  {
    value: '60',
    label: '1 hour'
  },
  {
    value: '1440',
    label: '1 day'
  }
];

export const FINANCIAL_ASSET = 0;
export const PLANT_EQUIPMENT = 1;
export const LAND_BUILDING = 2;
export const INTANGIBLE_ASSET = 3;
export const MOTOR_VEHICLE = 4;
export const assetTypeModel = [
  {
    value: `${FINANCIAL_ASSET}`,
    label: 'Financial Asset',
    href: 'financial'
  },
  {
    value: `${PLANT_EQUIPMENT}`,
    label: 'Plant & Equipment',
    href: 'plant-equipment'
  },
  {
    value: `${LAND_BUILDING}`,
    label: 'Land & Building',
    href: 'land-building'
  },
  {
    value: `${INTANGIBLE_ASSET}`,
    label: 'Intangible Asset',
    href: 'intangible'
  },
  {
    value: `${MOTOR_VEHICLE}`,
    label: 'Motor Vehicle',
    href: 'motor'
  }
];

export const TODO_RESOURCE_COMMENT = 0;
export const TODO_RESOURCE_ATTACHMENT = 1;

export const DELIVERY_MODE = 0;
export const PAYMENT_MODE = 1;
export const REFERRAL_MODE = 2;

export const partsOfContract = {
  delivery: DELIVERY_MODE,
  payment: PAYMENT_MODE
};

export const TRADE_CONTRACT = 0;
export const FINANCE_CONTRACT = 1;
export const contractTypeModel = [
  {
    value: `${TRADE_CONTRACT}`,
    label: 'Trade Contract'
  },
  {
    value: `${FINANCE_CONTRACT}`,
    label: 'Finance Contract'
  }
];

export const UPFRONT_PAYMENT = 0;
export const COMPLETION_PAYMENT = 1;
export const TWOTIME_PAYMENT = 2;
export const PERIOD_PAYMENT = 3;
export const DELIVERY_PAYMENT = 4;
export const INTEREST = 5;
export const GST = 6;

export const SIMPLE_INTEREST_TYPE = 0;
export const COMPOUND_INTEREST_TYPE = 1;
export const interestTypeModel = [
  {
    value: `${SIMPLE_INTEREST_TYPE}`,
    label: 'Simple Interest'
  },
  {
    value: `${COMPOUND_INTEREST_TYPE}`,
    label: 'Compound Interest'
  }
];

export const ON_COMMENCEMENT = 0;
export const ON_COMPLETION = 1;
export const paymentPointDelivery = [
  {
    value: `${ON_COMMENCEMENT}`,
    label: 'commencement'
  },
  {
    value: `${ON_COMPLETION}`,
    label: 'completion'
  }
];

export const NOT_REQUIRED_PO = 0;
export const REQUIRED_PO = 1;

export const CONTRACT_MODE = 0;
export const PURCHASE_ORDER_MODE = 1;
export const scheduleFromModel = [
  {
    value: `${CONTRACT_MODE}`,
    label: 'Contract'
  },
  {
    value: `${PURCHASE_ORDER_MODE}`,
    label: 'Purchase Order'
  }
];

export const FROM_NONE = 0;
export const FROM_PROPOSAL = 1;
export const FROM_REQUEST = 2;

export const BUNDLE_GOLD_LIST = 0;
export const BUNDLE_SILVER_LIST = 1;
export const BUNDLE_BRONZE_LIST = 2;

export const SERVICE_BUNDLE_TYPES = [BUNDLE_BRONZE_LIST, BUNDLE_SILVER_LIST, BUNDLE_GOLD_LIST];

export const DAY_MILISECONDS = 86400000;
export const MINUTE_MILISECONDS = 60000;

export const PAY_CREDIT_CARD = 1;
export const PAY_DIRECT_DEBIT = 2;

export const PAY_STRIPE = 1;
export const PAY_TEXT_STRIPE = 'stripe';
export const PAY_BIZCORE = 2;
export const PAY_TEXT_BIZCORE = 'bizcore';
export const PAY_CRYPTOCURRENCY = 3;
export const PAY_TEXT_CRYPTOCURRENCY = 'cryptocurrency';

export const fullTags = [
  {
    type: 'Apps & functions',
    tags: [
      'Accounting systems',
      'Bills & expenses',
      'CRM systems',
      'System Conversion',
      'Custom Integration',
      'Debtor tracking',
      'Ecommerce',
      'Financial services',
      'Inventory',
      'Invoicing & jobs',
      'Payments',
      'Payroll HR',
      'Point of sale',
      'Practice management',
      'Reporting',
      'Time tracking',
      'Document systems'
    ],
    color: '#4caf50'
  },
  {
    type: 'Tax Tags',
    tags: [
      'Goods & services tax',
      'Fuel tax',
      'Income tax',
      'Luxury car tax',
      'Wine equalization tax',
      'Payroll tax',
      'Fringe Benefits Tax'
    ],
    color: '#ff9800'
  },
  {
    type: 'Activities',
    tags: [
      'Bookkeeping',
      'Payroll',
      'Accounting',
      'Advisory',
      'Corporate Affairs'
    ],
    color: '#9c27b0'
  },
  {
    type: 'Industry tags',
    tags: [
      'Agriculture, Forestry and Fishing',
      'Mining',
      'Manufacturing',
      'Electricity, Gas, Water and Waste Services',
      'Construction',
      'Wholesale Trade',
      'Retail Trade',
      'Accommodation and Food Services',
      'Transport, Postal and Warehousing',
      'Information Media and Telecommunications',
      'Financial and Insurance Services',
      'Rental, Hiring and Real Estate Services',
      'Professional, Scientific and Technical Services',
      'Administrative and Support Services',
      'Public Administration and Safety',
      'Education and Training',
      'Health Care and Social Assistance',
      'Arts and Recreation Services'
    ],
    color: '#673ab7'
  }
];

export const STRIPE_FEE = 50;
export const STRIPE_MAX_CHARGE = 99999999;

export const LENGTH_MINUTE = 0;
export const LENGTH_HOUR = 1;
export const LENGTH_DAY = 2;
export const LENGTH_WEEK = 3;
export const LENGTH_FORTNIGHT = 4;
export const LENGTH_MONTH = 5;
export const LENGTH_YEAR = 6;

export const periodLengthList = [
  {
    type: LENGTH_MINUTE,
    text: 'Minute(s)',
    adverb: 'Minutely',
    minutes: 1,
    days: 1
  },
  {
    type: LENGTH_HOUR,
    text: 'Hour(s)',
    adverb: 'Hourly',
    minutes: 60,
    days: 1
  },
  {
    type: LENGTH_DAY,
    text: 'Day(s)',
    adverb: 'Daily',
    minutes: 60 * 24,
    days: 1
  },
  {
    type: LENGTH_WEEK,
    text: 'Week(s)',
    adverb: 'Weekly',
    minutes: 60 * 24 * 7,
    days: 7
  },
  {
    type: LENGTH_FORTNIGHT,
    text: 'Fortnight(s)',
    adverb: 'Fortnightly',
    minutes: 60 * 24 * 14,
    days: 14
  },
  {
    type: LENGTH_MONTH,
    text: 'Month(s)',
    adverb: 'Monthly',
    minutes: 60 * 24 * 30,
    days: 30
  },
  {
    type: LENGTH_YEAR,
    text: 'Year(s)',
    adverb: 'Annually',
    minutes: 60 * 24 * 365,
    days: 365
  }
];

export const SCHEDULE_OFF = 0;
export const SCHEDULE_ON = 1;

export const MRC_DEPOSIT = 'deposit';
export const MRC_WITHDRAW = 'withdraw';
export const MRC_BALANCE = 'balance';
export const MRC_HISTORY = 'history';
export const MRC_NFT = 'nft';
export const MRC_INFO = 'info';
export const MRC_SPEND = 'spend';
export const MRC_TRANSFER = 'transfer';

// procurement status string
export const STATUS_TEXT_RESPONDED = 'Responded'; // for rfq, proposal
export const STATUS_TEXT_PROGRESSING = 'Progressing'; // for rfq, proposal
export const STATUS_TEXT_AWAITING = 'Awaiting'; // for rfq, proposal
export const STATUS_TEXT_CLOSED = 'Closed'; // for rfq, proposal
export const STATUS_TEXT_PENDING = 'Pending'; // for purchase order
export const STATUS_TEXT_ACCEPTED = 'Accepted'; // for purchase order
export const STATUS_TEXT_SUBMITTED = 'Submitted'; // for rfq, proposal, contract, schedule, invoice
export const STATUS_TEXT_CUSTOMER_SIGNED = 'Customer-Signed'; // for contract
export const STATUS_TEXT_SUPPLIER_SIGNED = 'Supplier-Signed'; // for contract
export const STATUS_TEXT_CUSTOMER_CONFIRMED = 'Customer-Confirmed'; // for schedule
export const STATUS_TEXT_SUPPLIER_CONFIRMED = 'Supplier-Confirmed'; // for schedule
export const STATUS_TEXT_ACTIVATED = 'Activated'; // for contract, schedule
export const STATUS_TEXT_POSTED = 'Posted'; // for invoice
export const STATUS_TEXT_WAITING = 'Waiting'; // for invoice
export const STATUS_TEXT_PAID = 'Paid'; // for invoice
export const STATUS_TEXT_CONFIRMED = 'Confirmed'; // for acceptence note
export const STATUS_TEXT_PUBLISHED = 'published';
export const STATUS_TEXT_READY = 'ready';
export const STATUS_TEXT_EDIT = 'in edit';
export const STATUS_TEXT_REMOVED = 'removed';

export const CUSTOMER_PARAM_TYPE_EMAIL = 1;
export const CUSTOMER_PARAM_TYPE_CONTACT = 2;
export const CUSTOMER_PARAM_TYPE_CLIENT = 3;

export const STATUS_PENDING = 0;
export const STATUS_ACTIVATED = 1;
export const STATUS_DECLINED = 2;
export const STATUS_DEACTIVATED = 3;
export const STATUS_RECOMMENDED = 4;
export const STATUS_REJECTED = 5;
export const STATUS_NORMAL = 6;
export const STATUS_LOANED = 7;
export const STATUS_LEASED = 8;
export const STATUS_BROKEN = 9;
export const STATUS_EXPIRED = 10;
export const STATUS_COMPLETED = 11;
export const STATUS_REMOVED = 12;
export const STATUS_AVAILABLE = 13;
export const STATUS_RUNNING = 14;
export const STATUS_PENDING_TO_ORG = 15;
export const STATUS_ALL = 16;

export const TEMPLATE_TYPE_SHARED = 1;
export const TEMPLATE_TYPE_DRAFT = 0;

export const itemStatusInfo = [
  {
    value: `${STATUS_NORMAL}`,
    label: 'Normal',
    color: 'success'
  },
  {
    value: `${STATUS_LOANED}`,
    label: 'Loaned',
    color: 'warning'
  },
  {
    value: `${STATUS_LEASED}`,
    label: 'Leased',
    color: 'primary'
  },
  {
    value: `${STATUS_BROKEN}`,
    label: 'Broken',
    color: 'secondary'
  },
  {
    value: `${STATUS_EXPIRED}`,
    label: 'Expired',
    color: 'error'
  }
];

export const BUYER_TO_SELLER = 1;
export const SELLER_TO_BUYER = 2;

export const ITEM_VIEW = 1;

export const TEAM_ITEM_MODE = 1;
export const ORG_ITEM_MODE = 2;
export const REFERED_ITEM_MODE = 3;

export const ONLY_ITEM_MODE = 1;
export const ONLY_BUNDLE_MODE = 2;
export const BOTH_ITEM_BUNDLE_MODE = 3;

export const FIND_SELLER_TYPE = 1;
export const FIND_BUYER_TYPE = 2;
export const findRefereeTypes = [
  {
    value: `${FIND_SELLER_TYPE}`,
    label: 'seller'
  },
  {
    value: `${FIND_BUYER_TYPE}`,
    label: 'buyer'
  }
];

export const ALL_USER_MODE = 0;
export const ONLY_PARTNER_MODE = 1;
export const PARTNER_ME_MODE = 2;

export const serviceStatusList = [
  {
    id: STATUS_TEXT_PUBLISHED,
    value: 'Public',
    color: '#5A91D4'
  },
  {
    id: STATUS_TEXT_READY,
    value: 'Ready',
    color: '#4CAF50'
  },
  {
    id: STATUS_TEXT_EDIT,
    value: 'Draft',
    color: '#FF9800'
  },
  {
    id: STATUS_TEXT_REMOVED,
    value: 'Discontinued',
    color: '#FFADBC'
  }
];

export const activityTypes = [
  {
    href: '/management/file/progress',
    subType: 'created',
    type: FILETHREAD
  },
  {
    href: '/deal/purchase',
    subType: 'offered',
    type: TICKET
  },
  {
    href: '/deal/sale',
    subType: 'requested',
    type: TICKET
  },
  {
    href: '/procurement/invoice/payment',
    subType: 'payment',
    type: INVOICE
  },
  {
    href: '/management/network/partner',
    subType: 'received',
    type: FRIEND
  },
  {
    href: '/management/network/referral',
    subType: '',
    type: REFERRAL
  },
  {
    href: '/management/structure/client',
    subType: 'client',
    type: ORGJOIN
  },
  {
    href: '/management/structure/supplier',
    subType: 'client',
    type: ORGJOIN
  },
  {
    href: '/management/structure/member',
    subType: 'member',
    type: ORGJOIN
  }
];

export const HPCALC_TOOL_DLG = 1;
export const SUPERANNUATION_TOOL_DLG = 2;
export const PROFILING_TOOL_DLG = 3;
// const ANZSIC_TOOL_DLG = 4;
export const HPANAL_TOOL_DLG = 5;

export const paymentPlatformTypes = [
  {
    title: 'Fiat Currency Payment Platform Options',
    items: [
      {
        title: 'Allow Credit Card Payments by Stripe',
        paymentMethod: PAY_CREDIT_CARD,
        paymentTool: PAY_STRIPE
      },
      {
        title: 'Allow Direct Debit Payments by Stripe',
        paymentMethod: PAY_DIRECT_DEBIT,
        paymentTool: PAY_STRIPE
      },
      {
        title: 'Allow Credit Card Payments by Bizcore',
        paymentMethod: PAY_CREDIT_CARD,
        paymentTool: PAY_BIZCORE
      },
      {
        title: 'Allow Direct Debit Payments by Bizcore',
        paymentMethod: PAY_DIRECT_DEBIT,
        paymentTool: PAY_BIZCORE
      }
    ]
  },
  {
    title: 'Cryptocurrency Payment Platform Options',
    items: [
      {
        title: 'Allow Manual Payoff by Cryptocurrency Payment System',
        paymentMethod: PAY_CREDIT_CARD,
        paymentTool: PAY_CRYPTOCURRENCY
      },
      {
        title: 'Allow Automatic Payoff by Cryptocurrency Payment System',
        paymentMethod: PAY_DIRECT_DEBIT,
        paymentTool: PAY_CRYPTOCURRENCY
      }
    ]
  }
];

export const UI_PADDING = {
  sm: '140px',
  md: '140px',
  lg: 'calc(3% + 140px)',
  xl: 'calc(8% + 140px)'
};

export const NAVBAR_HEIGHT = 72;
export const SEARCHBAR_HEIGHT = 72;
export const NAVBUTTON_WIDTH = 500;
export const SIDEBAR_WIDTH = 20;

export function CopyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

export const IPFS_UPLOAD = 1;
export const AWS_UPLOAD = 2;

export const VERIFY_NONE = 0;
export const VERIFY_PROGRESSING = 1;
export const VERIFY_COMPLETED = 2;

export const SERVICE_REQUEST_STEP_INFOCOLLECT = 0;
export const SERVICE_REQUEST_STEP_CONFIRMED = 1;
export const SERVICE_REQUEST_STEP_COMPLETED = 2;

export const SERVICE_OFFER_STEP_INFOCOLLECT = 0;
export const SERVICE_OFFER_STEP_SELECT_CUSTOMERS = 1;

export const SORT_OPTIONS = [
  { label: 'Recently Added', value: 'Descending' },
  { label: 'Recently Updated', value: 'Updated' },
  { label: 'Name', value: 'Ascending' }
];

export const MSG_NONE = 0;
export const MSG_REMOVE = 1;
export const MSG_REMOVE_WITH_OTHER = 2;
export const MSG_REJECT = 3;
export const MSG_SUPPRESS = 4;
export const MSG_NOT_REMOVE = 5;
export const MSG_LEAVE = 6;
export const MSG_ARCHIVE = 7;
export const MSG_NAVIGATE = 8;
export const MSG_REJECT_FOLLOWUP = 9;
export const MSG_PAYWARNING = 10;
export const MSG_LEVEL_UP = 11;
export const MSG_NOT_INVITE = 12;

export const SUBMIT_NONE = 0;
export const SUBMIT_TO_READY = 1;
export const SUBMIT_PUBLISH = 2;
export const SUBMIT_DUPLICATE = 3;
export const SUBMIT_REMOVE = 4;
export const SUBMIT_SIGN = 5;
export const SUBMIT_PURCHASE = 6;
export const SUBMIT_REJECT = 7;
export const SUBMIT_DOWNLOAD = 8;
export const SUBMIT_CREATE = 9;
export const SUBMIT_INVITE = 10;
export const SUBMIT_AGAIN = 11;
export const SUBMIT_ARCHIVE = 12;
export const SUBMIT_REJECT_FOLLOWUP = 13;
export const SUBMIT_SUPPRESS = 14;
export const SUBMIT_REGISTER = 15;
export const SUBMIT_RETURN = 16;
export const SUBMIT_CHAT = 17;
export const SUBMIT_POSTPONE = 18;
export const SUBMIT_CHANGE = 19;
export const SUBMIT_ACCEPT = 20;
export const SUBMIT_ACCEPT_FOLLOWUP = 21;

export const SHOW_NONE = 0;
export const SHOW_DETAIL = 1;
export const SHOW_VERIFY = 2;
export const SHOW_SHARE = 3;
export const SHOW_INVITE_MSG = 4;
export const SHOW_ADD_ITEM = 5;
export const SHOW_INVITE_USER = 6;

export const BEFORE_RESULT = -1;
export const RESULT_FALSE = 0;
export const RESULT_TRUE = 1;

export const etherscanEndpoint = 'https://goerli.etherscan.io';

export const businessScales = [{
  label: 'Tiny (1~2)',
  value: '2'
}, {
  label: 'Small (3~10)',
  value: '10'
}, {
  label: 'Medium (11~100)',
  value: '100'
}, {
  label: 'Large (101~1000)',
  value: '1000'
}, {
  label: 'Enterprise (1000+)',
  value: '9999'
}];

export const ASSET_PURPOSE_KEEP = 0;
export const ASSET_PURPOSE_SALE = 1;
export const ASSET_PURPOSE_LEASE = 2;

export const assetPurposeList = [
  {
    id: ASSET_PURPOSE_KEEP,
    value: 'Keep'
  },
  {
    id: ASSET_PURPOSE_SALE,
    value: 'Sale'
  },
  {
    id: ASSET_PURPOSE_LEASE,
    value: 'Lease'
  }
];

export const assetStatusList = [
  {
    id: STATUS_AVAILABLE,
    value: 'Available',
    color: '#4CAF50'
  },
  {
    id: STATUS_LEASED,
    value: 'Leased',
    color: '#F44336'
  },
  {
    id: STATUS_LOANED,
    value: 'Loaned',
    color: '#FF9800'
  }
];

export const RESOURCE_FILE_TYPE_IMAGE = 0;
export const RESOURCE_FILE_TYPE_VIDEO = 1;
export const RESOURCE_FILE_TYPE_FILE = 2;

export const ACTION_TYPE_CREATE = 1;
export const ACTION_TYPE_REMOVE = 2;
export const ACTION_TYPE_INCREASE = 3;
export const ACTION_TYPE_DECREASE = 4;
export const ACTION_TYPE_SELL = 5;
export const ACTION_TYPE_PURCHASE = 6;
export const ACTION_TYPE_LEASE = 7;
export const ACTION_TYPE_LOAN = 8;
export const ACTION_TYPE_POSTPONE = 9;
export const ACTION_TYPE_RESEND = 10;

export const leaseStatusList = [
  {
    id: STATUS_PENDING,
    color: '#f381a7',
    text: {
      [ACTION_TYPE_LEASE]: 'In Lease',
      [ACTION_TYPE_LOAN]: 'In Loan'
    }
  },
  {
    id: STATUS_COMPLETED,
    color: '#4dabf5',
    text: {
      [ACTION_TYPE_LEASE]: 'Completed',
      [ACTION_TYPE_LOAN]: 'Completed'
    }
  }
];

export const BANNER_RATIO = '4 / 1';

export const PLATFORM_QBO = 'QBO';
export const PLATFORM_XERO = 'XERO';

export const INVITATION_EXPIRE_DAY = 30;

export const SELECT_PARTNER_ORG_MODE = 1;
export const SELECT_PARTNER_CLIENT_MODE = 2;
export const SELECT_PARTNER_PARTNER_MODE = 3;
export const SELECT_PARTNER_MEMBER_MODE = 4;
export const SELECT_PARTNER_SUPPLIER_MODE = 5;

export const referralStatusList = [
  {
    id: STATUS_PENDING,
    value: 'Pending',
    color: '#FF9800'
  },
  {
    id: STATUS_ACTIVATED,
    value: 'Activated',
    color: '#4CAF50'
  },
  {
    id: STATUS_RUNNING,
    value: 'Running',
    color: '#1695ea'
  },
  {
    id: STATUS_EXPIRED,
    value: 'Expired',
    color: '#F44336'
  },
  {
    id: STATUS_DECLINED,
    value: 'Declined',
    color: '#898AA6'
  }
];

export const NONE_BUTTON_MODE = 0;
export const FUNCTION_BUTTON_MODE = 1;
export const MORE_BUTTON_MODE = 2;

export const REQUIRE_NONE_MODE = 0;
export const REQUIRE_NOT_AUTH_MODE = 1;
export const REQUIRE_AUTH_MODE = 2;

export const memberStatusList = [
  {
    id: STATUS_PENDING,
    possibleIds: [STATUS_PENDING, STATUS_PENDING_TO_ORG],
    value: 'Pending',
    color: '#898aa6'
  },
  {
    id: STATUS_DECLINED,
    possibleIds: [STATUS_DECLINED],
    value: 'Denied',
    color: '#ff8a65'
  },
  {
    id: STATUS_ACTIVATED,
    possibleIds: [STATUS_ACTIVATED],
    value: 'Active',
    color: '#d4f6cc'
  }
];

export const BACKGROUND_DEEP = '#428ed3';
export const BUTTON_BLUE_COLOR = '#2895EB';
export const HEADING_BLUE_COLOR = '#146EB6';
export const DARK_GRAY = '#333333';
export const BACKGROUND_GRAY = '#FAFAFA';
export const GREEN_LIGHT_COLOR = '#0FA631';
export const RED_COLOR = '#CA1414';
export const BACKGROUND_BTN_ACTIVE_COLOR = '#1695ea';
export const BACKGROUND_BTN_INACTIVE_COLOR = '#1695ea';
export const PAPER_COLOR = '#FAFAFA';
export const PRIMARY_COLOR = '#1695ea';

export const defaultTeamData = [
  'Sales',
  'Advertising / Marketing',
  'Operations',
  'Software Development / Engineering',
  'Partnerships',
  'Legal',
  'Finance / Accounting'
];

export const scheduleDiagramStyle = {
  dayWidth: 21,
  lineHeight: 30,
  timeHeight: 30,
  titleWidth: 200,
  barPadding: 5,
  barBorderRadius: 8,
  borderColor: '#eeeeee',
  barColor: '#1695eaa0',
  weekLineColor: '#aaaaaa',
  weekendColor: '#fafafa',
  detailTextColor: '#303030',
  payColor: '#d03030',
  paidColor: '#4CB050',
  payWaitingColor: '#FCC02E'
};

export const SIGNTYPE_SUPPLIER = 1;
export const SIGNTYPE_DEMANDER = 2;

export const IDLE_DURATION_MINUTES = 120;
export const CHECK_INTERVAL_MINUTES = 5;

export const NO_TEAMS_TEXT = 'no-teams';

export const USER_TO_ACCZIOM = 1;
export const ACCZIOM_TO_USER = 2;

export const ACTIVITY_APPRISING = 1;
export const ACTIVITY_CHAT = 2;
export const ACTIVITY_FEEDBACK = 3;

export const CREATE_ORG_REFERRAL_FEE_RATE = 15;

export const ACCZIOM_ADMIN_ORG_ID = 'accziom-admin-organization-id';
export const ACCZIOM_ORG_FEE_REFERRAL_ID = 'organization-fee-referral-id';
export const ACCZIOM_ADMIN_ORG_TEAM_ID = 'accziom-admin-organization-team-id';
export const ORG_REFERRAL_FEE_RATE = 15;

export const ORG_SCALE_NULL = 0;
export const ORG_SCALE_TINY = 3;
export const ORG_SCALE_SMALL = 10;
export const ORG_SCALE_MEDIUM = 100;
export const ORG_SCALE_LARGE = 1000;
export const ORG_SCALE_ENTERPRISE = 9999;

export const scaleCardDetail = [
  {
    type: 'free',
    value: `${ORG_SCALE_TINY}`,
    price: 0,
    // priceBgColor: '#1695ea00',
    // priceColor: 'primary.main',
    title: 'Free',
    partnerCount: '1 ~ 2',
    // desc: 'No payment needed. Completely Free! Organization can have up to 5 customers and 5 members, and can verify up to 5 times with greenID platform'
  },
  {
    type: 'spark',
    value: `${ORG_SCALE_SMALL}`,
    price: 10,
    extra_cost_per_one: 3,
    // priceBgColor: '#1695ea40',
    // priceColor: 'primary.main',
    title: 'Spark',
    partnerCount: '3 ~ 10',
    // desc: 'A small business is generally considered to be a company with fewer than 100 employees and an annual revenue of $38.5 million or less.'
  },
  {
    type: 'momentum',
    value: `${ORG_SCALE_MEDIUM}`,
    price: 79.01,
    extra_cost_per_one: 2,
    // priceBgColor: '#1695ea80',
    // priceColor: 'primary.main',
    title: 'Momentum',
    partnerCount: '11 ~ 100',
    // desc: 'A medium-sized business is generally considered to be a company with between 100 and 1,500 employees.'
  },
  {
    type: 'elevate',
    value: `${ORG_SCALE_LARGE}`,
    price: 279.01,
    extra_cost_per_one: 0.3,
    // priceBgColor: '#1695eac0',
    // priceColor: 'background.paper',
    title: 'Elevate',
    partnerCount: '101 ~ 1000',
    // desc: 'A large enterprise is generally considered to be a company that employs 250 or more people.'
  },
];

export const MFA_STATUS_NOTLOADED = '';
export const MFA_STATUS_DISABLED = 'NOMFA';
export const MFA_STATUS_SMS = 'SMS_MFA';
export const MFA_STATUS_TOTP = 'SOFTWARE_TOKEN_MFA';

export const PRICE_MODIFICATION_DISCOUNT = 1;
export const PRICE_MODIFICATION_ADJUSTMENT = 2;

export const modificationList = [
  {
    id: PRICE_MODIFICATION_DISCOUNT,
    title: 'Discount'
  },
  {
    id: PRICE_MODIFICATION_ADJUSTMENT,
    title: 'Write Up'
  }
];

export const CONNECT_DLG_CLOSED = 0;
export const CONNECT_DLG_JOIN = 1;
export const CONNECT_DLG_SIGNIN = 2;

export const SHARE_TO_ALL = 1;
export const SHARE_TO_CATEGORY = 2;
export const SHARE_TO_USER = 3;

export const SERVICE_BUNDLE_SHOW_COUNT = 5;

export const ENTITY_DEFAULT_TYPES = [
  {
    label: 'Trust',
    value: 'Trust'
  },
  {
    label: 'Sole trader',
    value: 'SoleTrader'
  },
  {
    label: 'Partnership',
    value: 'Partnership',
  },
  {
    label: 'Company',
    value: 'Company',
  }
];

export const AmplifyConfig = {
  aws_project_region: 'ap-southeast-2',
  aws_cognito_identity_pool_id: 'ap-southeast-2:d698958f-85fe-4b84-80a0-08641b4ff90a',
  aws_cognito_region: 'ap-southeast-2',
  aws_user_pools_id: 'ap-southeast-2_MWyIPtOb6',
  aws_user_pools_web_client_id: '5filq03kqveh2j4tkchc296fo2',
  oauth: {
    domain: 'accziom.auth.ap-southeast-2.amazoncognito.com',
    scope: [
      'email',
      'openid',
      'profile',
    ],
    redirectSignIn: process.env.NODE_ENV === 'production' ? 'https://go.accziom.com/home' : 'http://localhost:3000/home',
    redirectSignOut: process.env.NODE_ENV === 'production' ? 'https://go.accziom.com' : 'http://localhost:3000',
    responseType: 'code'
  },
  federationTarget: 'COGINTO_USER_POOLS',
  cookieStorage: {
    secure: false,
    domain: process.env.NODE_ENV === 'production' ? 'accziom.com' : 'localhost',
    sameSite: 'strict'
  }
};

export const AWS_REGION = 'ap-southeast-2';

export const DomainURIs = {
  hpcalc_api_domain: 'https://www.wolframcloud.com/obj/4c1e027f-6fa7-4722-a0b9-aea08562d14a',
  hpanal_api_domain: 'https://www.wolframcloud.com/obj/4d216c6a-2a69-4716-81f7-469f83b1ead7',
  lifeexp_api_domain: 'http://ec2-52-78-11-78.ap-northeast-2.compute.amazonaws.com/wolfram/index.php',
  superann_api_domain: 'https://www.wolframcloud.com/obj/74b0c06c-5c3a-40f7-9c97-bf171df95a0e',
  websocket_url: 'wss://bsearchau.accziom.com:8018',
  map_image_domain: 'https://www.wolframcloud.com/obj/f0c13bbc-7cb8-4158-8112-41502c095272',
  os_uri: 'https://api.accziom.com/v1/orgQuery',
  bs_uri: 'https://bsearchau.accziom.com',
  validate_human_uri: 'https://api.accziom.com/v1/validateHuman',
  microservice_uri: 'https://api.accziom.com/v1/microservices',
  request_uri: 'https://api.accziom.com/v1/requests',
  asset_uri: 'https://api.accziom.com/v1/assets',
  channel_uri: 'https://api.accziom.com/v1/channels',
  sync_connect_uri: 'https://api.accziom.com/sync/connect',
  sync_material_uri: 'https://api.accziom.com/sync/sync-material',
  show_material_uri: 'https://api.accziom.com/sync/show-material',
  import_sample_file_uri: 'https://accziom-public-asset.s3.ap-southeast-2.amazonaws.com/Accziom_Contacts_Template.xlsx',
  notification_websocket_url: 'https://notifications.accziom.com/',
  // twilio_notification_url: process.env.NODE_ENV === 'production' ? 'https://notifications.accziom.com/twilio' : 'http://localhost:3030/twilio',
  twilio_notification_url: 'https://notifications.accziom.com/twilio',
  mrc_websocket_url: 'wss://bsearchau.accziom.com:8887',
  aws_filethread_url: 'https://accziom-filethread.s3.ap-southeast-2.amazonaws.com',
  ipfs_filethread_url: 'https://gateway.ipfs.io/ipfs',
  apprising_ws_url: 'https://wsserver.accziom.com/',
  org_banner_uri: 'https://api.accziom.com/v1/banner',
  orgaboutus_uri: 'https://api.accziom.com/v1/orgaboutus',
  addresshelper_uri: 'https://7dxjjfw2m6zs3rp65eyv4cnqua0wsjhf.lambda-url.ap-southeast-2.on.aws/'
};

export const googleMapApiKey = 'AIzaSyA8eVticKgtNJmpl6n-HxPAF5WIz65eTqQ';

export const QBO_URL_PREFIX = {
  PRODUCTION_APP: 'https://app.qbo.intuit.com/app',
  SANDBOX_APP: 'https://app.sandbox.qbo.intuit.com/app'
};
export const XERO_DOMAIN = 'https://go.xero.com';

export const mrcPort = 8886;

export const bsPort = 8007;

// old org cloudfront E2U2D826WTXP77
// old org bucket accziom-org
