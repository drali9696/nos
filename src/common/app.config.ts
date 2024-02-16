/**
 * Application Identity (Brand)
 *
 * Also note that the 'Brand' is used in the following places:
 *  - README.md               all over
 *  - package.json            app-slug and version
 *  - [public/manifest.json]  name, short_name, description, theme_color, background_color
 */
export const Brand = {
  Title: {
    Base: 'noskhe',
    Common: (process.env.NODE_ENV === 'development' ? ' ' : '') + 'noskhe',
  },
  Meta: {
    Description: 'Best Medical AI Assistant',
    SiteName: 'noskhe | Precision AI for You',
    ThemeColor: '#32383E',
    TwitterSite: '',
  },
  URIs: {
    Home: 'https://noskhe.chat',
    // App: 'https://noskhe.chat',
    CardImage: '',
    OpenRepo: 'https://github.com/enricoros/big-agi',
    OpenProject: 'https://github.com/users/enricoros/projects/4',
    SupportInvite: 'https://noskhe.chat',
    // Twitter: 'https://noskhe.chat',
    PrivacyPolicy: 'https://noskhe.chat',
  },
};
