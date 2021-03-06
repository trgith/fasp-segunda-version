import { RouteInfo } from './vertical-menu.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

  {
    path: '', title: 'Dashboard', icon: 'ft-home', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-danger float-right mr-1 mt-1', isExternalLink: false, submenu: [
      { path: '/dashboard/dashboard1', title: 'Dashboard 1', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/dashboard/dashboard2', title: 'Dashboard 2', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  { path: '/inbox', title: 'Email', icon: 'ft-mail', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '/chat', title: 'Chat', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '/chat-ngrx', title: 'Chat NgRx', icon: 'ft-message-square', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '/taskboard', title: 'Task Board', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '/taskboard-ngrx', title: 'Task Board NgRx', icon: 'ft-file-text', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  { path: '/calendar', title: 'Calendar', icon: 'ft-calendar', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  {
    path: '', title: 'UI Kit', icon: 'ft-aperture', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/uikit/grids', title: 'Grid', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/uikit/typography', title: 'Typography', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/uikit/syntaxhighlighter', title: 'Syntax Highlighter', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/uikit/helperclasses', title: 'Helper Classes', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/uikit/textutilities', title: 'Text Utilities', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/uikit/colorpalettes', title: 'Color Palette', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

      {
        path: '', title: 'Icons', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          { path: '/uikit/feather', title: 'Feather Icon', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/uikit/font-awesome', title: 'Font Awesome Icon', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/uikit/simple-line', title: 'Simple Line Icon', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
      },
    ]
  },
  {
    path: '', title: 'Components', icon: 'ft-box', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '', title: 'Bootstrap', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          { path: '/components/buttons', title: 'Buttons', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/ng-buttons', title: 'NG Buttons', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/alerts', title: 'Alerts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/badges', title: 'Badges', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/dropdowns', title: 'Dropdowns', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/media', title: 'Media Objects', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/pagination', title: 'Pagination', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/progress', title: 'Progress Bars', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/models', title: 'Modals', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/collapse', title: 'Collapse', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/lists', title: 'List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/accordion', title: 'Accordion', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/carousel', title: 'Carousel', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/popover', title: 'Popover', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/rating', title: 'Rating', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/navs', title: 'Navs', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/tooltip', title: 'Tooltip', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/typeahead', title: 'Typeahead', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
      },
      {
        path: '', title: 'Extra', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
          { path: '/components/sweetalerts', title: 'Sweet Alert', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/toastr', title: 'Toastr', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/nouislider', title: 'NoUI Slider', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/upload', title: 'Upload', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/dragndrop', title: 'Drag and Drop', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/tour', title: 'Tour', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/cropper', title: 'Image Cropper', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/avatar', title: 'Avatar', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/components/swiper', title: 'Swiper', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
      },
    ]
  },
  {
    path: '', title: 'Forms', icon: 'ft-edit', class: 'has-sub', badge: 'New', badgeClass: 'badge badge-pill badge-primary float-right mr-1 mt-1', isExternalLink: false,
    submenu: [
      {
        path: '', title: 'Elements', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
          { path: '/forms/inputs', title: 'Inputs', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/input-groups', title: 'Input Groups', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/radio', title: 'Radio', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/checkbox', title: 'Checkbox', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/switch', title: 'Switch', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/select', title: 'Select', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/editor', title: 'Editor', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/tags', title: 'Input Tags', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/datepicker', title: 'Datepicker', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/forms/timepicker', title: 'Timepicker', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
        ]
      },
      { path: '/forms/layout', title: 'Layouts', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/forms/validation', title: 'Validation', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/forms/archwizard', title: 'Wizard', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    ]
  },
  {
    path: '', title: 'Tables', icon: 'ft-grid', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/tables/basic', title: 'Basic', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/tables/extended', title: 'Extended', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/tables/tables', title: 'Angular', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
    ]
  },
  {
    path: '/datatables', title: 'Data Tables', icon: 'ft-layout', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: '', title: 'Cards', icon: 'ft-layers', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: [
      { path: '/cards/basic', title: 'Basic Cards', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/cards/advanced', title: 'Advanced Cards', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Maps', icon: 'ft-map', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      { path: '/maps/google', title: 'Google Map', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/maps/fullscreen', title: 'Full Screen Map', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Charts', icon: 'ft-bar-chart-2', class: 'has-sub', badge: '2', badgeClass: 'badge badge-pill badge-success float-right mr-1 mt-1', isExternalLink: false,
    submenu: [
      { path: '/charts/chartjs', title: 'ChartJs', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/charts/chartist', title: 'Chartist', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/charts/apex', title: 'Apex', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/charts/ngx', title: 'NGX', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  {
    path: '', title: 'Pages', icon: 'ft-copy', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '', title: 'Authentication', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
          { path: '/pages/forgotpassword', title: 'Forgot Password', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
          { path: '/pages/login', title: 'Login', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
          { path: '/pages/register', title: 'Register', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
          { path: '/pages/lockscreen', title: 'Lock Screen', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
        ]
      },
      { path: '/pages/horizontaltimeline', title: 'Horizontal Timeline', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

      {
        path: '', title: 'Vertical Timeline', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
          { path: '/pages/timeline-vertical-center', title: 'Center', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pages/timeline-vertical-left', title: 'Left', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pages/timeline-vertical-right', title: 'Right', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
      },
      {
        path: '', title: 'Users', icon: 'ft-arrow-right submenu-icon', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
          { path: '/pages/users-list', title: 'List', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pages/users-view', title: 'View', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
          { path: '/pages/users-edit', title: 'Edit', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] }
        ]
      },
      { path: '/pages/account-settings', title: 'Account Settings', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/profile', title: 'User Profile', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/invoice', title: 'Invoice', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/error', title: 'Error', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
      { path: '/pages/comingsoon', title: 'Coming Soon', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
      { path: '/pages/maintenance', title: 'Maintenance', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
      { path: '/pages/gallery', title: 'Gallery', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/search', title: 'Search', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/faq', title: 'FAQ', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
      { path: '/pages/kb', title: 'Knowledge Base', icon: 'ft-arrow-right submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    ]
  },
  { path: 'https://pixinvent.com/apex-angular-4-bootstrap-admin-template/documentation', title: 'Documentation', icon: 'ft-book', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },
  { path: 'https://pixinvent.ticksy.com/', title: 'Support', icon: 'ft-life-buoy', class: '', badge: '', badgeClass: '', isExternalLink: true, submenu: [] },

  {
      path: 'policia',
      title: 'Perfil Personal Operativo',
      icon: 'ft-square',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
  },
  {
      path: 'policia',
      title: 'Aspectos Socioecon??micos',
      icon: 'ft-square',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
  },
  {
      path: 'policia',
      title: 'Profesionalizaci??n',
      icon: 'ft-square',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
  },
  {
      path: 'policia',
      title: 'Capacitaci??n',
      icon: 'ft-square',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
  },
  {
      path: 'policia',
      title: 'Evaluaci??n Policial',
      icon: 'ft-square',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
  },
  {
      path: 'policia',
      title: 'Equipamiento',
      icon: 'ft-square',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
  },
  {
      path: 'policia',
      title: 'Uso de Tecnolog??a',
      icon: 'ft-square',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
  },
  {
      path: 'policia',
      title: 'Infraestructura',
      icon: 'ft-square',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
  },
  {
      path: 'policia',
      title: 'Evaluaci??n Policial',
      icon: 'ft-square',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
  },
  {
      path: 'policia',
      title: 'H??bitos en el Trabajo',
      icon: 'ft-square',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
  },
  {
      path: 'policia',
      title: 'Problemas en el Trabajo',
      icon: 'ft-square',
      class: '',
      badge: '',
      badgeClass: '',
      isExternalLink: false,
      submenu: []
  },
  //Menu de Funcionario estatal
  {
    path: 'funcionarioEstatal', title: 'Impulso al Modelo Nacional de Policia', icon: 'ft-trending-up', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Subprograma de Modelo Nacional de Policia', icon: 'ft-user submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Subprograma de Dignificaci??n Policial', icon: 'ft-book submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },
  {
    path: 'funcionarioEstatal', title: 'Profesionalizaci??n', icon: 'ft-loader', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Fortalecimiento de las Capacidades de Evaluaci??n en Control de Confianza', icon: 'ft-git-commit submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Profesionalizaci??n y Capacitaci??n de Elementos de Confianza', icon: 'ft-stop-circle submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },
  {
    path: 'funcionarioEstatal', title: 'Equipamiento e Infraestructura de los Elementos Policiales y las Instituciones de Seguridad P??blica', icon: 'ft-home', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Equipamiento', icon: 'ft-crop submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Infraestructura', icon: 'ft-home submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Fortalecimiento de Capacidades', icon: 'ft-shield submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Especializaci??n de las Instancias Responsables de B??squeda de Personas', icon: 'ft-search submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Fortalecimiento de Capacidades', icon: 'ft-shield submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Fortalecimiento y/o Creaci??n de Unidades de Inteligencia Patrimonial y Econ??mica', icon: 'ft-plus-square submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Desarrollo de Ciencias Forenses', icon: 'ft-search submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Modelo Homologado de Policia Cibern??tica', icon: 'ft-aperture submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Fortalecimiento y/o Creaci??n de Unidades de Inteligencia Patrimonial y Econ??mica', icon: 'ft-plus-square submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },
  {
    path: 'funcionarioEstatal', title: 'Prevenci??n y Combate a Delitos de Alto Impacto', icon: 'ft-loader', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: 'funcionarioEstatal', title: 'Prevenci??n Social', icon: 'ft-alert-circle', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Acceso a la Justicia para Mujeres', icon: 'ft-award submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Participaci??n Ciudadana', icon: 'ft-user submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Asesor??as Jur??dicas de Vict??mas', icon: 'ft-sidebar submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Asesor??as Jur??dicas de Vict??mas', icon: 'ft-sidebar submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },
  {
    path: 'funcionarioEstatal', title: 'Metas alcanzadas', icon: 'ft-award', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: []
  },
  {
    path: 'funcionarioEstatal', title: 'Sistema Penitenciario Nacional', icon: 'ft-alert-circle', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Fortalecimiento del Sistema Penitenciario Nacional', icon: 'ft-shield submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Fortalecimiento de la autoridad administrativa especializada del sistema de Justicia para Adolecentes', icon: 'ft-shield submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Acreditaci??n de Establecimientos Penitenciarios', icon: 'ft-award submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Asesor??as Jur??dicas de Vict??mas', icon: 'ft-sidebar submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },
  {
    path: 'funcionarioEstatal', title: 'Sistena Nacional de Informaci??n', icon: 'ft-database', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Bases de Datos del SNSP', icon: 'ft-database submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Atenci??n a Llamadas de Emergencia y Denuncias Ciudadanas', icon: 'ft-phone-call submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Red Nacional de Comunicaci??n', icon: 'ft-radio submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Sistema de Video Vigilancia y Geolocalizaci??n', icon: 'ft-video submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },
  {
    path: 'funcionarioEstatal', title: 'Fortalecimiento Tecnol??gico de REPUVE', icon: 'ft-slack', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Subprograma de Registro P??blico Vehicular', icon: 'ft-truck submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },

  //Sidebar de Evaluador Externo
  { path: 'evaluadorExterno', title: 'Inicio', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  {
    path: 'evaluadorExterno', title: 'Monitoreo', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Institucional', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Integral', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },
  {
    path: 'evaluadorExterno', title: 'Construir Informe', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Institucional', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Integral', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },
  {
    path: 'evaluadorExterno', title: 'Descargas', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Bases de Datos Institucional', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Bases de Datos Integral', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Formatos Institucional', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Formatos Integral', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ],

  },
  //Menu de Ayuda
  {
    path: 'evaluadorExterno', title: 'Ayuda', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Gu??as de Uso', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
          {
            path: '#', title: 'Gu??a de Uso 1', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
          },
          {
            path: '#', title: 'Gu??a de Uso 2', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
          },
        ]
      },
      {
        path: '#', title: 'Anexos', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
          {
            path: '#', title: 'Documentos Metodol??gicos', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
          }
        ]
      },
      {
        path: '#', title: 'Tutoriales', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false,
        submenu: [
          {
            path: '#', title: 'Tutorial 1', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
          },
          {
            path: '#', title: 'Tutorial 2', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
          },
        ]
      }
    ]
  },
  //Sidebar de Enlace Estatal
  { path: 'enlaceEstatal', title: 'Inicio', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  {
    path: 'enlaceEstatal', title: 'Monitoreo', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Institucional', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Integral', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },
  {
    path: 'enlaceEstatal', title: 'Validar Informe', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Institucional', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Integral', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },
  {
    path: 'enlaceEstatal', title: 'Descargas', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Bases de Datos Institucional', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Bases de Datos Integral', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Formatos Institucional', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Formatos Integral', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },
  //Menu de Aplicador
  { path: 'aplicador', title: 'Inicio', icon: '', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
  {
    path: 'aplicador', title: 'Grupos', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false,
    submenu: [
      {
        path: '#', title: 'Grupo 82737', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      },
      {
        path: '#', title: 'Grupo 09325', icon: 'ft-target submenu-icon', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
      }
    ]
  },
  { path: 'aplicador', title: 'Solicitudes de Ayuda', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  { path: 'aplicador', title: 'Observaciones', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: []},
  { path: 'aplicador', title: 'Checklist', icon: '', class: 'has-sub', badge: '', badgeClass: '', isExternalLink: false, submenu: []}
];
