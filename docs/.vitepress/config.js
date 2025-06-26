export default {
	title: 'Pacsbin Docs',
	description: 'Detailed documentation for the Pacsbin platform.',
	base: '/documentation/',
	lastUpdated: true,
	themeConfig: {
		lastUpdated: {
			text: 'Updated at',
			formatOptions: {
				dateStyle: 'full',
				timeStyle: 'medium',
			},
		},
		logo: '/logo-dark.svg',
		siteTitle: false,
		search: {
			provider: 'local',
		},
		// nav: [{ text: 'Blog', link: '/blog' }],
		sidebar: [
			{
				text: 'Introduction',
				items: [{ text: 'About', link: '/' }],
			},
			{
				text: 'Blog',
				items: [
					{ text: 'The road to 2.0', link: '/blog/20250626-the-road-to-2.0' },
				],
			},
			{
				text: 'User Guides',
				items: [
					{ text: 'Account management', link: '/account-management' },
					{ text: 'Uploader guide', link: '/uploader-guide' },
					{ text: 'Case organizer guide', link: '/organizer-guide' },
					{ text: 'Assessments guide', link: '/assessments-guide' },
				],
			},
			{
				text: 'PACS Integration',
				items: [
					{ text: 'Introduction', link: '/integration-intro' },
					{ text: 'Configuration', link: '/integration-config' },
				],
			},
			{
				text: 'Advanced usage',
				items: [
					{ text: 'Embedding the viewer', link: '/embedded-viewer' },
					{ text: 'Viewer URL options', link: '/viewer-url-options' },
				],
			},
			{
				text: 'Security and Privacy',
				items: [
					{ text: 'Anonymization', link: '/anonymization' },
					{ text: 'Security documentation', link: '/security' },
				],
			},
			{
				text: 'Get help',
				items: [
					{
						text: 'Bug reports and feature requests',
						link: '/bug-reports-feature-requests.md',
					},
					{
						text: 'Contact',
						link: '/contact.md',
					},
				],
			},
			{
				text: 'Reference',
				items: [
					{ text: 'Anonymization Script', link: '/anonymization-script' },
				],
			},
		],
	},
};
